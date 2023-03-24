const Joi = require("joi");

class OrderModel {
  static FilterInfoOption() {
    return Joi.object({
      value: Joi.string().allow(""),

      name: Joi.string().allow(""),

      text: Joi.string().allow("").required(),
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

  static PaymentModeInfo() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      uid: Joi.number(),

      name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      avis_user_id: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),
    });
  }

  static Prices() {
    return Joi.object({
      discount: Joi.number(),

      amount_paid: Joi.number(),

      cod_charges: Joi.number(),

      delivery_charge: Joi.number(),

      price_effective: Joi.number(),

      refund_credit: Joi.number(),

      coupon_value: Joi.number(),

      promotion_effective_discount: Joi.number(),

      cashback_applied: Joi.number(),

      value_of_good: Joi.number(),

      transfer_price: Joi.number(),

      refund_amount: Joi.number(),

      fynd_credits: Joi.number(),

      cashback: Joi.number(),

      price_marked: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      tax_collected_at_source: Joi.number(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      name: Joi.string().allow(""),

      l1_category: Joi.array().items(Joi.string().allow("")),

      id: Joi.number(),

      department_id: Joi.number(),

      can_return: Joi.boolean(),

      color: Joi.string().allow("").allow(null),

      l3_category_name: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      l3_category: Joi.number(),

      images: Joi.array().items(Joi.string().allow("")),

      image: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow(""),

      size: Joi.string().allow(""),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      value_of_good: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),

      brand_calculated_amount: Joi.number().required(),

      gst_fee: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),
    });
  }

  static BagUnit() {
    return Joi.object({
      total_shipment_bags: Joi.number().required(),

      status: Joi.any().required(),

      item_quantity: Joi.number().required(),

      item: OrderModel.PlatformItem(),

      can_return: Joi.boolean(),

      can_cancel: Joi.boolean(),

      prices: OrderModel.Prices(),

      shipment_id: Joi.string().allow("").required(),

      ordering_channel: Joi.string().allow("").required(),

      gst: OrderModel.GSTDetailsData(),

      bag_id: Joi.number().required(),
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
      actual_status: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      total_shipments_in_order: Joi.number().required(),

      application: Joi.any(),

      id: Joi.string().allow("").required(),

      total_bags_count: Joi.number().required(),

      payment_methods: Joi.any(),

      created_at: Joi.string().allow("").required(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      shipment_id: Joi.string().allow(""),

      user: OrderModel.UserDataInfo(),

      sla: Joi.any(),

      channel: Joi.any(),

      fulfilling_centre: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      shipment_created_at: Joi.string().allow("").required(),

      shipment_status: OrderModel.ShipmentStatus(),
    });
  }

  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      filters: Joi.array().items(OrderModel.FiltersInfo()),

      page: Joi.any(),

      items: Joi.array().items(OrderModel.ShipmentItem()),

      applied_filters: Joi.any(),
    });
  }

  static Error() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      logo: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      source: Joi.string().allow(""),
    });
  }

  static Dimensions() {
    return Joi.object({
      length: Joi.number(),

      is_default: Joi.boolean(),

      height: Joi.number(),

      width: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static Meta() {
    return Joi.object({
      dimension: OrderModel.Dimensions(),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      name: Joi.string().allow(""),

      track_url: Joi.string().allow("").allow(null),

      id: Joi.number(),

      country: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      eway_bill_id: Joi.string().allow("").allow(null),
    });
  }

  static PDFLinks() {
    return Joi.object({
      invoice_a4: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      label_a6: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      invoice_a6: Joi.string().allow(""),

      delivery_challan_a4: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      label: Joi.string().allow(""),

      b2b: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),
    });
  }

  static DebugInfo() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow(""),
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
      irn: Joi.string().allow(""),

      acknowledge_no: Joi.number(),

      error_code: Joi.string().allow(""),

      signed_invoice: Joi.string().allow(""),

      signed_qr_code: Joi.string().allow(""),

      acknowledge_date: Joi.string().allow(""),

      error_message: Joi.string().allow(""),
    });
  }

  static EinvoiceInfo() {
    return Joi.object({
      invoice: OrderModel.EInvoice(),

      credit_note: OrderModel.EInvoice(),
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
      name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      address: Joi.string().allow("").allow(null).required(),

      ajio_site_id: Joi.string().allow(""),

      gstin: Joi.string().allow("").required(),
    });
  }

  static Formatted() {
    return Joi.object({
      f_max: Joi.string().allow(""),

      f_min: Joi.string().allow(""),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      forward_affiliate_shipment_id: Joi.string().allow(""),

      marketplace_store_id: Joi.string().allow(""),

      dp_sort_key: Joi.string().allow(""),

      debug_info: OrderModel.DebugInfo(),

      dp_name: Joi.string().allow(""),

      lock_data: OrderModel.LockData(),

      b2c_buyer_details: Joi.any().allow(null),

      einvoice_info: OrderModel.EinvoiceInfo(),

      assign_dp_from_sb: Joi.boolean(),

      order_type: Joi.string().allow("").allow(null),

      forward_affiliate_order_id: Joi.string().allow(""),

      return_store_node: Joi.number(),

      dp_id: Joi.string().allow("").allow(null),

      due_date: Joi.string().allow(""),

      bag_weight: Joi.any(),

      box_type: Joi.string().allow("").allow(null),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      shipment_volumetric_weight: Joi.number(),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      return_affiliate_order_id: Joi.string().allow(""),

      dp_options: Joi.any(),

      return_details: Joi.any(),

      timestamp: OrderModel.ShipmentTimeStamp(),

      shipment_weight: Joi.number(),

      same_store_available: Joi.boolean().required(),

      weight: Joi.number().required(),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      return_awb_number: Joi.string().allow(""),

      packaging_name: Joi.string().allow(""),

      awb_number: Joi.string().allow(""),

      po_number: Joi.string().allow(""),

      ewaybill_info: Joi.any().allow(null),

      external: Joi.any(),

      return_affiliate_shipment_id: Joi.string().allow(""),

      formatted: OrderModel.Formatted(),

      store_invoice_updated_date: Joi.string().allow(""),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      employee_discount: Joi.number(),

      coupon_code: Joi.string().allow("").allow(null),

      is_priority: Joi.boolean(),

      order_item_id: Joi.string().allow(""),

      loyalty_discount: Joi.number(),

      channel_order_id: Joi.string().allow("").allow(null),

      due_date: Joi.string().allow("").allow(null),

      channel_shipment_id: Joi.string().allow("").allow(null),

      box_type: Joi.string().allow("").allow(null),

      size_level_total_qty: Joi.number().allow(null),

      quantity: Joi.number(),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      affiliate_shipment_id: Joi.string().allow("").required(),

      pdf_links: OrderModel.PDFLinks(),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      affiliate_id: Joi.string().allow(""),

      company_affiliate_tag: Joi.string().allow(""),

      affiliate_store_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      affiliate_order_id: Joi.string().allow("").required(),

      ad_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow("").required(),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      status: Joi.string().allow(""),

      id: Joi.number(),

      created_at: Joi.string().allow("").allow(null),

      bag_list: Joi.array().items(Joi.string().allow("")),

      shipment_id: Joi.string().allow(""),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      phone: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      code: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      ordering_store_id: Joi.number().required(),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      ordering_channel_logo: Joi.any(),

      cod_charges: Joi.string().allow(""),

      tax_details: Joi.any(),

      affiliate_id: Joi.string().allow(""),

      order_date: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow("").required(),

      ordering_channel: Joi.string().allow(""),

      source: Joi.string().allow(""),

      order_value: Joi.string().allow(""),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),
    });
  }

  static InvoiceInfo() {
    return Joi.object({
      updated_date: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      credit_note_id: Joi.string().allow(""),

      store_invoice_id: Joi.string().allow(""),

      label_url: Joi.string().allow(""),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      app_state_name: Joi.string().allow(""),

      app_facing: Joi.boolean(),

      state_type: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      app_display_name: Joi.string().allow(""),

      notify_customer: Joi.boolean(),

      bs_id: Joi.number().required(),

      journey_type: Joi.string().allow("").required(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      status: Joi.string().allow(""),

      state_type: Joi.string().allow(""),

      bag_state_mapper: OrderModel.BagStateMapper(),

      delivery_awb_number: Joi.string().allow(""),

      created_at: Joi.string().allow("").allow(null),

      state_id: Joi.number(),

      delivery_partner_id: Joi.number(),

      shipment_id: Joi.string().allow(""),

      current_status_id: Joi.number().required(),

      updated_at: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      store_id: Joi.number(),

      bag_id: Joi.number(),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      id: Joi.number().required(),

      logo: Joi.string().allow("").required(),

      company: Joi.string().allow("").allow(null).required(),

      created_on: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      landmark: Joi.string().allow(""),

      city: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      country: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      email: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      version: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      latitude: Joi.number(),

      longitude: Joi.number(),

      area: Joi.string().allow(""),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      uid: Joi.string().allow(""),

      return_config: Joi.any(),

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
      cart_conditions: Joi.any(),

      item_criteria: OrderModel.ItemCriterias(),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      article_quantity: Joi.number(),

      promotion_name: Joi.string().allow(""),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      mrp_promotion: Joi.boolean(),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      promo_id: Joi.string().allow(""),

      amount: Joi.number(),

      promotion_type: Joi.string().allow(""),
    });
  }

  static BagGST() {
    return Joi.object({
      gst_tax_percentage: Joi.number(),

      value_of_good: Joi.number(),

      gst_tag: Joi.string().allow(""),

      gstin_code: Joi.string().allow(""),

      brand_calculated_amount: Joi.number(),

      gst_fee: Joi.number(),

      is_default_hsn_code: Joi.boolean(),

      hsn_code: Joi.string().allow(""),
    });
  }

  static BagConfigs() {
    return Joi.object({
      allow_force_return: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),
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

      gst_tax_percentage: Joi.number().required(),

      coupon_value: Joi.number().required(),

      fynd_credits: Joi.number().required(),

      gst_fee: Joi.number().required(),

      price_effective: Joi.number().required(),

      identifiers: OrderModel.Identifier().required(),

      cashback_applied: Joi.number().required(),

      total_units: Joi.number().required(),

      cashback: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      hsn_code: Joi.string().allow("").required(),

      discount: Joi.number().required(),

      amount_paid: Joi.number().required(),

      cod_charges: Joi.number().required(),

      value_of_good: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      price_marked: Joi.number().required(),

      size: Joi.string().allow("").required(),

      item_name: Joi.string().allow("").required(),

      amount_paid_roundoff: Joi.number(),

      tax_collected_at_source: Joi.number(),

      delivery_charge: Joi.number().required(),

      promotion_effective_discount: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      transfer_price: Joi.number().required(),
    });
  }

  static OrderBags() {
    return Joi.object({
      can_cancel: Joi.boolean(),

      display_name: Joi.string().allow(""),

      current_status: OrderModel.CurrentStatus(),

      entity_type: Joi.string().allow(""),

      parent_promo_bags: Joi.any(),

      identifier: Joi.string().allow(""),

      item: OrderModel.PlatformItem(),

      brand: OrderModel.OrderBrandName(),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      article: OrderModel.OrderBagArticle(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      gst_details: OrderModel.BagGST(),

      prices: OrderModel.Prices(),

      quantity: Joi.number(),

      can_return: Joi.boolean(),

      seller_identifier: Joi.string().allow(""),

      line_number: Joi.number(),

      bag_configs: OrderModel.BagConfigs(),

      financial_breakup: OrderModel.FinancialBreakup(),

      bag_id: Joi.number().required(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      forward: Joi.boolean().allow(null),

      state_type: Joi.string().allow(""),

      bag_state_mapper: OrderModel.BagStateMapper(),

      reasons: Joi.array().items(Joi.any()),

      delivery_awb_number: Joi.string().allow("").allow(null),

      state_id: Joi.number(),

      created_at: Joi.string().allow(""),

      delivery_partner_id: Joi.number().allow(null),

      bsh_id: Joi.number(),

      shipment_id: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      app_display_name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      store_id: Joi.number(),

      bag_id: Joi.number(),
    });
  }

  static TrackingList() {
    return Joi.object({
      is_current: Joi.boolean(),

      time: Joi.string().allow(""),

      status: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),

      is_passed: Joi.boolean(),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      phone: Joi.string().allow("").required(),

      id: Joi.number().required(),

      city: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      code: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      forward_shipment_id: Joi.string().allow(""),

      payments: OrderModel.ShipmentPayments(),

      delivery_slot: Joi.any(),

      payment_mode: Joi.string().allow(""),

      fulfilment_priority: Joi.number(),

      invoice_id: Joi.string().allow(""),

      meta: OrderModel.Meta(),

      lock_status: Joi.boolean(),

      journey_type: Joi.string().allow(""),

      custom_meta: Joi.array().items(Joi.any()),

      dp_details: OrderModel.DPDetailsData(),

      affiliate_details: OrderModel.AffiliateDetails(),

      status: OrderModel.ShipmentStatusData(),

      vertical: Joi.string().allow("").allow(null),

      ordering_store: OrderModel.OrderingStoreDetails(),

      coupon: Joi.any(),

      order: OrderModel.OrderDetailsData(),

      picked_date: Joi.string().allow(""),

      delivery_details: OrderModel.UserDetailsData(),

      packaging_type: Joi.string().allow(""),

      shipment_status: Joi.string().allow(""),

      priority_text: Joi.string().allow("").allow(null),

      total_items: Joi.number(),

      platform_logo: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),

      invoice: OrderModel.InvoiceInfo(),

      gst_details: OrderModel.GSTDetailsData(),

      prices: OrderModel.Prices(),

      bags: Joi.array().items(OrderModel.OrderBags()),

      user_agent: Joi.string().allow(""),

      enable_dp_tracking: Joi.boolean(),

      shipment_quantity: Joi.number(),

      total_bags: Joi.number(),

      operational_status: Joi.string().allow(""),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      payment_methods: Joi.any(),

      billing_details: OrderModel.UserDetailsData(),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      fulfilling_store: OrderModel.FulfillingStore(),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      message: Joi.string().allow(""),
    });
  }

  static OrderMeta() {
    return Joi.object({
      files: Joi.array().items(Joi.any()),

      mongo_cart_id: Joi.number(),

      order_type: Joi.string().allow(""),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      staff: Joi.any(),

      order_platform: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      ordering_store: Joi.number(),

      order_tags: Joi.array().items(Joi.any()),

      customer_note: Joi.string().allow(""),

      cart_id: Joi.number(),

      employee_id: Joi.number(),

      extra_meta: Joi.any(),

      comment: Joi.string().allow(""),

      payment_type: Joi.string().allow(""),
    });
  }

  static OrderDict() {
    return Joi.object({
      tax_details: Joi.any(),

      payment_methods: Joi.any(),

      order_date: Joi.string().allow("").required(),

      fynd_order_id: Joi.string().allow("").required(),

      meta: OrderModel.OrderMeta(),

      prices: OrderModel.Prices(),
    });
  }

  static ShipmentDetailsResponse() {
    return Joi.object({
      order: OrderModel.OrderDict(),

      success: Joi.boolean().required(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),
    });
  }

  static SubLane() {
    return Joi.object({
      value: Joi.string().allow(""),

      index: Joi.number(),

      total_items: Joi.number(),

      actions: Joi.array().items(Joi.any()),

      text: Joi.string().allow(""),
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

  static PlatformChannel() {
    return Joi.object({
      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static PlatformBreakupValues() {
    return Joi.object({
      value: Joi.string().allow(""),

      name: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static PlatformOrderItems() {
    return Joi.object({
      user_info: OrderModel.UserDataInfo(),

      total_order_value: Joi.number(),

      payment_mode: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      order_created_time: Joi.string().allow(""),

      channel: OrderModel.PlatformChannel(),

      meta: Joi.any(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      order_value: Joi.number(),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),
    });
  }

  static OrderListingResponse() {
    return Joi.object({
      success: Joi.boolean(),

      page: OrderModel.Page(),

      items: Joi.array().items(OrderModel.PlatformOrderItems()),

      lane: Joi.string().allow(""),

      message: Joi.string().allow(""),

      total_count: Joi.number(),
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

      key: Joi.string().allow("").required(),

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
      updated_time: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      status: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      meta: Joi.any(),

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
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static OmsReports() {
    return Joi.object({
      status: Joi.string().allow(""),

      request_details: Joi.any(),

      report_id: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow(""),

      report_created_at: Joi.string().allow("").allow(null),

      report_type: Joi.string().allow(""),

      s3_key: Joi.string().allow(""),

      report_name: Joi.string().allow(""),
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
      value: Joi.string().allow(""),

      type: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      success: Joi.boolean(),

      identifier: Joi.string().allow(""),

      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

      data: Joi.array().items(Joi.any()),

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
      store_code: Joi.string().allow(""),

      company_id: Joi.string().allow(""),

      invoice_status: Joi.string().allow(""),

      data: Joi.any(),

      invoice: Joi.any(),

      store_name: Joi.string().allow(""),

      store_id: Joi.string().allow(""),

      label: Joi.any(),

      do_invoice_label_generated: Joi.boolean().required(),

      batch_id: Joi.string().allow("").required(),
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
      operation: Joi.string().allow(""),

      namespace: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      upload: OrderModel.FileUploadResponse(),

      file_name: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      cdn: OrderModel.URL(),

      content_type: Joi.string().allow(""),

      method: Joi.string().allow(""),

      size: Joi.number(),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      current: Joi.number(),

      has_next: Joi.boolean(),

      type: Joi.string().allow(""),

      has_previous: Joi.boolean(),

      total: Joi.number(),

      size: Joi.number(),
    });
  }

  static bulkListingData() {
    return Joi.object({
      id: Joi.string().allow(""),

      company_id: Joi.number(),

      file_name: Joi.string().allow(""),

      user_name: Joi.string().allow(""),

      excel_url: Joi.string().allow(""),

      failed: Joi.number(),

      status: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      successful: Joi.number(),

      uploaded_on: Joi.string().allow(""),

      processing: Joi.number(),

      failed_shipments: Joi.array().items(Joi.any()),

      store_code: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      total: Joi.number(),

      batch_id: Joi.string().allow(""),

      store_id: Joi.number(),

      successful_shipments: Joi.array().items(Joi.any()),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      success: Joi.boolean(),

      page: OrderModel.BulkListingPage(),

      data: Joi.array().items(OrderModel.bulkListingData()),

      error: Joi.string().allow(""),
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
      qc_type: Joi.array().items(Joi.string().allow("")),

      id: Joi.number(),

      display_name: Joi.string().allow(""),

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
      successful_shipments_count: Joi.number(),

      company_id: Joi.string().allow(""),

      processing_shipments_count: Joi.number(),

      failed_shipments_count: Joi.number(),

      total_shipments_count: Joi.number(),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      batch_id: Joi.string().allow(""),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      success: Joi.string().allow(""),

      status: Joi.boolean(),

      user_id: Joi.string().allow(""),

      error: Joi.array().items(Joi.string().allow("")),

      uploaded_by: Joi.string().allow(""),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      failed_records: Joi.array().items(Joi.string().allow("")),

      message: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      total_gst_percentage: Joi.number(),

      po_line_amount: Joi.number(),

      item_base_price: Joi.number(),

      docker_number: Joi.string().allow(""),

      po_tax_amount: Joi.number(),

      partial_can_ret: Joi.boolean(),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),
    });
  }

  static Attributes() {
    return Joi.object({
      primary_color_hex: Joi.string().allow(""),

      name: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      essential: Joi.string().allow(""),

      primary_material: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      brand_name: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      item_id: Joi.number().required(),

      can_cancel: Joi.boolean(),

      gender: Joi.string().allow("").allow(null),

      brand_id: Joi.number().required(),

      meta: Joi.any(),

      webstore_product_url: Joi.string().allow("").allow(null),

      l1_category: Joi.array().items(Joi.string().allow("")),

      department_id: Joi.number(),

      color: Joi.string().allow("").allow(null),

      brand: Joi.string().allow("").required(),

      l1_category_id: Joi.number(),

      l2_category: Joi.array().items(Joi.string().allow("")),

      last_updated_at: Joi.string().allow(""),

      l2_category_id: Joi.number(),

      l3_category_name: Joi.string().allow(""),

      slug_key: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      size: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      can_return: Joi.boolean(),

      branch_url: Joi.string().allow("").allow(null),

      l3_category: Joi.number(),

      image: Joi.array().items(Joi.string().allow("")).required(),

      attributes: OrderModel.Attributes().required(),
    });
  }

  static Brand() {
    return Joi.object({
      logo: Joi.string().allow(""),

      credit_note_expiry_days: Joi.number().allow(null),

      script_last_ran: Joi.string().allow("").allow(null),

      credit_note_allowed: Joi.boolean(),

      pickup_location: Joi.string().allow("").allow(null),

      company: Joi.string().allow("").required(),

      start_date: Joi.string().allow("").allow(null),

      invoice_prefix: Joi.string().allow("").allow(null),

      brand_id: Joi.number().required(),

      created_on: Joi.number(),

      is_virtual_invoice: Joi.boolean().allow(null),

      brand_name: Joi.string().allow("").required(),

      modified_on: Joi.number(),
    });
  }

  static StoreEinvoice() {
    return Joi.object({
      user: Joi.string().allow(""),

      enabled: Joi.boolean().required(),

      username: Joi.string().allow(""),

      password: Joi.string().allow(""),
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
      ds_type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      verified: Joi.boolean().required(),

      url: Joi.string().allow(""),

      legal_name: Joi.string().allow("").required(),
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

      username: Joi.string().allow(""),

      password: Joi.string().allow(""),
    });
  }

  static StoreMeta() {
    return Joi.object({
      stage: Joi.string().allow("").required(),

      timing: Joi.array().items(Joi.any()),

      ewaybill_portal_details: Joi.any(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      display_name: Joi.string().allow("").required(),

      additional_contact_details: Joi.any(),

      gst_number: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      documents: OrderModel.StoreDocuments(),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      product_return_config: Joi.any(),
    });
  }

  static StoreAddress() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      created_at: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      landmark: Joi.string().allow(""),

      phone: Joi.string().allow("").allow(null).required(),

      country_code: Joi.string().allow("").required(),

      version: Joi.string().allow(""),

      area: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      address_category: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      address_type: Joi.string().allow("").required(),
    });
  }

  static Store() {
    return Joi.object({
      is_enabled_for_recon: Joi.boolean(),

      country: Joi.string().allow("").required(),

      mall_area: Joi.string().allow("").allow(null),

      store_active_from: Joi.string().allow("").allow(null),

      company_id: Joi.number().required(),

      location_type: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      brand_id: Joi.any(),

      meta: OrderModel.StoreMeta().required(),

      latitude: Joi.number().required(),

      packaging_material_count: Joi.number(),

      login_username: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      created_at: Joi.string().allow("").required(),

      is_archived: Joi.boolean(),

      parent_store_id: Joi.number(),

      updated_at: Joi.string().allow("").allow(null),

      vat_no: Joi.string().allow("").allow(null),

      longitude: Joi.number().required(),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      order_integration_id: Joi.string().allow(""),

      phone: Joi.number().required(),

      s_id: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      store_address_json: OrderModel.StoreAddress(),

      code: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      mall_name: Joi.string().allow("").allow(null),

      state: Joi.string().allow("").required(),

      alohomora_user_id: Joi.number(),

      pincode: Joi.string().allow("").required(),

      store_email: Joi.string().allow("").required(),
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
      uid: Joi.string().allow("").required(),

      is_set: Joi.boolean(),

      return_config: OrderModel.ReturnConfig(),

      a_set: Joi.any().allow(null),

      identifiers: OrderModel.Identifier().required(),

      seller_identifier: Joi.string().allow("").required(),

      raw_meta: Joi.any(),

      child_details: Joi.any().allow(null),

      weight: OrderModel.Weight(),

      dimensions: OrderModel.Dimensions(),

      esp_modified: Joi.any(),

      _id: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      size: Joi.string().allow("").required(),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      employee_discount: Joi.number(),

      loyalty_discount: Joi.number(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_bag_id: Joi.string().allow("").required(),
    });
  }

  static Dates() {
    return Joi.object({
      delivery_date: Joi.any(),

      order_created: Joi.string().allow(""),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      gst_tax_percentage: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      igst_tax_percentage: Joi.number().required(),

      sgst_tax_percentage: Joi.number().required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      igst_gst_fee: Joi.string().allow("").required(),

      gst_tag: Joi.string().allow("").required(),

      gstin_code: Joi.string().allow("").allow(null),

      brand_calculated_amount: Joi.number().required(),

      cgst_tax_percentage: Joi.number().required(),

      gst_fee: Joi.number().required(),

      is_default_hsn_code: Joi.boolean(),

      hsn_code: Joi.string().allow("").required(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      original_bag_list: Joi.array().items(Joi.number()),

      display_name: Joi.string().allow(""),

      current_status: OrderModel.BagStatusHistory().required(),

      article_details: OrderModel.ArticleDetails(),

      meta: OrderModel.BagMeta(),

      entity_type: Joi.string().allow(""),

      journey_type: Joi.string().allow("").required(),

      affiliate_details: OrderModel.AffiliateDetails(),

      parent_promo_bags: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      identifier: Joi.string().allow(""),

      item: OrderModel.Item().required(),

      brand: OrderModel.Brand().required(),

      ordering_store: OrderModel.Store(),

      article: OrderModel.Article().required(),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      dates: OrderModel.Dates(),

      applied_promos: Joi.array().items(Joi.any()),

      order_integration_id: Joi.string().allow("").allow(null),

      b_id: Joi.number().required(),

      restore_promos: Joi.any(),

      restore_coupon: Joi.boolean(),

      shipment_id: Joi.string().allow(""),

      gst_details: OrderModel.BagGSTDetails().required(),

      prices: OrderModel.Prices().required(),

      b_type: Joi.string().allow(""),

      quantity: Joi.number(),

      bag_update_time: Joi.number(),

      no_of_bags_order: Joi.number(),

      reasons: Joi.array().items(Joi.any()),

      bag_status_history: OrderModel.BagStatusHistory(),

      operational_status: Joi.string().allow(""),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      seller_identifier: Joi.string().allow(""),

      line_number: Joi.number(),

      qc_required: Joi.any(),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),
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

      has_next: Joi.boolean().required(),

      item_total: Joi.number().required(),

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
      status: Joi.number().required(),

      error_trace: Joi.string().allow(""),

      message: Joi.string().allow("").required(),
    });
  }

  static StoreReassign() {
    return Joi.object({
      affiliate_id: Joi.string().allow("").allow(null),

      bag_id: Joi.number().allow(null),

      affiliate_order_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      set_id: Joi.string().allow("").allow(null),

      mongo_article_id: Joi.string().allow("").allow(null),

      fynd_order_id: Joi.string().allow("").allow(null),

      reason_ids: Joi.array().items(Joi.number()),

      affiliate_bag_id: Joi.string().allow("").allow(null),

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
      affiliate_shipment_id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),

      affiliate_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow(""),
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
      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),
    });
  }

  static Bags() {
    return Joi.object({
      is_locked: Joi.boolean(),

      bag_id: Joi.number(),

      affiliate_order_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow(""),
    });
  }

  static CheckResponse() {
    return Joi.object({
      status: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      is_bag_locked: Joi.boolean(),

      affiliate_id: Joi.string().allow(""),

      lock_status: Joi.boolean().allow(null),

      shipment_id: Joi.string().allow(""),

      original_filter: OrderModel.OriginalFilter(),

      bags: Joi.array().items(OrderModel.Bags()),

      is_shipment_locked: Joi.boolean(),
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
      platform_name: Joi.string().allow(""),

      id: Joi.number().required(),

      from_datetime: Joi.string().allow(""),

      to_datetime: Joi.string().allow(""),

      platform_id: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      logo_url: Joi.string().allow(""),

      title: Joi.string().allow(""),

      description: Joi.string().allow(""),

      company_id: Joi.number(),
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

  static ProductsReasonsFilters() {
    return Joi.object({
      quantity: Joi.number(),

      line_number: Joi.number(),

      identifier: Joi.string().allow(""),
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

  static ReasonsData() {
    return Joi.object({
      products: Joi.array().items(OrderModel.ProductsReasons()),

      entities: Joi.array().items(OrderModel.EntitiesReasons()),
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

  static Products() {
    return Joi.object({
      quantity: Joi.number(),

      line_number: Joi.number(),

      identifier: Joi.string().allow(""),
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
      force_transition: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),

      task: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      status: Joi.number(),

      code: Joi.string().allow(""),

      stack_trace: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      meta: Joi.any(),

      final_state: Joi.any(),

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

  static AffiliateStoreIdMapping() {
    return Joi.object({
      marketplace_store_id: Joi.string().allow("").required(),

      store_id: Joi.number().required(),
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
      owner: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      name: Joi.string().allow("").required(),

      description: Joi.string().allow(""),
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
      source: Joi.string().allow(""),

      mode_of_payment: Joi.string().allow(""),
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
      store_lookup: Joi.string().allow(""),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      create_user: Joi.boolean(),

      article_lookup: Joi.string().allow(""),

      bag_end_state: Joi.string().allow(""),

      affiliate: OrderModel.Affiliate().required(),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      _id: Joi.string().allow("").required(),

      quantity: Joi.number().required(),

      category: Joi.any().required(),

      weight: Joi.any().required(),

      dimension: Joi.any().required(),

      attributes: Joi.any().required(),

      brand_id: Joi.number().required(),
    });
  }

  static ShipmentDetails() {
    return Joi.object({
      affiliate_shipment_id: Joi.string().allow("").required(),

      dp_id: Joi.number().allow(null),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      box_type: Joi.string().allow("").allow(null),

      shipments: Joi.number().required(),

      fulfillment_id: Joi.number().required(),

      meta: Joi.any(),
    });
  }

  static LocationDetails() {
    return Joi.object({
      fulfillment_type: Joi.string().allow("").required(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      fulfillment_id: Joi.number().required(),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      location_details: OrderModel.LocationDetails(),

      journey: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      identifier: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

      source: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),
    });
  }

  static ShipmentData() {
    return Joi.object({
      shipment_data: OrderModel.ShipmentConfig().required(),
    });
  }

  static OrderUser() {
    return Joi.object({
      last_name: Joi.string().allow("").required(),

      address2: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      address1: Joi.string().allow("").allow(null),

      pincode: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      phone: Joi.number().required(),
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

  static MarketPlacePdf() {
    return Joi.object({
      invoice: Joi.string().allow("").allow(null),

      label: Joi.string().allow("").allow(null),
    });
  }

  static AffiliateBag() {
    return Joi.object({
      quantity: Joi.number().required(),

      avl_qty: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      sku: Joi.string().allow("").required(),

      transfer_price: Joi.number().required(),

      amount_paid: Joi.number().required(),

      identifier: Joi.any().required(),

      affiliate_store_id: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      fynd_store_id: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      store_id: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      discount: Joi.number().required(),

      item_size: Joi.string().allow("").required(),

      price_marked: Joi.number().required(),

      item_id: Joi.number().required(),

      price_effective: Joi.number().required(),

      unit_price: Joi.number().required(),

      seller_identifier: Joi.string().allow("").required(),

      affiliate_meta: Joi.any().required(),

      company_id: Joi.number().required(),
    });
  }

  static OrderInfo() {
    return Joi.object({
      shipment: OrderModel.ShipmentData(),

      discount: Joi.number().required(),

      user: OrderModel.UserData().required(),

      order_priority: OrderModel.OrderPriority(),

      coupon: Joi.string().allow("").allow(null),

      delivery_charges: Joi.number().required(),

      shipping_address: OrderModel.OrderUser().required(),

      cod_charges: Joi.number().required(),

      payment_mode: Joi.string().allow("").required(),

      payment: Joi.any(),

      affiliate_order_id: Joi.string().allow(""),

      billing_address: OrderModel.OrderUser().required(),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      items: Joi.any().required(),

      order_value: Joi.number().required(),
    });
  }

  static CreateOrderPayload() {
    return Joi.object({
      order_config: OrderModel.OrderConfig().required(),

      order_info: OrderModel.OrderInfo().required(),

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
      description: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      display_text: Joi.string().allow("").required(),

      id: Joi.number().required(),
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

      user: Joi.string().allow("").required(),

      createdat: Joi.string().allow("").required(),

      l2_detail: Joi.string().allow(""),

      bag_id: Joi.number(),

      l1_detail: Joi.string().allow(""),

      ticket_url: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      ticket_id: Joi.string().allow(""),

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
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static PostHistoryFilters() {
    return Joi.object({
      line_number: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

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

  static SmsDataPayload() {
    return Joi.object({
      country_code: Joi.string().allow("").required(),

      customer_name: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      shipment_id: Joi.number().required(),

      amount_paid: Joi.number().required(),

      payment_mode: Joi.string().allow("").required(),

      phone_number: Joi.number().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static SendSmsPayload() {
    return Joi.object({
      slug: Joi.string().allow("").required(),

      bag_id: Joi.number().required(),

      data: OrderModel.SmsDataPayload(),
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
      status: Joi.string().allow(""),

      id: Joi.number().required(),

      shipment_id: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.number()),

      meta: OrderModel.Meta1().required(),

      remarks: Joi.string().allow(""),
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
      order_type: Joi.string().allow("").required(),

      shipment_ids: Joi.array().items(Joi.string().allow("")),

      dp_id: Joi.number().required(),

      qc_required: Joi.string().allow("").required(),
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
      amount: Joi.number().required(),

      mode: Joi.string().allow("").required(),

      collect_by: Joi.string().allow("").required(),

      transaction_data: Joi.any(),

      meta: Joi.any(),

      name: Joi.string().allow("").required(),

      refund_by: Joi.string().allow("").required(),
    });
  }

  static PaymentInfo() {
    return Joi.object({
      payment_methods: Joi.array().items(OrderModel.PaymentMethod()),

      primary_mode: Joi.string().allow("").required(),
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
      country_code: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      primary_mobile_number: Joi.string().allow("").required(),

      floor_no: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      title: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      dp_pickup_slot: Joi.any(),

      customer_pickup_slot: Joi.any(),

      confirm_by_date: Joi.string().allow(""),

      dispatch_by_date: Joi.string().allow(""),

      dispatch_after_date: Joi.string().allow(""),

      pack_by_date: Joi.string().allow(""),
    });
  }

  static Tax() {
    return Joi.object({
      breakup: Joi.array().items(Joi.any()),

      rate: Joi.number().required(),

      name: Joi.string().allow("").required(),

      amount: Joi.any().required(),
    });
  }

  static Charge() {
    return Joi.object({
      tax: OrderModel.Tax(),

      amount: Joi.any().required(),

      code: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static LineItem() {
    return Joi.object({
      quantity: Joi.number(),

      custom_messasge: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),

      external_line_id: Joi.string().allow(""),

      meta: Joi.any(),

      charges: Joi.array().items(OrderModel.Charge()),
    });
  }

  static Shipment() {
    return Joi.object({
      location_id: Joi.number().required(),

      external_shipment_id: Joi.string().allow(""),

      processing_dates: OrderModel.ProcessingDates(),

      meta: Joi.any(),

      priority: Joi.number(),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      landmark: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      shipping_type: Joi.string().allow(""),

      geo_location: Joi.any(),

      pincode: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      slot: Joi.array().items(Joi.any()),

      alternate_email: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      primary_mobile_number: Joi.string().allow("").required(),

      floor_no: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      title: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      payment_info: OrderModel.PaymentInfo().required(),

      external_creation_date: Joi.string().allow(""),

      external_order_id: Joi.string().allow(""),

      tax_info: OrderModel.TaxInfo(),

      billing_info: OrderModel.BillingInfo().required(),

      currency_info: Joi.any(),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      meta: Joi.any(),

      charges: Joi.array().items(OrderModel.Charge()),

      shipping_info: OrderModel.ShippingInfo().required(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      status: Joi.number().required(),

      request_id: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      info: Joi.any(),

      stack_trace: Joi.string().allow("").allow(null),

      meta: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      exception: Joi.string().allow("").allow(null),
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

      dp_configuration: OrderModel.DpConfiguration(),

      shipment_assignment: Joi.string().allow(""),

      location_reassignment: Joi.boolean(),

      lock_states: Joi.array().items(Joi.string().allow("")),

      logo_url: Joi.any(),
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

      is_inserted: Joi.boolean(),

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
      end_date: Joi.string().allow("").required(),

      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),

      mobile: Joi.number().required(),

      start_date: Joi.string().allow("").required(),
    });
  }
}
module.exports = OrderModel;
