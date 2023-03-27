const Joi = require("joi");

class OrderModel {
  static ShipmentStatus() {
    return Joi.object({
      hex_code: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      brand_calculated_amount: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number().required(),

      gst_fee: Joi.number().required(),

      value_of_good: Joi.number().required(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      department_id: Joi.number(),

      id: Joi.number(),

      can_cancel: Joi.boolean(),

      code: Joi.string().allow(""),

      color: Joi.string().allow("").allow(null),

      name: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      l3_category_name: Joi.string().allow(""),

      l3_category: Joi.number(),

      size: Joi.string().allow(""),

      can_return: Joi.boolean(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      image: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Prices() {
    return Joi.object({
      cashback_applied: Joi.number(),

      delivery_charge: Joi.number(),

      fynd_credits: Joi.number(),

      refund_credit: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      tax_collected_at_source: Joi.number(),

      amount_paid: Joi.number(),

      cashback: Joi.number(),

      price_marked: Joi.number(),

      cod_charges: Joi.number(),

      coupon_value: Joi.number(),

      refund_amount: Joi.number(),

      price_effective: Joi.number(),

      promotion_effective_discount: Joi.number(),

      discount: Joi.number(),

      value_of_good: Joi.number(),

      transfer_price: Joi.number(),
    });
  }

  static BagUnit() {
    return Joi.object({
      gst: OrderModel.GSTDetailsData(),

      item: OrderModel.PlatformItem(),

      item_quantity: Joi.number().required(),

      ordering_channel: Joi.string().allow("").required(),

      can_cancel: Joi.boolean(),

      prices: OrderModel.Prices(),

      shipment_id: Joi.string().allow("").required(),

      status: Joi.any().required(),

      total_shipment_bags: Joi.number().required(),

      can_return: Joi.boolean(),

      bag_id: Joi.number().required(),
    });
  }

  static PaymentModeInfo() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      is_anonymous_user: Joi.boolean(),

      mobile: Joi.string().allow(""),

      name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      email: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      avis_user_id: Joi.string().allow(""),

      uid: Joi.number(),
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

      payment_methods: Joi.any(),

      created_at: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      prices: OrderModel.Prices(),

      channel: Joi.any(),

      shipment_id: Joi.string().allow(""),

      fulfilling_centre: Joi.string().allow("").required(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      sla: Joi.any(),

      shipment_created_at: Joi.string().allow("").required(),

      total_bags_count: Joi.number().required(),

      application: Joi.any(),

      user: OrderModel.UserDataInfo(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      total_shipments_in_order: Joi.number().required(),
    });
  }

  static FilterInfoOption() {
    return Joi.object({
      name: Joi.string().allow(""),

      value: Joi.string().allow(""),

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

  static BagStateMapper() {
    return Joi.object({
      app_display_name: Joi.string().allow(""),

      journey_type: Joi.string().allow("").required(),

      app_state_name: Joi.string().allow(""),

      state_type: Joi.string().allow("").required(),

      app_facing: Joi.boolean(),

      display_name: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      notify_customer: Joi.boolean(),

      is_active: Joi.boolean(),

      bs_id: Joi.number().required(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      created_at: Joi.string().allow(""),

      app_display_name: Joi.string().allow(""),

      bsh_id: Joi.number(),

      state_type: Joi.string().allow(""),

      store_id: Joi.number(),

      display_name: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      shipment_id: Joi.string().allow(""),

      delivery_partner_id: Joi.number().allow(null),

      status: Joi.string().allow("").required(),

      forward: Joi.boolean().allow(null),

      updated_at: Joi.string().allow(""),

      reasons: Joi.array().items(Joi.any()),

      delivery_awb_number: Joi.string().allow("").allow(null),

      bag_id: Joi.number(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      state_id: Joi.number(),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      mode: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      source: Joi.string().allow(""),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      created_at: Joi.string().allow("").allow(null),

      id: Joi.number(),

      shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.string().allow("")),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      store_name: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      state: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      ordering_store_id: Joi.number().required(),

      contact_person: Joi.string().allow("").required(),
    });
  }

  static BagGST() {
    return Joi.object({
      gst_tax_percentage: Joi.number(),

      brand_calculated_amount: Joi.number(),

      gstin_code: Joi.string().allow(""),

      is_default_hsn_code: Joi.boolean(),

      gst_fee: Joi.number(),

      gst_tag: Joi.string().allow(""),

      value_of_good: Joi.number(),

      hsn_code: Joi.string().allow(""),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      created_at: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      city: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      longitude: Joi.number(),

      state: Joi.string().allow(""),

      email: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      version: Joi.string().allow(""),

      area: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      latitude: Joi.number(),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      id: Joi.number().required(),

      modified_on: Joi.string().allow(""),

      company: Joi.string().allow("").allow(null).required(),

      brand_name: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      return_config: Joi.any(),

      identifiers: Joi.any(),

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
      gst_tax_percentage: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),

      cod_charges: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      promotion_effective_discount: Joi.number().required(),

      value_of_good: Joi.number().required(),

      total_units: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      fynd_credits: Joi.number().required(),

      refund_credit: Joi.number().required(),

      discount: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      identifiers: OrderModel.Identifier().required(),

      cashback: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      coupon_value: Joi.number().required(),

      gst_fee: Joi.number().required(),

      transfer_price: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      cashback_applied: Joi.number().required(),

      tax_collected_at_source: Joi.number(),

      amount_paid: Joi.number().required(),

      price_marked: Joi.number().required(),

      size: Joi.string().allow("").required(),

      price_effective: Joi.number().required(),
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
      article_quantity: Joi.number(),

      promo_id: Joi.string().allow(""),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      amount: Joi.number(),

      promotion_name: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      promotion_type: Joi.string().allow(""),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      created_at: Joi.string().allow("").allow(null),

      state_type: Joi.string().allow(""),

      store_id: Joi.number(),

      kafka_sync: Joi.boolean(),

      delivery_partner_id: Joi.number(),

      status: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      current_status_id: Joi.number().required(),

      updated_at: Joi.string().allow(""),

      delivery_awb_number: Joi.string().allow(""),

      bag_id: Joi.number(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      state_id: Joi.number(),
    });
  }

  static BagConfigs() {
    return Joi.object({
      can_be_cancelled: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static OrderBags() {
    return Joi.object({
      gst_details: OrderModel.BagGST(),

      parent_promo_bags: Joi.any(),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      line_number: Joi.number(),

      entity_type: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      display_name: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      brand: OrderModel.OrderBrandName(),

      seller_identifier: Joi.string().allow(""),

      bag_id: Joi.number().required(),

      can_cancel: Joi.boolean(),

      article: OrderModel.OrderBagArticle(),

      financial_breakup: OrderModel.FinancialBreakup(),

      quantity: Joi.number(),

      item: OrderModel.PlatformItem(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      can_return: Joi.boolean(),

      current_status: OrderModel.CurrentStatus(),

      bag_configs: OrderModel.BagConfigs(),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),
    });
  }

  static Dimensions() {
    return Joi.object({
      unit: Joi.string().allow(""),

      length: Joi.number(),

      height: Joi.number(),

      width: Joi.number(),

      is_default: Joi.boolean(),
    });
  }

  static Meta() {
    return Joi.object({
      dimension: OrderModel.Dimensions(),
    });
  }

  static TrackingList() {
    return Joi.object({
      text: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      is_current: Joi.boolean(),

      is_passed: Joi.boolean(),

      time: Joi.string().allow(""),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      order_date: Joi.string().allow(""),

      order_value: Joi.string().allow(""),

      tax_details: Joi.any(),

      ordering_channel: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      cod_charges: Joi.string().allow(""),

      source: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow("").required(),

      ordering_channel_logo: Joi.any(),
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
      gstin: Joi.string().allow("").required(),

      ajio_site_id: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      address: Joi.string().allow("").allow(null).required(),

      name: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      pincode: Joi.number().required(),
    });
  }

  static Formatted() {
    return Joi.object({
      f_max: Joi.string().allow(""),

      f_min: Joi.string().allow(""),
    });
  }

  static EInvoice() {
    return Joi.object({
      error_code: Joi.string().allow(""),

      signed_qr_code: Joi.string().allow(""),

      signed_invoice: Joi.string().allow(""),

      acknowledge_date: Joi.string().allow(""),

      irn: Joi.string().allow(""),

      acknowledge_no: Joi.number(),

      error_message: Joi.string().allow(""),
    });
  }

  static EinvoiceInfo() {
    return Joi.object({
      credit_note: OrderModel.EInvoice(),

      invoice: OrderModel.EInvoice(),
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

  static ShipmentMeta() {
    return Joi.object({
      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      ewaybill_info: Joi.any().allow(null),

      po_number: Joi.string().allow(""),

      return_awb_number: Joi.string().allow(""),

      b2c_buyer_details: Joi.any().allow(null),

      return_store_node: Joi.number(),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      store_invoice_updated_date: Joi.string().allow(""),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      shipment_weight: Joi.number(),

      awb_number: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      same_store_available: Joi.boolean().required(),

      lock_data: OrderModel.LockData(),

      marketplace_store_id: Joi.string().allow(""),

      dp_name: Joi.string().allow(""),

      dp_options: Joi.any(),

      external: Joi.any(),

      dp_sort_key: Joi.string().allow(""),

      order_type: Joi.string().allow("").allow(null),

      return_affiliate_order_id: Joi.string().allow(""),

      due_date: Joi.string().allow(""),

      forward_affiliate_order_id: Joi.string().allow(""),

      weight: Joi.number().required(),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      shipment_volumetric_weight: Joi.number(),

      formatted: OrderModel.Formatted(),

      einvoice_info: OrderModel.EinvoiceInfo(),

      assign_dp_from_sb: Joi.boolean(),

      packaging_name: Joi.string().allow(""),

      timestamp: OrderModel.ShipmentTimeStamp(),

      return_affiliate_shipment_id: Joi.string().allow(""),

      return_details: Joi.any(),

      dp_id: Joi.string().allow("").allow(null),

      debug_info: OrderModel.DebugInfo(),

      bag_weight: Joi.any(),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      channel_shipment_id: Joi.string().allow("").allow(null),

      box_type: Joi.string().allow("").allow(null),

      order_item_id: Joi.string().allow(""),

      due_date: Joi.string().allow("").allow(null),

      size_level_total_qty: Joi.number().allow(null),

      coupon_code: Joi.string().allow("").allow(null),

      loyalty_discount: Joi.number(),

      channel_order_id: Joi.string().allow("").allow(null),

      employee_discount: Joi.number(),

      is_priority: Joi.boolean(),

      quantity: Joi.number(),
    });
  }

  static PDFLinks() {
    return Joi.object({
      label_a6: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      b2b: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      invoice: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),

      delivery_challan_a4: Joi.string().allow(""),

      label: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      company_affiliate_tag: Joi.string().allow(""),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      affiliate_bag_id: Joi.string().allow("").required(),

      ad_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow("").required(),

      affiliate_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      pdf_links: OrderModel.PDFLinks(),
    });
  }

  static InvoiceInfo() {
    return Joi.object({
      updated_date: Joi.string().allow(""),

      credit_note_id: Joi.string().allow(""),

      label_url: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      store_invoice_id: Joi.string().allow(""),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      store_name: Joi.string().allow("").required(),

      id: Joi.number().required(),

      fulfillment_channel: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      state: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      awb_no: Joi.string().allow(""),

      id: Joi.number(),

      track_url: Joi.string().allow("").allow(null),

      name: Joi.string().allow(""),

      country: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      eway_bill_id: Joi.string().allow("").allow(null),

      pincode: Joi.string().allow(""),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      shipment_status: Joi.string().allow(""),

      gst_details: OrderModel.GSTDetailsData(),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      journey_type: Joi.string().allow(""),

      payments: OrderModel.ShipmentPayments(),

      lock_status: Joi.boolean(),

      status: OrderModel.ShipmentStatusData(),

      ordering_store: OrderModel.OrderingStoreDetails(),

      priority_text: Joi.string().allow("").allow(null),

      vertical: Joi.string().allow("").allow(null),

      total_items: Joi.number(),

      coupon: Joi.any(),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      bags: Joi.array().items(OrderModel.OrderBags()),

      enable_dp_tracking: Joi.boolean(),

      prices: OrderModel.Prices(),

      delivery_details: OrderModel.UserDetailsData(),

      meta: OrderModel.Meta(),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      operational_status: Joi.string().allow(""),

      fulfilment_priority: Joi.number(),

      delivery_slot: Joi.any(),

      platform_logo: Joi.string().allow(""),

      payment_methods: Joi.any(),

      order: OrderModel.OrderDetailsData(),

      user_agent: Joi.string().allow(""),

      total_bags: Joi.number(),

      affiliate_details: OrderModel.AffiliateDetails(),

      invoice: OrderModel.InvoiceInfo(),

      packaging_type: Joi.string().allow(""),

      fulfilling_store: OrderModel.FulfillingStore(),

      dp_details: OrderModel.DPDetailsData(),

      custom_meta: Joi.array().items(Joi.any()),

      forward_shipment_id: Joi.string().allow(""),

      picked_date: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),

      invoice_id: Joi.string().allow(""),

      shipment_quantity: Joi.number(),

      billing_details: OrderModel.UserDetailsData(),

      payment_mode: Joi.string().allow(""),
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

      mongo_cart_id: Joi.number(),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      employee_id: Joi.number(),

      files: Joi.array().items(Joi.any()),

      cart_id: Joi.number(),

      payment_type: Joi.string().allow(""),

      customer_note: Joi.string().allow(""),

      order_tags: Joi.array().items(Joi.any()),

      order_platform: Joi.string().allow(""),

      ordering_store: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      extra_meta: Joi.any(),

      order_type: Joi.string().allow(""),

      comment: Joi.string().allow(""),
    });
  }

  static OrderDict() {
    return Joi.object({
      payment_methods: Joi.any(),

      order_date: Joi.string().allow("").required(),

      tax_details: Joi.any(),

      prices: OrderModel.Prices(),

      meta: OrderModel.OrderMeta(),

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
      actions: Joi.array().items(Joi.any()),

      value: Joi.string().allow(""),

      text: Joi.string().allow(""),

      index: Joi.number(),

      total_items: Joi.number(),
    });
  }

  static SuperLane() {
    return Joi.object({
      total_items: Joi.number(),

      options: Joi.array().items(OrderModel.SubLane()),

      value: Joi.string().allow("").required(),

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

  static PlatformBreakupValues() {
    return Joi.object({
      name: Joi.string().allow(""),

      display: Joi.string().allow(""),

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
      user_info: OrderModel.UserDataInfo(),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      order_id: Joi.string().allow(""),

      total_order_value: Joi.number(),

      channel: OrderModel.PlatformChannel(),

      order_created_time: Joi.string().allow(""),

      meta: Joi.any(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      order_value: Joi.number(),

      payment_mode: Joi.string().allow(""),
    });
  }

  static OrderListingResponse() {
    return Joi.object({
      page: OrderModel.Page(),

      message: Joi.string().allow(""),

      items: Joi.array().items(OrderModel.PlatformOrderItems()),

      total_count: Joi.number(),

      success: Joi.boolean(),

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
      options: Joi.array().items(OrderModel.Options()),

      value: Joi.number().required(),

      key: Joi.string().allow("").required(),

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
      account_name: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      meta: Joi.any(),

      awb: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      status: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),
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
      report_type: Joi.string().allow(""),

      report_name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      status: Joi.string().allow(""),

      report_id: Joi.string().allow(""),

      s3_key: Joi.string().allow(""),

      report_created_at: Joi.string().allow("").allow(null),

      report_requested_at: Joi.string().allow("").allow(null),

      request_details: Joi.any(),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      article_id: Joi.string().allow(""),

      jio_code: Joi.string().allow(""),

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

      value: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

      data: Joi.array().items(Joi.any()),

      identifier: Joi.string().allow(""),

      trace_id: Joi.string().allow(""),

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
      store_name: Joi.string().allow(""),

      batch_id: Joi.string().allow("").required(),

      company_id: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      data: Joi.any(),

      store_id: Joi.string().allow(""),

      invoice: Joi.any(),

      do_invoice_label_generated: Joi.boolean().required(),

      invoice_status: Joi.string().allow(""),

      label: Joi.any(),
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
      file_path: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      content_type: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      namespace: Joi.string().allow(""),

      method: Joi.string().allow(""),

      operation: Joi.string().allow(""),

      size: Joi.number(),

      upload: OrderModel.FileUploadResponse(),

      cdn: OrderModel.URL(),
    });
  }

  static bulkListingData() {
    return Joi.object({
      store_id: Joi.number(),

      status: Joi.string().allow(""),

      successful_shipments: Joi.array().items(Joi.any()),

      id: Joi.string().allow(""),

      user_name: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      successful: Joi.number(),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      failed_shipments: Joi.array().items(Joi.any()),

      total: Joi.number(),

      user_id: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      batch_id: Joi.string().allow(""),

      company_id: Joi.number(),

      store_code: Joi.string().allow(""),

      failed: Joi.number(),

      processing: Joi.number(),

      excel_url: Joi.string().allow(""),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),

      size: Joi.number(),

      total: Joi.number(),

      current: Joi.number(),

      type: Joi.string().allow(""),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      data: Joi.array().items(OrderModel.bulkListingData()),

      page: OrderModel.BulkListingPage(),

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
      display_name: Joi.string().allow(""),

      qc_type: Joi.array().items(Joi.string().allow("")),

      id: Joi.number(),

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
      status: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static BulkActionDetailsDataField() {
    return Joi.object({
      batch_id: Joi.string().allow(""),

      company_id: Joi.string().allow(""),

      processing_shipments_count: Joi.number(),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      successful_shipments_count: Joi.number(),

      total_shipments_count: Joi.number(),

      failed_shipments_count: Joi.number(),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      error: Joi.array().items(Joi.string().allow("")),

      uploaded_by: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      status: Joi.boolean(),

      message: Joi.string().allow(""),

      success: Joi.string().allow(""),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      gst_tax_percentage: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      sgst_tax_percentage: Joi.number().required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      igst_tax_percentage: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      igst_gst_fee: Joi.string().allow("").required(),

      gstin_code: Joi.string().allow("").allow(null),

      tax_collected_at_source: Joi.number().required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      is_default_hsn_code: Joi.boolean(),

      gst_fee: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),

      cgst_tax_percentage: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),
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

  static Dates() {
    return Joi.object({
      delivery_date: Joi.any(),

      order_created: Joi.string().allow(""),
    });
  }

  static StoreAddress() {
    return Joi.object({
      address2: Joi.string().allow(""),

      email: Joi.string().allow(""),

      area: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      phone: Joi.string().allow("").allow(null).required(),

      contact_person: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      longitude: Joi.number().required(),

      updated_at: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      latitude: Joi.number().required(),

      created_at: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      address_category: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      version: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),
    });
  }

  static Document() {
    return Joi.object({
      legal_name: Joi.string().allow("").required(),

      verified: Joi.boolean().required(),

      value: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

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
      user: Joi.string().allow(""),

      password: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static StoreMeta() {
    return Joi.object({
      ewaybill_portal_details: Joi.any(),

      documents: OrderModel.StoreDocuments(),

      product_return_config: Joi.any(),

      display_name: Joi.string().allow("").required(),

      timing: Joi.array().items(Joi.any()),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      stage: Joi.string().allow("").required(),

      gst_number: Joi.string().allow(""),

      additional_contact_details: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Store() {
    return Joi.object({
      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      address2: Joi.string().allow(""),

      login_username: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      brand_id: Joi.any(),

      store_address_json: OrderModel.StoreAddress(),

      mall_name: Joi.string().allow("").allow(null),

      order_integration_id: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      meta: OrderModel.StoreMeta().required(),

      name: Joi.string().allow("").required(),

      alohomora_user_id: Joi.number(),

      is_active: Joi.boolean(),

      contact_person: Joi.string().allow("").required(),

      packaging_material_count: Joi.number(),

      store_email: Joi.string().allow("").required(),

      is_archived: Joi.boolean(),

      mall_area: Joi.string().allow("").allow(null),

      longitude: Joi.number().required(),

      parent_store_id: Joi.number(),

      updated_at: Joi.string().allow("").allow(null),

      location_type: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      created_at: Joi.string().allow("").required(),

      vat_no: Joi.string().allow("").allow(null),

      company_id: Joi.number().required(),

      address1: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      s_id: Joi.string().allow("").required(),

      store_active_from: Joi.string().allow("").allow(null),

      is_enabled_for_recon: Joi.boolean(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      partial_can_ret: Joi.boolean(),

      po_line_amount: Joi.number(),

      po_tax_amount: Joi.number(),

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

  static Brand() {
    return Joi.object({
      credit_note_allowed: Joi.boolean(),

      logo: Joi.string().allow(""),

      credit_note_expiry_days: Joi.number().allow(null),

      modified_on: Joi.number(),

      script_last_ran: Joi.string().allow("").allow(null),

      company: Joi.string().allow("").required(),

      invoice_prefix: Joi.string().allow("").allow(null),

      start_date: Joi.string().allow("").allow(null),

      created_on: Joi.number(),

      brand_id: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),

      is_virtual_invoice: Joi.boolean().allow(null),

      pickup_location: Joi.string().allow("").allow(null),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow("").required(),

      loyalty_discount: Joi.number(),

      employee_discount: Joi.number(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),
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
      unit: Joi.string().allow(""),

      is_default: Joi.boolean(),

      shipping: Joi.number(),
    });
  }

  static Article() {
    return Joi.object({
      _id: Joi.string().allow("").required(),

      identifiers: OrderModel.Identifier().required(),

      code: Joi.string().allow(""),

      is_set: Joi.boolean(),

      return_config: OrderModel.ReturnConfig(),

      dimensions: OrderModel.Dimensions(),

      weight: OrderModel.Weight(),

      size: Joi.string().allow("").required(),

      child_details: Joi.any().allow(null),

      a_set: Joi.any().allow(null),

      seller_identifier: Joi.string().allow("").required(),

      esp_modified: Joi.any(),

      raw_meta: Joi.any(),

      uid: Joi.string().allow("").required(),
    });
  }

  static Attributes() {
    return Joi.object({
      marketer_name: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      essential: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),

      primary_material: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      code: Joi.string().allow(""),

      l3_category_name: Joi.string().allow(""),

      brand_id: Joi.number().required(),

      image: Joi.array().items(Joi.string().allow("")).required(),

      l1_category_id: Joi.number(),

      department_id: Joi.number(),

      color: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      name: Joi.string().allow("").required(),

      gender: Joi.string().allow("").allow(null),

      branch_url: Joi.string().allow("").allow(null),

      item_id: Joi.number().required(),

      brand: Joi.string().allow("").required(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      webstore_product_url: Joi.string().allow("").allow(null),

      can_cancel: Joi.boolean(),

      last_updated_at: Joi.string().allow(""),

      l3_category: Joi.number(),

      attributes: OrderModel.Attributes().required(),

      l2_category_id: Joi.number(),

      size: Joi.string().allow("").required(),

      slug_key: Joi.string().allow("").required(),

      can_return: Joi.boolean(),

      l2_category: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      gst_details: OrderModel.BagGSTDetails().required(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      bag_status_history: OrderModel.BagStatusHistory(),

      parent_promo_bags: Joi.any(),

      restore_promos: Joi.any(),

      journey_type: Joi.string().allow("").required(),

      tags: Joi.array().items(Joi.string().allow("")),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      dates: OrderModel.Dates(),

      ordering_store: OrderModel.Store(),

      line_number: Joi.number(),

      entity_type: Joi.string().allow(""),

      restore_coupon: Joi.boolean(),

      order_integration_id: Joi.string().allow("").allow(null),

      prices: OrderModel.Prices().required(),

      display_name: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      meta: OrderModel.BagMeta(),

      brand: OrderModel.Brand().required(),

      operational_status: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      article_details: OrderModel.ArticleDetails(),

      b_id: Joi.number().required(),

      affiliate_details: OrderModel.AffiliateDetails(),

      b_type: Joi.string().allow(""),

      bag_update_time: Joi.number(),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      article: OrderModel.Article().required(),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      qc_required: Joi.any(),

      no_of_bags_order: Joi.number(),

      quantity: Joi.number(),

      item: OrderModel.Item().required(),

      applied_promos: Joi.array().items(Joi.any()),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      shipment_id: Joi.string().allow(""),

      original_bag_list: Joi.array().items(Joi.number()),

      reasons: Joi.array().items(Joi.any()),

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

      size: Joi.number().required(),

      page_type: Joi.string().allow("").required(),

      item_total: Joi.number().required(),

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
      shipment_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

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

      status: Joi.number().required(),

      error_trace: Joi.string().allow(""),
    });
  }

  static StoreReassign() {
    return Joi.object({
      set_id: Joi.string().allow("").allow(null),

      reason_ids: Joi.array().items(Joi.number()),

      affiliate_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      bag_id: Joi.number().allow(null),

      affiliate_order_id: Joi.string().allow("").allow(null),

      mongo_article_id: Joi.string().allow("").allow(null),

      fynd_order_id: Joi.string().allow("").allow(null),

      item_id: Joi.string().allow("").allow(null),
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

      affiliate_bag_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),

      id: Joi.string().allow(""),
    });
  }

  static UpdateShipmentLockPayload() {
    return Joi.object({
      action: Joi.string().allow("").required(),

      entities: Joi.array().items(OrderModel.Entities()).required(),

      entity_type: Joi.string().allow("").required(),

      action_type: Joi.string().allow("").required(),
    });
  }

  static Bags() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow(""),

      is_locked: Joi.boolean(),

      bag_id: Joi.number(),

      affiliate_order_id: Joi.string().allow(""),
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
      shipment_id: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.Bags()),

      original_filter: OrderModel.OriginalFilter(),

      is_bag_locked: Joi.boolean(),

      affiliate_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      lock_status: Joi.boolean().allow(null),

      affiliate_shipment_id: Joi.string().allow(""),

      is_shipment_locked: Joi.boolean(),
    });
  }

  static UpdateShipmentLockResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),

      check_response: Joi.array().items(OrderModel.CheckResponse()),
    });
  }

  static AnnouncementResponse() {
    return Joi.object({
      to_datetime: Joi.string().allow(""),

      from_datetime: Joi.string().allow(""),

      platform_name: Joi.string().allow(""),

      description: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      logo_url: Joi.string().allow(""),

      title: Joi.string().allow(""),

      platform_id: Joi.string().allow(""),

      company_id: Joi.number(),

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

  static Products() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      line_number: Joi.number(),

      quantity: Joi.number(),
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
      identifier: Joi.string().allow(""),

      line_number: Joi.number(),

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
      shipments: Joi.array().items(OrderModel.ShipmentsRequest()),

      exclude_bags_next_state: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static UpdateShipmentStatusRequest() {
    return Joi.object({
      lock_after_transition: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),

      force_transition: Joi.boolean(),

      task: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      stack_trace: Joi.string().allow(""),

      final_state: Joi.any(),

      status: Joi.number(),

      identifier: Joi.string().allow(""),

      code: Joi.string().allow(""),

      meta: Joi.any(),

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
      invoice: Joi.string().allow("").allow(null),

      label: Joi.string().allow("").allow(null),
    });
  }

  static AffiliateBag() {
    return Joi.object({
      _id: Joi.string().allow("").required(),

      sku: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow("").required(),

      affiliate_meta: Joi.any().required(),

      item_size: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      fynd_store_id: Joi.string().allow("").required(),

      identifier: Joi.any().required(),

      price_marked: Joi.number().required(),

      discount: Joi.number().required(),

      store_id: Joi.number().required(),

      price_effective: Joi.number().required(),

      avl_qty: Joi.number().required(),

      transfer_price: Joi.number().required(),

      amount_paid: Joi.number().required(),

      seller_identifier: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      unit_price: Joi.number().required(),

      quantity: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      affiliate_store_id: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      pdf_links: OrderModel.MarketPlacePdf(),
    });
  }

  static OrderUser() {
    return Joi.object({
      first_name: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      address2: Joi.string().allow("").allow(null),

      phone: Joi.number().required(),

      city: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      address1: Joi.string().allow("").allow(null),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),
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
      _id: Joi.string().allow("").required(),

      quantity: Joi.number().required(),

      dimension: Joi.any().required(),

      brand_id: Joi.number().required(),

      category: Joi.any().required(),

      attributes: Joi.any().required(),

      weight: Joi.any().required(),
    });
  }

  static ShipmentDetails() {
    return Joi.object({
      shipments: Joi.number().required(),

      fulfillment_id: Joi.number().required(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      meta: Joi.any(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      box_type: Joi.string().allow("").allow(null),

      dp_id: Joi.number().allow(null),
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
      to_pincode: Joi.string().allow("").required(),

      identifier: Joi.string().allow("").required(),

      journey: Joi.string().allow("").required(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      source: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

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

      fulfilment_priority: Joi.number().allow(null),

      affiliate_priority_code: Joi.string().allow("").allow(null),
    });
  }

  static OrderInfo() {
    return Joi.object({
      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      user: OrderModel.UserData().required(),

      cod_charges: Joi.number().required(),

      shipment: OrderModel.ShipmentData(),

      discount: Joi.number().required(),

      order_priority: OrderModel.OrderPriority(),

      payment: Joi.any(),

      shipping_address: OrderModel.OrderUser().required(),

      items: Joi.any().required(),

      order_value: Joi.number().required(),

      delivery_charges: Joi.number().required(),

      affiliate_order_id: Joi.string().allow(""),

      billing_address: OrderModel.OrderUser().required(),

      payment_mode: Joi.string().allow("").required(),

      coupon: Joi.string().allow("").allow(null),
    });
  }

  static AffiliateStoreIdMapping() {
    return Joi.object({
      marketplace_store_id: Joi.string().allow("").required(),

      store_id: Joi.number().required(),
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

  static AffiliateInventoryOrderConfig() {
    return Joi.object({
      force_reassignment: Joi.boolean(),
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

      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

      order: OrderModel.AffiliateInventoryOrderConfig(),

      inventory: OrderModel.AffiliateInventoryStoreConfig(),

      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),
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
      owner: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      name: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),

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
      token: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      config: OrderModel.AffiliateConfig(),
    });
  }

  static OrderConfig() {
    return Joi.object({
      article_lookup: Joi.string().allow(""),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      affiliate: OrderModel.Affiliate().required(),

      bag_end_state: Joi.string().allow(""),

      store_lookup: Joi.string().allow(""),

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
      description: Joi.string().allow("").required(),

      id: Joi.number().required(),

      display_text: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),
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
      l2_detail: Joi.string().allow(""),

      createdat: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      l3_detail: Joi.string().allow(""),

      l1_detail: Joi.string().allow(""),

      ticket_id: Joi.string().allow(""),

      bag_id: Joi.number(),

      ticket_url: Joi.string().allow(""),

      message: Joi.string().allow("").required(),
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
      amount_paid: Joi.number().required(),

      payment_mode: Joi.string().allow("").required(),

      shipment_id: Joi.number().required(),

      customer_name: Joi.string().allow("").required(),

      phone_number: Joi.number().required(),

      country_code: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),
    });
  }

  static SendSmsPayload() {
    return Joi.object({
      data: OrderModel.SmsDataPayload(),

      bag_id: Joi.number().required(),

      slug: Joi.string().allow("").required(),
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

      status: Joi.string().allow(""),

      meta: OrderModel.Meta1().required(),

      id: Joi.number().required(),
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
      qc_required: Joi.string().allow("").required(),

      dp_id: Joi.number().required(),

      order_type: Joi.string().allow("").required(),

      shipment_ids: Joi.array().items(Joi.string().allow("")),
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
      breakup: Joi.array().items(Joi.any()),

      amount: Joi.any().required(),

      name: Joi.string().allow("").required(),

      rate: Joi.number().required(),
    });
  }

  static Charge() {
    return Joi.object({
      amount: Joi.any().required(),

      tax: OrderModel.Tax(),

      type: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      name: Joi.string().allow("").required(),
    });
  }

  static LineItem() {
    return Joi.object({
      seller_identifier: Joi.string().allow("").required(),

      external_line_id: Joi.string().allow(""),

      custom_messasge: Joi.string().allow(""),

      charges: Joi.array().items(OrderModel.Charge()),

      quantity: Joi.number(),

      meta: Joi.any(),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      dispatch_by_date: Joi.string().allow(""),

      confirm_by_date: Joi.string().allow(""),

      customer_pickup_slot: Joi.any(),

      pack_by_date: Joi.string().allow(""),

      dp_pickup_slot: Joi.any(),

      dispatch_after_date: Joi.string().allow(""),
    });
  }

  static Shipment() {
    return Joi.object({
      line_items: Joi.array().items(OrderModel.LineItem()).required(),

      external_shipment_id: Joi.string().allow(""),

      location_id: Joi.number().required(),

      meta: Joi.any(),

      processing_dates: OrderModel.ProcessingDates(),

      priority: Joi.number(),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      amount: Joi.number().required(),

      collect_by: Joi.string().allow("").required(),

      refund_by: Joi.string().allow("").required(),

      mode: Joi.string().allow("").required(),

      meta: Joi.any(),

      transaction_data: Joi.any(),

      name: Joi.string().allow("").required(),
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
      alternate_email: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      shipping_type: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      title: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      state_code: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      slot: Joi.array().items(Joi.any()),

      city: Joi.string().allow("").required(),

      customer_code: Joi.string().allow(""),

      geo_location: Joi.any(),

      floor_no: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),
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

      gender: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      title: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      state_code: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      customer_code: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      payment_info: OrderModel.PaymentInfo().required(),

      currency_info: Joi.any(),

      external_order_id: Joi.string().allow(""),

      external_creation_date: Joi.string().allow(""),

      charges: Joi.array().items(OrderModel.Charge()),

      meta: Joi.any(),

      shipping_info: OrderModel.ShippingInfo().required(),

      tax_info: OrderModel.TaxInfo(),

      billing_info: OrderModel.BillingInfo().required(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      stack_trace: Joi.string().allow("").allow(null),

      status: Joi.number().required(),

      info: Joi.any(),

      code: Joi.string().allow("").allow(null),

      meta: Joi.string().allow("").allow(null),

      request_id: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      exception: Joi.string().allow("").allow(null),
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

      payment_methods: Joi.array().items(OrderModel.PaymentMethods()),

      mode_of_payment: Joi.string().allow(""),
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

      location_reassignment: Joi.boolean(),

      dp_configuration: OrderModel.DpConfiguration(),

      lock_states: Joi.array().items(Joi.string().allow("")),

      shipment_assignment: Joi.string().allow(""),

      logo_url: Joi.any(),
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

      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),

      start_date: Joi.string().allow("").required(),

      end_date: Joi.string().allow("").required(),
    });
  }
}
module.exports = OrderModel;
