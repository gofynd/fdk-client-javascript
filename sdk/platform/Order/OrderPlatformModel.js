const Joi = require("joi");

class OrderModel {
  static ShipmentStatus() {
    return Joi.object({
      hex_code: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      mobile: Joi.string().allow(""),

      email: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      uid: Joi.number(),

      avis_user_id: Joi.string().allow(""),

      last_name: Joi.string().allow(""),
    });
  }

  static PaymentModeInfo() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      gst_fee: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      value_of_good: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),
    });
  }

  static Prices() {
    return Joi.object({
      cod_charges: Joi.number(),

      fynd_credits: Joi.number(),

      refund_amount: Joi.number(),

      transfer_price: Joi.number(),

      cashback: Joi.number(),

      refund_credit: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      price_marked: Joi.number(),

      tax_collected_at_source: Joi.number(),

      discount: Joi.number(),

      promotion_effective_discount: Joi.number(),

      value_of_good: Joi.number(),

      price_effective: Joi.number(),

      delivery_charge: Joi.number(),

      coupon_value: Joi.number(),

      cashback_applied: Joi.number(),

      amount_paid: Joi.number(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      size: Joi.string().allow(""),

      name: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      images: Joi.array().items(Joi.string().allow("")),

      l3_category_name: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")),

      l1_category: Joi.array().items(Joi.string().allow("")),

      l3_category: Joi.number(),

      id: Joi.number(),

      department_id: Joi.number(),

      can_return: Joi.boolean(),

      code: Joi.string().allow(""),

      color: Joi.string().allow("").allow(null),
    });
  }

  static BagUnit() {
    return Joi.object({
      total_shipment_bags: Joi.number().required(),

      can_cancel: Joi.boolean(),

      ordering_channel: Joi.string().allow("").required(),

      status: Joi.any().required(),

      item_quantity: Joi.number().required(),

      gst: OrderModel.GSTDetailsData(),

      bag_id: Joi.number().required(),

      shipment_id: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),

      can_return: Joi.boolean(),

      item: OrderModel.PlatformItem(),
    });
  }

  static ShipmentItemFulFillingStore() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      shipment_status: OrderModel.ShipmentStatus(),

      user: OrderModel.UserDataInfo(),

      application: Joi.any(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      created_at: Joi.string().allow("").required(),

      total_shipments_in_order: Joi.number().required(),

      sla: Joi.any(),

      fulfilling_centre: Joi.string().allow("").required(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      id: Joi.string().allow("").required(),

      shipment_id: Joi.string().allow(""),

      channel: Joi.any(),

      prices: OrderModel.Prices(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      total_bags_count: Joi.number().required(),

      payment_methods: Joi.any(),

      shipment_created_at: Joi.string().allow("").required(),
    });
  }

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

      text: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.FilterInfoOption()),

      type: Joi.string().allow("").required(),
    });
  }

  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      page: Joi.any(),

      items: Joi.array().items(OrderModel.ShipmentItem()),

      filters: Joi.array().items(OrderModel.FiltersInfo()),

      applied_filters: Joi.any(),
    });
  }

  static Error() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static InvoiceInfo() {
    return Joi.object({
      invoice_url: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),

      label_url: Joi.string().allow(""),

      credit_note_id: Joi.string().allow(""),

      store_invoice_id: Joi.string().allow(""),
    });
  }

  static Dimensions() {
    return Joi.object({
      is_default: Joi.boolean(),

      length: Joi.number(),

      unit: Joi.string().allow(""),

      width: Joi.number(),

      height: Joi.number(),
    });
  }

  static Meta() {
    return Joi.object({
      dimension: OrderModel.Dimensions(),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      phone: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),
    });
  }

  static TrackingList() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      time: Joi.string().allow(""),

      is_passed: Joi.boolean(),

      text: Joi.string().allow("").required(),

      is_current: Joi.boolean(),
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
      name: Joi.string().allow(""),

      eway_bill_id: Joi.string().allow("").allow(null),

      id: Joi.number(),

      track_url: Joi.string().allow("").allow(null),

      awb_no: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      country: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      order_value: Joi.string().allow(""),

      order_date: Joi.string().allow(""),

      source: Joi.string().allow(""),

      ordering_channel: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),

      tax_details: Joi.any(),

      cod_charges: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow("").required(),

      affiliate_id: Joi.string().allow(""),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      quantity: Joi.number(),

      channel_shipment_id: Joi.string().allow("").allow(null),

      box_type: Joi.string().allow("").allow(null),

      size_level_total_qty: Joi.number().allow(null),

      loyalty_discount: Joi.number(),

      due_date: Joi.string().allow("").allow(null),

      channel_order_id: Joi.string().allow("").allow(null),

      coupon_code: Joi.string().allow("").allow(null),

      employee_discount: Joi.number(),

      is_priority: Joi.boolean(),

      order_item_id: Joi.string().allow(""),
    });
  }

  static PDFLinks() {
    return Joi.object({
      invoice: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      label: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      credit_note_url: Joi.string().allow(""),

      b2b: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      delivery_challan_a4: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),
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
      mto: Joi.boolean(),

      lock_message: Joi.string().allow(""),

      locked: Joi.boolean(),
    });
  }

  static DebugInfo() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow(""),
    });
  }

  static ShipmentTimeStamp() {
    return Joi.object({
      t_max: Joi.string().allow(""),

      t_min: Joi.string().allow(""),
    });
  }

  static EInvoice() {
    return Joi.object({
      acknowledge_date: Joi.string().allow(""),

      acknowledge_no: Joi.number(),

      error_code: Joi.string().allow(""),

      irn: Joi.string().allow(""),

      signed_qr_code: Joi.string().allow(""),

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

  static BuyerDetails() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address: Joi.string().allow("").allow(null).required(),

      pincode: Joi.number().required(),

      state: Joi.string().allow("").required(),

      gstin: Joi.string().allow("").required(),

      ajio_site_id: Joi.string().allow(""),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      weight: Joi.number().required(),

      formatted: OrderModel.Formatted(),

      packaging_name: Joi.string().allow(""),

      return_store_node: Joi.number(),

      lock_data: OrderModel.LockData(),

      dp_options: Joi.any(),

      dp_id: Joi.string().allow("").allow(null),

      due_date: Joi.string().allow(""),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      same_store_available: Joi.boolean().required(),

      ewaybill_info: Joi.any().allow(null),

      order_type: Joi.string().allow("").allow(null),

      shipment_weight: Joi.number(),

      assign_dp_from_sb: Joi.boolean(),

      awb_number: Joi.string().allow(""),

      store_invoice_updated_date: Joi.string().allow(""),

      dp_name: Joi.string().allow(""),

      debug_info: OrderModel.DebugInfo(),

      shipment_volumetric_weight: Joi.number(),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      external: Joi.any(),

      timestamp: OrderModel.ShipmentTimeStamp(),

      marketplace_store_id: Joi.string().allow(""),

      einvoice_info: OrderModel.EinvoiceInfo(),

      return_affiliate_shipment_id: Joi.string().allow(""),

      dp_sort_key: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      po_number: Joi.string().allow(""),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      return_details: Joi.any(),

      return_affiliate_order_id: Joi.string().allow(""),

      bag_weight: Joi.any(),

      b2c_buyer_details: Joi.any().allow(null),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      forward_affiliate_order_id: Joi.string().allow(""),

      return_awb_number: Joi.string().allow(""),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      company_affiliate_tag: Joi.string().allow(""),

      ad_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      affiliate_store_id: Joi.string().allow("").required(),

      pdf_links: OrderModel.PDFLinks(),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      affiliate_id: Joi.string().allow(""),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      store_name: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      contact_person: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      id: Joi.number().required(),

      address: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      journey_type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      app_state_name: Joi.string().allow(""),

      app_display_name: Joi.string().allow(""),

      notify_customer: Joi.boolean(),

      is_active: Joi.boolean(),

      display_name: Joi.string().allow("").required(),

      bs_id: Joi.number().required(),

      app_facing: Joi.boolean(),

      state_type: Joi.string().allow("").required(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      app_display_name: Joi.string().allow(""),

      bag_state_mapper: OrderModel.BagStateMapper(),

      bsh_id: Joi.number(),

      status: Joi.string().allow("").required(),

      display_name: Joi.string().allow(""),

      bag_id: Joi.number(),

      shipment_id: Joi.string().allow(""),

      store_id: Joi.number(),

      delivery_awb_number: Joi.string().allow("").allow(null),

      forward: Joi.boolean().allow(null),

      delivery_partner_id: Joi.number().allow(null),

      state_type: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      state_id: Joi.number(),

      reasons: Joi.array().items(Joi.any()),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      phone: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      contact_person: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      ordering_store_id: Joi.number().required(),

      address: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      created_at: Joi.string().allow("").allow(null),

      status: Joi.string().allow(""),

      id: Joi.number(),

      bag_list: Joi.array().items(Joi.string().allow("")),

      shipment_id: Joi.string().allow(""),
    });
  }

  static BagGST() {
    return Joi.object({
      is_default_hsn_code: Joi.boolean(),

      gst_tag: Joi.string().allow(""),

      gst_fee: Joi.number(),

      brand_calculated_amount: Joi.number(),

      gst_tax_percentage: Joi.number(),

      value_of_good: Joi.number(),

      gstin_code: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      phone: Joi.string().allow(""),

      latitude: Joi.number(),

      updated_at: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      city: Joi.string().allow(""),

      longitude: Joi.number(),

      contact_person: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      email: Joi.string().allow(""),

      version: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      area: Joi.string().allow(""),

      country: Joi.string().allow(""),
    });
  }

  static BagConfigs() {
    return Joi.object({
      enable_tracking: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      created_at: Joi.string().allow("").allow(null),

      bag_state_mapper: OrderModel.BagStateMapper(),

      status: Joi.string().allow(""),

      bag_id: Joi.number(),

      delivery_awb_number: Joi.string().allow(""),

      store_id: Joi.number(),

      shipment_id: Joi.string().allow(""),

      delivery_partner_id: Joi.number(),

      state_type: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      state_id: Joi.number(),

      current_status_id: Joi.number().required(),
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

      identifiers: OrderModel.Identifier().required(),

      tax_collected_at_source: Joi.number(),

      discount: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      price_effective: Joi.number().required(),

      value_of_good: Joi.number().required(),

      cod_charges: Joi.number().required(),

      transfer_price: Joi.number().required(),

      amount_paid: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      amount_paid_roundoff: Joi.number(),

      price_marked: Joi.number().required(),

      fynd_credits: Joi.number().required(),

      cashback: Joi.number().required(),

      coupon_value: Joi.number().required(),

      promotion_effective_discount: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      refund_credit: Joi.number().required(),

      gst_fee: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      brand_calculated_amount: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      gst_tax_percentage: Joi.number().required(),

      total_units: Joi.number().required(),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      created_on: Joi.string().allow("").required(),

      company: Joi.string().allow("").allow(null).required(),

      brand_name: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      id: Joi.number().required(),
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

  static DiscountRules() {
    return Joi.object({
      value: Joi.number(),

      type: Joi.string().allow(""),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      promo_id: Joi.string().allow(""),

      article_quantity: Joi.number(),

      promotion_name: Joi.string().allow(""),

      amount: Joi.number(),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      promotion_type: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      uid: Joi.string().allow(""),

      identifiers: Joi.any(),

      return_config: Joi.any(),
    });
  }

  static OrderBags() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      line_number: Joi.number(),

      display_name: Joi.string().allow(""),

      bag_id: Joi.number().required(),

      gst_details: OrderModel.BagGST(),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      can_cancel: Joi.boolean(),

      bag_configs: OrderModel.BagConfigs(),

      prices: OrderModel.Prices(),

      item: OrderModel.PlatformItem(),

      seller_identifier: Joi.string().allow(""),

      quantity: Joi.number(),

      parent_promo_bags: Joi.any(),

      current_status: OrderModel.CurrentStatus(),

      financial_breakup: OrderModel.FinancialBreakup(),

      brand: OrderModel.OrderBrandName(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      entity_type: Joi.string().allow(""),

      can_return: Joi.boolean(),

      article: OrderModel.OrderBagArticle(),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      invoice: OrderModel.InvoiceInfo(),

      meta: OrderModel.Meta(),

      billing_details: OrderModel.UserDetailsData(),

      platform_logo: Joi.string().allow(""),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      forward_shipment_id: Joi.string().allow(""),

      payments: OrderModel.ShipmentPayments(),

      gst_details: OrderModel.GSTDetailsData(),

      dp_details: OrderModel.DPDetailsData(),

      priority_text: Joi.string().allow("").allow(null),

      enable_dp_tracking: Joi.boolean(),

      payment_methods: Joi.any(),

      journey_type: Joi.string().allow(""),

      order: OrderModel.OrderDetailsData(),

      delivery_details: OrderModel.UserDetailsData(),

      vertical: Joi.string().allow("").allow(null),

      total_items: Joi.number(),

      shipment_quantity: Joi.number(),

      invoice_id: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),

      coupon: Joi.any(),

      prices: OrderModel.Prices(),

      total_bags: Joi.number(),

      fulfilment_priority: Joi.number(),

      affiliate_details: OrderModel.AffiliateDetails(),

      payment_mode: Joi.string().allow(""),

      delivery_slot: Joi.any(),

      picked_date: Joi.string().allow(""),

      user_agent: Joi.string().allow(""),

      fulfilling_store: OrderModel.FulfillingStore(),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      shipment_status: Joi.string().allow(""),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      ordering_store: OrderModel.OrderingStoreDetails(),

      status: OrderModel.ShipmentStatusData(),

      bags: Joi.array().items(OrderModel.OrderBags()),

      custom_meta: Joi.array().items(Joi.any()),

      operational_status: Joi.string().allow(""),

      lock_status: Joi.boolean(),

      packaging_type: Joi.string().allow(""),
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
      order_type: Joi.string().allow(""),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      currency_symbol: Joi.string().allow(""),

      order_tags: Joi.array().items(Joi.any()),

      ordering_store: Joi.number(),

      mongo_cart_id: Joi.number(),

      order_platform: Joi.string().allow(""),

      customer_note: Joi.string().allow(""),

      employee_id: Joi.number(),

      staff: Joi.any(),

      comment: Joi.string().allow(""),

      files: Joi.array().items(Joi.any()),

      extra_meta: Joi.any(),

      cart_id: Joi.number(),

      payment_type: Joi.string().allow(""),
    });
  }

  static OrderDict() {
    return Joi.object({
      order_date: Joi.string().allow("").required(),

      meta: OrderModel.OrderMeta(),

      prices: OrderModel.Prices(),

      tax_details: Joi.any(),

      payment_methods: Joi.any(),

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

      value: Joi.string().allow(""),

      index: Joi.number(),

      text: Joi.string().allow(""),
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

  static PlatformBreakupValues() {
    return Joi.object({
      value: Joi.string().allow(""),

      name: Joi.string().allow(""),

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
      total_order_value: Joi.number(),

      meta: Joi.any(),

      user_info: OrderModel.UserDataInfo(),

      payment_mode: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      channel: OrderModel.PlatformChannel(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      order_value: Joi.number(),

      order_created_time: Joi.string().allow(""),

      order_id: Joi.string().allow(""),
    });
  }

  static OrderListingResponse() {
    return Joi.object({
      page: OrderModel.Page(),

      lane: Joi.string().allow(""),

      items: Joi.array().items(OrderModel.PlatformOrderItems()),

      success: Joi.boolean(),

      total_count: Joi.number(),

      message: Joi.string().allow(""),
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
      text: Joi.string().allow("").required(),

      value: Joi.number().required(),

      options: Joi.array().items(OrderModel.Options()),

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
      last_location_recieved_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      reason: Joi.string().allow(""),
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
      report_created_at: Joi.string().allow("").allow(null),

      report_name: Joi.string().allow(""),

      s3_key: Joi.string().allow(""),

      request_details: Joi.any(),

      status: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),

      report_id: Joi.string().allow(""),

      report_type: Joi.string().allow(""),

      display_name: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      item_id: Joi.string().allow(""),

      jio_code: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

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

      value: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

      success: Joi.boolean(),

      data: Joi.array().items(Joi.any()),

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
      batch_id: Joi.string().allow("").required(),

      store_name: Joi.string().allow(""),

      invoice: Joi.any(),

      label: Joi.any(),

      do_invoice_label_generated: Joi.boolean().required(),

      invoice_status: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      store_id: Joi.string().allow(""),

      data: Joi.any(),

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
      size: Joi.number(),

      operation: Joi.string().allow(""),

      method: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      content_type: Joi.string().allow(""),

      upload: OrderModel.FileUploadResponse(),

      cdn: OrderModel.URL(),

      file_name: Joi.string().allow(""),

      namespace: Joi.string().allow(""),

      file_path: Joi.string().allow(""),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      size: Joi.number(),

      type: Joi.string().allow(""),

      current: Joi.number(),

      has_next: Joi.boolean(),

      total: Joi.number(),

      has_previous: Joi.boolean(),
    });
  }

  static bulkListingData() {
    return Joi.object({
      id: Joi.string().allow(""),

      failed: Joi.number(),

      successful_shipments: Joi.array().items(Joi.any()),

      failed_shipments: Joi.array().items(Joi.any()),

      user_name: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      company_id: Joi.number(),

      store_name: Joi.string().allow(""),

      batch_id: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      total: Joi.number(),

      processing: Joi.number(),

      successful: Joi.number(),

      status: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      excel_url: Joi.string().allow(""),

      store_id: Joi.number(),

      user_id: Joi.string().allow(""),
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

  static QuestionSet() {
    return Joi.object({
      id: Joi.number(),

      display_name: Joi.string().allow(""),
    });
  }

  static Reason() {
    return Joi.object({
      question_set: Joi.array().items(OrderModel.QuestionSet()),

      qc_type: Joi.array().items(Joi.string().allow("")),

      id: Joi.number(),

      display_name: Joi.string().allow(""),
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
      batch_id: Joi.string().allow(""),

      processing_shipments_count: Joi.number(),

      failed_shipments_count: Joi.number(),

      successful_shipments_count: Joi.number(),

      company_id: Joi.string().allow(""),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      total_shipments_count: Joi.number(),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      status: Joi.boolean(),

      error: Joi.array().items(Joi.string().allow("")),

      uploaded_on: Joi.string().allow(""),

      success: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      message: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uploaded_by: Joi.string().allow(""),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      item_base_price: Joi.number(),

      total_gst_percentage: Joi.number(),

      po_line_amount: Joi.number(),

      partial_can_ret: Joi.boolean(),

      po_tax_amount: Joi.number(),

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
      igst_gst_fee: Joi.string().allow("").required(),

      is_default_hsn_code: Joi.boolean(),

      gst_tag: Joi.string().allow("").required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      gst_fee: Joi.number().required(),

      sgst_tax_percentage: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      value_of_good: Joi.number().required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow("").required(),

      cgst_tax_percentage: Joi.number().required(),

      gstin_code: Joi.string().allow("").allow(null),

      igst_tax_percentage: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),
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
      primary_material: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      name: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      essential: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      marketer_name: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      size: Joi.string().allow("").required(),

      branch_url: Joi.string().allow("").allow(null),

      l2_category: Joi.array().items(Joi.string().allow("")),

      meta: Joi.any(),

      brand_id: Joi.number().required(),

      webstore_product_url: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").required(),

      can_cancel: Joi.boolean(),

      l3_category_name: Joi.string().allow(""),

      l1_category: Joi.array().items(Joi.string().allow("")),

      l2_category_id: Joi.number(),

      color: Joi.string().allow("").allow(null),

      item_id: Joi.number().required(),

      l3_category: Joi.number(),

      slug_key: Joi.string().allow("").required(),

      gender: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      l1_category_id: Joi.number(),

      brand: Joi.string().allow("").required(),

      image: Joi.array().items(Joi.string().allow("")).required(),

      attributes: OrderModel.Attributes().required(),

      last_updated_at: Joi.string().allow(""),

      department_id: Joi.number(),

      can_return: Joi.boolean(),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      loyalty_discount: Joi.number(),

      employee_discount: Joi.number(),
    });
  }

  static Brand() {
    return Joi.object({
      created_on: Joi.number(),

      invoice_prefix: Joi.string().allow("").allow(null),

      company: Joi.string().allow("").required(),

      brand_id: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      start_date: Joi.string().allow("").allow(null),

      modified_on: Joi.number(),

      script_last_ran: Joi.string().allow("").allow(null),

      pickup_location: Joi.string().allow("").allow(null),

      is_virtual_invoice: Joi.boolean().allow(null),

      credit_note_expiry_days: Joi.number().allow(null),

      credit_note_allowed: Joi.boolean(),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      enable_tracking: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),
    });
  }

  static Document() {
    return Joi.object({
      url: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      legal_name: Joi.string().allow("").required(),

      verified: Joi.boolean().required(),

      ds_type: Joi.string().allow("").required(),
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

      username: Joi.string().allow(""),

      password: Joi.string().allow(""),

      user: Joi.string().allow(""),
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
      user: Joi.string().allow(""),

      username: Joi.string().allow(""),

      password: Joi.string().allow(""),
    });
  }

  static StoreMeta() {
    return Joi.object({
      documents: OrderModel.StoreDocuments(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow("").required(),

      product_return_config: Joi.any(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      display_name: Joi.string().allow("").required(),

      gst_number: Joi.string().allow(""),

      timing: Joi.array().items(Joi.any()),

      additional_contact_details: Joi.any(),

      ewaybill_portal_details: Joi.any(),
    });
  }

  static StoreAddress() {
    return Joi.object({
      address_type: Joi.string().allow("").required(),

      version: Joi.string().allow(""),

      email: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      phone: Joi.string().allow("").allow(null).required(),

      latitude: Joi.number().required(),

      updated_at: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      longitude: Joi.number().required(),

      address_category: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      area: Joi.string().allow(""),
    });
  }

  static Store() {
    return Joi.object({
      brand_id: Joi.any(),

      meta: OrderModel.StoreMeta().required(),

      parent_store_id: Joi.number(),

      fulfillment_channel: Joi.string().allow("").required(),

      s_id: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      is_enabled_for_recon: Joi.boolean(),

      phone: Joi.number().required(),

      latitude: Joi.number().required(),

      updated_at: Joi.string().allow("").allow(null),

      mall_name: Joi.string().allow("").allow(null),

      created_at: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      company_id: Joi.number().required(),

      order_integration_id: Joi.string().allow(""),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      longitude: Joi.number().required(),

      vat_no: Joi.string().allow("").allow(null),

      store_active_from: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      mall_area: Joi.string().allow("").allow(null),

      alohomora_user_id: Joi.number(),

      is_active: Joi.boolean(),

      location_type: Joi.string().allow("").required(),

      store_email: Joi.string().allow("").required(),

      is_archived: Joi.boolean(),

      pincode: Joi.string().allow("").required(),

      store_address_json: OrderModel.StoreAddress(),

      login_username: Joi.string().allow("").required(),

      packaging_material_count: Joi.number(),
    });
  }

  static Weight() {
    return Joi.object({
      is_default: Joi.boolean(),

      shipping: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      time: Joi.number(),

      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),
    });
  }

  static Article() {
    return Joi.object({
      is_set: Joi.boolean(),

      seller_identifier: Joi.string().allow("").required(),

      identifiers: OrderModel.Identifier().required(),

      size: Joi.string().allow("").required(),

      weight: OrderModel.Weight(),

      raw_meta: Joi.any(),

      dimensions: OrderModel.Dimensions(),

      a_set: Joi.any().allow(null),

      esp_modified: Joi.any(),

      _id: Joi.string().allow("").required(),

      child_details: Joi.any().allow(null),

      code: Joi.string().allow(""),

      uid: Joi.string().allow("").required(),

      return_config: OrderModel.ReturnConfig(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      b_id: Joi.number().required(),

      meta: OrderModel.BagMeta(),

      identifier: Joi.string().allow(""),

      line_number: Joi.number(),

      display_name: Joi.string().allow(""),

      gst_details: OrderModel.BagGSTDetails().required(),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      dates: OrderModel.Dates(),

      article_details: OrderModel.ArticleDetails(),

      original_bag_list: Joi.array().items(Joi.number()),

      journey_type: Joi.string().allow("").required(),

      b_type: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      prices: OrderModel.Prices().required(),

      qc_required: Joi.any(),

      affiliate_details: OrderModel.AffiliateDetails(),

      item: OrderModel.Item().required(),

      restore_promos: Joi.any(),

      seller_identifier: Joi.string().allow(""),

      reasons: Joi.array().items(Joi.any()),

      quantity: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      order_integration_id: Joi.string().allow("").allow(null),

      parent_promo_bags: Joi.any(),

      current_status: OrderModel.BagStatusHistory().required(),

      no_of_bags_order: Joi.number(),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      bag_status_history: OrderModel.BagStatusHistory(),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      applied_promos: Joi.array().items(Joi.any()),

      brand: OrderModel.Brand().required(),

      bag_update_time: Joi.number(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      ordering_store: OrderModel.Store(),

      entity_type: Joi.string().allow(""),

      operational_status: Joi.string().allow(""),

      restore_coupon: Joi.boolean(),

      article: OrderModel.Article().required(),
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

      has_next: Joi.boolean().required(),

      page_type: Joi.string().allow("").required(),

      item_total: Joi.number().required(),
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
      status: Joi.number(),

      error: Joi.string().allow(""),

      message: Joi.string().allow(""),

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
      error_trace: Joi.string().allow(""),

      status: Joi.number().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static StoreReassign() {
    return Joi.object({
      store_id: Joi.number().required(),

      mongo_article_id: Joi.string().allow("").allow(null),

      affiliate_order_id: Joi.string().allow("").allow(null),

      bag_id: Joi.number().allow(null),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      set_id: Joi.string().allow("").allow(null),

      reason_ids: Joi.array().items(Joi.number()),

      item_id: Joi.string().allow("").allow(null),

      affiliate_id: Joi.string().allow("").allow(null),

      fynd_order_id: Joi.string().allow("").allow(null),
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

      affiliate_bag_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),
    });
  }

  static UpdateShipmentLockPayload() {
    return Joi.object({
      entity_type: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

      action_type: Joi.string().allow("").required(),

      entities: Joi.array().items(OrderModel.Entities()).required(),
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
      affiliate_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),
    });
  }

  static CheckResponse() {
    return Joi.object({
      lock_status: Joi.boolean().allow(null),

      status: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      is_bag_locked: Joi.boolean(),

      bags: Joi.array().items(OrderModel.Bags()),

      affiliate_id: Joi.string().allow(""),

      original_filter: OrderModel.OriginalFilter(),

      is_shipment_locked: Joi.boolean(),
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
      description: Joi.string().allow(""),

      to_datetime: Joi.string().allow(""),

      id: Joi.number().required(),

      from_datetime: Joi.string().allow(""),

      title: Joi.string().allow(""),

      company_id: Joi.number(),

      logo_url: Joi.string().allow(""),

      platform_name: Joi.string().allow(""),

      platform_id: Joi.string().allow(""),

      created_at: Joi.string().allow(""),
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

  static Products() {
    return Joi.object({
      line_number: Joi.number(),

      identifier: Joi.string().allow(""),

      quantity: Joi.number(),
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
      identifier: Joi.string().allow("").required(),

      products: Joi.array().items(OrderModel.Products()),

      data_updates: OrderModel.DataUpdates(),

      reasons: OrderModel.ReasonsData(),
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
      force_transition: Joi.boolean(),

      task: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      stack_trace: Joi.string().allow(""),

      message: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      meta: Joi.any(),

      final_state: Joi.any(),

      exception: Joi.string().allow(""),

      code: Joi.string().allow(""),

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

  static ArticleDetails1() {
    return Joi.object({
      weight: Joi.any().required(),

      brand_id: Joi.number().required(),

      dimension: Joi.any().required(),

      category: Joi.any().required(),

      _id: Joi.string().allow("").required(),

      quantity: Joi.number().required(),

      attributes: Joi.any().required(),
    });
  }

  static LocationDetails() {
    return Joi.object({
      fulfillment_id: Joi.number().required(),

      fulfillment_type: Joi.string().allow("").required(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),
    });
  }

  static ShipmentDetails() {
    return Joi.object({
      affiliate_shipment_id: Joi.string().allow("").required(),

      meta: Joi.any(),

      fulfillment_id: Joi.number().required(),

      box_type: Joi.string().allow("").allow(null),

      dp_id: Joi.number().allow(null),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      shipments: Joi.number().required(),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      location_details: OrderModel.LocationDetails(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      payment_mode: Joi.string().allow("").required(),

      journey: Joi.string().allow("").required(),

      identifier: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),

      source: Joi.string().allow("").required(),
    });
  }

  static ShipmentData() {
    return Joi.object({
      shipment_data: OrderModel.ShipmentConfig().required(),
    });
  }

  static OrderUser() {
    return Joi.object({
      first_name: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      address2: Joi.string().allow("").allow(null),

      address1: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),
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
      avl_qty: Joi.number().required(),

      modified_on: Joi.string().allow("").required(),

      sku: Joi.string().allow("").required(),

      price_marked: Joi.number().required(),

      quantity: Joi.number().required(),

      transfer_price: Joi.number().required(),

      identifier: Joi.any().required(),

      seller_identifier: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      affiliate_store_id: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      store_id: Joi.number().required(),

      discount: Joi.number().required(),

      affiliate_meta: Joi.any().required(),

      delivery_charge: Joi.number().required(),

      _id: Joi.string().allow("").required(),

      fynd_store_id: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      item_size: Joi.string().allow("").required(),

      price_effective: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      unit_price: Joi.number().required(),
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
      affiliate_priority_code: Joi.string().allow("").allow(null),

      fulfilment_priority: Joi.number().allow(null),

      fulfilment_priority_text: Joi.string().allow(""),
    });
  }

  static OrderInfo() {
    return Joi.object({
      affiliate_order_id: Joi.string().allow(""),

      shipment: OrderModel.ShipmentData(),

      payment_mode: Joi.string().allow("").required(),

      cod_charges: Joi.number().required(),

      billing_address: OrderModel.OrderUser().required(),

      order_value: Joi.number().required(),

      delivery_charges: Joi.number().required(),

      shipping_address: OrderModel.OrderUser().required(),

      discount: Joi.number().required(),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      user: OrderModel.UserData().required(),

      payment: Joi.any(),

      order_priority: OrderModel.OrderPriority(),

      items: Joi.any().required(),

      coupon: Joi.string().allow("").allow(null),
    });
  }

  static AffiliateStoreIdMapping() {
    return Joi.object({
      store_id: Joi.number().required(),

      marketplace_store_id: Joi.string().allow("").required(),
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

      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),

      order: OrderModel.AffiliateInventoryOrderConfig(),

      payment: OrderModel.AffiliateInventoryPaymentConfig(),

      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),
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

      description: Joi.string().allow(""),

      id: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),

      owner: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),
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
      store_lookup: Joi.string().allow(""),

      bag_end_state: Joi.string().allow(""),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      article_lookup: Joi.string().allow(""),

      create_user: Joi.boolean(),

      affiliate: OrderModel.Affiliate().required(),
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
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static ActionInfo() {
    return Joi.object({
      description: Joi.string().allow("").required(),

      id: Joi.number().required(),

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
      l1_detail: Joi.string().allow(""),

      ticket_id: Joi.string().allow(""),

      message: Joi.string().allow("").required(),

      l3_detail: Joi.string().allow(""),

      createdat: Joi.string().allow("").required(),

      bag_id: Joi.number(),

      type: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      ticket_url: Joi.string().allow(""),

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
      country_code: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      phone_number: Joi.number().required(),

      shipment_id: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      customer_name: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),
    });
  }

  static SendSmsPayload() {
    return Joi.object({
      data: OrderModel.SmsDataPayload(),

      bag_id: Joi.number().required(),

      slug: Joi.string().allow("").required(),
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
      shipment_id: Joi.string().allow(""),

      meta: OrderModel.Meta1().required(),

      id: Joi.number().required(),

      remarks: Joi.string().allow(""),

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
      qc_required: Joi.string().allow("").required(),

      shipment_ids: Joi.array().items(Joi.string().allow("")),

      dp_id: Joi.number().required(),

      order_type: Joi.string().allow("").required(),
    });
  }

  static ManualAssignDPToShipmentResponse() {
    return Joi.object({
      success: Joi.string().allow("").required(),

      errors: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      alternate_email: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      primary_mobile_number: Joi.string().allow("").required(),

      address_type: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      shipping_type: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      title: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      slot: Joi.array().items(Joi.any()),

      city: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      geo_location: Joi.any(),

      external_customer_code: Joi.string().allow(""),

      state: Joi.string().allow("").required(),
    });
  }

  static Tax() {
    return Joi.object({
      rate: Joi.number().required(),

      amount: Joi.any().required(),

      breakup: Joi.array().items(Joi.any()),

      name: Joi.string().allow("").required(),
    });
  }

  static Charge() {
    return Joi.object({
      amount: Joi.any().required(),

      tax: OrderModel.Tax(),

      name: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      type: Joi.string().allow("").required(),
    });
  }

  static TaxInfo() {
    return Joi.object({
      gstin: Joi.string().allow(""),

      b2b_gstin_number: Joi.string().allow(""),
    });
  }

  static BillingInfo() {
    return Joi.object({
      alternate_email: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      primary_mobile_number: Joi.string().allow("").required(),

      state_code: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),

      state: Joi.string().allow("").required(),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      confirm_by_date: Joi.string().allow(""),

      dispatch_by_date: Joi.string().allow(""),

      dispatch_after_date: Joi.string().allow(""),

      pack_by_date: Joi.string().allow(""),

      dp_pickup_slot: Joi.any(),

      customer_pickup_slot: Joi.any(),
    });
  }

  static LineItem() {
    return Joi.object({
      charges: Joi.array().items(OrderModel.Charge()),

      meta: Joi.any(),

      external_line_id: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),

      quantity: Joi.number(),

      custom_messasge: Joi.string().allow(""),
    });
  }

  static Shipment() {
    return Joi.object({
      external_shipment_id: Joi.string().allow(""),

      meta: Joi.any(),

      processing_dates: OrderModel.ProcessingDates(),

      location_id: Joi.number().required(),

      priority: Joi.number(),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      amount: Joi.number().required(),

      meta: Joi.any(),

      name: Joi.string().allow("").required(),

      collect_by: Joi.string().allow("").required(),

      transaction_data: Joi.any(),

      refund_by: Joi.string().allow("").required(),

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
      shipping_info: OrderModel.ShippingInfo().required(),

      charges: Joi.array().items(OrderModel.Charge()),

      meta: Joi.any(),

      tax_info: OrderModel.TaxInfo(),

      currency_info: Joi.any(),

      external_creation_date: Joi.string().allow(""),

      external_order_id: Joi.string().allow(""),

      billing_info: OrderModel.BillingInfo().required(),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      payment_info: OrderModel.PaymentInfo().required(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      stack_trace: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      meta: Joi.string().allow("").allow(null),

      info: Joi.any(),

      exception: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      status: Joi.number().required(),

      request_id: Joi.string().allow("").allow(null),
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
      payment_methods: Joi.array().items(OrderModel.PaymentMethods()),

      mode_of_payment: Joi.string().allow(""),

      source: Joi.string().allow(""),
    });
  }

  static CreateChannelConfig() {
    return Joi.object({
      dp_configuration: OrderModel.DpConfiguration(),

      lock_states: Joi.array().items(Joi.string().allow("")),

      logo_url: Joi.any(),

      shipment_assignment: Joi.string().allow(""),

      payment_info: OrderModel.CreateChannelPaymentInfo(),

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
      is_inserted: Joi.boolean(),

      acknowledged: Joi.boolean(),

      is_upserted: Joi.boolean(),
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

      mobile: Joi.number().required(),

      end_date: Joi.string().allow("").required(),

      start_date: Joi.string().allow("").required(),
    });
  }
}
module.exports = OrderModel;
