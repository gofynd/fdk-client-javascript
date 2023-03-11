const Joi = require("joi");

class OrderModel {
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

      options: Joi.array().items(OrderModel.FilterInfoOption()),

      value: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
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
      hex_code: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),
    });
  }

  static Prices() {
    return Joi.object({
      cod_charges: Joi.number(),

      amount_paid: Joi.number(),

      price_effective: Joi.number(),

      refund_amount: Joi.number(),

      price_marked: Joi.number(),

      cashback_applied: Joi.number(),

      promotion_effective_discount: Joi.number(),

      value_of_good: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      fynd_credits: Joi.number(),

      discount: Joi.number(),

      cashback: Joi.number(),

      delivery_charge: Joi.number(),

      refund_credit: Joi.number(),

      coupon_value: Joi.number(),

      tax_collected_at_source: Joi.number(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      avis_user_id: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      uid: Joi.number(),

      email: Joi.string().allow(""),

      gender: Joi.string().allow(""),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      gst_fee: Joi.number().required(),

      value_of_good: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number().required(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      size: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")),

      l3_category: Joi.number(),

      code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      id: Joi.number(),

      images: Joi.array().items(Joi.string().allow("")),

      l1_category: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow("").allow(null),

      department_id: Joi.number(),

      l3_category_name: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      can_return: Joi.boolean(),
    });
  }

  static BagUnit() {
    return Joi.object({
      gst: OrderModel.GSTDetailsData(),

      can_return: Joi.boolean(),

      ordering_channel: Joi.string().allow("").required(),

      total_shipment_bags: Joi.number().required(),

      bag_id: Joi.number().required(),

      item: OrderModel.PlatformItem(),

      item_quantity: Joi.number().required(),

      prices: OrderModel.Prices(),

      shipment_id: Joi.string().allow("").required(),

      can_cancel: Joi.boolean(),

      status: Joi.any().required(),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      payment_mode_info: OrderModel.PaymentModeInfo(),

      total_bags_count: Joi.number().required(),

      fulfilling_centre: Joi.string().allow("").required(),

      sla: Joi.any(),

      total_shipments_in_order: Joi.number().required(),

      payment_methods: Joi.any(),

      id: Joi.string().allow("").required(),

      channel: Joi.any(),

      shipment_created_at: Joi.number().required(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      created_at: Joi.string().allow("").required(),

      shipment_status: OrderModel.ShipmentStatus(),

      prices: OrderModel.Prices(),

      company: Joi.any(),

      user: OrderModel.UserDataInfo(),

      application: Joi.any(),

      bags: Joi.array().items(OrderModel.BagUnit()),
    });
  }

  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      filters: Joi.array().items(OrderModel.FiltersInfo()),

      page: Joi.any(),

      applied_filters: Joi.any(),

      items: Joi.array().items(OrderModel.ShipmentItem()),
    });
  }

  static Error() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static LockData() {
    return Joi.object({
      mto: Joi.boolean(),

      locked: Joi.boolean(),

      lock_message: Joi.string().allow(""),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      state: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      ajio_site_id: Joi.string().allow(""),

      address: Joi.string().allow("").allow(null).required(),

      pincode: Joi.number().required(),

      gstin: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),
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
      acknowledge_date: Joi.string().allow(""),

      signed_invoice: Joi.string().allow(""),

      acknowledge_no: Joi.number(),

      signed_qr_code: Joi.string().allow(""),

      irn: Joi.string().allow(""),

      error_code: Joi.string().allow(""),

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

  static Formatted() {
    return Joi.object({
      f_min: Joi.string().allow(""),

      f_max: Joi.string().allow(""),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      order_type: Joi.string().allow("").allow(null),

      return_awb_number: Joi.string().allow(""),

      forward_affiliate_order_id: Joi.string().allow(""),

      awb_number: Joi.string().allow(""),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      packaging_name: Joi.string().allow(""),

      b2c_buyer_details: Joi.any().allow(null),

      box_type: Joi.string().allow("").allow(null),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      weight: Joi.number().required(),

      dp_id: Joi.string().allow("").allow(null),

      return_details: Joi.any(),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      bag_weight: Joi.any(),

      external: Joi.any(),

      lock_data: OrderModel.LockData(),

      same_store_available: Joi.boolean().required(),

      marketplace_store_id: Joi.string().allow(""),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      dp_sort_key: Joi.string().allow(""),

      shipment_weight: Joi.number(),

      shipment_volumetric_weight: Joi.number(),

      return_store_node: Joi.number(),

      store_invoice_updated_date: Joi.string().allow(""),

      dp_name: Joi.string().allow(""),

      return_affiliate_order_id: Joi.string().allow(""),

      due_date: Joi.string().allow(""),

      timestamp: OrderModel.ShipmentTimeStamp(),

      po_number: Joi.string().allow(""),

      einvoice_info: OrderModel.EinvoiceInfo(),

      assign_dp_from_sb: Joi.boolean(),

      return_affiliate_shipment_id: Joi.string().allow(""),

      debug_info: OrderModel.DebugInfo(),

      ewaybill_info: Joi.any().allow(null),

      dp_options: Joi.any(),

      formatted: OrderModel.Formatted(),
    });
  }

  static PDFLinks() {
    return Joi.object({
      label_a6: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      label_type: Joi.string().allow("").required(),

      b2b: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      label: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      coupon_code: Joi.string().allow("").allow(null),

      channel_shipment_id: Joi.string().allow("").allow(null),

      due_date: Joi.string().allow("").allow(null),

      is_priority: Joi.boolean(),

      order_item_id: Joi.string().allow(""),

      employee_discount: Joi.number(),

      loyalty_discount: Joi.number(),

      quantity: Joi.number(),

      channel_order_id: Joi.string().allow("").allow(null),

      size_level_total_qty: Joi.number().allow(null),

      box_type: Joi.string().allow("").allow(null),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      shipment_meta: OrderModel.ShipmentMeta().required(),

      affiliate_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      company_affiliate_tag: Joi.string().allow(""),

      pdf_links: OrderModel.PDFLinks(),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      ad_id: Joi.string().allow(""),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      country: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      name: Joi.string().allow(""),

      id: Joi.number(),

      eway_bill_id: Joi.string().allow("").allow(null),

      gst_tag: Joi.string().allow(""),

      track_url: Joi.string().allow("").allow(null),

      pincode: Joi.string().allow(""),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      id: Joi.number().required(),

      contact_person: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      address: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),
    });
  }

  static TrackingList() {
    return Joi.object({
      is_current: Joi.boolean(),

      text: Joi.string().allow("").required(),

      is_passed: Joi.boolean(),

      time: Joi.string().allow(""),

      status: Joi.string().allow("").required(),
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
      mrp_promotion: Joi.boolean(),

      article_quantity: Joi.number(),

      promo_id: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      promotion_name: Joi.string().allow(""),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      amount: Joi.number(),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      id: Joi.number().required(),

      company: Joi.string().allow("").allow(null).required(),

      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      identifiers: Joi.any(),

      uid: Joi.string().allow(""),

      return_config: Joi.any(),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      display_name: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      bs_id: Joi.number().required(),

      app_state_name: Joi.string().allow(""),

      journey_type: Joi.string().allow("").required(),

      app_facing: Joi.boolean(),

      notify_customer: Joi.boolean(),

      is_active: Joi.boolean(),

      state_type: Joi.string().allow("").required(),

      app_display_name: Joi.string().allow(""),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      bag_state_mapper: OrderModel.BagStateMapper(),

      current_status_id: Joi.number().required(),

      created_at: Joi.string().allow("").allow(null),

      state_id: Joi.number(),

      updated_at: Joi.number(),

      bag_id: Joi.number(),

      kafka_sync: Joi.boolean(),

      delivery_partner_id: Joi.number(),

      state_type: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      delivery_awb_number: Joi.string().allow(""),

      store_id: Joi.number(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      country: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      state: Joi.string().allow(""),

      area: Joi.string().allow(""),

      latitude: Joi.number(),

      address_type: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      longitude: Joi.number(),

      created_at: Joi.string().allow(""),

      version: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      email: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      city: Joi.string().allow(""),
    });
  }

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      gst_fee: Joi.number().required(),

      identifiers: OrderModel.Identifier().required(),

      value_of_good: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),

      gst_tag: Joi.string().allow("").required(),

      coupon_effective_discount: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      fynd_credits: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      size: Joi.string().allow("").required(),

      price_marked: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      discount: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      refund_credit: Joi.number().required(),

      cod_charges: Joi.number().required(),

      amount_paid: Joi.number().required(),

      price_effective: Joi.number().required(),

      promotion_effective_discount: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      transfer_price: Joi.number().required(),

      cashback: Joi.number().required(),

      total_units: Joi.number().required(),

      coupon_value: Joi.number().required(),

      tax_collected_at_source: Joi.number(),
    });
  }

  static BagConfigs() {
    return Joi.object({
      is_returnable: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static BagGST() {
    return Joi.object({
      gst_fee: Joi.number(),

      gst_tax_percentage: Joi.number(),

      value_of_good: Joi.number(),

      gst_tag: Joi.string().allow(""),

      brand_calculated_amount: Joi.number(),

      hsn_code: Joi.string().allow(""),

      is_default_hsn_code: Joi.boolean(),

      gstin_code: Joi.string().allow(""),
    });
  }

  static OrderBags() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      item: OrderModel.PlatformItem(),

      bag_id: Joi.number().required(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      brand: OrderModel.OrderBrandName(),

      article: OrderModel.OrderBagArticle(),

      quantity: Joi.number(),

      entity_type: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      current_status: OrderModel.CurrentStatus(),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      line_number: Joi.number(),

      prices: OrderModel.Prices(),

      financial_breakup: OrderModel.FinancialBreakup(),

      seller_identifier: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      bag_configs: OrderModel.BagConfigs(),

      gst_details: OrderModel.BagGST(),

      parent_promo_bags: Joi.any(),

      can_return: Joi.boolean(),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      id: Joi.number(),

      created_at: Joi.string().allow("").allow(null),

      bag_list: Joi.array().items(Joi.string().allow("")),

      shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      cod_charges: Joi.string().allow(""),

      order_date: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      ordering_channel: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),

      order_value: Joi.string().allow(""),

      source: Joi.string().allow(""),

      tax_details: Joi.any(),

      fynd_order_id: Joi.string().allow("").required(),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      id: Joi.number().required(),

      contact_person: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      address: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),
    });
  }

  static Dimensions() {
    return Joi.object({
      height: Joi.number(),

      unit: Joi.string().allow(""),

      is_default: Joi.boolean(),

      length: Joi.number(),

      width: Joi.number(),
    });
  }

  static Meta() {
    return Joi.object({
      dimension: OrderModel.Dimensions(),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      logo: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      source: Joi.string().allow(""),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      display_name: Joi.string().allow(""),

      bag_state_mapper: OrderModel.BagStateMapper(),

      updated_at: Joi.string().allow(""),

      state_id: Joi.number(),

      created_at: Joi.string().allow(""),

      bag_id: Joi.number(),

      reasons: Joi.array().items(Joi.any()),

      kafka_sync: Joi.boolean(),

      forward: Joi.boolean().allow(null),

      delivery_partner_id: Joi.number().allow(null),

      app_display_name: Joi.string().allow(""),

      state_type: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      bsh_id: Joi.number(),

      status: Joi.string().allow("").required(),

      store_id: Joi.number(),

      delivery_awb_number: Joi.string().allow("").allow(null),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      affiliate_details: OrderModel.AffiliateDetails(),

      dp_details: OrderModel.DPDetailsData(),

      picked_date: Joi.string().allow(""),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      fulfilling_store: OrderModel.FulfillingStore(),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      shipment_status: Joi.string().allow(""),

      invoice_id: Joi.string().allow(""),

      operational_status: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.OrderBags()),

      total_items: Joi.number(),

      billing_details: OrderModel.UserDetailsData(),

      vertical: Joi.string().allow("").allow(null),

      enable_dp_tracking: Joi.boolean(),

      journey_type: Joi.string().allow(""),

      packaging_type: Joi.string().allow(""),

      invoice: OrderModel.EinvoiceInfo(),

      coupon: Joi.any(),

      shipment_quantity: Joi.number(),

      fulfilment_priority: Joi.number(),

      user_agent: Joi.string().allow(""),

      priority_text: Joi.string().allow("").allow(null),

      delivery_slot: Joi.any(),

      prices: OrderModel.Prices(),

      total_bags: Joi.number(),

      status: OrderModel.ShipmentStatusData(),

      order: OrderModel.OrderDetailsData(),

      ordering_store: OrderModel.OrderingStoreDetails(),

      meta: OrderModel.Meta(),

      payments: OrderModel.ShipmentPayments(),

      gst_details: OrderModel.GSTDetailsData(),

      payment_mode: Joi.string().allow(""),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      custom_meta: Joi.array().items(Joi.any()),

      platform_logo: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),

      delivery_details: OrderModel.UserDetailsData(),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      success: Joi.boolean().required(),

      message: Joi.string().allow(""),
    });
  }

  static OrderMeta() {
    return Joi.object({
      comment: Joi.string().allow(""),

      mongo_cart_id: Joi.number(),

      order_tags: Joi.array().items(Joi.any()),

      files: Joi.array().items(Joi.any()),

      order_type: Joi.string().allow(""),

      ordering_store: Joi.number(),

      customer_note: Joi.string().allow(""),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      cart_id: Joi.number(),

      extra_meta: Joi.any(),

      employee_id: Joi.number(),

      order_platform: Joi.string().allow(""),

      payment_type: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      staff: Joi.any(),
    });
  }

  static OrderDict() {
    return Joi.object({
      order_date: Joi.string().allow("").required(),

      payment_methods: Joi.any(),

      meta: OrderModel.OrderMeta(),

      prices: OrderModel.Prices(),

      tax_details: Joi.any(),

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
      actions: Joi.array().items(Joi.any()),

      total_items: Joi.number(),

      text: Joi.string().allow(""),

      value: Joi.string().allow(""),

      index: Joi.number(),
    });
  }

  static SuperLane() {
    return Joi.object({
      total_items: Joi.number(),

      text: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.SubLane()),
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
      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      user_info: OrderModel.UserDataInfo(),

      order_id: Joi.string().allow(""),

      meta: Joi.any(),

      channel: OrderModel.PlatformChannel(),

      order_value: Joi.number(),

      payment_mode: Joi.string().allow(""),

      total_order_value: Joi.number(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

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
      success: Joi.boolean(),

      items: Joi.array().items(OrderModel.PlatformOrderItems()),

      page: OrderModel.Page(),

      message: Joi.string().allow(""),

      total_count: Joi.number(),

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
      text: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      value: Joi.number().required(),

      options: Joi.array().items(OrderModel.Options()),
    });
  }

  static MetricCountResponse() {
    return Joi.object({
      items: Joi.array().items(OrderModel.MetricsCount()),
    });
  }

  static PlatformTrack() {
    return Joi.object({
      raw_status: Joi.string().allow(""),

      meta: Joi.any(),

      shipment_type: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      status: Joi.string().allow(""),

      awb: Joi.string().allow(""),
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
      returned: Joi.array().items(OrderModel.FiltersInfo()),

      unfulfilled: Joi.array().items(OrderModel.FiltersInfo()),

      processed: Joi.array().items(OrderModel.FiltersInfo()),

      filters: Joi.array().items(OrderModel.FiltersInfo()),

      action_centre: Joi.array().items(OrderModel.FiltersInfo()),
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
      report_name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      report_id: Joi.string().allow(""),

      request_details: Joi.any(),

      report_created_at: Joi.string().allow("").allow(null),

      report_requested_at: Joi.string().allow("").allow(null),

      s3_key: Joi.string().allow(""),

      status: Joi.string().allow(""),

      report_type: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      jio_code: Joi.string().allow(""),

      company_id: Joi.string().allow(""),

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
      value: Joi.string().allow(""),

      message: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()),

      identifier: Joi.string().allow(""),

      success: Joi.boolean(),

      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

      trace_id: Joi.string().allow(""),
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

      company_id: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      batch_id: Joi.string().allow("").required(),

      do_invoice_label_generated: Joi.boolean().required(),

      invoice_status: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      label: Joi.any(),

      invoice: Joi.any(),

      store_id: Joi.string().allow(""),
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

      file_path: Joi.string().allow(""),

      cdn: OrderModel.URL(),

      namespace: Joi.string().allow(""),

      content_type: Joi.string().allow(""),

      method: Joi.string().allow(""),

      upload: OrderModel.FileUploadResponse(),

      tags: Joi.array().items(Joi.string().allow("")),

      operation: Joi.string().allow(""),

      file_name: Joi.string().allow(""),
    });
  }

  static bulkListingData() {
    return Joi.object({
      excel_url: Joi.string().allow(""),

      total: Joi.number(),

      company_id: Joi.number(),

      processing: Joi.number(),

      id: Joi.string().allow(""),

      successful_shipments: Joi.array().items(Joi.any()),

      store_id: Joi.number(),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      user_id: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      status: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      user_name: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      batch_id: Joi.string().allow(""),

      successful: Joi.number(),

      failed: Joi.number(),

      failed_shipments: Joi.array().items(Joi.any()),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      size: Joi.number(),

      current: Joi.number(),

      has_previous: Joi.boolean(),

      total: Joi.number(),

      type: Joi.string().allow(""),

      has_next: Joi.boolean(),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      data: Joi.array().items(OrderModel.bulkListingData()),

      error: Joi.string().allow(""),

      success: Joi.boolean(),

      page: OrderModel.BulkListingPage(),
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
      status: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static BulkActionDetailsDataField() {
    return Joi.object({
      company_id: Joi.string().allow(""),

      successful_shipments_count: Joi.number(),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      batch_id: Joi.string().allow(""),

      total_shipments_count: Joi.number(),

      failed_shipments_count: Joi.number(),

      processing_shipments_count: Joi.number(),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      uploaded_by: Joi.string().allow(""),

      success: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      error: Joi.array().items(Joi.string().allow("")),

      failed_records: Joi.array().items(Joi.string().allow("")),

      message: Joi.string().allow(""),

      status: Joi.boolean(),
    });
  }

  static Attributes() {
    return Joi.object({
      primary_material: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      essential: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Item() {
    return Joi.object({
      l3_category: Joi.number(),

      code: Joi.string().allow(""),

      attributes: OrderModel.Attributes().required(),

      l1_category_id: Joi.number(),

      department_id: Joi.number(),

      color: Joi.string().allow("").allow(null),

      brand: Joi.string().allow("").required(),

      l2_category: Joi.array().items(Joi.string().allow("")),

      image: Joi.array().items(Joi.string().allow("")).required(),

      last_updated_at: Joi.string().allow(""),

      l1_category: Joi.array().items(Joi.string().allow("")),

      can_cancel: Joi.boolean(),

      size: Joi.string().allow("").required(),

      branch_url: Joi.string().allow("").allow(null),

      item_id: Joi.number().required(),

      gender: Joi.string().allow("").allow(null),

      brand_id: Joi.number().required(),

      name: Joi.string().allow("").required(),

      meta: Joi.any(),

      l2_category_id: Joi.number(),

      l3_category_name: Joi.string().allow(""),

      webstore_product_url: Joi.string().allow("").allow(null),

      can_return: Joi.boolean(),

      slug_key: Joi.string().allow("").required(),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow("").required(),

      employee_discount: Joi.number(),

      loyalty_discount: Joi.number(),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static Brand() {
    return Joi.object({
      brand_id: Joi.number().required(),

      logo: Joi.string().allow(""),

      brand_name: Joi.string().allow("").required(),

      credit_note_expiry_days: Joi.number().allow(null),

      script_last_ran: Joi.string().allow("").allow(null),

      invoice_prefix: Joi.string().allow("").allow(null),

      is_virtual_invoice: Joi.boolean().allow(null),

      company: Joi.string().allow("").required(),

      created_on: Joi.number(),

      modified_on: Joi.number(),

      credit_note_allowed: Joi.boolean(),

      pickup_location: Joi.string().allow("").allow(null),

      start_date: Joi.string().allow("").allow(null),
    });
  }

  static Weight() {
    return Joi.object({
      shipping: Joi.number(),

      unit: Joi.string().allow(""),

      is_default: Joi.boolean(),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      unit: Joi.string().allow(""),

      time: Joi.number(),

      returnable: Joi.boolean(),
    });
  }

  static Article() {
    return Joi.object({
      size: Joi.string().allow("").required(),

      identifiers: OrderModel.Identifier().required(),

      is_set: Joi.boolean(),

      code: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),

      child_details: Joi.any().allow(null),

      weight: OrderModel.Weight(),

      dimensions: OrderModel.Dimensions(),

      esp_modified: Joi.any(),

      a_set: Joi.any().allow(null),

      raw_meta: Joi.any(),

      uid: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      return_config: OrderModel.ReturnConfig(),
    });
  }

  static Dates() {
    return Joi.object({
      delivery_date: Joi.any(),

      order_created: Joi.string().allow(""),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      is_returnable: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static StoreAddress() {
    return Joi.object({
      address_type: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      email: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      area: Joi.string().allow(""),

      contact_person: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      address_category: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      phone: Joi.string().allow("").allow(null).required(),

      address2: Joi.string().allow(""),

      longitude: Joi.number().required(),

      created_at: Joi.string().allow("").required(),

      version: Joi.string().allow(""),

      latitude: Joi.number().required(),

      updated_at: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),
    });
  }

  static StoreEinvoice() {
    return Joi.object({
      password: Joi.string().allow(""),

      user: Joi.string().allow(""),

      username: Joi.string().allow(""),

      enabled: Joi.boolean().required(),
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

  static Document() {
    return Joi.object({
      url: Joi.string().allow(""),

      legal_name: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      ds_type: Joi.string().allow("").required(),

      verified: Joi.boolean().required(),
    });
  }

  static StoreDocuments() {
    return Joi.object({
      gst: OrderModel.Document(),
    });
  }

  static EInvoicePortalDetails() {
    return Joi.object({
      username: Joi.string().allow(""),

      user: Joi.string().allow(""),

      password: Joi.string().allow(""),
    });
  }

  static StoreMeta() {
    return Joi.object({
      display_name: Joi.string().allow("").required(),

      additional_contact_details: Joi.any(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      stage: Joi.string().allow("").required(),

      product_return_config: Joi.any(),

      gst_number: Joi.string().allow(""),

      timing: Joi.array().items(Joi.any()),

      documents: OrderModel.StoreDocuments(),

      ewaybill_portal_details: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),
    });
  }

  static Store() {
    return Joi.object({
      code: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      store_email: Joi.string().allow("").required(),

      s_id: Joi.string().allow("").required(),

      login_username: Joi.string().allow("").required(),

      parent_store_id: Joi.number(),

      is_active: Joi.boolean(),

      pincode: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      contact_person: Joi.string().allow("").required(),

      is_archived: Joi.boolean(),

      address1: Joi.string().allow("").required(),

      store_address_json: OrderModel.StoreAddress(),

      vat_no: Joi.string().allow("").allow(null),

      fulfillment_channel: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      address2: Joi.string().allow(""),

      longitude: Joi.number().required(),

      created_at: Joi.string().allow("").required(),

      mall_area: Joi.string().allow("").allow(null),

      location_type: Joi.string().allow("").required(),

      order_integration_id: Joi.string().allow(""),

      packaging_material_count: Joi.number(),

      alohomora_user_id: Joi.number(),

      brand_id: Joi.any(),

      latitude: Joi.number().required(),

      name: Joi.string().allow("").required(),

      store_active_from: Joi.string().allow("").allow(null),

      meta: OrderModel.StoreMeta().required(),

      updated_at: Joi.string().allow("").allow(null),

      mall_name: Joi.string().allow("").allow(null),

      is_enabled_for_recon: Joi.boolean(),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      city: Joi.string().allow("").required(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      partial_can_ret: Joi.boolean(),

      total_gst_percentage: Joi.number(),

      po_tax_amount: Joi.number(),

      item_base_price: Joi.number(),

      po_line_amount: Joi.number(),

      docker_number: Joi.string().allow(""),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      gst_fee: Joi.number().required(),

      sgst_tax_percentage: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      igst_gst_fee: Joi.string().allow("").required(),

      gst_tax_percentage: Joi.number().required(),

      value_of_good: Joi.number().required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      gst_tag: Joi.string().allow("").required(),

      brand_calculated_amount: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      cgst_tax_percentage: Joi.number().required(),

      igst_tax_percentage: Joi.number().required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      is_default_hsn_code: Joi.boolean(),

      gstin_code: Joi.string().allow("").allow(null),

      tax_collected_at_source: Joi.number().required(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      affiliate_details: OrderModel.AffiliateDetails(),

      identifier: Joi.string().allow(""),

      item: OrderModel.Item().required(),

      applied_promos: Joi.array().items(Joi.any()),

      b_type: Joi.string().allow(""),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      article_details: OrderModel.ArticleDetails(),

      operational_status: Joi.string().allow(""),

      qc_required: Joi.any(),

      restore_promos: Joi.any(),

      b_id: Joi.number().required(),

      brand: OrderModel.Brand().required(),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      article: OrderModel.Article().required(),

      journey_type: Joi.string().allow("").required(),

      entity_type: Joi.string().allow(""),

      quantity: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      current_status: OrderModel.BagStatusHistory().required(),

      line_number: Joi.number(),

      reasons: Joi.array().items(Joi.any()),

      order_integration_id: Joi.string().allow("").allow(null),

      prices: OrderModel.Prices().required(),

      restore_coupon: Joi.boolean(),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      dates: OrderModel.Dates(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      ordering_store: OrderModel.Store(),

      seller_identifier: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      no_of_bags_order: Joi.number(),

      bag_update_time: Joi.number(),

      meta: OrderModel.BagMeta(),

      gst_details: OrderModel.BagGSTDetails().required(),

      parent_promo_bags: Joi.any(),

      bag_status_history: OrderModel.BagStatusHistory(),

      original_bag_list: Joi.array().items(Joi.number()),

      shipment_id: Joi.string().allow(""),
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
      size: Joi.number().required(),

      current: Joi.number().required(),

      item_total: Joi.number().required(),

      page_type: Joi.string().allow("").required(),

      has_next: Joi.boolean().required(),
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

  static GeneratePosOrderReceiptResponse() {
    return Joi.object({
      order_id: Joi.string().allow(""),

      invoice_receipt: Joi.string().allow(""),

      success: Joi.boolean(),

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
