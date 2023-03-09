const Joi = require("joi");

class OrderModel {
  static FilterInfoOption() {
    return Joi.object({
      text: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static FiltersInfo() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.FilterInfoOption()),

      value: Joi.string().allow("").required(),
    });
  }

  static Prices() {
    return Joi.object({
      price_marked: Joi.number(),

      refund_credit: Joi.number(),

      amount_paid: Joi.number(),

      cod_charges: Joi.number(),

      cashback_applied: Joi.number(),

      fynd_credits: Joi.number(),

      refund_amount: Joi.number(),

      price_effective: Joi.number(),

      promotion_effective_discount: Joi.number(),

      value_of_good: Joi.number(),

      coupon_value: Joi.number(),

      discount: Joi.number(),

      cashback: Joi.number(),

      tax_collected_at_source: Joi.number(),

      delivery_charge: Joi.number(),

      amount_paid_roundoff: Joi.number(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      email: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      uid: Joi.number(),

      mobile: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      name: Joi.string().allow(""),

      avis_user_id: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      last_name: Joi.string().allow(""),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),
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

  static GSTDetailsData() {
    return Joi.object({
      gst_fee: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      image: Joi.array().items(Joi.string().allow("")),

      l3_category_name: Joi.string().allow(""),

      can_return: Joi.boolean(),

      l3_category: Joi.number(),

      code: Joi.string().allow(""),

      size: Joi.string().allow(""),

      l1_category: Joi.array().items(Joi.string().allow("")),

      can_cancel: Joi.boolean(),

      color: Joi.string().allow("").allow(null),

      department_id: Joi.number(),

      name: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      id: Joi.number(),
    });
  }

  static BagUnit() {
    return Joi.object({
      gst: OrderModel.GSTDetailsData(),

      bag_id: Joi.number().required(),

      can_return: Joi.boolean(),

      prices: OrderModel.Prices(),

      item: OrderModel.PlatformItem(),

      status: Joi.any().required(),

      can_cancel: Joi.boolean(),

      total_shipment_bags: Joi.number().required(),

      item_quantity: Joi.number().required(),

      shipment_id: Joi.string().allow("").required(),

      ordering_channel: Joi.string().allow("").required(),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      prices: OrderModel.Prices(),

      company: Joi.any(),

      user: OrderModel.UserDataInfo(),

      total_bags_count: Joi.number().required(),

      shipment_status: OrderModel.ShipmentStatus(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      total_shipments_in_order: Joi.number().required(),

      payment_methods: Joi.any(),

      sla: Joi.any(),

      channel: Joi.any(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      fulfilling_centre: Joi.string().allow("").required(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      application: Joi.any(),

      shipment_created_at: Joi.number().required(),

      id: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),
    });
  }

  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      applied_filters: Joi.any(),

      page: Joi.any(),

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

  static TrackingList() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      is_passed: Joi.boolean(),

      text: Joi.string().allow("").required(),

      time: Joi.string().allow(""),

      is_current: Joi.boolean(),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      tax_details: Joi.any(),

      cod_charges: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      order_date: Joi.string().allow(""),

      ordering_channel: Joi.string().allow(""),

      order_value: Joi.string().allow(""),

      source: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow("").required(),

      ordering_channel_logo: Joi.any(),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      status: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      id: Joi.number(),

      created_at: Joi.string().allow("").allow(null),

      bag_list: Joi.array().items(Joi.string().allow("")),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      email: Joi.string().allow(""),

      address: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      country: Joi.string().allow(""),

      eway_bill_id: Joi.string().allow("").allow(null),

      awb_no: Joi.string().allow(""),

      name: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      track_url: Joi.string().allow("").allow(null),

      gst_tag: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static EInvoice() {
    return Joi.object({
      error_message: Joi.string().allow(""),

      signed_invoice: Joi.string().allow(""),

      signed_qr_code: Joi.string().allow(""),

      error_code: Joi.string().allow(""),

      acknowledge_no: Joi.number(),

      acknowledge_date: Joi.string().allow(""),

      irn: Joi.string().allow(""),
    });
  }

  static EinvoiceInfo() {
    return Joi.object({
      credit_note: OrderModel.EInvoice(),

      invoice: OrderModel.EInvoice(),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      pincode: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      id: Joi.number().required(),
    });
  }

  static PDFLinks() {
    return Joi.object({
      label_pos: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      invoice_a4: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      b2b: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      credit_note_url: Joi.string().allow(""),

      label: Joi.string().allow(""),

      invoice: Joi.string().allow(""),
    });
  }

  static ShipmentTimeStamp() {
    return Joi.object({
      t_min: Joi.string().allow(""),

      t_max: Joi.string().allow(""),
    });
  }

  static LockData() {
    return Joi.object({
      locked: Joi.boolean(),

      lock_message: Joi.string().allow(""),

      mto: Joi.boolean(),
    });
  }

  static Formatted() {
    return Joi.object({
      f_max: Joi.string().allow(""),

      f_min: Joi.string().allow(""),
    });
  }

  static DebugInfo() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow(""),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      gstin: Joi.string().allow("").required(),

      address: Joi.string().allow("").allow(null).required(),

      state: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      city: Joi.string().allow("").required(),

      ajio_site_id: Joi.string().allow(""),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      dp_id: Joi.string().allow("").allow(null),

      bag_weight: Joi.any(),

      dp_options: Joi.any(),

      dp_sort_key: Joi.string().allow(""),

      return_details: Joi.any(),

      external: Joi.any(),

      return_affiliate_order_id: Joi.string().allow(""),

      shipment_weight: Joi.number(),

      packaging_name: Joi.string().allow(""),

      einvoice_info: OrderModel.EinvoiceInfo(),

      timestamp: OrderModel.ShipmentTimeStamp(),

      return_store_node: Joi.number(),

      lock_data: OrderModel.LockData(),

      formatted: OrderModel.Formatted(),

      return_affiliate_shipment_id: Joi.string().allow(""),

      marketplace_store_id: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      b2c_buyer_details: Joi.any().allow(null),

      due_date: Joi.string().allow(""),

      same_store_available: Joi.boolean().required(),

      po_number: Joi.string().allow(""),

      assign_dp_from_sb: Joi.boolean(),

      awb_number: Joi.string().allow(""),

      dp_name: Joi.string().allow(""),

      return_awb_number: Joi.string().allow(""),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      shipment_volumetric_weight: Joi.number(),

      weight: Joi.number().required(),

      debug_info: OrderModel.DebugInfo(),

      forward_affiliate_order_id: Joi.string().allow(""),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      store_invoice_updated_date: Joi.string().allow(""),

      order_type: Joi.string().allow("").allow(null),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      ewaybill_info: Joi.any().allow(null),

      forward_affiliate_shipment_id: Joi.string().allow(""),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      channel_order_id: Joi.string().allow("").allow(null),

      coupon_code: Joi.string().allow("").allow(null),

      box_type: Joi.string().allow("").allow(null),

      channel_shipment_id: Joi.string().allow("").allow(null),

      loyalty_discount: Joi.number(),

      size_level_total_qty: Joi.number().allow(null),

      order_item_id: Joi.string().allow(""),

      due_date: Joi.string().allow("").allow(null),

      employee_discount: Joi.number(),

      is_priority: Joi.boolean(),

      quantity: Joi.number(),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      affiliate_shipment_id: Joi.string().allow("").required(),

      pdf_links: OrderModel.PDFLinks(),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow("").required(),

      ad_id: Joi.string().allow(""),

      affiliate_store_id: Joi.string().allow("").required(),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      company_affiliate_tag: Joi.string().allow(""),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      app_display_name: Joi.string().allow(""),

      state_type: Joi.string().allow("").required(),

      journey_type: Joi.string().allow("").required(),

      notify_customer: Joi.boolean(),

      app_facing: Joi.boolean(),

      display_name: Joi.string().allow("").required(),

      app_state_name: Joi.string().allow(""),

      bs_id: Joi.number().required(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      app_display_name: Joi.string().allow(""),

      bsh_id: Joi.number(),

      bag_id: Joi.number(),

      reasons: Joi.array().items(Joi.any()),

      state_type: Joi.string().allow(""),

      status: Joi.string().allow("").required(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      created_at: Joi.string().allow(""),

      forward: Joi.boolean().allow(null),

      shipment_id: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      store_id: Joi.number(),

      delivery_partner_id: Joi.number().allow(null),

      delivery_awb_number: Joi.string().allow("").allow(null),

      state_id: Joi.number(),

      updated_at: Joi.string().allow(""),
    });
  }

  static Dimensions() {
    return Joi.object({
      width: Joi.number(),

      height: Joi.number(),

      is_default: Joi.boolean(),

      length: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static Meta() {
    return Joi.object({
      dimension: OrderModel.Dimensions(),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      pincode: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      id: Joi.number().required(),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      mode: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      source: Joi.string().allow(""),
    });
  }

  static BagGST() {
    return Joi.object({
      gst_fee: Joi.number(),

      hsn_code: Joi.string().allow(""),

      gstin_code: Joi.string().allow(""),

      value_of_good: Joi.number(),

      brand_calculated_amount: Joi.number(),

      is_default_hsn_code: Joi.boolean(),

      gst_tax_percentage: Joi.number(),

      gst_tag: Joi.string().allow(""),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      bag_id: Joi.number(),

      updated_at: Joi.number(),

      state_type: Joi.string().allow(""),

      status: Joi.string().allow(""),

      current_status_id: Joi.number().required(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      shipment_id: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      store_id: Joi.number(),

      delivery_partner_id: Joi.number(),

      delivery_awb_number: Joi.string().allow(""),

      created_at: Joi.string().allow("").allow(null),

      state_id: Joi.number(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      email: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      longitude: Joi.number(),

      address2: Joi.string().allow(""),

      latitude: Joi.number(),

      pincode: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      area: Joi.string().allow(""),

      city: Joi.string().allow(""),

      version: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),
    });
  }

  static BagConfigs() {
    return Joi.object({
      is_returnable: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      refund_credit: Joi.number().required(),

      value_of_good: Joi.number().required(),

      identifiers: OrderModel.Identifier().required(),

      hsn_code: Joi.string().allow("").required(),

      total_units: Joi.number().required(),

      price_marked: Joi.number().required(),

      amount_paid: Joi.number().required(),

      transfer_price: Joi.number().required(),

      gst_fee: Joi.number().required(),

      fynd_credits: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      coupon_value: Joi.number().required(),

      discount: Joi.number().required(),

      cashback: Joi.number().required(),

      promotion_effective_discount: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      amount_paid_roundoff: Joi.number(),

      size: Joi.string().allow("").required(),

      cod_charges: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      price_effective: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number(),

      added_to_fynd_cash: Joi.boolean().required(),

      gst_tax_percentage: Joi.number().required(),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      return_config: Joi.any(),

      uid: Joi.string().allow(""),

      identifiers: Joi.any(),
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
      item_criteria: OrderModel.ItemCriterias(),

      cart_conditions: Joi.any(),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      article_quantity: Joi.number(),

      amount: Joi.number(),

      promotion_type: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      promotion_name: Joi.string().allow(""),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      company: Joi.string().allow("").allow(null).required(),

      modified_on: Joi.string().allow(""),

      logo: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      id: Joi.number().required(),

      created_on: Joi.string().allow("").required(),
    });
  }

  static OrderBags() {
    return Joi.object({
      bag_id: Joi.number().required(),

      can_return: Joi.boolean(),

      gst_details: OrderModel.BagGST(),

      identifier: Joi.string().allow(""),

      parent_promo_bags: Joi.any(),

      current_status: OrderModel.CurrentStatus(),

      item: OrderModel.PlatformItem(),

      can_cancel: Joi.boolean(),

      seller_identifier: Joi.string().allow(""),

      quantity: Joi.number(),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      bag_configs: OrderModel.BagConfigs(),

      line_number: Joi.number(),

      financial_breakup: OrderModel.FinancialBreakup(),

      prices: OrderModel.Prices(),

      entity_type: Joi.string().allow(""),

      article: OrderModel.OrderBagArticle(),

      display_name: Joi.string().allow(""),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      brand: OrderModel.OrderBrandName(),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      total_items: Joi.number(),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      fulfilment_priority: Joi.number(),

      order: OrderModel.OrderDetailsData(),

      status: OrderModel.ShipmentStatusData(),

      gst_details: OrderModel.GSTDetailsData(),

      coupon: Joi.any(),

      shipment_id: Joi.string().allow("").required(),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      delivery_details: OrderModel.UserDetailsData(),

      payment_mode: Joi.string().allow(""),

      dp_details: OrderModel.DPDetailsData(),

      invoice: OrderModel.EinvoiceInfo(),

      total_bags: Joi.number(),

      platform_logo: Joi.string().allow(""),

      ordering_store: OrderModel.OrderingStoreDetails(),

      invoice_id: Joi.string().allow(""),

      vertical: Joi.string().allow("").allow(null),

      priority_text: Joi.string().allow("").allow(null),

      enable_dp_tracking: Joi.boolean(),

      affiliate_details: OrderModel.AffiliateDetails(),

      user_agent: Joi.string().allow(""),

      operational_status: Joi.string().allow(""),

      billing_details: OrderModel.UserDetailsData(),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      picked_date: Joi.string().allow(""),

      shipment_quantity: Joi.number(),

      meta: OrderModel.Meta(),

      shipment_status: Joi.string().allow(""),

      delivery_slot: Joi.any(),

      prices: OrderModel.Prices(),

      custom_meta: Joi.array().items(Joi.any()),

      packaging_type: Joi.string().allow(""),

      journey_type: Joi.string().allow(""),

      fulfilling_store: OrderModel.FulfillingStore(),

      payments: OrderModel.ShipmentPayments(),

      bags: Joi.array().items(OrderModel.OrderBags()),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      success: Joi.boolean().required(),
    });
  }

  static OrderMeta() {
    return Joi.object({
      mongo_cart_id: Joi.number(),

      cart_id: Joi.number(),

      comment: Joi.string().allow(""),

      extra_meta: Joi.any(),

      employee_id: Joi.number(),

      payment_type: Joi.string().allow(""),

      order_platform: Joi.string().allow(""),

      files: Joi.array().items(Joi.any()),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      order_type: Joi.string().allow(""),

      ordering_store: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      order_tags: Joi.array().items(Joi.any()),

      staff: Joi.any(),

      customer_note: Joi.string().allow(""),
    });
  }

  static OrderDict() {
    return Joi.object({
      prices: OrderModel.Prices(),

      tax_details: Joi.any(),

      order_date: Joi.string().allow("").required(),

      payment_methods: Joi.any(),

      meta: OrderModel.OrderMeta(),

      fynd_order_id: Joi.string().allow("").required(),
    });
  }

  static ShipmentDetailsResponse() {
    return Joi.object({
      order: OrderModel.OrderDict(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      success: Joi.boolean().required(),
    });
  }

  static SubLane() {
    return Joi.object({
      total_items: Joi.number(),

      actions: Joi.array().items(Joi.any()),

      text: Joi.string().allow(""),

      index: Joi.number(),

      value: Joi.string().allow(""),
    });
  }

  static SuperLane() {
    return Joi.object({
      total_items: Joi.number(),

      text: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.SubLane()),

      value: Joi.string().allow("").required(),
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

      name: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static PlatformChannel() {
    return Joi.object({
      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static PlatformOrderItems() {
    return Joi.object({
      total_order_value: Joi.number(),

      order_created_time: Joi.string().allow(""),

      order_value: Joi.number(),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      order_id: Joi.string().allow(""),

      meta: Joi.any(),

      payment_mode: Joi.string().allow(""),

      channel: OrderModel.PlatformChannel(),

      user_info: OrderModel.UserDataInfo(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),
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
      message: Joi.string().allow(""),

      lane: Joi.string().allow(""),

      total_count: Joi.number(),

      items: Joi.array().items(OrderModel.PlatformOrderItems()),

      page: OrderModel.Page(),

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

      updated_time: Joi.string().allow(""),

      status: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      meta: Joi.any(),

      reason: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),
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
      filters: Joi.array().items(OrderModel.FiltersInfo()),

      action_centre: Joi.array().items(OrderModel.FiltersInfo()),

      processed: Joi.array().items(OrderModel.FiltersInfo()),

      returned: Joi.array().items(OrderModel.FiltersInfo()),

      unfulfilled: Joi.array().items(OrderModel.FiltersInfo()),
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
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static OmsReports() {
    return Joi.object({
      report_id: Joi.string().allow(""),

      request_details: Joi.any(),

      report_name: Joi.string().allow(""),

      status: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),

      report_type: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      report_created_at: Joi.string().allow("").allow(null),

      s3_key: Joi.string().allow(""),
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

      trace_id: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

      success: Joi.boolean(),
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
      invoice_status: Joi.string().allow(""),

      data: Joi.any(),

      do_invoice_label_generated: Joi.boolean().required(),

      store_name: Joi.string().allow(""),

      company_id: Joi.string().allow(""),

      batch_id: Joi.string().allow("").required(),

      store_id: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      label: Joi.any(),

      invoice: Joi.any(),
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
      namespace: Joi.string().allow(""),

      size: Joi.number(),

      file_path: Joi.string().allow(""),

      upload: OrderModel.FileUploadResponse(),

      file_name: Joi.string().allow(""),

      method: Joi.string().allow(""),

      cdn: OrderModel.URL(),

      operation: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      content_type: Joi.string().allow(""),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      current: Joi.number(),

      total: Joi.number(),

      size: Joi.number(),

      has_previous: Joi.boolean(),

      type: Joi.string().allow(""),

      has_next: Joi.boolean(),
    });
  }

  static bulkListingData() {
    return Joi.object({
      status: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      company_id: Joi.number(),

      user_name: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      processing: Joi.number(),

      failed_shipments: Joi.array().items(Joi.any()),

      store_code: Joi.string().allow(""),

      successful_shipments: Joi.array().items(Joi.any()),

      uploaded_on: Joi.string().allow(""),

      successful: Joi.number(),

      excel_url: Joi.string().allow(""),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      total: Joi.number(),

      user_id: Joi.string().allow(""),

      batch_id: Joi.string().allow(""),

      failed: Joi.number(),

      store_id: Joi.number(),

      id: Joi.string().allow(""),
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
      successful_shipments_count: Joi.number(),

      failed_shipments_count: Joi.number(),

      company_id: Joi.string().allow(""),

      batch_id: Joi.string().allow(""),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      total_shipments_count: Joi.number(),

      processing_shipments_count: Joi.number(),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      failed_records: Joi.array().items(Joi.string().allow("")),

      message: Joi.string().allow(""),

      status: Joi.boolean(),

      user_id: Joi.string().allow(""),

      uploaded_by: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      error: Joi.array().items(Joi.string().allow("")),

      success: Joi.string().allow(""),
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

  static BagGSTDetails() {
    return Joi.object({
      sgst_gst_fee: Joi.string().allow("").required(),

      gst_fee: Joi.number().required(),

      igst_tax_percentage: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      cgst_tax_percentage: Joi.number().required(),

      gstin_code: Joi.string().allow("").allow(null),

      value_of_good: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      is_default_hsn_code: Joi.boolean(),

      tax_collected_at_source: Joi.number().required(),

      igst_gst_fee: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow("").required(),

      gst_tax_percentage: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      sgst_tax_percentage: Joi.number().required(),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_bag_id: Joi.string().allow("").required(),

      loyalty_discount: Joi.number(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      employee_discount: Joi.number(),
    });
  }

  static Attributes() {
    return Joi.object({
      primary_color: Joi.string().allow(""),

      essential: Joi.string().allow(""),

      name: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      primary_material: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      primary_color_hex: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      can_return: Joi.boolean(),

      name: Joi.string().allow("").required(),

      l3_category: Joi.number(),

      brand_id: Joi.number().required(),

      l2_category_id: Joi.number(),

      can_cancel: Joi.boolean(),

      color: Joi.string().allow("").allow(null),

      item_id: Joi.number().required(),

      image: Joi.array().items(Joi.string().allow("")).required(),

      l3_category_name: Joi.string().allow(""),

      meta: Joi.any(),

      gender: Joi.string().allow("").allow(null),

      branch_url: Joi.string().allow("").allow(null),

      webstore_product_url: Joi.string().allow("").allow(null),

      slug_key: Joi.string().allow("").required(),

      l2_category: Joi.array().items(Joi.string().allow("")),

      size: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      l1_category: Joi.array().items(Joi.string().allow("")),

      last_updated_at: Joi.string().allow(""),

      attributes: OrderModel.Attributes().required(),

      l1_category_id: Joi.number(),

      department_id: Joi.number(),

      brand: Joi.string().allow("").required(),
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

      username: Joi.string().allow(""),

      user: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      verified: Joi.boolean().required(),

      url: Joi.string().allow(""),

      ds_type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

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
      enabled: Joi.boolean().required(),

      password: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user: Joi.string().allow(""),
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

      ewaybill_portal_details: Joi.any(),

      gst_number: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      additional_contact_details: Joi.any(),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      display_name: Joi.string().allow("").required(),

      documents: OrderModel.StoreDocuments(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      timing: Joi.array().items(Joi.any()),

      product_return_config: Joi.any(),
    });
  }

  static StoreAddress() {
    return Joi.object({
      email: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      address_category: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      contact_person: Joi.string().allow("").required(),

      area: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      version: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      created_at: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      phone: Joi.string().allow("").allow(null).required(),

      longitude: Joi.number().required(),

      pincode: Joi.number().required(),
    });
  }

  static Store() {
    return Joi.object({
      company_id: Joi.number().required(),

      country: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      is_enabled_for_recon: Joi.boolean(),

      latitude: Joi.number().required(),

      contact_person: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").allow(null),

      parent_store_id: Joi.number(),

      pincode: Joi.string().allow("").required(),

      brand_id: Joi.any(),

      address2: Joi.string().allow(""),

      mall_name: Joi.string().allow("").allow(null),

      is_active: Joi.boolean(),

      created_at: Joi.string().allow("").required(),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      login_username: Joi.string().allow("").required(),

      mall_area: Joi.string().allow("").allow(null),

      order_integration_id: Joi.string().allow(""),

      store_email: Joi.string().allow("").required(),

      location_type: Joi.string().allow("").required(),

      meta: OrderModel.StoreMeta().required(),

      store_active_from: Joi.string().allow("").allow(null),

      alohomora_user_id: Joi.number(),

      code: Joi.string().allow(""),

      fulfillment_channel: Joi.string().allow("").required(),

      store_address_json: OrderModel.StoreAddress(),

      vat_no: Joi.string().allow("").allow(null),

      phone: Joi.number().required(),

      longitude: Joi.number().required(),

      address1: Joi.string().allow("").required(),

      packaging_material_count: Joi.number(),

      s_id: Joi.string().allow("").required(),

      is_archived: Joi.boolean(),
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
      po_tax_amount: Joi.number(),

      partial_can_ret: Joi.boolean(),

      po_line_amount: Joi.number(),

      docker_number: Joi.string().allow(""),

      total_gst_percentage: Joi.number(),

      item_base_price: Joi.number(),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
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
      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),

      time: Joi.number(),
    });
  }

  static Article() {
    return Joi.object({
      dimensions: OrderModel.Dimensions(),

      _id: Joi.string().allow("").required(),

      size: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      uid: Joi.string().allow("").required(),

      child_details: Joi.any().allow(null),

      raw_meta: Joi.any(),

      seller_identifier: Joi.string().allow("").required(),

      identifiers: OrderModel.Identifier().required(),

      is_set: Joi.boolean(),

      weight: OrderModel.Weight(),

      return_config: OrderModel.ReturnConfig(),

      a_set: Joi.any().allow(null),

      esp_modified: Joi.any(),
    });
  }

  static Brand() {
    return Joi.object({
      company: Joi.string().allow("").required(),

      brand_id: Joi.number().required(),

      pickup_location: Joi.string().allow("").allow(null),

      script_last_ran: Joi.string().allow("").allow(null),

      modified_on: Joi.number(),

      brand_name: Joi.string().allow("").required(),

      invoice_prefix: Joi.string().allow("").allow(null),

      logo: Joi.string().allow(""),

      is_virtual_invoice: Joi.boolean().allow(null),

      credit_note_allowed: Joi.boolean(),

      start_date: Joi.string().allow("").allow(null),

      credit_note_expiry_days: Joi.number().allow(null),

      created_on: Joi.number(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      status: OrderModel.BagReturnableCancelableStatus().required(),

      gst_details: OrderModel.BagGSTDetails().required(),

      identifier: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      parent_promo_bags: Joi.any(),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      bag_update_time: Joi.number(),

      current_status: OrderModel.BagStatusHistory().required(),

      reasons: Joi.array().items(Joi.any()),

      qc_required: Joi.any(),

      item: OrderModel.Item().required(),

      article_details: OrderModel.ArticleDetails(),

      ordering_store: OrderModel.Store(),

      seller_identifier: Joi.string().allow(""),

      b_type: Joi.string().allow(""),

      dates: OrderModel.Dates(),

      quantity: Joi.number(),

      affiliate_details: OrderModel.AffiliateDetails(),

      operational_status: Joi.string().allow(""),

      order_integration_id: Joi.string().allow("").allow(null),

      line_number: Joi.number(),

      bag_status_history: OrderModel.BagStatusHistory(),

      restore_promos: Joi.any(),

      meta: OrderModel.BagMeta(),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      tags: Joi.array().items(Joi.string().allow("")),

      restore_coupon: Joi.boolean(),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      b_id: Joi.number().required(),

      original_bag_list: Joi.array().items(Joi.number()),

      no_of_bags_order: Joi.number(),

      prices: OrderModel.Prices().required(),

      entity_type: Joi.string().allow(""),

      article: OrderModel.Article().required(),

      journey_type: Joi.string().allow("").required(),

      display_name: Joi.string().allow(""),

      applied_promos: Joi.array().items(Joi.any()),

      brand: OrderModel.Brand().required(),
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
      current: Joi.number().required(),

      size: Joi.number().required(),

      page_type: Joi.string().allow("").required(),

      item_total: Joi.number().required(),

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
      payment_receipt: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      invoice_receipt: Joi.string().allow(""),

      success: Joi.boolean(),
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

      shipment_id: Joi.string().allow(""),

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
      affiliate_order_id: Joi.string().allow("").allow(null),

      set_id: Joi.string().allow("").allow(null),

      item_id: Joi.string().allow("").allow(null),

      mongo_article_id: Joi.string().allow("").allow(null),

      reason_ids: Joi.array().items(Joi.number()),

      bag_id: Joi.number().allow(null),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      fynd_order_id: Joi.string().allow("").allow(null),

      affiliate_id: Joi.string().allow("").allow(null),
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
      affiliate_order_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),
    });
  }

  static UpdateShipmentLockPayload() {
    return Joi.object({
      action: Joi.string().allow("").required(),

      action_type: Joi.string().allow("").required(),

      entities: Joi.array().items(OrderModel.Entities()).required(),

      entity_type: Joi.string().allow("").required(),
    });
  }

  static Bags() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow(""),

      is_locked: Joi.boolean(),

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
      is_shipment_locked: Joi.boolean(),

      lock_status: Joi.boolean().allow(null),

      bags: Joi.array().items(OrderModel.Bags()),

      original_filter: OrderModel.OriginalFilter(),

      is_bag_locked: Joi.boolean(),

      affiliate_shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),
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

      created_at: Joi.string().allow(""),

      company_id: Joi.number(),

      logo_url: Joi.string().allow(""),

      from_datetime: Joi.string().allow(""),

      platform_name: Joi.string().allow(""),

      platform_id: Joi.string().allow(""),

      id: Joi.number().required(),

      title: Joi.string().allow(""),

      description: Joi.string().allow(""),
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

  static Products() {
    return Joi.object({
      quantity: Joi.number(),

      identifier: Joi.string().allow(""),

      line_number: Joi.number(),
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

  static ProductsReasonsData() {
    return Joi.object({
      reason_id: Joi.number(),

      reason_text: Joi.string().allow(""),
    });
  }

  static ProductsReasonsFilters() {
    return Joi.object({
      quantity: Joi.number(),

      identifier: Joi.string().allow(""),

      line_number: Joi.number(),
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

  static ShipmentsRequest() {
    return Joi.object({
      products: Joi.array().items(OrderModel.Products()),

      data_updates: OrderModel.DataUpdates(),

      identifier: Joi.string().allow("").required(),

      reasons: OrderModel.ReasonsData(),
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
      force_transition: Joi.boolean(),

      task: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      final_state: Joi.any(),

      identifier: Joi.string().allow(""),

      status: Joi.number(),

      meta: Joi.any(),

      code: Joi.string().allow(""),

      stack_trace: Joi.string().allow(""),

      message: Joi.string().allow(""),

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

  static MarketPlacePdf() {
    return Joi.object({
      label: Joi.string().allow("").allow(null),

      invoice: Joi.string().allow("").allow(null),
    });
  }

  static AffiliateBag() {
    return Joi.object({
      pdf_links: OrderModel.MarketPlacePdf(),

      company_id: Joi.number().required(),

      sku: Joi.string().allow("").required(),

      discount: Joi.number().required(),

      affiliate_meta: Joi.any().required(),

      fynd_store_id: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow("").required(),

      delivery_charge: Joi.number().required(),

      _id: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      price_marked: Joi.number().required(),

      unit_price: Joi.number().required(),

      item_size: Joi.string().allow("").required(),

      price_effective: Joi.number().required(),

      transfer_price: Joi.number().required(),

      quantity: Joi.number().required(),

      store_id: Joi.number().required(),

      affiliate_store_id: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      identifier: Joi.any().required(),

      avl_qty: Joi.number().required(),

      amount_paid: Joi.number().required(),
    });
  }

  static OrderUser() {
    return Joi.object({
      state: Joi.string().allow("").required(),

      address2: Joi.string().allow("").allow(null),

      mobile: Joi.number().required(),

      pincode: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      address1: Joi.string().allow("").allow(null),
    });
  }

  static UserData() {
    return Joi.object({
      billing_user: OrderModel.OrderUser(),

      shipping_user: OrderModel.OrderUser(),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      brand_id: Joi.number().required(),

      attributes: Joi.any().required(),

      weight: Joi.any().required(),

      dimension: Joi.any().required(),

      quantity: Joi.number().required(),

      category: Joi.any().required(),

      _id: Joi.string().allow("").required(),
    });
  }

  static LocationDetails() {
    return Joi.object({
      fulfillment_type: Joi.string().allow("").required(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      fulfillment_id: Joi.number().required(),
    });
  }

  static ShipmentDetails() {
    return Joi.object({
      shipments: Joi.number().required(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      fulfillment_id: Joi.number().required(),

      meta: Joi.any(),

      dp_id: Joi.number().allow(null),

      box_type: Joi.string().allow("").allow(null),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      to_pincode: Joi.string().allow("").required(),

      source: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

      identifier: Joi.string().allow("").required(),

      location_details: OrderModel.LocationDetails(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      journey: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),
    });
  }

  static ShipmentData() {
    return Joi.object({
      shipment_data: OrderModel.ShipmentConfig().required(),
    });
  }

  static OrderPriority() {
    return Joi.object({
      affiliate_priority_code: Joi.string().allow("").allow(null),

      fulfilment_priority_text: Joi.string().allow(""),

      fulfilment_priority: Joi.number().allow(null),
    });
  }

  static OrderInfo() {
    return Joi.object({
      affiliate_order_id: Joi.string().allow(""),

      discount: Joi.number().required(),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      cod_charges: Joi.number().required(),

      billing_address: OrderModel.OrderUser().required(),

      payment: Joi.any(),

      items: Joi.any().required(),

      payment_mode: Joi.string().allow("").required(),

      shipping_address: OrderModel.OrderUser().required(),

      user: OrderModel.UserData().required(),

      delivery_charges: Joi.number().required(),

      shipment: OrderModel.ShipmentData(),

      order_value: Joi.number().required(),

      order_priority: OrderModel.OrderPriority(),

      coupon: Joi.string().allow("").allow(null),
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
      token: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      name: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      owner: Joi.string().allow("").required(),

      description: Joi.string().allow(""),
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

  static AffiliateInventoryArticleAssignmentConfig() {
    return Joi.object({
      post_order_reassignment: Joi.boolean(),
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

      inventory: OrderModel.AffiliateInventoryStoreConfig(),

      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),

      order: OrderModel.AffiliateInventoryOrderConfig(),
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

      id: Joi.string().allow("").required(),

      config: OrderModel.AffiliateConfig(),
    });
  }

  static AffiliateStoreIdMapping() {
    return Joi.object({
      store_id: Joi.number().required(),

      marketplace_store_id: Joi.string().allow("").required(),
    });
  }

  static OrderConfig() {
    return Joi.object({
      affiliate: OrderModel.Affiliate().required(),

      bag_end_state: Joi.string().allow(""),

      article_lookup: Joi.string().allow(""),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      create_user: Joi.boolean(),

      store_lookup: Joi.string().allow(""),
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
      slug: Joi.string().allow("").required(),

      display_text: Joi.string().allow("").required(),

      id: Joi.number().required(),

      description: Joi.string().allow("").required(),
    });
  }

  static GetActionsResponse() {
    return Joi.object({
      permissions: OrderModel.ActionInfo().required(),
    });
  }

  static PostHistoryData() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      user_name: Joi.string().allow("").required(),
    });
  }

  static PostHistoryFilters() {
    return Joi.object({
      shipment_id: Joi.string().allow("").required(),

      line_number: Joi.string().allow(""),

      identifier: Joi.string().allow(""),
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

  static HistoryDict() {
    return Joi.object({
      l3_detail: Joi.string().allow(""),

      ticket_id: Joi.string().allow(""),

      createdat: Joi.string().allow("").required(),

      l1_detail: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      ticket_url: Joi.string().allow(""),

      user: Joi.string().allow("").required(),

      bag_id: Joi.number(),

      message: Joi.string().allow("").required(),

      l2_detail: Joi.string().allow(""),
    });
  }

  static ShipmentHistoryResponse() {
    return Joi.object({
      activity_history: Joi.array().items(OrderModel.HistoryDict()).required(),
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
      phone_number: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      country_code: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      shipment_id: Joi.number().required(),

      payment_mode: Joi.string().allow("").required(),

      customer_name: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),
    });
  }

  static SendSmsPayload() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      data: OrderModel.SmsDataPayload(),

      bag_id: Joi.number().required(),
    });
  }

  static Meta1() {
    return Joi.object({
      kafka_emission_status: Joi.number(),

      state_manager_used: Joi.string().allow(""),
    });
  }

  static ShipmentDetail() {
    return Joi.object({
      remarks: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.number()),

      status: Joi.string().allow(""),

      meta: OrderModel.Meta1().required(),

      shipment_id: Joi.string().allow(""),

      id: Joi.number().required(),
    });
  }

  static OrderDetails() {
    return Joi.object({
      created_at: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow(""),
    });
  }

  static OrderStatusData() {
    return Joi.object({
      shipment_details: Joi.array().items(OrderModel.ShipmentDetail()),

      order_details: OrderModel.OrderDetails().required(),

      errors: Joi.array().items(Joi.string().allow("")),
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
      success: Joi.string().allow("").required(),

      errors: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Tax() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      rate: Joi.number().required(),

      amount: Joi.any().required(),

      breakup: Joi.array().items(Joi.any()),
    });
  }

  static Charge() {
    return Joi.object({
      tax: OrderModel.Tax(),

      type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      amount: Joi.any().required(),
    });
  }

  static TaxInfo() {
    return Joi.object({
      gstin: Joi.string().allow(""),

      b2b_gstin_number: Joi.string().allow(""),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      pack_by_date: Joi.string().allow(""),

      customer_pickup_slot: Joi.any(),

      dispatch_after_date: Joi.string().allow(""),

      confirm_by_date: Joi.string().allow(""),

      dispatch_by_date: Joi.string().allow(""),

      dp_pickup_slot: Joi.any(),
    });
  }

  static LineItem() {
    return Joi.object({
      charges: Joi.array().items(OrderModel.Charge()),

      custom_messasge: Joi.string().allow(""),

      meta: Joi.any(),

      quantity: Joi.number(),

      external_line_id: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),
    });
  }

  static Shipment() {
    return Joi.object({
      priority: Joi.number(),

      external_shipment_id: Joi.string().allow(""),

      location_id: Joi.number().required(),

      processing_dates: OrderModel.ProcessingDates(),

      meta: Joi.any(),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),
    });
  }

  static BillingInfo() {
    return Joi.object({
      state: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      state_code: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      customer_code: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      title: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      floor_no: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      last_name: Joi.string().allow(""),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      mode: Joi.string().allow("").required(),

      meta: Joi.any(),

      refund_by: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      transaction_data: Joi.any(),

      collect_by: Joi.string().allow("").required(),

      amount: Joi.number().required(),
    });
  }

  static PaymentInfo() {
    return Joi.object({
      payment_methods: Joi.array().items(OrderModel.PaymentMethod()),

      primary_mode: Joi.string().allow("").required(),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      state: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      state_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      shipping_type: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      slot: Joi.array().items(Joi.any()),

      primary_mobile_number: Joi.string().allow("").required(),

      customer_code: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      geo_location: Joi.any(),

      title: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      address_type: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      last_name: Joi.string().allow(""),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      charges: Joi.array().items(OrderModel.Charge()),

      tax_info: OrderModel.TaxInfo(),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      external_creation_date: Joi.string().allow(""),

      billing_info: OrderModel.BillingInfo().required(),

      meta: Joi.any(),

      currency_info: Joi.any(),

      external_order_id: Joi.string().allow(""),

      payment_info: OrderModel.PaymentInfo().required(),

      shipping_info: OrderModel.ShippingInfo().required(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      info: Joi.any(),

      request_id: Joi.string().allow("").allow(null),

      status: Joi.number().required(),

      meta: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      exception: Joi.string().allow("").allow(null),
    });
  }

  static DpConfiguration() {
    return Joi.object({
      shipping_by: Joi.string().allow(""),
    });
  }

  static PaymentMethods() {
    return Joi.object({
      mode: Joi.string().allow(""),

      collect_by: Joi.string().allow(""),

      refund_by: Joi.string().allow(""),
    });
  }

  static CreateChannelPaymentInfo() {
    return Joi.object({
      mode_of_payment: Joi.string().allow(""),

      payment_methods: Joi.array().items(OrderModel.PaymentMethods()),

      source: Joi.string().allow(""),
    });
  }

  static CreateChannelConfig() {
    return Joi.object({
      dp_configuration: OrderModel.DpConfiguration(),

      logo_url: Joi.any(),

      location_reassignment: Joi.boolean(),

      lock_states: Joi.array().items(Joi.string().allow("")),

      shipment_assignment: Joi.string().allow(""),

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
      is_inserted: Joi.boolean(),

      is_upserted: Joi.boolean(),

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

      mobile: Joi.number().required(),

      end_date: Joi.string().allow("").required(),

      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),
    });
  }
}
module.exports = OrderModel;
