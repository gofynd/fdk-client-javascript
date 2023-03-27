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

      text: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.FilterInfoOption()),

      type: Joi.string().allow("").required(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      email: Joi.string().allow(""),

      avis_user_id: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),
    });
  }

  static PaymentModeInfo() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),
    });
  }

  static ShipmentItemFulFillingStore() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
    });
  }

  static Prices() {
    return Joi.object({
      cashback: Joi.number(),

      amount_paid: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      transfer_price: Joi.number(),

      tax_collected_at_source: Joi.number(),

      promotion_effective_discount: Joi.number(),

      refund_amount: Joi.number(),

      cod_charges: Joi.number(),

      delivery_charge: Joi.number(),

      price_effective: Joi.number(),

      fynd_credits: Joi.number(),

      coupon_value: Joi.number(),

      value_of_good: Joi.number(),

      discount: Joi.number(),

      price_marked: Joi.number(),

      refund_credit: Joi.number(),

      cashback_applied: Joi.number(),
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

  static GSTDetailsData() {
    return Joi.object({
      gstin_code: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number().required(),

      gst_fee: Joi.number().required(),

      value_of_good: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      size: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow("").allow(null),

      name: Joi.string().allow(""),

      l3_category: Joi.number(),

      id: Joi.number(),

      l3_category_name: Joi.string().allow(""),

      can_return: Joi.boolean(),

      department_id: Joi.number(),

      can_cancel: Joi.boolean(),

      image: Joi.array().items(Joi.string().allow("")),

      l1_category: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow(""),
    });
  }

  static BagUnit() {
    return Joi.object({
      shipment_id: Joi.string().allow("").required(),

      status: Joi.any().required(),

      gst: OrderModel.GSTDetailsData(),

      total_shipment_bags: Joi.number().required(),

      can_return: Joi.boolean(),

      prices: OrderModel.Prices(),

      can_cancel: Joi.boolean(),

      item: OrderModel.PlatformItem(),

      bag_id: Joi.number().required(),

      ordering_channel: Joi.string().allow("").required(),

      item_quantity: Joi.number().required(),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      user: OrderModel.UserDataInfo(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      created_at: Joi.string().allow("").required(),

      application: Joi.any(),

      shipment_id: Joi.string().allow(""),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      shipment_created_at: Joi.string().allow("").required(),

      total_bags_count: Joi.number().required(),

      id: Joi.string().allow("").required(),

      channel: Joi.any(),

      prices: OrderModel.Prices(),

      fulfilling_centre: Joi.string().allow("").required(),

      payment_methods: Joi.any(),

      total_shipments_in_order: Joi.number().required(),

      shipment_status: OrderModel.ShipmentStatus(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      sla: Joi.any(),
    });
  }

  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      applied_filters: Joi.any(),

      filters: Joi.array().items(OrderModel.FiltersInfo()),

      page: Joi.any(),

      items: Joi.array().items(OrderModel.ShipmentItem()),
    });
  }

  static Error() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      state_type: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      app_state_name: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      bs_id: Joi.number().required(),

      display_name: Joi.string().allow("").required(),

      notify_customer: Joi.boolean(),

      journey_type: Joi.string().allow("").required(),

      app_facing: Joi.boolean(),

      app_display_name: Joi.string().allow(""),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      bag_state_mapper: OrderModel.BagStateMapper(),

      updated_at: Joi.string().allow(""),

      state_type: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      delivery_partner_id: Joi.number().allow(null),

      shipment_id: Joi.string().allow(""),

      delivery_awb_number: Joi.string().allow("").allow(null),

      reasons: Joi.array().items(Joi.any()),

      status: Joi.string().allow("").required(),

      bsh_id: Joi.number(),

      forward: Joi.boolean().allow(null),

      display_name: Joi.string().allow(""),

      state_id: Joi.number(),

      store_id: Joi.number(),

      bag_id: Joi.number(),

      kafka_sync: Joi.boolean(),

      app_display_name: Joi.string().allow(""),
    });
  }

  static TrackingList() {
    return Joi.object({
      text: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      time: Joi.string().allow(""),

      is_passed: Joi.boolean(),

      is_current: Joi.boolean(),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      pincode: Joi.string().allow(""),

      name: Joi.string().allow(""),

      id: Joi.number(),

      gst_tag: Joi.string().allow(""),

      country: Joi.string().allow(""),

      track_url: Joi.string().allow("").allow(null),

      eway_bill_id: Joi.string().allow("").allow(null),

      awb_no: Joi.string().allow(""),
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

  static ShipmentPayments() {
    return Joi.object({
      mode: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      source: Joi.string().allow(""),
    });
  }

  static InvoiceInfo() {
    return Joi.object({
      updated_date: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      label_url: Joi.string().allow(""),

      credit_note_id: Joi.string().allow(""),

      store_invoice_id: Joi.string().allow(""),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      created_at: Joi.string().allow("").allow(null),

      shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.string().allow("")),

      id: Joi.number(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      bag_state_mapper: OrderModel.BagStateMapper(),

      state_type: Joi.string().allow(""),

      created_at: Joi.string().allow("").allow(null),

      updated_at: Joi.string().allow(""),

      delivery_awb_number: Joi.string().allow(""),

      delivery_partner_id: Joi.number(),

      shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      current_status_id: Joi.number().required(),

      state_id: Joi.number(),

      store_id: Joi.number(),

      bag_id: Joi.number(),

      kafka_sync: Joi.boolean(),
    });
  }

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      item_name: Joi.string().allow("").required(),

      cod_charges: Joi.number().required(),

      fynd_credits: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      hsn_code: Joi.string().allow("").required(),

      gst_tax_percentage: Joi.number().required(),

      gst_fee: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      coupon_value: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      amount_paid: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),

      promotion_effective_discount: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      discount: Joi.number().required(),

      price_marked: Joi.number().required(),

      refund_credit: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      size: Joi.string().allow("").required(),

      cashback: Joi.number().required(),

      transfer_price: Joi.number().required(),

      tax_collected_at_source: Joi.number(),

      identifiers: OrderModel.Identifier().required(),

      total_units: Joi.number().required(),

      price_effective: Joi.number().required(),

      value_of_good: Joi.number().required(),
    });
  }

  static BagGST() {
    return Joi.object({
      gstin_code: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      gst_tax_percentage: Joi.number(),

      gst_fee: Joi.number(),

      gst_tag: Joi.string().allow(""),

      value_of_good: Joi.number(),

      brand_calculated_amount: Joi.number(),

      is_default_hsn_code: Joi.boolean(),
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
      latitude: Joi.number(),

      phone: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      email: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      version: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      area: Joi.string().allow(""),

      state: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      longitude: Joi.number(),

      address_category: Joi.string().allow(""),

      city: Joi.string().allow(""),
    });
  }

  static BagConfigs() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),
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
      promotion_type: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      article_quantity: Joi.number(),

      mrp_promotion: Joi.boolean(),

      amount: Joi.number(),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      id: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),

      company: Joi.string().allow("").allow(null).required(),

      logo: Joi.string().allow("").required(),
    });
  }

  static OrderBags() {
    return Joi.object({
      display_name: Joi.string().allow(""),

      current_status: OrderModel.CurrentStatus(),

      financial_breakup: OrderModel.FinancialBreakup(),

      gst_details: OrderModel.BagGST(),

      seller_identifier: Joi.string().allow(""),

      article: OrderModel.OrderBagArticle(),

      can_return: Joi.boolean(),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      bag_configs: OrderModel.BagConfigs(),

      quantity: Joi.number(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      parent_promo_bags: Joi.any(),

      can_cancel: Joi.boolean(),

      brand: OrderModel.OrderBrandName(),

      entity_type: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      line_number: Joi.number(),

      item: OrderModel.PlatformItem(),

      bag_id: Joi.number().required(),

      identifier: Joi.string().allow(""),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      phone: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      pincode: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      ordering_store_id: Joi.number().required(),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      phone: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      phone: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      pincode: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      id: Joi.number().required(),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
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

  static DebugInfo() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow(""),
    });
  }

  static EInvoice() {
    return Joi.object({
      error_code: Joi.string().allow(""),

      irn: Joi.string().allow(""),

      acknowledge_no: Joi.number(),

      error_message: Joi.string().allow(""),

      acknowledge_date: Joi.string().allow(""),

      signed_invoice: Joi.string().allow(""),

      signed_qr_code: Joi.string().allow(""),
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
      pincode: Joi.number().required(),

      address: Joi.string().allow("").allow(null).required(),

      name: Joi.string().allow("").required(),

      ajio_site_id: Joi.string().allow(""),

      gstin: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),
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
      dp_name: Joi.string().allow(""),

      order_type: Joi.string().allow("").allow(null),

      return_awb_number: Joi.string().allow(""),

      ewaybill_info: Joi.any().allow(null),

      packaging_name: Joi.string().allow(""),

      return_details: Joi.any(),

      same_store_available: Joi.boolean().required(),

      due_date: Joi.string().allow(""),

      marketplace_store_id: Joi.string().allow(""),

      return_affiliate_shipment_id: Joi.string().allow(""),

      dp_options: Joi.any(),

      timestamp: OrderModel.ShipmentTimeStamp(),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      forward_affiliate_order_id: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      shipment_weight: Joi.number(),

      box_type: Joi.string().allow("").allow(null),

      return_affiliate_order_id: Joi.string().allow(""),

      assign_dp_from_sb: Joi.boolean(),

      weight: Joi.number().required(),

      bag_weight: Joi.any(),

      lock_data: OrderModel.LockData(),

      b2c_buyer_details: Joi.any().allow(null),

      debug_info: OrderModel.DebugInfo(),

      awb_number: Joi.string().allow(""),

      po_number: Joi.string().allow(""),

      return_store_node: Joi.number(),

      store_invoice_updated_date: Joi.string().allow(""),

      shipment_volumetric_weight: Joi.number(),

      einvoice_info: OrderModel.EinvoiceInfo(),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      external: Joi.any(),

      formatted: OrderModel.Formatted(),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      dp_sort_key: Joi.string().allow(""),
    });
  }

  static PDFLinks() {
    return Joi.object({
      label_a4: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      b2b: Joi.string().allow(""),

      label: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      po_invoice: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      delivery_challan_a4: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      label_pos: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      size_level_total_qty: Joi.number().allow(null),

      order_item_id: Joi.string().allow(""),

      loyalty_discount: Joi.number(),

      is_priority: Joi.boolean(),

      quantity: Joi.number(),

      box_type: Joi.string().allow("").allow(null),

      employee_discount: Joi.number(),

      channel_shipment_id: Joi.string().allow("").allow(null),

      due_date: Joi.string().allow("").allow(null),

      channel_order_id: Joi.string().allow("").allow(null),

      coupon_code: Joi.string().allow("").allow(null),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      affiliate_store_id: Joi.string().allow("").required(),

      ad_id: Joi.string().allow(""),

      company_affiliate_tag: Joi.string().allow(""),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      affiliate_bag_id: Joi.string().allow("").required(),

      pdf_links: OrderModel.PDFLinks(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      affiliate_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_shipment_id: Joi.string().allow("").required(),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      order_date: Joi.string().allow(""),

      order_value: Joi.string().allow(""),

      cod_charges: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),

      affiliate_id: Joi.string().allow(""),

      source: Joi.string().allow(""),

      tax_details: Joi.any(),

      fynd_order_id: Joi.string().allow("").required(),

      ordering_channel: Joi.string().allow(""),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      shipment_id: Joi.string().allow("").required(),

      custom_meta: Joi.array().items(Joi.any()),

      shipment_quantity: Joi.number(),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      dp_details: OrderModel.DPDetailsData(),

      vertical: Joi.string().allow("").allow(null),

      priority_text: Joi.string().allow("").allow(null),

      gst_details: OrderModel.GSTDetailsData(),

      meta: OrderModel.Meta(),

      payments: OrderModel.ShipmentPayments(),

      delivery_slot: Joi.any(),

      invoice: OrderModel.InvoiceInfo(),

      picked_date: Joi.string().allow(""),

      status: OrderModel.ShipmentStatusData(),

      platform_logo: Joi.string().allow(""),

      shipment_status: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.OrderBags()),

      ordering_store: OrderModel.OrderingStoreDetails(),

      delivery_details: OrderModel.UserDetailsData(),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      user_agent: Joi.string().allow(""),

      fulfilling_store: OrderModel.FulfillingStore(),

      lock_status: Joi.boolean(),

      operational_status: Joi.string().allow(""),

      affiliate_details: OrderModel.AffiliateDetails(),

      packaging_type: Joi.string().allow(""),

      payment_methods: Joi.any(),

      journey_type: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      total_items: Joi.number(),

      forward_shipment_id: Joi.string().allow(""),

      order: OrderModel.OrderDetailsData(),

      total_bags: Joi.number(),

      enable_dp_tracking: Joi.boolean(),

      prices: OrderModel.Prices(),

      billing_details: OrderModel.UserDetailsData(),

      fulfilment_priority: Joi.number(),

      invoice_id: Joi.string().allow(""),

      coupon: Joi.any(),
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
      customer_note: Joi.string().allow(""),

      files: Joi.array().items(Joi.any()),

      payment_type: Joi.string().allow(""),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      currency_symbol: Joi.string().allow(""),

      order_platform: Joi.string().allow(""),

      order_tags: Joi.array().items(Joi.any()),

      order_type: Joi.string().allow(""),

      ordering_store: Joi.number(),

      comment: Joi.string().allow(""),

      cart_id: Joi.number(),

      extra_meta: Joi.any(),

      employee_id: Joi.number(),

      staff: Joi.any(),

      mongo_cart_id: Joi.number(),
    });
  }

  static OrderDict() {
    return Joi.object({
      meta: OrderModel.OrderMeta(),

      fynd_order_id: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),

      payment_methods: Joi.any(),

      tax_details: Joi.any(),

      order_date: Joi.string().allow("").required(),
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
      text: Joi.string().allow(""),

      index: Joi.number(),

      total_items: Joi.number(),

      actions: Joi.array().items(Joi.any()),

      value: Joi.string().allow(""),
    });
  }

  static SuperLane() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.SubLane()),

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
      meta: Joi.any(),

      payment_mode: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      order_created_time: Joi.string().allow(""),

      order_value: Joi.number(),

      channel: OrderModel.PlatformChannel(),

      total_order_value: Joi.number(),

      user_info: OrderModel.UserDataInfo(),

      order_id: Joi.string().allow(""),
    });
  }

  static OrderListingResponse() {
    return Joi.object({
      total_count: Joi.number(),

      page: OrderModel.Page(),

      message: Joi.string().allow(""),

      success: Joi.boolean(),

      lane: Joi.string().allow(""),

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
      value: Joi.number().required(),

      text: Joi.string().allow("").required(),

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
      meta: Joi.any(),

      updated_at: Joi.string().allow(""),

      status: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      reason: Joi.string().allow(""),

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
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static OmsReports() {
    return Joi.object({
      report_created_at: Joi.string().allow("").allow(null),

      status: Joi.string().allow(""),

      report_name: Joi.string().allow(""),

      request_details: Joi.any(),

      report_id: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),

      s3_key: Joi.string().allow(""),

      report_type: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      company_id: Joi.string().allow(""),

      item_id: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

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
      invoice: Joi.any(),

      data: Joi.any(),

      label: Joi.any(),

      company_id: Joi.string().allow(""),

      store_id: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      do_invoice_label_generated: Joi.boolean().required(),

      store_name: Joi.string().allow(""),

      batch_id: Joi.string().allow("").required(),

      invoice_status: Joi.string().allow(""),
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

      method: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      file_path: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      operation: Joi.string().allow(""),

      cdn: OrderModel.URL(),

      namespace: Joi.string().allow(""),

      content_type: Joi.string().allow(""),

      size: Joi.number(),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      has_previous: Joi.boolean(),

      total: Joi.number(),

      current: Joi.number(),

      type: Joi.string().allow(""),

      has_next: Joi.boolean(),

      size: Joi.number(),
    });
  }

  static bulkListingData() {
    return Joi.object({
      failed_shipments: Joi.array().items(Joi.any()),

      successful_shipments: Joi.array().items(Joi.any()),

      file_name: Joi.string().allow(""),

      total: Joi.number(),

      store_code: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      processing: Joi.number(),

      excel_url: Joi.string().allow(""),

      status: Joi.string().allow(""),

      id: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      failed: Joi.number(),

      store_id: Joi.number(),

      batch_id: Joi.string().allow(""),

      user_name: Joi.string().allow(""),

      company_id: Joi.number(),

      successful: Joi.number(),

      store_name: Joi.string().allow(""),

      processing_shipments: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      success: Joi.boolean(),

      error: Joi.string().allow(""),

      page: OrderModel.BulkListingPage(),

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
      question_set: Joi.array().items(OrderModel.QuestionSet()),

      display_name: Joi.string().allow(""),

      id: Joi.number(),

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
      failed_shipments_count: Joi.number(),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      processing_shipments_count: Joi.number(),

      company_id: Joi.string().allow(""),

      successful_shipments_count: Joi.number(),

      batch_id: Joi.string().allow(""),

      total_shipments_count: Joi.number(),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      uploaded_by: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      status: Joi.boolean(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      message: Joi.string().allow(""),

      success: Joi.string().allow(""),

      error: Joi.array().items(Joi.string().allow("")),

      uploaded_on: Joi.string().allow(""),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      gstin_code: Joi.string().allow("").allow(null),

      hsn_code: Joi.string().allow("").required(),

      gst_tax_percentage: Joi.number().required(),

      igst_gst_fee: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number().required(),

      gst_fee: Joi.number().required(),

      igst_tax_percentage: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      sgst_tax_percentage: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      cgst_tax_percentage: Joi.number().required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      is_default_hsn_code: Joi.boolean(),

      cgst_gst_fee: Joi.string().allow("").required(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      po_tax_amount: Joi.number(),

      docker_number: Joi.string().allow(""),

      total_gst_percentage: Joi.number(),

      po_line_amount: Joi.number(),

      item_base_price: Joi.number(),

      partial_can_ret: Joi.boolean(),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      time: Joi.number(),

      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),
    });
  }

  static Weight() {
    return Joi.object({
      is_default: Joi.boolean(),

      shipping: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static Article() {
    return Joi.object({
      a_set: Joi.any().allow(null),

      _id: Joi.string().allow("").required(),

      raw_meta: Joi.any(),

      identifiers: OrderModel.Identifier().required(),

      seller_identifier: Joi.string().allow("").required(),

      uid: Joi.string().allow("").required(),

      child_details: Joi.any().allow(null),

      return_config: OrderModel.ReturnConfig(),

      dimensions: OrderModel.Dimensions(),

      weight: OrderModel.Weight(),

      esp_modified: Joi.any(),

      is_set: Joi.boolean(),

      size: Joi.string().allow("").required(),

      code: Joi.string().allow(""),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static Document() {
    return Joi.object({
      ds_type: Joi.string().allow("").required(),

      legal_name: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      verified: Joi.boolean().required(),

      value: Joi.string().allow("").required(),
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

  static StoreEwaybill() {
    return Joi.object({
      enabled: Joi.boolean(),
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

  static StoreGstCredentials() {
    return Joi.object({
      e_waybill: OrderModel.StoreEwaybill(),

      e_invoice: OrderModel.StoreEinvoice(),
    });
  }

  static StoreMeta() {
    return Joi.object({
      documents: OrderModel.StoreDocuments(),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      timing: Joi.array().items(Joi.any()),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      additional_contact_details: Joi.any(),

      gst_number: Joi.string().allow(""),

      product_return_config: Joi.any(),

      ewaybill_portal_details: Joi.any(),

      display_name: Joi.string().allow("").required(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      stage: Joi.string().allow("").required(),
    });
  }

  static StoreAddress() {
    return Joi.object({
      phone: Joi.string().allow("").allow(null).required(),

      email: Joi.string().allow(""),

      pincode: Joi.number().required(),

      country_code: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      version: Joi.string().allow(""),

      contact_person: Joi.string().allow("").required(),

      area: Joi.string().allow(""),

      address_type: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address_category: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      longitude: Joi.number().required(),

      city: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      created_at: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow("").required(),
    });
  }

  static Store() {
    return Joi.object({
      phone: Joi.number().required(),

      pincode: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      meta: OrderModel.StoreMeta().required(),

      updated_at: Joi.string().allow("").allow(null),

      fulfillment_channel: Joi.string().allow("").required(),

      order_integration_id: Joi.string().allow(""),

      contact_person: Joi.string().allow("").required(),

      parent_store_id: Joi.number(),

      store_address_json: OrderModel.StoreAddress(),

      state: Joi.string().allow("").required(),

      alohomora_user_id: Joi.number(),

      is_archived: Joi.boolean(),

      is_active: Joi.boolean(),

      address1: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      s_id: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      packaging_material_count: Joi.number(),

      city: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      is_enabled_for_recon: Joi.boolean(),

      latitude: Joi.number().required(),

      created_at: Joi.string().allow("").required(),

      login_username: Joi.string().allow("").required(),

      location_type: Joi.string().allow("").required(),

      mall_name: Joi.string().allow("").allow(null),

      company_id: Joi.number().required(),

      country: Joi.string().allow("").required(),

      mall_area: Joi.string().allow("").allow(null),

      brand_id: Joi.any(),

      store_active_from: Joi.string().allow("").allow(null),

      store_email: Joi.string().allow("").required(),

      vat_no: Joi.string().allow("").allow(null),
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

  static Dates() {
    return Joi.object({
      delivery_date: Joi.any(),

      order_created: Joi.string().allow(""),
    });
  }

  static Brand() {
    return Joi.object({
      created_on: Joi.number(),

      credit_note_expiry_days: Joi.number().allow(null),

      script_last_ran: Joi.string().allow("").allow(null),

      invoice_prefix: Joi.string().allow("").allow(null),

      modified_on: Joi.number(),

      pickup_location: Joi.string().allow("").allow(null),

      start_date: Joi.string().allow("").allow(null),

      brand_name: Joi.string().allow("").required(),

      company: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      brand_id: Joi.number().required(),

      credit_note_allowed: Joi.boolean(),

      is_virtual_invoice: Joi.boolean().allow(null),
    });
  }

  static Attributes() {
    return Joi.object({
      name: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      primary_color: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      primary_material: Joi.string().allow(""),

      essential: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      color: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").required(),

      last_updated_at: Joi.string().allow(""),

      department_id: Joi.number(),

      l2_category: Joi.array().items(Joi.string().allow("")),

      webstore_product_url: Joi.string().allow("").allow(null),

      l1_category_id: Joi.number(),

      meta: Joi.any(),

      gender: Joi.string().allow("").allow(null),

      can_return: Joi.boolean(),

      attributes: OrderModel.Attributes().required(),

      item_id: Joi.number().required(),

      can_cancel: Joi.boolean(),

      image: Joi.array().items(Joi.string().allow("")).required(),

      l3_category: Joi.number(),

      brand: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      size: Joi.string().allow("").required(),

      branch_url: Joi.string().allow("").allow(null),

      l3_category_name: Joi.string().allow(""),

      l2_category_id: Joi.number(),

      slug_key: Joi.string().allow("").required(),

      brand_id: Joi.number().required(),

      l1_category: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),

      b_id: Joi.number().required(),

      bag_status_history: OrderModel.BagStatusHistory(),

      display_name: Joi.string().allow(""),

      current_status: OrderModel.BagStatusHistory().required(),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      gst_details: OrderModel.BagGSTDetails().required(),

      meta: OrderModel.BagMeta(),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      reasons: Joi.array().items(Joi.any()),

      seller_identifier: Joi.string().allow(""),

      order_integration_id: Joi.string().allow("").allow(null),

      article: OrderModel.Article().required(),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      article_details: OrderModel.ArticleDetails(),

      bag_update_time: Joi.number(),

      quantity: Joi.number(),

      restore_coupon: Joi.boolean(),

      no_of_bags_order: Joi.number(),

      restore_promos: Joi.any(),

      b_type: Joi.string().allow(""),

      applied_promos: Joi.array().items(Joi.any()),

      ordering_store: OrderModel.Store(),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      parent_promo_bags: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      operational_status: Joi.string().allow(""),

      affiliate_details: OrderModel.AffiliateDetails(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      journey_type: Joi.string().allow("").required(),

      dates: OrderModel.Dates(),

      brand: OrderModel.Brand().required(),

      original_bag_list: Joi.array().items(Joi.number()),

      qc_required: Joi.any(),

      entity_type: Joi.string().allow(""),

      prices: OrderModel.Prices().required(),

      line_number: Joi.number(),

      item: OrderModel.Item().required(),

      identifier: Joi.string().allow(""),
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
      page_type: Joi.string().allow("").required(),

      current: Joi.number().required(),

      item_total: Joi.number().required(),

      has_next: Joi.boolean().required(),

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
      message: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      status: Joi.number(),

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
      message: Joi.string().allow("").required(),

      error_trace: Joi.string().allow(""),

      status: Joi.number().required(),
    });
  }

  static StoreReassign() {
    return Joi.object({
      set_id: Joi.string().allow("").allow(null),

      reason_ids: Joi.array().items(Joi.number()),

      affiliate_order_id: Joi.string().allow("").allow(null),

      affiliate_id: Joi.string().allow("").allow(null),

      bag_id: Joi.number().allow(null),

      fynd_order_id: Joi.string().allow("").allow(null),

      item_id: Joi.string().allow("").allow(null),

      mongo_article_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      affiliate_bag_id: Joi.string().allow("").allow(null),
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
      reason_text: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow(""),
    });
  }

  static UpdateShipmentLockPayload() {
    return Joi.object({
      entities: Joi.array().items(OrderModel.Entities()).required(),

      action: Joi.string().allow("").required(),

      entity_type: Joi.string().allow("").required(),

      action_type: Joi.string().allow("").required(),
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
      is_locked: Joi.boolean(),

      bag_id: Joi.number(),

      affiliate_bag_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),
    });
  }

  static CheckResponse() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),

      is_bag_locked: Joi.boolean(),

      affiliate_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      is_shipment_locked: Joi.boolean(),

      original_filter: OrderModel.OriginalFilter(),

      bags: Joi.array().items(OrderModel.Bags()),

      status: Joi.string().allow(""),

      lock_status: Joi.boolean().allow(null),
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
      from_datetime: Joi.string().allow(""),

      logo_url: Joi.string().allow(""),

      title: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      platform_id: Joi.string().allow(""),

      company_id: Joi.number(),

      id: Joi.number().required(),

      platform_name: Joi.string().allow(""),

      to_datetime: Joi.string().allow(""),

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
      call_id: Joi.string().allow("").required(),

      status: Joi.boolean().required(),
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

  static ProductsReasonsData() {
    return Joi.object({
      reason_text: Joi.string().allow(""),

      reason_id: Joi.number(),
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
      reason_text: Joi.string().allow(""),

      reason_id: Joi.number(),
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
      data_updates: OrderModel.DataUpdates(),

      products: Joi.array().items(OrderModel.Products()),

      reasons: OrderModel.ReasonsData(),

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

      lock_after_transition: Joi.boolean(),

      force_transition: Joi.boolean(),

      task: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      final_state: Joi.any(),

      identifier: Joi.string().allow(""),

      exception: Joi.string().allow(""),

      meta: Joi.any(),

      message: Joi.string().allow(""),

      status: Joi.number(),

      code: Joi.string().allow(""),

      stack_trace: Joi.string().allow(""),
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

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      owner: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      description: Joi.string().allow(""),
    });
  }

  static AffiliateInventoryArticleAssignmentConfig() {
    return Joi.object({
      post_order_reassignment: Joi.boolean(),
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

  static AffiliateInventoryConfig() {
    return Joi.object({
      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

      payment: OrderModel.AffiliateInventoryPaymentConfig(),

      inventory: OrderModel.AffiliateInventoryStoreConfig(),

      order: OrderModel.AffiliateInventoryOrderConfig(),

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

      id: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),
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

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      article_lookup: Joi.string().allow(""),

      create_user: Joi.boolean(),

      store_lookup: Joi.string().allow(""),
    });
  }

  static OrderUser() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      last_name: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      state: Joi.string().allow("").required(),

      address1: Joi.string().allow("").allow(null),

      first_name: Joi.string().allow("").required(),

      address2: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),
    });
  }

  static UserData() {
    return Joi.object({
      shipping_user: OrderModel.OrderUser(),

      billing_user: OrderModel.OrderUser(),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      category: Joi.any().required(),

      _id: Joi.string().allow("").required(),

      quantity: Joi.number().required(),

      dimension: Joi.any().required(),

      weight: Joi.any().required(),

      attributes: Joi.any().required(),

      brand_id: Joi.number().required(),
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
      fulfillment_id: Joi.number().required(),

      dp_id: Joi.number().allow(null),

      affiliate_shipment_id: Joi.string().allow("").required(),

      meta: Joi.any(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      shipments: Joi.number().required(),

      box_type: Joi.string().allow("").allow(null),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      location_details: OrderModel.LocationDetails(),

      action: Joi.string().allow("").required(),

      identifier: Joi.string().allow("").required(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      source: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      journey: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),
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
      avl_qty: Joi.number().required(),

      quantity: Joi.number().required(),

      amount_paid: Joi.number().required(),

      discount: Joi.number().required(),

      affiliate_store_id: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      store_id: Joi.number().required(),

      fynd_store_id: Joi.string().allow("").required(),

      transfer_price: Joi.number().required(),

      item_size: Joi.string().allow("").required(),

      price_effective: Joi.number().required(),

      modified_on: Joi.string().allow("").required(),

      affiliate_meta: Joi.any().required(),

      hsn_code_id: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      price_marked: Joi.number().required(),

      company_id: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      item_id: Joi.number().required(),

      sku: Joi.string().allow("").required(),

      identifier: Joi.any().required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      unit_price: Joi.number().required(),
    });
  }

  static OrderPriority() {
    return Joi.object({
      fulfilment_priority_text: Joi.string().allow(""),

      fulfilment_priority: Joi.number().allow(null),

      affiliate_priority_code: Joi.string().allow("").allow(null),
    });
  }

  static OrderInfo() {
    return Joi.object({
      payment: Joi.any(),

      affiliate_order_id: Joi.string().allow(""),

      user: OrderModel.UserData().required(),

      shipping_address: OrderModel.OrderUser().required(),

      billing_address: OrderModel.OrderUser().required(),

      shipment: OrderModel.ShipmentData(),

      discount: Joi.number().required(),

      payment_mode: Joi.string().allow("").required(),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      coupon: Joi.string().allow("").allow(null),

      cod_charges: Joi.number().required(),

      delivery_charges: Joi.number().required(),

      order_value: Joi.number().required(),

      items: Joi.any().required(),

      order_priority: OrderModel.OrderPriority(),
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
      type: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      l2_detail: Joi.string().allow(""),

      bag_id: Joi.number(),

      ticket_id: Joi.string().allow(""),

      message: Joi.string().allow("").required(),

      createdat: Joi.string().allow("").required(),

      ticket_url: Joi.string().allow(""),

      l1_detail: Joi.string().allow(""),

      l3_detail: Joi.string().allow(""),
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

  static SmsDataPayload() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),

      shipment_id: Joi.number().required(),

      amount_paid: Joi.number().required(),

      payment_mode: Joi.string().allow("").required(),

      phone_number: Joi.number().required(),

      message: Joi.string().allow("").required(),

      customer_name: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),
    });
  }

  static SendSmsPayload() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      bag_id: Joi.number().required(),

      data: OrderModel.SmsDataPayload(),
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
      shipment_id: Joi.string().allow(""),

      remarks: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.number()),

      meta: OrderModel.Meta1().required(),

      status: Joi.string().allow(""),

      id: Joi.number().required(),
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

      dp_id: Joi.number().required(),

      order_type: Joi.string().allow("").required(),

      qc_required: Joi.string().allow("").required(),
    });
  }

  static ManualAssignDPToShipmentResponse() {
    return Joi.object({
      errors: Joi.array().items(Joi.string().allow("")),

      success: Joi.string().allow("").required(),
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
      state_code: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      customer_code: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      title: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      floor_no: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      country: Joi.string().allow("").required(),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      state_code: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      shipping_type: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      geo_location: Joi.any(),

      title: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      slot: Joi.array().items(Joi.any()),

      city: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      floor_no: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      country: Joi.string().allow("").required(),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      refund_by: Joi.string().allow("").required(),

      mode: Joi.string().allow("").required(),

      meta: Joi.any(),

      amount: Joi.number().required(),

      name: Joi.string().allow("").required(),

      transaction_data: Joi.any(),

      collect_by: Joi.string().allow("").required(),
    });
  }

  static PaymentInfo() {
    return Joi.object({
      payment_methods: Joi.array().items(OrderModel.PaymentMethod()),

      primary_mode: Joi.string().allow("").required(),
    });
  }

  static Tax() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      breakup: Joi.array().items(Joi.any()),

      amount: Joi.any().required(),

      rate: Joi.number().required(),
    });
  }

  static Charge() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      tax: OrderModel.Tax(),

      amount: Joi.any().required(),

      name: Joi.string().allow("").required(),

      code: Joi.string().allow(""),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      pack_by_date: Joi.string().allow(""),

      dispatch_by_date: Joi.string().allow(""),

      confirm_by_date: Joi.string().allow(""),

      customer_pickup_slot: Joi.any(),

      dp_pickup_slot: Joi.any(),

      dispatch_after_date: Joi.string().allow(""),
    });
  }

  static LineItem() {
    return Joi.object({
      external_line_id: Joi.string().allow(""),

      meta: Joi.any(),

      quantity: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      charges: Joi.array().items(OrderModel.Charge()),

      custom_messasge: Joi.string().allow(""),
    });
  }

  static Shipment() {
    return Joi.object({
      processing_dates: OrderModel.ProcessingDates(),

      meta: Joi.any(),

      external_shipment_id: Joi.string().allow(""),

      location_id: Joi.number().required(),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),

      priority: Joi.number(),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      tax_info: OrderModel.TaxInfo(),

      billing_info: OrderModel.BillingInfo().required(),

      shipping_info: OrderModel.ShippingInfo().required(),

      meta: Joi.any(),

      external_creation_date: Joi.string().allow(""),

      payment_info: OrderModel.PaymentInfo().required(),

      charges: Joi.array().items(OrderModel.Charge()),

      currency_info: Joi.any(),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      external_order_id: Joi.string().allow(""),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      request_id: Joi.string().allow("").allow(null),

      exception: Joi.string().allow("").allow(null),

      meta: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      status: Joi.number().required(),

      code: Joi.string().allow("").allow(null),

      info: Joi.any(),

      stack_trace: Joi.string().allow("").allow(null),
    });
  }

  static PaymentMethods() {
    return Joi.object({
      collect_by: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      refund_by: Joi.string().allow(""),
    });
  }

  static CreateChannelPaymentInfo() {
    return Joi.object({
      mode_of_payment: Joi.string().allow(""),

      source: Joi.string().allow(""),

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

      logo_url: Joi.any(),

      location_reassignment: Joi.boolean(),

      shipment_assignment: Joi.string().allow(""),

      payment_info: OrderModel.CreateChannelPaymentInfo(),

      dp_configuration: OrderModel.DpConfiguration(),
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
      end_date: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),

      start_date: Joi.string().allow("").required(),
    });
  }
}
module.exports = OrderModel;
