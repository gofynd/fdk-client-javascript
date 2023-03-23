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
      type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.FilterInfoOption()),
    });
  }

  static Prices() {
    return Joi.object({
      discount: Joi.number(),

      refund_credit: Joi.number(),

      coupon_value: Joi.number(),

      value_of_good: Joi.number(),

      cashback: Joi.number(),

      tax_collected_at_source: Joi.number(),

      price_effective: Joi.number(),

      fynd_credits: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      amount_paid: Joi.number(),

      transfer_price: Joi.number(),

      cod_charges: Joi.number(),

      refund_amount: Joi.number(),

      cashback_applied: Joi.number(),

      promotion_effective_discount: Joi.number(),

      delivery_charge: Joi.number(),

      price_marked: Joi.number(),
    });
  }

  static PaymentModeInfo() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      uid: Joi.number(),

      first_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      name: Joi.string().allow(""),

      avis_user_id: Joi.string().allow(""),
    });
  }

  static ShipmentItemFulFillingStore() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      code: Joi.string().allow(""),

      color: Joi.string().allow("").allow(null),

      id: Joi.number(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      department_id: Joi.number(),

      size: Joi.string().allow(""),

      l3_category_name: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      l3_category: Joi.number(),

      image: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      can_return: Joi.boolean(),

      images: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      gst_fee: Joi.number().required(),

      value_of_good: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),

      brand_calculated_amount: Joi.number().required(),
    });
  }

  static BagUnit() {
    return Joi.object({
      item: OrderModel.PlatformItem(),

      status: Joi.any().required(),

      ordering_channel: Joi.string().allow("").required(),

      total_shipment_bags: Joi.number().required(),

      prices: OrderModel.Prices(),

      bag_id: Joi.number().required(),

      gst: OrderModel.GSTDetailsData(),

      item_quantity: Joi.number().required(),

      can_cancel: Joi.boolean(),

      shipment_id: Joi.string().allow("").required(),

      can_return: Joi.boolean(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      title: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      payment_methods: Joi.any(),

      prices: OrderModel.Prices(),

      fulfilling_centre: Joi.string().allow("").required(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      id: Joi.string().allow("").required(),

      sla: Joi.any(),

      total_shipments_in_order: Joi.number().required(),

      application: Joi.any(),

      user: OrderModel.UserDataInfo(),

      total_bags_count: Joi.number().required(),

      created_at: Joi.string().allow("").required(),

      channel: Joi.any(),

      shipment_created_at: Joi.string().allow("").required(),

      shipment_id: Joi.string().allow(""),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      shipment_status: OrderModel.ShipmentStatus(),
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

  static Error() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      ordering_channel: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),

      tax_details: Joi.any(),

      source: Joi.string().allow(""),

      cod_charges: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow("").required(),

      order_date: Joi.string().allow(""),

      order_value: Joi.string().allow(""),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      status: Joi.string().allow(""),

      id: Joi.number(),

      bag_list: Joi.array().items(Joi.string().allow("")),

      created_at: Joi.string().allow("").allow(null),

      shipment_id: Joi.string().allow(""),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      size_level_total_qty: Joi.number().allow(null),

      order_item_id: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      coupon_code: Joi.string().allow("").allow(null),

      channel_order_id: Joi.string().allow("").allow(null),

      loyalty_discount: Joi.number(),

      quantity: Joi.number(),

      is_priority: Joi.boolean(),

      employee_discount: Joi.number(),

      due_date: Joi.string().allow("").allow(null),

      channel_shipment_id: Joi.string().allow("").allow(null),
    });
  }

  static ShipmentTimeStamp() {
    return Joi.object({
      t_max: Joi.string().allow(""),

      t_min: Joi.string().allow(""),
    });
  }

  static DebugInfo() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow(""),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      pincode: Joi.number().required(),

      gstin: Joi.string().allow("").required(),

      address: Joi.string().allow("").allow(null).required(),

      city: Joi.string().allow("").required(),

      ajio_site_id: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),
    });
  }

  static EInvoice() {
    return Joi.object({
      irn: Joi.string().allow(""),

      acknowledge_no: Joi.number(),

      signed_qr_code: Joi.string().allow(""),

      acknowledge_date: Joi.string().allow(""),

      error_code: Joi.string().allow(""),

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

  static Formatted() {
    return Joi.object({
      f_max: Joi.string().allow(""),

      f_min: Joi.string().allow(""),
    });
  }

  static LockData() {
    return Joi.object({
      lock_message: Joi.string().allow(""),

      locked: Joi.boolean(),

      mto: Joi.boolean(),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      dp_sort_key: Joi.string().allow(""),

      return_awb_number: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      po_number: Joi.string().allow(""),

      return_details: Joi.any(),

      forward_affiliate_order_id: Joi.string().allow(""),

      weight: Joi.number().required(),

      timestamp: OrderModel.ShipmentTimeStamp(),

      awb_number: Joi.string().allow(""),

      marketplace_store_id: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      packaging_name: Joi.string().allow(""),

      shipment_volumetric_weight: Joi.number(),

      same_store_available: Joi.boolean().required(),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      b2c_buyer_details: Joi.any().allow(null),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      debug_info: OrderModel.DebugInfo(),

      dp_name: Joi.string().allow(""),

      shipment_weight: Joi.number(),

      external: Joi.any(),

      dp_options: Joi.any(),

      store_invoice_updated_date: Joi.string().allow(""),

      return_affiliate_shipment_id: Joi.string().allow(""),

      ewaybill_info: Joi.any().allow(null),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      order_type: Joi.string().allow("").allow(null),

      bag_weight: Joi.any(),

      einvoice_info: OrderModel.EinvoiceInfo(),

      return_store_node: Joi.number(),

      assign_dp_from_sb: Joi.boolean(),

      formatted: OrderModel.Formatted(),

      due_date: Joi.string().allow(""),

      lock_data: OrderModel.LockData(),

      return_affiliate_order_id: Joi.string().allow(""),
    });
  }

  static PDFLinks() {
    return Joi.object({
      label: Joi.string().allow(""),

      delivery_challan_a4: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      label_type: Joi.string().allow("").required(),

      po_invoice: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      b2b: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      affiliate_store_id: Joi.string().allow("").required(),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      ad_id: Joi.string().allow(""),

      company_affiliate_tag: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow("").required(),

      pdf_links: OrderModel.PDFLinks(),

      affiliate_order_id: Joi.string().allow("").required(),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      pincode: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),
    });
  }

  static InvoiceInfo() {
    return Joi.object({
      store_invoice_id: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),

      label_url: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      credit_note_id: Joi.string().allow(""),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      pincode: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      id: Joi.number().required(),

      address: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      phone: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),
    });
  }

  static Dimensions() {
    return Joi.object({
      is_default: Joi.boolean(),

      width: Joi.number(),

      height: Joi.number(),

      length: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static Meta() {
    return Joi.object({
      dimension: OrderModel.Dimensions(),
    });
  }

  static TrackingList() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      time: Joi.string().allow(""),

      text: Joi.string().allow("").required(),

      is_passed: Joi.boolean(),

      is_current: Joi.boolean(),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      ordering_store_id: Joi.number().required(),

      pincode: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      contact_person: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      pincode: Joi.string().allow(""),

      id: Joi.number(),

      eway_bill_id: Joi.string().allow("").allow(null),

      gst_tag: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      track_url: Joi.string().allow("").allow(null),

      name: Joi.string().allow(""),

      country: Joi.string().allow(""),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      mode: Joi.string().allow(""),

      source: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      display_name: Joi.string().allow("").required(),

      app_display_name: Joi.string().allow(""),

      state_type: Joi.string().allow("").required(),

      app_state_name: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      notify_customer: Joi.boolean(),

      journey_type: Joi.string().allow("").required(),

      app_facing: Joi.boolean(),

      bs_id: Joi.number().required(),

      is_active: Joi.boolean(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      delivery_partner_id: Joi.number().allow(null),

      status: Joi.string().allow("").required(),

      store_id: Joi.number(),

      display_name: Joi.string().allow(""),

      app_display_name: Joi.string().allow(""),

      bsh_id: Joi.number(),

      state_type: Joi.string().allow(""),

      bag_id: Joi.number(),

      reasons: Joi.array().items(Joi.any()),

      created_at: Joi.string().allow(""),

      forward: Joi.boolean().allow(null),

      updated_at: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      delivery_awb_number: Joi.string().allow("").allow(null),

      kafka_sync: Joi.boolean(),

      state_id: Joi.number(),

      bag_state_mapper: OrderModel.BagStateMapper(),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      id: Joi.number().required(),

      logo: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      company: Joi.string().allow("").allow(null).required(),

      created_on: Joi.string().allow("").required(),
    });
  }

  static BagGST() {
    return Joi.object({
      gst_fee: Joi.number(),

      value_of_good: Joi.number(),

      gst_tax_percentage: Joi.number(),

      gst_tag: Joi.string().allow(""),

      gstin_code: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      is_default_hsn_code: Joi.boolean(),

      brand_calculated_amount: Joi.number(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      delivery_partner_id: Joi.number(),

      status: Joi.string().allow(""),

      store_id: Joi.number(),

      bag_id: Joi.number(),

      created_at: Joi.string().allow("").allow(null),

      shipment_id: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      current_status_id: Joi.number().required(),

      delivery_awb_number: Joi.string().allow(""),

      state_type: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      state_id: Joi.number(),

      bag_state_mapper: OrderModel.BagStateMapper(),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      identifiers: Joi.any(),

      return_config: Joi.any(),

      uid: Joi.string().allow(""),
    });
  }

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      total_units: Joi.number().required(),

      refund_credit: Joi.number().required(),

      value_of_good: Joi.number().required(),

      tax_collected_at_source: Joi.number(),

      size: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

      brand_calculated_amount: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      price_effective: Joi.number().required(),

      fynd_credits: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),

      transfer_price: Joi.number().required(),

      promotion_effective_discount: Joi.number().required(),

      discount: Joi.number().required(),

      gst_fee: Joi.number().required(),

      coupon_value: Joi.number().required(),

      amount_paid: Joi.number().required(),

      cod_charges: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      price_marked: Joi.number().required(),

      cashback: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      gst_tag: Joi.string().allow("").required(),

      coupon_effective_discount: Joi.number().required(),

      identifiers: OrderModel.Identifier().required(),

      delivery_charge: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      pincode: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      version: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      area: Joi.string().allow(""),

      latitude: Joi.number(),

      created_at: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      email: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      city: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      longitude: Joi.number(),

      country: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      state: Joi.string().allow(""),
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

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      article_quantity: Joi.number(),

      promo_id: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      amount: Joi.number(),
    });
  }

  static BagConfigs() {
    return Joi.object({
      is_returnable: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static OrderBags() {
    return Joi.object({
      prices: OrderModel.Prices(),

      brand: OrderModel.OrderBrandName(),

      seller_identifier: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      can_return: Joi.boolean(),

      display_name: Joi.string().allow(""),

      gst_details: OrderModel.BagGST(),

      line_number: Joi.number(),

      current_status: OrderModel.CurrentStatus(),

      article: OrderModel.OrderBagArticle(),

      financial_breakup: OrderModel.FinancialBreakup(),

      parent_promo_bags: Joi.any(),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      item: OrderModel.PlatformItem(),

      entity_type: Joi.string().allow(""),

      bag_id: Joi.number().required(),

      quantity: Joi.number(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      identifier: Joi.string().allow(""),

      bag_configs: OrderModel.BagConfigs(),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      order: OrderModel.OrderDetailsData(),

      status: OrderModel.ShipmentStatusData(),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      payment_methods: Joi.any(),

      prices: OrderModel.Prices(),

      packaging_type: Joi.string().allow(""),

      affiliate_details: OrderModel.AffiliateDetails(),

      total_bags: Joi.number(),

      delivery_details: OrderModel.UserDetailsData(),

      invoice: OrderModel.InvoiceInfo(),

      fulfilling_store: OrderModel.FulfillingStore(),

      custom_meta: Joi.array().items(Joi.any()),

      payment_mode: Joi.string().allow(""),

      picked_date: Joi.string().allow(""),

      gst_details: OrderModel.GSTDetailsData(),

      shipment_quantity: Joi.number(),

      meta: OrderModel.Meta(),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      ordering_store: OrderModel.OrderingStoreDetails(),

      vertical: Joi.string().allow("").allow(null),

      dp_details: OrderModel.DPDetailsData(),

      operational_status: Joi.string().allow(""),

      billing_details: OrderModel.UserDetailsData(),

      lock_status: Joi.boolean(),

      coupon: Joi.any(),

      payments: OrderModel.ShipmentPayments(),

      fulfilment_priority: Joi.number(),

      shipment_id: Joi.string().allow("").required(),

      journey_type: Joi.string().allow(""),

      priority_text: Joi.string().allow("").allow(null),

      delivery_slot: Joi.any(),

      forward_shipment_id: Joi.string().allow(""),

      invoice_id: Joi.string().allow(""),

      total_items: Joi.number(),

      shipment_status: Joi.string().allow(""),

      user_agent: Joi.string().allow(""),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      enable_dp_tracking: Joi.boolean(),

      platform_logo: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.OrderBags()),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      message: Joi.string().allow(""),

      success: Joi.boolean().required(),
    });
  }

  static OrderMeta() {
    return Joi.object({
      currency_symbol: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      extra_meta: Joi.any(),

      mongo_cart_id: Joi.number(),

      cart_id: Joi.number(),

      employee_id: Joi.number(),

      order_platform: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      payment_type: Joi.string().allow(""),

      ordering_store: Joi.number(),

      staff: Joi.any(),

      files: Joi.array().items(Joi.any()),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      order_tags: Joi.array().items(Joi.any()),

      customer_note: Joi.string().allow(""),
    });
  }

  static OrderDict() {
    return Joi.object({
      payment_methods: Joi.any(),

      prices: OrderModel.Prices(),

      tax_details: Joi.any(),

      meta: OrderModel.OrderMeta(),

      fynd_order_id: Joi.string().allow("").required(),

      order_date: Joi.string().allow("").required(),
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
      actions: Joi.array().items(Joi.any()),

      index: Joi.number(),

      value: Joi.string().allow(""),

      text: Joi.string().allow(""),

      total_items: Joi.number(),
    });
  }

  static SuperLane() {
    return Joi.object({
      total_items: Joi.number(),

      value: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),

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
      name: Joi.string().allow(""),

      value: Joi.string().allow(""),

      display: Joi.string().allow(""),
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
      order_id: Joi.string().allow(""),

      order_created_time: Joi.string().allow(""),

      total_order_value: Joi.number(),

      meta: Joi.any(),

      user_info: OrderModel.UserDataInfo(),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      channel: OrderModel.PlatformChannel(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      payment_mode: Joi.string().allow(""),

      order_value: Joi.number(),
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

      total_count: Joi.number(),

      items: Joi.array().items(OrderModel.PlatformOrderItems()),

      message: Joi.string().allow(""),

      page: OrderModel.Page(),

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

      text: Joi.string().allow("").required(),

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
      status: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      meta: Joi.any(),

      last_location_recieved_at: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

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
      status: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      request_details: Joi.any(),

      report_type: Joi.string().allow(""),

      s3_key: Joi.string().allow(""),

      report_id: Joi.string().allow(""),

      report_created_at: Joi.string().allow("").allow(null),

      report_name: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),
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
      message: Joi.string().allow(""),

      type: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

      success: Joi.boolean(),

      trace_id: Joi.string().allow(""),

      data: Joi.array().items(Joi.any()),

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
      store_id: Joi.string().allow(""),

      batch_id: Joi.string().allow("").required(),

      company_id: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      data: Joi.any(),

      invoice: Joi.any(),

      invoice_status: Joi.string().allow(""),

      label: Joi.any(),

      do_invoice_label_generated: Joi.boolean().required(),

      store_name: Joi.string().allow(""),
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
      content_type: Joi.string().allow(""),

      namespace: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      file_name: Joi.string().allow(""),

      size: Joi.number(),

      cdn: OrderModel.URL(),

      file_path: Joi.string().allow(""),

      upload: OrderModel.FileUploadResponse(),

      operation: Joi.string().allow(""),

      method: Joi.string().allow(""),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      type: Joi.string().allow(""),

      current: Joi.number(),

      total: Joi.number(),

      has_previous: Joi.boolean(),

      size: Joi.number(),

      has_next: Joi.boolean(),
    });
  }

  static bulkListingData() {
    return Joi.object({
      status: Joi.string().allow(""),

      store_id: Joi.number(),

      uploaded_on: Joi.string().allow(""),

      batch_id: Joi.string().allow(""),

      successful: Joi.number(),

      id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      failed: Joi.number(),

      failed_shipments: Joi.array().items(Joi.any()),

      company_id: Joi.number(),

      store_code: Joi.string().allow(""),

      user_name: Joi.string().allow(""),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      processing: Joi.number(),

      store_name: Joi.string().allow(""),

      successful_shipments: Joi.array().items(Joi.any()),

      total: Joi.number(),

      excel_url: Joi.string().allow(""),

      file_name: Joi.string().allow(""),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      error: Joi.string().allow(""),

      success: Joi.boolean(),

      page: OrderModel.BulkListingPage(),

      data: Joi.array().items(OrderModel.bulkListingData()),
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

      display_name: Joi.string().allow(""),

      qc_type: Joi.array().items(Joi.string().allow("")),
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

      batch_id: Joi.string().allow(""),

      total_shipments_count: Joi.number(),

      processing_shipments_count: Joi.number(),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.string().allow(""),

      failed_shipments_count: Joi.number(),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      error: Joi.array().items(Joi.string().allow("")),

      status: Joi.boolean(),

      success: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      uploaded_by: Joi.string().allow(""),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      failed_records: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      is_returnable: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static Brand() {
    return Joi.object({
      brand_id: Joi.number().required(),

      credit_note_allowed: Joi.boolean(),

      pickup_location: Joi.string().allow("").allow(null),

      is_virtual_invoice: Joi.boolean().allow(null),

      invoice_prefix: Joi.string().allow("").allow(null),

      logo: Joi.string().allow(""),

      start_date: Joi.string().allow("").allow(null),

      modified_on: Joi.number(),

      brand_name: Joi.string().allow("").required(),

      company: Joi.string().allow("").required(),

      script_last_ran: Joi.string().allow("").allow(null),

      credit_note_expiry_days: Joi.number().allow(null),

      created_on: Joi.number(),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      igst_gst_fee: Joi.string().allow("").required(),

      sgst_tax_percentage: Joi.number().required(),

      gst_fee: Joi.number().required(),

      value_of_good: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      igst_tax_percentage: Joi.number().required(),

      cgst_tax_percentage: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      gstin_code: Joi.string().allow("").allow(null),

      hsn_code: Joi.string().allow("").required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      is_default_hsn_code: Joi.boolean(),

      brand_calculated_amount: Joi.number().required(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      total_gst_percentage: Joi.number(),

      item_base_price: Joi.number(),

      po_line_amount: Joi.number(),

      po_tax_amount: Joi.number(),

      docker_number: Joi.string().allow(""),

      partial_can_ret: Joi.boolean(),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }

  static Document() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      ds_type: Joi.string().allow("").required(),

      legal_name: Joi.string().allow("").required(),

      verified: Joi.boolean().required(),
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
      username: Joi.string().allow(""),

      user: Joi.string().allow(""),

      password: Joi.string().allow(""),

      enabled: Joi.boolean().required(),
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

      user: Joi.string().allow(""),

      password: Joi.string().allow(""),
    });
  }

  static StoreMeta() {
    return Joi.object({
      display_name: Joi.string().allow("").required(),

      documents: OrderModel.StoreDocuments(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      gst_number: Joi.string().allow(""),

      ewaybill_portal_details: Joi.any(),

      product_return_config: Joi.any(),

      additional_contact_details: Joi.any(),

      stage: Joi.string().allow("").required(),

      timing: Joi.array().items(Joi.any()),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),
    });
  }

  static StoreAddress() {
    return Joi.object({
      address_type: Joi.string().allow("").required(),

      address_category: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      version: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      country: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      updated_at: Joi.string().allow("").required(),

      phone: Joi.string().allow("").allow(null).required(),

      area: Joi.string().allow(""),

      email: Joi.string().allow(""),

      contact_person: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),
    });
  }

  static Store() {
    return Joi.object({
      store_active_from: Joi.string().allow("").allow(null),

      store_email: Joi.string().allow("").required(),

      order_integration_id: Joi.string().allow(""),

      company_id: Joi.number().required(),

      vat_no: Joi.string().allow("").allow(null),

      location_type: Joi.string().allow("").required(),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      state: Joi.string().allow("").required(),

      parent_store_id: Joi.number(),

      pincode: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      meta: OrderModel.StoreMeta().required(),

      created_at: Joi.string().allow("").required(),

      login_username: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      country: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      packaging_material_count: Joi.number(),

      brand_id: Joi.any(),

      code: Joi.string().allow(""),

      latitude: Joi.number().required(),

      store_address_json: OrderModel.StoreAddress(),

      updated_at: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      alohomora_user_id: Joi.number(),

      mall_name: Joi.string().allow("").allow(null),

      is_archived: Joi.boolean(),

      contact_person: Joi.string().allow("").required(),

      mall_area: Joi.string().allow("").allow(null),

      is_enabled_for_recon: Joi.boolean(),

      s_id: Joi.string().allow("").required(),

      is_active: Joi.boolean(),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      time: Joi.number(),

      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),
    });
  }

  static Weight() {
    return Joi.object({
      shipping: Joi.number(),

      unit: Joi.string().allow(""),

      is_default: Joi.boolean(),
    });
  }

  static Article() {
    return Joi.object({
      _id: Joi.string().allow("").required(),

      return_config: OrderModel.ReturnConfig(),

      code: Joi.string().allow(""),

      uid: Joi.string().allow("").required(),

      a_set: Joi.any().allow(null),

      child_details: Joi.any().allow(null),

      size: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      dimensions: OrderModel.Dimensions(),

      weight: OrderModel.Weight(),

      raw_meta: Joi.any(),

      identifiers: OrderModel.Identifier().required(),

      is_set: Joi.boolean(),

      esp_modified: Joi.any(),
    });
  }

  static Dates() {
    return Joi.object({
      delivery_date: Joi.any(),

      order_created: Joi.string().allow(""),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static Attributes() {
    return Joi.object({
      primary_color: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      primary_material: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      essential: Joi.string().allow(""),

      name: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      l2_category: Joi.array().items(Joi.string().allow("")),

      brand: Joi.string().allow("").required(),

      size: Joi.string().allow("").required(),

      can_cancel: Joi.boolean(),

      can_return: Joi.boolean(),

      attributes: OrderModel.Attributes().required(),

      meta: Joi.any(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      slug_key: Joi.string().allow("").required(),

      l3_category: Joi.number(),

      l2_category_id: Joi.number(),

      department_id: Joi.number(),

      image: Joi.array().items(Joi.string().allow("")).required(),

      last_updated_at: Joi.string().allow(""),

      brand_id: Joi.number().required(),

      color: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      branch_url: Joi.string().allow("").allow(null),

      webstore_product_url: Joi.string().allow("").allow(null),

      gender: Joi.string().allow("").allow(null),

      l3_category_name: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      l1_category_id: Joi.number(),

      item_id: Joi.number().required(),
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

  static BagDetailsPlatformResponse() {
    return Joi.object({
      status: OrderModel.BagReturnableCancelableStatus().required(),

      prices: OrderModel.Prices().required(),

      brand: OrderModel.Brand().required(),

      reasons: Joi.array().items(Joi.any()),

      order_integration_id: Joi.string().allow("").allow(null),

      affiliate_details: OrderModel.AffiliateDetails(),

      seller_identifier: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      bag_update_time: Joi.number(),

      display_name: Joi.string().allow(""),

      gst_details: OrderModel.BagGSTDetails().required(),

      line_number: Joi.number(),

      meta: OrderModel.BagMeta(),

      current_status: OrderModel.BagStatusHistory().required(),

      ordering_store: OrderModel.Store(),

      restore_promos: Joi.any(),

      b_type: Joi.string().allow(""),

      operational_status: Joi.string().allow(""),

      article: OrderModel.Article().required(),

      restore_coupon: Joi.boolean(),

      dates: OrderModel.Dates(),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      parent_promo_bags: Joi.any(),

      qc_required: Joi.any(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      article_details: OrderModel.ArticleDetails(),

      journey_type: Joi.string().allow("").required(),

      shipment_id: Joi.string().allow(""),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      item: OrderModel.Item().required(),

      entity_type: Joi.string().allow(""),

      original_bag_list: Joi.array().items(Joi.number()),

      quantity: Joi.number(),

      applied_promos: Joi.array().items(Joi.any()),

      b_id: Joi.number().required(),

      no_of_bags_order: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      bag_status_history: OrderModel.BagStatusHistory(),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),
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

      current: Joi.number().required(),

      size: Joi.number().required(),

      has_next: Joi.boolean().required(),

      page_type: Joi.string().allow("").required(),
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
      store_id: Joi.number().required(),

      mongo_article_id: Joi.string().allow("").allow(null),

      reason_ids: Joi.array().items(Joi.number()),

      set_id: Joi.string().allow("").allow(null),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      affiliate_id: Joi.string().allow("").allow(null),

      fynd_order_id: Joi.string().allow("").allow(null),

      item_id: Joi.string().allow("").allow(null),

      affiliate_order_id: Joi.string().allow("").allow(null),

      bag_id: Joi.number().allow(null),
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

      affiliate_bag_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static UpdateShipmentLockPayload() {
    return Joi.object({
      action_type: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

      entity_type: Joi.string().allow("").required(),

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
      bag_id: Joi.number(),

      is_locked: Joi.boolean(),

      affiliate_bag_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),
    });
  }

  static CheckResponse() {
    return Joi.object({
      is_shipment_locked: Joi.boolean(),

      original_filter: OrderModel.OriginalFilter(),

      shipment_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      lock_status: Joi.boolean().allow(null),

      affiliate_id: Joi.string().allow(""),

      is_bag_locked: Joi.boolean(),

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
      company_id: Joi.number(),

      from_datetime: Joi.string().allow(""),

      platform_id: Joi.string().allow(""),

      platform_name: Joi.string().allow(""),

      logo_url: Joi.string().allow(""),

      description: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      title: Joi.string().allow(""),

      id: Joi.number().required(),

      to_datetime: Joi.string().allow(""),
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
      identifier: Joi.string().allow(""),

      line_number: Joi.number(),

      quantity: Joi.number(),
    });
  }

  static ProductsReasonsFilters() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      line_number: Joi.number(),

      quantity: Joi.number(),
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
      identifier: Joi.string().allow("").required(),

      products: Joi.array().items(OrderModel.Products()),

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
      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      force_transition: Joi.boolean(),

      task: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      stack_trace: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      status: Joi.number(),

      message: Joi.string().allow(""),

      final_state: Joi.any(),

      exception: Joi.string().allow(""),

      code: Joi.string().allow(""),

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

  static AffiliateStoreIdMapping() {
    return Joi.object({
      marketplace_store_id: Joi.string().allow("").required(),

      store_id: Joi.number().required(),
    });
  }

  static AffiliateInventoryLogisticsConfig() {
    return Joi.object({
      dp_assignment: Joi.boolean(),
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

  static AffiliateInventoryOrderConfig() {
    return Joi.object({
      force_reassignment: Joi.boolean(),
    });
  }

  static AffiliateInventoryPaymentConfig() {
    return Joi.object({
      mode_of_payment: Joi.string().allow(""),

      source: Joi.string().allow(""),
    });
  }

  static AffiliateInventoryConfig() {
    return Joi.object({
      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),

      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

      inventory: OrderModel.AffiliateInventoryStoreConfig(),

      order: OrderModel.AffiliateInventoryOrderConfig(),

      payment: OrderModel.AffiliateInventoryPaymentConfig(),
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

      token: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      created_at: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      owner: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),
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

      token: Joi.string().allow("").required(),

      config: OrderModel.AffiliateConfig(),
    });
  }

  static OrderConfig() {
    return Joi.object({
      create_user: Joi.boolean(),

      bag_end_state: Joi.string().allow(""),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      store_lookup: Joi.string().allow(""),

      affiliate: OrderModel.Affiliate().required(),

      article_lookup: Joi.string().allow(""),
    });
  }

  static OrderUser() {
    return Joi.object({
      first_name: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      address1: Joi.string().allow("").allow(null),

      last_name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      email: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address2: Joi.string().allow("").allow(null),
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
      fulfilment_priority_text: Joi.string().allow(""),

      fulfilment_priority: Joi.number().allow(null),

      affiliate_priority_code: Joi.string().allow("").allow(null),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      brand_id: Joi.number().required(),

      attributes: Joi.any().required(),

      weight: Joi.any().required(),

      category: Joi.any().required(),

      _id: Joi.string().allow("").required(),

      dimension: Joi.any().required(),

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

      meta: Joi.any(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      fulfillment_id: Joi.number().required(),

      box_type: Joi.string().allow("").allow(null),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      journey: Joi.string().allow("").required(),

      identifier: Joi.string().allow("").required(),

      location_details: OrderModel.LocationDetails(),

      source: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      payment_mode: Joi.string().allow("").required(),
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
      company_id: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      sku: Joi.string().allow("").required(),

      affiliate_meta: Joi.any().required(),

      delivery_charge: Joi.number().required(),

      unit_price: Joi.number().required(),

      fynd_store_id: Joi.string().allow("").required(),

      price_marked: Joi.number().required(),

      seller_identifier: Joi.string().allow("").required(),

      item_size: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      _id: Joi.string().allow("").required(),

      price_effective: Joi.number().required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      affiliate_store_id: Joi.string().allow("").required(),

      transfer_price: Joi.number().required(),

      store_id: Joi.number().required(),

      identifier: Joi.any().required(),

      avl_qty: Joi.number().required(),

      amount_paid: Joi.number().required(),

      modified_on: Joi.string().allow("").required(),

      discount: Joi.number().required(),

      quantity: Joi.number().required(),
    });
  }

  static OrderInfo() {
    return Joi.object({
      affiliate_order_id: Joi.string().allow(""),

      items: Joi.any().required(),

      billing_address: OrderModel.OrderUser().required(),

      order_value: Joi.number().required(),

      user: OrderModel.UserData().required(),

      delivery_charges: Joi.number().required(),

      cod_charges: Joi.number().required(),

      coupon: Joi.string().allow("").allow(null),

      discount: Joi.number().required(),

      shipping_address: OrderModel.OrderUser().required(),

      order_priority: OrderModel.OrderPriority(),

      shipment: OrderModel.ShipmentData(),

      payment_mode: Joi.string().allow("").required(),

      payment: Joi.any(),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),
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
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static ActionInfo() {
    return Joi.object({
      id: Joi.number().required(),

      slug: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

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
      ticket_id: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      l1_detail: Joi.string().allow(""),

      user: Joi.string().allow("").required(),

      l2_detail: Joi.string().allow(""),

      message: Joi.string().allow("").required(),

      createdat: Joi.string().allow("").required(),

      bag_id: Joi.number(),

      l3_detail: Joi.string().allow(""),

      ticket_url: Joi.string().allow(""),
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

  static PostHistoryFilters() {
    return Joi.object({
      shipment_id: Joi.string().allow("").required(),

      line_number: Joi.string().allow(""),

      identifier: Joi.string().allow(""),
    });
  }

  static PostHistoryData() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      user_name: Joi.string().allow("").required(),
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

  static SmsDataPayload() {
    return Joi.object({
      brand_name: Joi.string().allow("").required(),

      customer_name: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      shipment_id: Joi.number().required(),

      order_id: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      phone_number: Joi.number().required(),

      amount_paid: Joi.number().required(),

      payment_mode: Joi.string().allow("").required(),
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
      fynd_order_id: Joi.string().allow(""),

      created_at: Joi.string().allow(""),
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
      bag_list: Joi.array().items(Joi.number()),

      shipment_id: Joi.string().allow(""),

      id: Joi.number().required(),

      status: Joi.string().allow(""),

      remarks: Joi.string().allow(""),

      meta: OrderModel.Meta1().required(),
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
      shipment_ids: Joi.array().items(Joi.string().allow("")),

      order_type: Joi.string().allow("").required(),

      dp_id: Joi.number().required(),

      qc_required: Joi.string().allow("").required(),
    });
  }

  static ManualAssignDPToShipmentResponse() {
    return Joi.object({
      errors: Joi.array().items(Joi.string().allow("")),

      success: Joi.string().allow("").required(),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      customer_pickup_slot: Joi.any(),

      dispatch_after_date: Joi.string().allow(""),

      dp_pickup_slot: Joi.any(),

      pack_by_date: Joi.string().allow(""),

      dispatch_by_date: Joi.string().allow(""),

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
      type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      amount: Joi.any().required(),

      code: Joi.string().allow(""),

      tax: OrderModel.Tax(),
    });
  }

  static LineItem() {
    return Joi.object({
      charges: Joi.array().items(OrderModel.Charge()),

      custom_messasge: Joi.string().allow(""),

      external_line_id: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),

      meta: Joi.any(),

      quantity: Joi.number(),
    });
  }

  static Shipment() {
    return Joi.object({
      external_shipment_id: Joi.string().allow(""),

      meta: Joi.any(),

      processing_dates: OrderModel.ProcessingDates(),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),

      location_id: Joi.number().required(),

      priority: Joi.number(),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      customer_code: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      shipping_type: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      primary_email: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      slot: Joi.array().items(Joi.any()),

      address1: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      geo_location: Joi.any(),

      primary_mobile_number: Joi.string().allow("").required(),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      refund_by: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      collect_by: Joi.string().allow("").required(),

      mode: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      meta: Joi.any(),

      transaction_data: Joi.any(),
    });
  }

  static PaymentInfo() {
    return Joi.object({
      payment_methods: Joi.array().items(OrderModel.PaymentMethod()),

      primary_mode: Joi.string().allow("").required(),
    });
  }

  static BillingInfo() {
    return Joi.object({
      customer_code: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      primary_email: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),
    });
  }

  static TaxInfo() {
    return Joi.object({
      gstin: Joi.string().allow(""),

      b2b_gstin_number: Joi.string().allow(""),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      shipping_info: OrderModel.ShippingInfo().required(),

      payment_info: OrderModel.PaymentInfo().required(),

      billing_info: OrderModel.BillingInfo().required(),

      charges: Joi.array().items(OrderModel.Charge()),

      external_creation_date: Joi.string().allow(""),

      external_order_id: Joi.string().allow(""),

      meta: Joi.any(),

      tax_info: OrderModel.TaxInfo(),

      currency_info: Joi.any(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      stack_trace: Joi.string().allow("").allow(null),

      status: Joi.number().required(),

      message: Joi.string().allow("").required(),

      exception: Joi.string().allow("").allow(null),

      request_id: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      meta: Joi.string().allow("").allow(null),

      info: Joi.any(),
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
      payment_methods: Joi.array().items(OrderModel.PaymentMethods()),

      mode_of_payment: Joi.string().allow(""),

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

      logo_url: Joi.any(),

      location_reassignment: Joi.boolean(),

      lock_states: Joi.array().items(Joi.string().allow("")),

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
      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),

      mobile: Joi.number().required(),

      start_date: Joi.string().allow("").required(),

      end_date: Joi.string().allow("").required(),
    });
  }
}
module.exports = OrderModel;
