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

      options: Joi.array().items(OrderModel.FilterInfoOption()),

      text: Joi.string().allow("").required(),
    });
  }

  static PaymentModeInfo() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),
    });
  }

  static Prices() {
    return Joi.object({
      transfer_price: Joi.number(),

      discount: Joi.number(),

      cod_charges: Joi.number(),

      cashback: Joi.number(),

      value_of_good: Joi.number(),

      refund_credit: Joi.number(),

      amount_paid: Joi.number(),

      price_effective: Joi.number(),

      price_marked: Joi.number(),

      refund_amount: Joi.number(),

      delivery_charge: Joi.number(),

      fynd_credits: Joi.number(),

      tax_collected_at_source: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      cashback_applied: Joi.number(),

      promotion_effective_discount: Joi.number(),

      coupon_value: Joi.number(),
    });
  }

  static ShipmentItemFulFillingStore() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      avis_user_id: Joi.string().allow(""),

      email: Joi.string().allow(""),

      name: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      last_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      gstin_code: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),

      gst_fee: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      name: Joi.string().allow(""),

      id: Joi.number(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      l3_category: Joi.number(),

      images: Joi.array().items(Joi.string().allow("")),

      can_cancel: Joi.boolean(),

      can_return: Joi.boolean(),

      department_id: Joi.number(),

      image: Joi.array().items(Joi.string().allow("")),

      size: Joi.string().allow(""),

      l3_category_name: Joi.string().allow(""),

      color: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),
    });
  }

  static BagUnit() {
    return Joi.object({
      shipment_id: Joi.string().allow("").required(),

      status: Joi.any().required(),

      prices: OrderModel.Prices(),

      gst: OrderModel.GSTDetailsData(),

      can_cancel: Joi.boolean(),

      total_shipment_bags: Joi.number().required(),

      bag_id: Joi.number().required(),

      can_return: Joi.boolean(),

      ordering_channel: Joi.string().allow("").required(),

      item_quantity: Joi.number().required(),

      item: OrderModel.PlatformItem(),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),

      shipment_created_at: Joi.string().allow("").required(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      sla: Joi.any(),

      id: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      company: Joi.any(),

      user: OrderModel.UserDataInfo(),

      total_shipments_in_order: Joi.number().required(),

      created_at: Joi.string().allow("").required(),

      shipment_status: OrderModel.ShipmentStatus(),

      channel: Joi.any(),

      total_bags_count: Joi.number().required(),

      fulfilling_centre: Joi.string().allow("").required(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      payment_methods: Joi.any(),

      application: Joi.any(),
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
      source: Joi.string().allow(""),

      cod_charges: Joi.string().allow(""),

      order_value: Joi.string().allow(""),

      tax_details: Joi.any(),

      order_date: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      ordering_channel: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),

      fynd_order_id: Joi.string().allow("").required(),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),

      id: Joi.number(),

      status: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.string().allow("")),

      created_at: Joi.string().allow("").allow(null),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      email: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      pincode: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      ordering_store_id: Joi.number().required(),

      address: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      contact_person: Joi.string().allow("").required(),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      mode: Joi.string().allow(""),

      source: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static CompanyDetails() {
    return Joi.object({
      company_cin: Joi.string().allow(""),

      company_id: Joi.number(),

      company_name: Joi.string().allow(""),

      address: Joi.any(),
    });
  }

  static LockData() {
    return Joi.object({
      mto: Joi.boolean(),

      locked: Joi.boolean(),

      lock_message: Joi.string().allow(""),
    });
  }

  static Formatted() {
    return Joi.object({
      f_min: Joi.string().allow(""),

      f_max: Joi.string().allow(""),
    });
  }

  static ShipmentTimeStamp() {
    return Joi.object({
      t_min: Joi.string().allow(""),

      t_max: Joi.string().allow(""),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      ajio_site_id: Joi.string().allow(""),

      pincode: Joi.number().required(),

      name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address: Joi.string().allow("").allow(null).required(),

      state: Joi.string().allow("").required(),

      gstin: Joi.string().allow("").required(),
    });
  }

  static EInvoice() {
    return Joi.object({
      signed_invoice: Joi.string().allow(""),

      signed_qr_code: Joi.string().allow(""),

      error_code: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      irn: Joi.string().allow(""),

      acknowledge_no: Joi.number(),

      acknowledge_date: Joi.string().allow(""),
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

  static ShipmentMeta() {
    return Joi.object({
      packaging_name: Joi.string().allow(""),

      same_store_available: Joi.boolean().required(),

      dp_id: Joi.string().allow("").allow(null),

      external: Joi.any(),

      weight: Joi.number().required(),

      awb_number: Joi.string().allow(""),

      return_affiliate_shipment_id: Joi.string().allow(""),

      forward_affiliate_order_id: Joi.string().allow(""),

      order_type: Joi.string().allow("").allow(null),

      dp_sort_key: Joi.string().allow(""),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      bag_weight: Joi.any(),

      dp_options: Joi.any(),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      lock_data: OrderModel.LockData(),

      shipment_volumetric_weight: Joi.number(),

      formatted: OrderModel.Formatted(),

      timestamp: OrderModel.ShipmentTimeStamp(),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      b2c_buyer_details: Joi.any().allow(null),

      einvoice_info: OrderModel.EinvoiceInfo(),

      marketplace_store_id: Joi.string().allow(""),

      shipment_weight: Joi.number(),

      return_affiliate_order_id: Joi.string().allow(""),

      return_awb_number: Joi.string().allow(""),

      ewaybill_info: Joi.any().allow(null),

      assign_dp_from_sb: Joi.boolean(),

      po_number: Joi.string().allow(""),

      return_store_node: Joi.number(),

      due_date: Joi.string().allow(""),

      store_invoice_updated_date: Joi.string().allow(""),

      return_details: Joi.any(),

      debug_info: OrderModel.DebugInfo(),

      dp_name: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      quantity: Joi.number(),

      loyalty_discount: Joi.number(),

      employee_discount: Joi.number(),

      channel_order_id: Joi.string().allow("").allow(null),

      is_priority: Joi.boolean(),

      order_item_id: Joi.string().allow(""),

      due_date: Joi.string().allow("").allow(null),

      channel_shipment_id: Joi.string().allow("").allow(null),

      coupon_code: Joi.string().allow("").allow(null),

      size_level_total_qty: Joi.number().allow(null),

      box_type: Joi.string().allow("").allow(null),
    });
  }

  static PDFLinks() {
    return Joi.object({
      label_a4: Joi.string().allow(""),

      b2b: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      invoice_a4: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),

      label: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      delivery_challan_a4: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      invoice: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      company_affiliate_tag: Joi.string().allow(""),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      affiliate_store_id: Joi.string().allow("").required(),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      pdf_links: OrderModel.PDFLinks(),

      ad_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow("").required(),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      pincode: Joi.string().allow("").required(),

      id: Joi.number().required(),

      store_name: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      contact_person: Joi.string().allow("").required(),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      eway_bill_id: Joi.string().allow("").allow(null),

      pincode: Joi.string().allow(""),

      name: Joi.string().allow(""),

      id: Joi.number(),

      track_url: Joi.string().allow("").allow(null),

      country: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

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
      discount: Joi.number().required(),

      cashback: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      fynd_credits: Joi.number().required(),

      total_units: Joi.number().required(),

      cod_charges: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      value_of_good: Joi.number().required(),

      refund_credit: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      amount_paid: Joi.number().required(),

      price_effective: Joi.number().required(),

      price_marked: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      size: Joi.string().allow("").required(),

      amount_paid_roundoff: Joi.number(),

      promotion_effective_discount: Joi.number().required(),

      coupon_value: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      gst_fee: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      delivery_charge: Joi.number().required(),

      tax_collected_at_source: Joi.number(),

      gst_tag: Joi.string().allow("").required(),

      cashback_applied: Joi.number().required(),

      transfer_price: Joi.number().required(),

      identifiers: OrderModel.Identifier().required(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      area: Joi.string().allow(""),

      email: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow(""),

      longitude: Joi.number(),

      city: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      state: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      latitude: Joi.number(),

      address1: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      version: Joi.string().allow(""),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      notify_customer: Joi.boolean(),

      name: Joi.string().allow("").required(),

      app_display_name: Joi.string().allow(""),

      bs_id: Joi.number().required(),

      state_type: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      app_facing: Joi.boolean(),

      display_name: Joi.string().allow("").required(),

      journey_type: Joi.string().allow("").required(),

      app_state_name: Joi.string().allow(""),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),

      bag_state_mapper: OrderModel.BagStateMapper(),

      status: Joi.string().allow(""),

      state_id: Joi.number(),

      delivery_awb_number: Joi.string().allow(""),

      state_type: Joi.string().allow(""),

      delivery_partner_id: Joi.number(),

      bag_id: Joi.number(),

      created_at: Joi.string().allow("").allow(null),

      store_id: Joi.number(),

      current_status_id: Joi.number().required(),

      kafka_sync: Joi.boolean(),

      updated_at: Joi.string().allow(""),
    });
  }

  static BagConfigs() {
    return Joi.object({
      enable_tracking: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),
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
      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      promotion_type: Joi.string().allow(""),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      promotion_name: Joi.string().allow(""),

      article_quantity: Joi.number(),

      promo_id: Joi.string().allow(""),

      amount: Joi.number(),

      mrp_promotion: Joi.boolean(),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      id: Joi.number().required(),

      modified_on: Joi.string().allow(""),

      company: Joi.string().allow("").allow(null).required(),

      brand_name: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),
    });
  }

  static BagGST() {
    return Joi.object({
      hsn_code: Joi.string().allow(""),

      gst_tax_percentage: Joi.number(),

      gstin_code: Joi.string().allow(""),

      value_of_good: Joi.number(),

      is_default_hsn_code: Joi.boolean(),

      gst_fee: Joi.number(),

      brand_calculated_amount: Joi.number(),

      gst_tag: Joi.string().allow(""),
    });
  }

  static OrderBags() {
    return Joi.object({
      seller_identifier: Joi.string().allow(""),

      financial_breakup: OrderModel.FinancialBreakup(),

      parent_promo_bags: Joi.any(),

      bag_id: Joi.number().required(),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      quantity: Joi.number(),

      prices: OrderModel.Prices(),

      current_status: OrderModel.CurrentStatus(),

      entity_type: Joi.string().allow(""),

      bag_configs: OrderModel.BagConfigs(),

      identifier: Joi.string().allow(""),

      article: OrderModel.OrderBagArticle(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      brand: OrderModel.OrderBrandName(),

      display_name: Joi.string().allow(""),

      item: OrderModel.PlatformItem(),

      gst_details: OrderModel.BagGST(),

      can_cancel: Joi.boolean(),

      can_return: Joi.boolean(),

      line_number: Joi.number(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),

      bsh_id: Joi.number(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      status: Joi.string().allow("").required(),

      state_id: Joi.number(),

      reasons: Joi.array().items(Joi.any()),

      app_display_name: Joi.string().allow(""),

      delivery_awb_number: Joi.string().allow("").allow(null),

      delivery_partner_id: Joi.number().allow(null),

      state_type: Joi.string().allow(""),

      bag_id: Joi.number(),

      created_at: Joi.string().allow(""),

      store_id: Joi.number(),

      display_name: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      updated_at: Joi.string().allow(""),

      forward: Joi.boolean().allow(null),
    });
  }

  static TrackingList() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      is_passed: Joi.boolean(),

      time: Joi.string().allow(""),

      text: Joi.string().allow("").required(),

      is_current: Joi.boolean(),
    });
  }

  static InvoiceInfo() {
    return Joi.object({
      label_url: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      credit_note_id: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),

      store_invoice_id: Joi.string().allow(""),
    });
  }

  static Dimensions() {
    return Joi.object({
      unit: Joi.string().allow(""),

      is_default: Joi.boolean(),

      length: Joi.number(),

      width: Joi.number(),

      height: Joi.number(),
    });
  }

  static Meta() {
    return Joi.object({
      dimension: OrderModel.Dimensions(),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      shipment_id: Joi.string().allow("").required(),

      enable_dp_tracking: Joi.boolean(),

      order: OrderModel.OrderDetailsData(),

      status: OrderModel.ShipmentStatusData(),

      custom_meta: Joi.array().items(Joi.any()),

      packaging_type: Joi.string().allow(""),

      picked_date: Joi.string().allow(""),

      priority_text: Joi.string().allow("").allow(null),

      journey_type: Joi.string().allow(""),

      billing_details: OrderModel.UserDetailsData(),

      ordering_store: OrderModel.OrderingStoreDetails(),

      payments: OrderModel.ShipmentPayments(),

      forward_shipment_id: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      delivery_slot: Joi.any(),

      platform_logo: Joi.string().allow(""),

      company_details: OrderModel.CompanyDetails(),

      vertical: Joi.string().allow("").allow(null),

      affiliate_details: OrderModel.AffiliateDetails(),

      delivery_details: OrderModel.UserDetailsData(),

      invoice_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      lock_status: Joi.boolean(),

      fulfilling_store: OrderModel.FulfillingStore(),

      coupon: Joi.any(),

      total_bags: Joi.number(),

      dp_details: OrderModel.DPDetailsData(),

      bags: Joi.array().items(OrderModel.OrderBags()),

      payment_methods: Joi.any(),

      shipment_quantity: Joi.number(),

      gst_details: OrderModel.GSTDetailsData(),

      total_items: Joi.number(),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      operational_status: Joi.string().allow(""),

      user_agent: Joi.string().allow(""),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      user: OrderModel.UserDataInfo(),

      shipment_status: Joi.string().allow(""),

      fulfilment_priority: Joi.number(),

      invoice: OrderModel.InvoiceInfo(),

      meta: OrderModel.Meta(),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean().required(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),
    });
  }

  static TaxDetails() {
    return Joi.object({
      pan_no: Joi.string().allow(""),

      gstin: Joi.string().allow(""),
    });
  }

  static TransactionData() {
    return Joi.object({
      currency: Joi.string().allow(""),

      status: Joi.string().allow(""),

      unique_reference_number: Joi.string().allow(""),

      payment_id: Joi.string().allow(""),

      terminal_id: Joi.string().allow(""),

      entity: Joi.string().allow(""),

      amount_paid: Joi.string().allow(""),

      transaction_id: Joi.string().allow(""),
    });
  }

  static BillingStaffDetails() {
    return Joi.object({
      user: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      staff_id: Joi.number(),

      first_name: Joi.string().allow(""),
    });
  }

  static PlatformUserDetails() {
    return Joi.object({
      platform_user_last_name: Joi.string().allow(""),

      platform_user_first_name: Joi.string().allow(""),

      platform_user_id: Joi.string().allow(""),
    });
  }

  static OrderMeta() {
    return Joi.object({
      staff: Joi.any(),

      order_type: Joi.string().allow(""),

      ordering_store: Joi.number(),

      employee_id: Joi.number(),

      transaction_data: OrderModel.TransactionData(),

      customer_note: Joi.string().allow(""),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      mongo_cart_id: Joi.number(),

      order_platform: Joi.string().allow(""),

      files: Joi.array().items(Joi.any()),

      order_tags: Joi.array().items(Joi.any()),

      payment_type: Joi.string().allow(""),

      billing_staff_details: OrderModel.BillingStaffDetails(),

      comment: Joi.string().allow(""),

      company_logo: Joi.string().allow(""),

      cart_id: Joi.number(),

      extra_meta: Joi.any(),

      platform_user_details: OrderModel.PlatformUserDetails(),

      currency_symbol: Joi.string().allow(""),
    });
  }

  static OrderDict() {
    return Joi.object({
      prices: OrderModel.Prices(),

      order_date: Joi.string().allow("").required(),

      tax_details: OrderModel.TaxDetails(),

      meta: OrderModel.OrderMeta(),

      fynd_order_id: Joi.string().allow("").required(),

      payment_methods: Joi.any(),
    });
  }

  static ShipmentDetailsResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      order: OrderModel.OrderDict(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),
    });
  }

  static SubLane() {
    return Joi.object({
      total_items: Joi.number(),

      value: Joi.string().allow(""),

      actions: Joi.array().items(Joi.any()),

      text: Joi.string().allow(""),

      index: Joi.number(),
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

  static PlatformChannel() {
    return Joi.object({
      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static PlatformBreakupValues() {
    return Joi.object({
      name: Joi.string().allow(""),

      value: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static PlatformOrderItems() {
    return Joi.object({
      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      order_created_time: Joi.string().allow(""),

      order_value: Joi.number(),

      total_order_value: Joi.number(),

      channel: OrderModel.PlatformChannel(),

      order_id: Joi.string().allow(""),

      user_info: OrderModel.UserDataInfo(),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      meta: Joi.any(),

      payment_mode: Joi.string().allow(""),
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

      success: Joi.boolean(),

      items: Joi.array().items(OrderModel.PlatformOrderItems()),

      page: OrderModel.Page(),

      lane: Joi.string().allow(""),

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
      updated_time: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      status: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      meta: Joi.any(),

      last_location_recieved_at: Joi.string().allow(""),
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

      returned: Joi.array().items(OrderModel.FiltersInfo()),

      filters: Joi.array().items(OrderModel.FiltersInfo()),

      processed: Joi.array().items(OrderModel.FiltersInfo()),

      unfulfilled: Joi.array().items(OrderModel.FiltersInfo()),
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
      report_type: Joi.string().allow(""),

      request_details: Joi.any(),

      s3_key: Joi.string().allow(""),

      status: Joi.string().allow(""),

      report_name: Joi.string().allow(""),

      report_id: Joi.string().allow(""),

      report_created_at: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      jio_code: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

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

      type: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      success: Joi.boolean(),

      trace_id: Joi.string().allow(""),

      data: Joi.array().items(Joi.any()),

      identifier: Joi.string().allow(""),

      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),
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

      do_invoice_label_generated: Joi.boolean().required(),

      label: Joi.any(),

      data: Joi.any(),

      store_code: Joi.string().allow(""),

      store_id: Joi.string().allow(""),

      company_id: Joi.string().allow(""),

      invoice: Joi.any(),

      invoice_status: Joi.string().allow(""),
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
      method: Joi.string().allow(""),

      namespace: Joi.string().allow(""),

      content_type: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      file_path: Joi.string().allow(""),

      operation: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      size: Joi.number(),

      cdn: OrderModel.URL(),

      upload: OrderModel.FileUploadResponse(),
    });
  }

  static bulkListingData() {
    return Joi.object({
      user_name: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      status: Joi.string().allow(""),

      successful_shipments: Joi.array().items(Joi.any()),

      excel_url: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      store_id: Joi.number(),

      user_id: Joi.string().allow(""),

      successful: Joi.number(),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      store_code: Joi.string().allow(""),

      failed_shipments: Joi.array().items(Joi.any()),

      uploaded_on: Joi.string().allow(""),

      id: Joi.string().allow(""),

      total: Joi.number(),

      processing: Joi.number(),

      company_id: Joi.number(),

      batch_id: Joi.string().allow(""),

      failed: Joi.number(),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      total: Joi.number(),

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),

      type: Joi.string().allow(""),

      size: Joi.number(),

      current: Joi.number(),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      data: Joi.array().items(OrderModel.bulkListingData()),

      success: Joi.boolean(),

      page: OrderModel.BulkListingPage(),

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
      message: Joi.string().allow(""),

      status: Joi.boolean(),
    });
  }

  static BulkActionDetailsDataField() {
    return Joi.object({
      total_shipments_count: Joi.number(),

      batch_id: Joi.string().allow(""),

      successful_shipments_count: Joi.number(),

      failed_shipments_count: Joi.number(),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.string().allow(""),

      processing_shipments_count: Joi.number(),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      success: Joi.string().allow(""),

      status: Joi.boolean(),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      uploaded_by: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      error: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      enable_tracking: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      loyalty_discount: Joi.number(),

      employee_discount: Joi.number(),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),
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
      area: Joi.string().allow(""),

      phone: Joi.string().allow("").allow(null).required(),

      updated_at: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      version: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      city: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      address_category: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      email: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      contact_person: Joi.string().allow("").required(),
    });
  }

  static Document() {
    return Joi.object({
      legal_name: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      verified: Joi.boolean().required(),

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
      password: Joi.string().allow(""),

      enabled: Joi.boolean().required(),

      user: Joi.string().allow(""),

      username: Joi.string().allow(""),
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
      password: Joi.string().allow(""),

      user: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static StoreMeta() {
    return Joi.object({
      documents: OrderModel.StoreDocuments(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      stage: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      timing: Joi.array().items(Joi.any()),

      display_name: Joi.string().allow("").required(),

      product_return_config: Joi.any(),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      additional_contact_details: Joi.any(),

      ewaybill_portal_details: Joi.any(),

      gst_number: Joi.string().allow(""),
    });
  }

  static Store() {
    return Joi.object({
      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      s_id: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      login_username: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      brand_id: Joi.any(),

      country: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      mall_name: Joi.string().allow("").allow(null),

      order_integration_id: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      alohomora_user_id: Joi.number(),

      mall_area: Joi.string().allow("").allow(null),

      is_enabled_for_recon: Joi.boolean(),

      parent_store_id: Joi.number(),

      packaging_material_count: Joi.number(),

      vat_no: Joi.string().allow("").allow(null),

      store_active_from: Joi.string().allow("").allow(null),

      company_id: Joi.number().required(),

      address1: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      store_address_json: OrderModel.StoreAddress(),

      is_archived: Joi.boolean(),

      pincode: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      store_email: Joi.string().allow("").required(),

      location_type: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      meta: OrderModel.StoreMeta().required(),

      contact_person: Joi.string().allow("").required(),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
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

      shipping: Joi.number(),

      is_default: Joi.boolean(),
    });
  }

  static Article() {
    return Joi.object({
      seller_identifier: Joi.string().allow("").required(),

      raw_meta: Joi.any(),

      return_config: OrderModel.ReturnConfig(),

      is_set: Joi.boolean(),

      dimensions: OrderModel.Dimensions(),

      a_set: Joi.any().allow(null),

      weight: OrderModel.Weight(),

      esp_modified: Joi.any(),

      _id: Joi.string().allow("").required(),

      identifiers: OrderModel.Identifier().required(),

      size: Joi.string().allow("").required(),

      child_details: Joi.any().allow(null),

      uid: Joi.string().allow("").required(),

      code: Joi.string().allow(""),
    });
  }

  static Brand() {
    return Joi.object({
      is_virtual_invoice: Joi.boolean().allow(null),

      brand_id: Joi.number().required(),

      modified_on: Joi.number(),

      company: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      start_date: Joi.string().allow("").allow(null),

      invoice_prefix: Joi.string().allow("").allow(null),

      pickup_location: Joi.string().allow("").allow(null),

      script_last_ran: Joi.string().allow("").allow(null),

      credit_note_expiry_days: Joi.number().allow(null),

      created_on: Joi.number(),

      logo: Joi.string().allow(""),

      credit_note_allowed: Joi.boolean(),
    });
  }

  static Attributes() {
    return Joi.object({
      name: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      primary_color_hex: Joi.string().allow(""),

      primary_material: Joi.string().allow(""),

      essential: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      gender: Joi.string().allow("").allow(null),

      l2_category_id: Joi.number(),

      item_id: Joi.number().required(),

      code: Joi.string().allow(""),

      brand_id: Joi.number().required(),

      department_id: Joi.number(),

      size: Joi.string().allow("").required(),

      color: Joi.string().allow("").allow(null),

      l1_category: Joi.array().items(Joi.string().allow("")),

      webstore_product_url: Joi.string().allow("").allow(null),

      brand: Joi.string().allow("").required(),

      image: Joi.array().items(Joi.string().allow("")).required(),

      l3_category_name: Joi.string().allow(""),

      slug_key: Joi.string().allow("").required(),

      l3_category: Joi.number(),

      name: Joi.string().allow("").required(),

      l1_category_id: Joi.number(),

      can_cancel: Joi.boolean(),

      can_return: Joi.boolean(),

      l2_category: Joi.array().items(Joi.string().allow("")),

      attributes: OrderModel.Attributes().required(),

      branch_url: Joi.string().allow("").allow(null),

      last_updated_at: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      igst_tax_percentage: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      cgst_tax_percentage: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      gst_tax_percentage: Joi.number().required(),

      gstin_code: Joi.string().allow("").allow(null),

      value_of_good: Joi.number().required(),

      is_default_hsn_code: Joi.boolean(),

      gst_fee: Joi.number().required(),

      sgst_tax_percentage: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      igst_gst_fee: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      partial_can_ret: Joi.boolean(),

      total_gst_percentage: Joi.number(),

      item_base_price: Joi.number(),

      po_tax_amount: Joi.number(),

      docker_number: Joi.string().allow(""),

      po_line_amount: Joi.number(),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      seller_identifier: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      parent_promo_bags: Joi.any(),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      journey_type: Joi.string().allow("").required(),

      dates: OrderModel.Dates(),

      ordering_store: OrderModel.Store(),

      quantity: Joi.number(),

      b_id: Joi.number().required(),

      article_details: OrderModel.ArticleDetails(),

      prices: OrderModel.Prices().required(),

      current_status: OrderModel.BagStatusHistory().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      no_of_bags_order: Joi.number(),

      order_integration_id: Joi.string().allow("").allow(null),

      entity_type: Joi.string().allow(""),

      affiliate_details: OrderModel.AffiliateDetails(),

      identifier: Joi.string().allow(""),

      article: OrderModel.Article().required(),

      reasons: Joi.array().items(Joi.any()),

      applied_promos: Joi.array().items(Joi.any()),

      restore_promos: Joi.any(),

      bag_update_time: Joi.number(),

      brand: OrderModel.Brand().required(),

      display_name: Joi.string().allow(""),

      item: OrderModel.Item().required(),

      gst_details: OrderModel.BagGSTDetails().required(),

      bag_status_history: OrderModel.BagStatusHistory(),

      operational_status: Joi.string().allow(""),

      b_type: Joi.string().allow(""),

      restore_coupon: Joi.boolean(),

      line_number: Joi.number(),

      qc_required: Joi.any(),

      meta: OrderModel.BagMeta(),

      original_bag_list: Joi.array().items(Joi.number()),
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
      item_total: Joi.number().required(),

      has_next: Joi.boolean().required(),

      page_type: Joi.string().allow("").required(),

      size: Joi.number().required(),

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
      invoice_receipt: Joi.string().allow(""),

      success: Joi.boolean(),

      payment_receipt: Joi.string().allow(""),

      order_id: Joi.string().allow(""),
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

      shipment_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

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
      error_trace: Joi.string().allow(""),

      status: Joi.number().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static StoreReassign() {
    return Joi.object({
      bag_id: Joi.number().allow(null),

      fynd_order_id: Joi.string().allow("").allow(null),

      item_id: Joi.string().allow("").allow(null),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      affiliate_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      mongo_article_id: Joi.string().allow("").allow(null),

      set_id: Joi.string().allow("").allow(null),

      reason_ids: Joi.array().items(Joi.number()),

      affiliate_order_id: Joi.string().allow("").allow(null),
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

      affiliate_bag_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow(""),
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

  static OriginalFilter() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),
    });
  }

  static Bags() {
    return Joi.object({
      is_locked: Joi.boolean(),

      affiliate_bag_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      bag_id: Joi.number(),
    });
  }

  static CheckResponse() {
    return Joi.object({
      original_filter: OrderModel.OriginalFilter(),

      bags: Joi.array().items(OrderModel.Bags()),

      lock_status: Joi.boolean().allow(null),

      is_bag_locked: Joi.boolean(),

      affiliate_shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      is_shipment_locked: Joi.boolean(),
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
      created_at: Joi.string().allow(""),

      to_datetime: Joi.string().allow(""),

      from_datetime: Joi.string().allow(""),

      title: Joi.string().allow(""),

      description: Joi.string().allow(""),

      logo_url: Joi.string().allow(""),

      platform_name: Joi.string().allow(""),

      platform_id: Joi.string().allow(""),

      id: Joi.number().required(),

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

  static Products() {
    return Joi.object({
      line_number: Joi.number(),

      identifier: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static ProductsReasonsFilters() {
    return Joi.object({
      line_number: Joi.number(),

      identifier: Joi.string().allow(""),

      quantity: Joi.number(),
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
      shipments: Joi.array().items(OrderModel.ShipmentsRequest()),

      status: Joi.string().allow(""),

      exclude_bags_next_state: Joi.string().allow(""),
    });
  }

  static UpdateShipmentStatusRequest() {
    return Joi.object({
      lock_after_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      task: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),

      force_transition: Joi.boolean(),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      code: Joi.string().allow(""),

      status: Joi.number(),

      stack_trace: Joi.string().allow(""),

      message: Joi.string().allow(""),

      meta: Joi.any(),

      identifier: Joi.string().allow(""),

      final_state: Joi.any(),

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
      value: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static AffiliateAppConfig() {
    return Joi.object({
      created_at: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      updated_at: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      secret: Joi.string().allow("").required(),

      owner: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

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

  static AffiliateInventoryConfig() {
    return Joi.object({
      inventory: OrderModel.AffiliateInventoryStoreConfig(),

      order: OrderModel.AffiliateInventoryOrderConfig(),

      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),

      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

      payment: OrderModel.AffiliateInventoryPaymentConfig(),
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

      config: OrderModel.AffiliateConfig(),

      token: Joi.string().allow("").required(),
    });
  }

  static OrderConfig() {
    return Joi.object({
      bag_end_state: Joi.string().allow(""),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      store_lookup: Joi.string().allow(""),

      affiliate: OrderModel.Affiliate().required(),

      create_user: Joi.boolean(),

      article_lookup: Joi.string().allow(""),
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
      fynd_store_id: Joi.string().allow("").required(),

      store_id: Joi.number().required(),

      discount: Joi.number().required(),

      seller_identifier: Joi.string().allow("").required(),

      price_marked: Joi.number().required(),

      company_id: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      transfer_price: Joi.number().required(),

      avl_qty: Joi.number().required(),

      _id: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      item_size: Joi.string().allow("").required(),

      quantity: Joi.number().required(),

      affiliate_store_id: Joi.string().allow("").required(),

      sku: Joi.string().allow("").required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      unit_price: Joi.number().required(),

      price_effective: Joi.number().required(),

      modified_on: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow("").required(),

      affiliate_meta: Joi.any().required(),

      identifier: Joi.any().required(),

      item_id: Joi.number().required(),
    });
  }

  static OrderUser() {
    return Joi.object({
      pincode: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      phone: Joi.number().required(),

      country: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      address2: Joi.string().allow("").allow(null),

      first_name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address1: Joi.string().allow("").allow(null),
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
      affiliate_priority_code: Joi.string().allow("").allow(null),

      fulfilment_priority_text: Joi.string().allow(""),

      fulfilment_priority: Joi.number().allow(null),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      category: Joi.any().required(),

      quantity: Joi.number().required(),

      attributes: Joi.any().required(),

      weight: Joi.any().required(),

      brand_id: Joi.number().required(),

      _id: Joi.string().allow("").required(),

      dimension: Joi.any().required(),
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
      meta: Joi.any(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      box_type: Joi.string().allow("").allow(null),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      shipments: Joi.number().required(),

      fulfillment_id: Joi.number().required(),

      dp_id: Joi.number().allow(null),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      source: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      location_details: OrderModel.LocationDetails(),

      action: Joi.string().allow("").required(),

      identifier: Joi.string().allow("").required(),

      journey: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),
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

      shipping_address: OrderModel.OrderUser().required(),

      billing_address: OrderModel.OrderUser().required(),

      payment_mode: Joi.string().allow("").required(),

      user: OrderModel.UserData().required(),

      order_priority: OrderModel.OrderPriority(),

      coupon: Joi.string().allow("").allow(null),

      shipment: OrderModel.ShipmentData(),

      items: Joi.any().required(),

      order_value: Joi.number().required(),

      discount: Joi.number().required(),

      delivery_charges: Joi.number().required(),

      affiliate_order_id: Joi.string().allow(""),

      cod_charges: Joi.number().required(),

      payment: Joi.any(),
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

  static HistoryDict() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      ticket_url: Joi.string().allow(""),

      bag_id: Joi.number(),

      user: Joi.string().allow("").required(),

      ticket_id: Joi.string().allow(""),

      createdat: Joi.string().allow("").required(),

      l2_detail: Joi.string().allow(""),

      l3_detail: Joi.string().allow(""),

      l1_detail: Joi.string().allow(""),
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
      brand_name: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      phone_number: Joi.number().required(),

      order_id: Joi.string().allow("").required(),

      shipment_id: Joi.number().required(),

      customer_name: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),
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

      meta: OrderModel.Meta1().required(),

      remarks: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.number()),

      shipment_id: Joi.string().allow(""),

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
      shipment_ids: Joi.array().items(Joi.string().allow("")),

      dp_id: Joi.number().required(),

      order_type: Joi.string().allow("").required(),

      qc_required: Joi.string().allow("").required(),
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

      rate: Joi.number().required(),

      amount: Joi.any().required(),

      name: Joi.string().allow("").required(),
    });
  }

  static Charge() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      amount: Joi.any().required(),

      name: Joi.string().allow("").required(),

      tax: OrderModel.Tax(),
    });
  }

  static LineItem() {
    return Joi.object({
      quantity: Joi.number(),

      meta: Joi.any(),

      custom_messasge: Joi.string().allow(""),

      external_line_id: Joi.string().allow(""),

      charges: Joi.array().items(OrderModel.Charge()),

      seller_identifier: Joi.string().allow("").required(),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      pack_by_date: Joi.string().allow(""),

      dispatch_after_date: Joi.string().allow(""),

      customer_pickup_slot: Joi.any(),

      confirm_by_date: Joi.string().allow(""),

      dp_pickup_slot: Joi.any(),

      dispatch_by_date: Joi.string().allow(""),
    });
  }

  static Shipment() {
    return Joi.object({
      meta: Joi.any(),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),

      priority: Joi.number(),

      processing_dates: OrderModel.ProcessingDates(),

      external_shipment_id: Joi.string().allow(""),

      location_id: Joi.number().required(),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      meta: Joi.any(),

      transaction_data: Joi.any(),

      refund_by: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      mode: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      collect_by: Joi.string().allow("").required(),
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
      pincode: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      slot: Joi.array().items(Joi.any()),

      address_type: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      geo_location: Joi.any(),

      external_customer_code: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      primary_mobile_number: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      customer_code: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      shipping_type: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),
    });
  }

  static BillingInfo() {
    return Joi.object({
      pincode: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      primary_mobile_number: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      customer_code: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),
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
      meta: Joi.any(),

      external_creation_date: Joi.string().allow(""),

      external_order_id: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      payment_info: OrderModel.PaymentInfo().required(),

      shipping_info: OrderModel.ShippingInfo().required(),

      billing_info: OrderModel.BillingInfo().required(),

      charges: Joi.array().items(OrderModel.Charge()),

      tax_info: OrderModel.TaxInfo(),

      currency_info: Joi.any(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      info: Joi.any(),

      code: Joi.string().allow("").allow(null),

      status: Joi.number().required(),

      stack_trace: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      meta: Joi.string().allow("").allow(null),

      exception: Joi.string().allow("").allow(null),

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
      refund_by: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      collect_by: Joi.string().allow(""),
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
      shipment_assignment: Joi.string().allow(""),

      dp_configuration: OrderModel.DpConfiguration(),

      payment_info: OrderModel.CreateChannelPaymentInfo(),

      logo_url: Joi.any(),

      location_reassignment: Joi.boolean(),

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
      is_upserted: Joi.boolean(),

      is_inserted: Joi.boolean(),

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
