const Joi = require("joi");

class OrderModel {
  static Prices() {
    return Joi.object({
      price_effective: Joi.number(),

      cod_charges: Joi.number(),

      discount: Joi.number(),

      cashback_applied: Joi.number(),

      delivery_charge: Joi.number(),

      value_of_good: Joi.number(),

      tax_collected_at_source: Joi.number(),

      fynd_credits: Joi.number(),

      refund_amount: Joi.number(),

      promotion_effective_discount: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      cashback: Joi.number(),

      refund_credit: Joi.number(),

      transfer_price: Joi.number(),

      price_marked: Joi.number(),

      coupon_value: Joi.number(),

      amount_paid: Joi.number(),
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
      is_anonymous_user: Joi.boolean(),

      email: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      avis_user_id: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      uid: Joi.number(),

      gender: Joi.string().allow(""),
    });
  }

  static PaymentModeInfo() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      ops_status: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      brand_calculated_amount: Joi.number().required(),

      value_of_good: Joi.number().required(),

      gst_fee: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number().required(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      l3_category_name: Joi.string().allow(""),

      code: Joi.string().allow(""),

      id: Joi.number(),

      color: Joi.string().allow("").allow(null),

      name: Joi.string().allow(""),

      size: Joi.string().allow(""),

      can_return: Joi.boolean(),

      image: Joi.array().items(Joi.string().allow("")),

      l3_category: Joi.number(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      department_id: Joi.number(),

      can_cancel: Joi.boolean(),

      images: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BagUnit() {
    return Joi.object({
      bag_id: Joi.number().required(),

      total_shipment_bags: Joi.number().required(),

      prices: OrderModel.Prices(),

      gst: OrderModel.GSTDetailsData(),

      shipment_id: Joi.string().allow("").required(),

      can_return: Joi.boolean(),

      item: OrderModel.PlatformItem(),

      ordering_channel: Joi.string().allow("").required(),

      status: Joi.any().required(),

      can_cancel: Joi.boolean(),

      item_quantity: Joi.number().required(),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      application: Joi.any(),

      fulfilling_centre: Joi.string().allow("").required(),

      payment_methods: Joi.any(),

      created_at: Joi.string().allow("").required(),

      sla: Joi.any(),

      id: Joi.string().allow("").required(),

      channel: Joi.any(),

      prices: OrderModel.Prices(),

      shipment_created_at: Joi.string().allow("").required(),

      total_bags_count: Joi.number().required(),

      shipment_id: Joi.string().allow(""),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      user: OrderModel.UserDataInfo(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      shipment_status: OrderModel.ShipmentStatus(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      company: Joi.any(),

      total_shipments_in_order: Joi.number().required(),
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
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      journey_type: Joi.string().allow("").required(),

      state_type: Joi.string().allow("").required(),

      bs_id: Joi.number().required(),

      app_display_name: Joi.string().allow(""),

      notify_customer: Joi.boolean(),

      name: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      app_state_name: Joi.string().allow(""),

      app_facing: Joi.boolean(),

      display_name: Joi.string().allow("").required(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      bag_id: Joi.number(),

      updated_at: Joi.string().allow(""),

      state_type: Joi.string().allow(""),

      delivery_awb_number: Joi.string().allow(""),

      state_id: Joi.number(),

      current_status_id: Joi.number().required(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      shipment_id: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      status: Joi.string().allow(""),

      delivery_partner_id: Joi.number(),

      created_at: Joi.string().allow("").allow(null),

      store_id: Joi.number(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      latitude: Joi.number(),

      longitude: Joi.number(),

      created_at: Joi.string().allow(""),

      email: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      area: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      state: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      version: Joi.string().allow(""),

      city: Joi.string().allow(""),

      country: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      phone: Joi.string().allow(""),
    });
  }

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      brand_calculated_amount: Joi.number().required(),

      total_units: Joi.number().required(),

      value_of_good: Joi.number().required(),

      promotion_effective_discount: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      cashback: Joi.number().required(),

      price_marked: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      price_effective: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      gst_fee: Joi.number().required(),

      refund_credit: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      transfer_price: Joi.number().required(),

      cod_charges: Joi.number().required(),

      identifiers: OrderModel.Identifier().required(),

      item_name: Joi.string().allow("").required(),

      coupon_value: Joi.number().required(),

      discount: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),

      added_to_fynd_cash: Joi.boolean().required(),

      fynd_credits: Joi.number().required(),

      size: Joi.string().allow("").required(),

      coupon_effective_discount: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number(),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      brand_name: Joi.string().allow("").required(),

      id: Joi.number().required(),

      modified_on: Joi.string().allow(""),

      logo: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      company: Joi.string().allow("").allow(null).required(),
    });
  }

  static BagGST() {
    return Joi.object({
      brand_calculated_amount: Joi.number(),

      value_of_good: Joi.number(),

      is_default_hsn_code: Joi.boolean(),

      gst_fee: Joi.number(),

      gstin_code: Joi.string().allow(""),

      gst_tax_percentage: Joi.number(),

      hsn_code: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),
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
      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      amount: Joi.number(),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      mrp_promotion: Joi.boolean(),

      article_quantity: Joi.number(),

      promo_id: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),
    });
  }

  static BagConfigs() {
    return Joi.object({
      is_returnable: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      return_config: Joi.any(),

      identifiers: Joi.any(),

      uid: Joi.string().allow(""),
    });
  }

  static OrderBags() {
    return Joi.object({
      bag_id: Joi.number().required(),

      line_number: Joi.number(),

      current_status: OrderModel.CurrentStatus(),

      prices: OrderModel.Prices(),

      can_return: Joi.boolean(),

      item: OrderModel.PlatformItem(),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      financial_breakup: OrderModel.FinancialBreakup(),

      brand: OrderModel.OrderBrandName(),

      seller_identifier: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      gst_details: OrderModel.BagGST(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      bag_configs: OrderModel.BagConfigs(),

      parent_promo_bags: Joi.any(),

      quantity: Joi.number(),

      article: OrderModel.OrderBagArticle(),

      entity_type: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      can_cancel: Joi.boolean(),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      state: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      ordering_store_id: Joi.number().required(),

      contact_person: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),
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

  static DPDetailsData() {
    return Joi.object({
      eway_bill_id: Joi.string().allow("").allow(null),

      id: Joi.number(),

      name: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      track_url: Joi.string().allow("").allow(null),

      awb_no: Joi.string().allow(""),

      country: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      bsh_id: Joi.number(),

      bag_id: Joi.number(),

      updated_at: Joi.string().allow(""),

      state_type: Joi.string().allow(""),

      delivery_awb_number: Joi.string().allow("").allow(null),

      app_display_name: Joi.string().allow(""),

      state_id: Joi.number(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      shipment_id: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      status: Joi.string().allow("").required(),

      delivery_partner_id: Joi.number().allow(null),

      created_at: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      store_id: Joi.number(),

      forward: Joi.boolean().allow(null),

      reasons: Joi.array().items(Joi.any()),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      id: Joi.number().required(),

      pincode: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      fulfillment_channel: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),
    });
  }

  static TrackingList() {
    return Joi.object({
      is_passed: Joi.boolean(),

      time: Joi.string().allow(""),

      is_current: Joi.boolean(),

      status: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),
    });
  }

  static CompanyDetails() {
    return Joi.object({
      company_name: Joi.string().allow(""),

      address: Joi.any(),

      company_id: Joi.number(),

      company_cin: Joi.string().allow(""),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      order_item_id: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      size_level_total_qty: Joi.number().allow(null),

      channel_order_id: Joi.string().allow("").allow(null),

      employee_discount: Joi.number(),

      due_date: Joi.string().allow("").allow(null),

      loyalty_discount: Joi.number(),

      is_priority: Joi.boolean(),

      quantity: Joi.number(),

      channel_shipment_id: Joi.string().allow("").allow(null),

      coupon_code: Joi.string().allow("").allow(null),
    });
  }

  static PDFLinks() {
    return Joi.object({
      invoice: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),

      b2b: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      delivery_challan_a4: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      label: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      label_pos: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      label_a4: Joi.string().allow(""),
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
      irn: Joi.string().allow(""),

      signed_qr_code: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      acknowledge_no: Joi.number(),

      acknowledge_date: Joi.string().allow(""),

      signed_invoice: Joi.string().allow(""),

      error_code: Joi.string().allow(""),
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
      f_min: Joi.string().allow(""),

      f_max: Joi.string().allow(""),
    });
  }

  static LockData() {
    return Joi.object({
      lock_message: Joi.string().allow(""),

      locked: Joi.boolean(),

      mto: Joi.boolean(),
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

      name: Joi.string().allow("").required(),

      address: Joi.string().allow("").allow(null).required(),

      pincode: Joi.number().required(),

      ajio_site_id: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      ewaybill_info: Joi.any().allow(null),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      order_type: Joi.string().allow("").allow(null),

      box_type: Joi.string().allow("").allow(null),

      dp_id: Joi.string().allow("").allow(null),

      timestamp: OrderModel.ShipmentTimeStamp(),

      store_invoice_updated_date: Joi.string().allow(""),

      due_date: Joi.string().allow(""),

      assign_dp_from_sb: Joi.boolean(),

      same_store_available: Joi.boolean().required(),

      return_store_node: Joi.number(),

      shipment_weight: Joi.number(),

      weight: Joi.number().required(),

      b2c_buyer_details: Joi.any().allow(null),

      einvoice_info: OrderModel.EinvoiceInfo(),

      po_number: Joi.string().allow(""),

      forward_affiliate_order_id: Joi.string().allow(""),

      return_affiliate_order_id: Joi.string().allow(""),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      marketplace_store_id: Joi.string().allow(""),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      external: Joi.any(),

      return_awb_number: Joi.string().allow(""),

      dp_sort_key: Joi.string().allow(""),

      dp_name: Joi.string().allow(""),

      formatted: OrderModel.Formatted(),

      lock_data: OrderModel.LockData(),

      bag_weight: Joi.any(),

      shipment_volumetric_weight: Joi.number(),

      debug_info: OrderModel.DebugInfo(),

      return_affiliate_shipment_id: Joi.string().allow(""),

      awb_number: Joi.string().allow(""),

      return_details: Joi.any(),

      packaging_name: Joi.string().allow(""),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      dp_options: Joi.any(),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      affiliate_store_id: Joi.string().allow("").required(),

      company_affiliate_tag: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow("").required(),

      pdf_links: OrderModel.PDFLinks(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      affiliate_id: Joi.string().allow(""),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      ad_id: Joi.string().allow(""),
    });
  }

  static Dimensions() {
    return Joi.object({
      width: Joi.number(),

      unit: Joi.string().allow(""),

      height: Joi.number(),

      length: Joi.number(),

      is_default: Joi.boolean(),
    });
  }

  static Meta() {
    return Joi.object({
      dimension: OrderModel.Dimensions(),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      cod_charges: Joi.string().allow(""),

      order_value: Joi.string().allow(""),

      order_date: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow("").required(),

      tax_details: Joi.any(),

      affiliate_id: Joi.string().allow(""),

      source: Joi.string().allow(""),

      ordering_channel: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      mode: Joi.string().allow(""),

      source: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static InvoiceInfo() {
    return Joi.object({
      credit_note_id: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),

      store_invoice_id: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      label_url: Joi.string().allow(""),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      email: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      shipment_images: Joi.array().items(Joi.string().allow("")),

      journey_type: Joi.string().allow(""),

      custom_meta: Joi.array().items(Joi.any()),

      priority_text: Joi.string().allow("").allow(null),

      bags: Joi.array().items(OrderModel.OrderBags()),

      invoice_id: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      vertical: Joi.string().allow("").allow(null),

      ordering_store: OrderModel.OrderingStoreDetails(),

      status: OrderModel.ShipmentStatusData(),

      dp_details: OrderModel.DPDetailsData(),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      payment_methods: Joi.any(),

      gst_details: OrderModel.GSTDetailsData(),

      fulfilling_store: OrderModel.FulfillingStore(),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      company_details: OrderModel.CompanyDetails(),

      user_agent: Joi.string().allow(""),

      fulfilment_priority: Joi.number(),

      delivery_slot: Joi.any(),

      user: OrderModel.UserDataInfo(),

      operational_status: Joi.string().allow(""),

      platform_logo: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      affiliate_details: OrderModel.AffiliateDetails(),

      meta: OrderModel.Meta(),

      shipment_id: Joi.string().allow("").required(),

      order: OrderModel.OrderDetailsData(),

      shipment_status: Joi.string().allow(""),

      total_bags: Joi.number(),

      lock_status: Joi.boolean(),

      payments: OrderModel.ShipmentPayments(),

      shipment_quantity: Joi.number(),

      enable_dp_tracking: Joi.boolean(),

      invoice: OrderModel.InvoiceInfo(),

      delivery_details: OrderModel.UserDetailsData(),

      picked_date: Joi.string().allow(""),

      billing_details: OrderModel.UserDetailsData(),

      forward_shipment_id: Joi.string().allow(""),

      packaging_type: Joi.string().allow(""),

      coupon: Joi.any(),

      total_items: Joi.number(),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      message: Joi.string().allow(""),
    });
  }

  static TransactionData() {
    return Joi.object({
      currency: Joi.string().allow(""),

      unique_reference_number: Joi.string().allow(""),

      payment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      entity: Joi.string().allow(""),

      transaction_id: Joi.string().allow(""),

      amount_paid: Joi.string().allow(""),

      terminal_id: Joi.string().allow(""),
    });
  }

  static BillingStaffDetails() {
    return Joi.object({
      staff_id: Joi.number(),

      first_name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      user: Joi.string().allow(""),
    });
  }

  static PlatformUserDetails() {
    return Joi.object({
      platform_user_id: Joi.string().allow(""),

      platform_user_last_name: Joi.string().allow(""),

      platform_user_first_name: Joi.string().allow(""),
    });
  }

  static OrderMeta() {
    return Joi.object({
      cart_id: Joi.number(),

      order_type: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      ordering_store: Joi.number(),

      staff: Joi.any(),

      company_logo: Joi.string().allow(""),

      employee_id: Joi.number(),

      customer_note: Joi.string().allow(""),

      transaction_data: OrderModel.TransactionData(),

      order_tags: Joi.array().items(Joi.any()),

      mongo_cart_id: Joi.number(),

      order_platform: Joi.string().allow(""),

      extra_meta: Joi.any(),

      billing_staff_details: OrderModel.BillingStaffDetails(),

      comment: Joi.string().allow(""),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      files: Joi.array().items(Joi.any()),

      platform_user_details: OrderModel.PlatformUserDetails(),

      payment_type: Joi.string().allow(""),
    });
  }

  static TaxDetails() {
    return Joi.object({
      gstin: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),
    });
  }

  static OrderDict() {
    return Joi.object({
      payment_methods: Joi.any(),

      order_date: Joi.string().allow("").required(),

      meta: OrderModel.OrderMeta(),

      prices: OrderModel.Prices(),

      fynd_order_id: Joi.string().allow("").required(),

      tax_details: OrderModel.TaxDetails(),
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
      value: Joi.string().allow(""),

      actions: Joi.array().items(Joi.any()),

      index: Joi.number(),

      text: Joi.string().allow(""),

      total_items: Joi.number(),
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

      display: Joi.string().allow(""),

      name: Joi.string().allow(""),
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
      order_created_time: Joi.string().allow(""),

      order_value: Joi.number(),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      payment_mode: Joi.string().allow(""),

      meta: Joi.any(),

      channel: OrderModel.PlatformChannel(),

      order_id: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      user_info: OrderModel.UserDataInfo(),

      total_order_value: Joi.number(),
    });
  }

  static OrderListingResponse() {
    return Joi.object({
      success: Joi.boolean(),

      lane: Joi.string().allow(""),

      total_count: Joi.number(),

      message: Joi.string().allow(""),

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
      updated_at: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      meta: Joi.any(),

      updated_time: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      status: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),
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
      unfulfilled: Joi.array().items(OrderModel.FiltersInfo()),

      action_centre: Joi.array().items(OrderModel.FiltersInfo()),

      processed: Joi.array().items(OrderModel.FiltersInfo()),

      returned: Joi.array().items(OrderModel.FiltersInfo()),

      filters: Joi.array().items(OrderModel.FiltersInfo()),
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
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static OmsReports() {
    return Joi.object({
      report_requested_at: Joi.string().allow("").allow(null),

      request_details: Joi.any(),

      report_type: Joi.string().allow(""),

      report_id: Joi.string().allow(""),

      report_name: Joi.string().allow(""),

      s3_key: Joi.string().allow(""),

      status: Joi.string().allow(""),

      report_created_at: Joi.string().allow("").allow(null),

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
      value: Joi.string().allow(""),

      message: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      success: Joi.boolean(),

      data: Joi.array().items(Joi.any()),

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
      do_invoice_label_generated: Joi.boolean().required(),

      batch_id: Joi.string().allow("").required(),

      invoice: Joi.any(),

      company_id: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      data: Joi.any(),

      invoice_status: Joi.string().allow(""),

      label: Joi.any(),

      store_name: Joi.string().allow(""),

      store_id: Joi.string().allow(""),
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
      content_type: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      size: Joi.number(),

      file_name: Joi.string().allow(""),

      upload: OrderModel.FileUploadResponse(),

      operation: Joi.string().allow(""),

      namespace: Joi.string().allow(""),

      cdn: OrderModel.URL(),

      method: Joi.string().allow(""),

      file_path: Joi.string().allow(""),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      size: Joi.number(),

      has_next: Joi.boolean(),

      total: Joi.number(),

      has_previous: Joi.boolean(),

      current: Joi.number(),

      type: Joi.string().allow(""),
    });
  }

  static bulkListingData() {
    return Joi.object({
      id: Joi.string().allow(""),

      successful_shipments: Joi.array().items(Joi.any()),

      store_name: Joi.string().allow(""),

      status: Joi.string().allow(""),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      batch_id: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      failed: Joi.number(),

      excel_url: Joi.string().allow(""),

      processing: Joi.number(),

      store_id: Joi.number(),

      user_name: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      company_id: Joi.number(),

      store_code: Joi.string().allow(""),

      failed_shipments: Joi.array().items(Joi.any()),

      successful: Joi.number(),

      total: Joi.number(),

      uploaded_on: Joi.string().allow(""),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      page: OrderModel.BulkListingPage(),

      success: Joi.boolean(),

      error: Joi.string().allow(""),

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
      id: Joi.number(),

      display_name: Joi.string().allow(""),

      question_set: Joi.array().items(OrderModel.QuestionSet()),

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
      batch_id: Joi.string().allow(""),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      total_shipments_count: Joi.number(),

      company_id: Joi.string().allow(""),

      processing_shipments_count: Joi.number(),

      successful_shipments_count: Joi.number(),

      failed_shipments_count: Joi.number(),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      success: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      status: Joi.boolean(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      uploaded_by: Joi.string().allow(""),

      error: Joi.array().items(Joi.string().allow("")),

      uploaded_on: Joi.string().allow(""),
    });
  }

  static Attributes() {
    return Joi.object({
      marketer_address: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      primary_material: Joi.string().allow(""),

      essential: Joi.string().allow(""),

      name: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Item() {
    return Joi.object({
      code: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      can_return: Joi.boolean(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      brand: Joi.string().allow("").required(),

      webstore_product_url: Joi.string().allow("").allow(null),

      l2_category: Joi.array().items(Joi.string().allow("")),

      branch_url: Joi.string().allow("").allow(null),

      l3_category_name: Joi.string().allow(""),

      color: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      slug_key: Joi.string().allow("").required(),

      l1_category_id: Joi.number(),

      image: Joi.array().items(Joi.string().allow("")).required(),

      l3_category: Joi.number(),

      department_id: Joi.number(),

      l2_category_id: Joi.number(),

      size: Joi.string().allow("").required(),

      brand_id: Joi.number().required(),

      attributes: OrderModel.Attributes().required(),

      last_updated_at: Joi.string().allow(""),

      item_id: Joi.number().required(),

      can_cancel: Joi.boolean(),

      gender: Joi.string().allow("").allow(null),
    });
  }

  static Document() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      legal_name: Joi.string().allow("").required(),

      verified: Joi.boolean().required(),

      ds_type: Joi.string().allow("").required(),

      url: Joi.string().allow(""),
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

  static StoreEwaybill() {
    return Joi.object({
      enabled: Joi.boolean(),
    });
  }

  static StoreEinvoice() {
    return Joi.object({
      enabled: Joi.boolean().required(),

      username: Joi.string().allow(""),

      user: Joi.string().allow(""),

      password: Joi.string().allow(""),
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

      product_return_config: Joi.any(),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      additional_contact_details: Joi.any(),

      gst_number: Joi.string().allow(""),

      stage: Joi.string().allow("").required(),

      ewaybill_portal_details: Joi.any(),

      timing: Joi.array().items(Joi.any()),

      display_name: Joi.string().allow("").required(),
    });
  }

  static StoreAddress() {
    return Joi.object({
      longitude: Joi.number().required(),

      address1: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      phone: Joi.string().allow("").allow(null).required(),

      area: Joi.string().allow(""),

      version: Joi.string().allow(""),

      address_category: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      pincode: Joi.number().required(),

      address2: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),
    });
  }

  static Store() {
    return Joi.object({
      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      mall_area: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      longitude: Joi.number().required(),

      country: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      login_username: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      order_integration_id: Joi.string().allow(""),

      location_type: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      vat_no: Joi.string().allow("").allow(null),

      created_at: Joi.string().allow("").required(),

      alohomora_user_id: Joi.number(),

      latitude: Joi.number().required(),

      packaging_material_count: Joi.number(),

      meta: OrderModel.StoreMeta().required(),

      parent_store_id: Joi.number(),

      pincode: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").allow(null),

      company_id: Joi.number().required(),

      mall_name: Joi.string().allow("").allow(null),

      is_archived: Joi.boolean(),

      brand_id: Joi.any(),

      store_active_from: Joi.string().allow("").allow(null),

      store_address_json: OrderModel.StoreAddress(),

      s_id: Joi.string().allow("").required(),

      is_enabled_for_recon: Joi.boolean(),

      store_email: Joi.string().allow("").required(),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      affiliate_order_id: Joi.string().allow("").required(),

      employee_discount: Joi.number(),

      loyalty_discount: Joi.number(),
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
      start_date: Joi.string().allow("").allow(null),

      brand_name: Joi.string().allow("").required(),

      credit_note_allowed: Joi.boolean(),

      modified_on: Joi.number(),

      pickup_location: Joi.string().allow("").allow(null),

      brand_id: Joi.number().required(),

      logo: Joi.string().allow(""),

      script_last_ran: Joi.string().allow("").allow(null),

      created_on: Joi.number(),

      credit_note_expiry_days: Joi.number().allow(null),

      is_virtual_invoice: Joi.boolean().allow(null),

      company: Joi.string().allow("").required(),

      invoice_prefix: Joi.string().allow("").allow(null),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      brand_calculated_amount: Joi.number().required(),

      sgst_tax_percentage: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),

      is_default_hsn_code: Joi.boolean(),

      cgst_tax_percentage: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      gst_fee: Joi.number().required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      gstin_code: Joi.string().allow("").allow(null),

      gst_tax_percentage: Joi.number().required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      igst_gst_fee: Joi.string().allow("").required(),

      igst_tax_percentage: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      gst_tag: Joi.string().allow("").required(),
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
      partial_can_ret: Joi.boolean(),

      item_base_price: Joi.number(),

      po_line_amount: Joi.number(),

      total_gst_percentage: Joi.number(),

      po_tax_amount: Joi.number(),

      docker_number: Joi.string().allow(""),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
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
      code: Joi.string().allow(""),

      identifiers: OrderModel.Identifier().required(),

      dimensions: OrderModel.Dimensions(),

      seller_identifier: Joi.string().allow("").required(),

      a_set: Joi.any().allow(null),

      size: Joi.string().allow("").required(),

      is_set: Joi.boolean(),

      child_details: Joi.any().allow(null),

      raw_meta: Joi.any(),

      return_config: OrderModel.ReturnConfig(),

      _id: Joi.string().allow("").required(),

      esp_modified: Joi.any(),

      weight: OrderModel.Weight(),

      uid: Joi.string().allow("").required(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      journey_type: Joi.string().allow("").required(),

      line_number: Joi.number(),

      current_status: OrderModel.BagStatusHistory().required(),

      b_type: Joi.string().allow(""),

      prices: OrderModel.Prices().required(),

      no_of_bags_order: Joi.number(),

      item: OrderModel.Item().required(),

      ordering_store: OrderModel.Store(),

      b_id: Joi.number().required(),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      bag_status_history: OrderModel.BagStatusHistory(),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      qc_required: Joi.any(),

      brand: OrderModel.Brand().required(),

      bag_update_time: Joi.number(),

      order_integration_id: Joi.string().allow("").allow(null),

      seller_identifier: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      gst_details: OrderModel.BagGSTDetails().required(),

      applied_promos: Joi.array().items(Joi.any()),

      dates: OrderModel.Dates(),

      operational_status: Joi.string().allow(""),

      affiliate_details: OrderModel.AffiliateDetails(),

      meta: OrderModel.BagMeta(),

      restore_coupon: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      shipment_id: Joi.string().allow(""),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      parent_promo_bags: Joi.any(),

      quantity: Joi.number(),

      article_details: OrderModel.ArticleDetails(),

      original_bag_list: Joi.array().items(Joi.number()),

      article: OrderModel.Article().required(),

      entity_type: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      reasons: Joi.array().items(Joi.any()),

      restore_promos: Joi.any(),
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

      size: Joi.number().required(),

      page_type: Joi.string().allow("").required(),

      has_next: Joi.boolean().required(),

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

  static GeneratePosOrderReceiptResponse() {
    return Joi.object({
      success: Joi.boolean(),

      invoice_receipt: Joi.string().allow(""),

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
      error_trace: Joi.string().allow(""),

      message: Joi.string().allow("").required(),

      status: Joi.number().required(),
    });
  }

  static StoreReassign() {
    return Joi.object({
      bag_id: Joi.number().allow(null),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      reason_ids: Joi.array().items(Joi.number()),

      store_id: Joi.number().required(),

      affiliate_id: Joi.string().allow("").allow(null),

      mongo_article_id: Joi.string().allow("").allow(null),

      affiliate_order_id: Joi.string().allow("").allow(null),

      item_id: Joi.string().allow("").allow(null),

      set_id: Joi.string().allow("").allow(null),

      fynd_order_id: Joi.string().allow("").allow(null),
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
      affiliate_bag_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static UpdateShipmentLockPayload() {
    return Joi.object({
      action_type: Joi.string().allow("").required(),

      entities: Joi.array().items(OrderModel.Entities()).required(),

      action: Joi.string().allow("").required(),

      entity_type: Joi.string().allow("").required(),
    });
  }

  static Bags() {
    return Joi.object({
      bag_id: Joi.number(),

      affiliate_bag_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

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
      shipment_id: Joi.string().allow(""),

      is_shipment_locked: Joi.boolean(),

      is_bag_locked: Joi.boolean(),

      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.Bags()),

      original_filter: OrderModel.OriginalFilter(),

      status: Joi.string().allow(""),

      lock_status: Joi.boolean().allow(null),
    });
  }

  static UpdateShipmentLockResponse() {
    return Joi.object({
      check_response: Joi.array().items(OrderModel.CheckResponse()),

      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static AnnouncementResponse() {
    return Joi.object({
      logo_url: Joi.string().allow(""),

      description: Joi.string().allow(""),

      platform_name: Joi.string().allow(""),

      company_id: Joi.number(),

      platform_id: Joi.string().allow(""),

      from_datetime: Joi.string().allow(""),

      id: Joi.number().required(),

      created_at: Joi.string().allow(""),

      to_datetime: Joi.string().allow(""),

      title: Joi.string().allow(""),
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

  static EntitiesDataUpdates() {
    return Joi.object({
      data: Joi.any(),

      filters: Joi.array().items(Joi.any()),
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

  static DataUpdates() {
    return Joi.object({
      entities: Joi.array().items(OrderModel.EntitiesDataUpdates()),

      products: Joi.array().items(OrderModel.ProductsDataUpdates()),
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

  static ProductsReasonsData() {
    return Joi.object({
      reason_text: Joi.string().allow(""),

      reason_id: Joi.number(),
    });
  }

  static ProductsReasonsFilters() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      quantity: Joi.number(),

      line_number: Joi.number(),
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
      identifier: Joi.string().allow(""),

      quantity: Joi.number(),

      line_number: Joi.number(),
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
      exclude_bags_next_state: Joi.string().allow(""),

      status: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.ShipmentsRequest()),
    });
  }

  static UpdateShipmentStatusRequest() {
    return Joi.object({
      unlock_before_transition: Joi.boolean(),

      task: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

      force_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      exception: Joi.string().allow(""),

      final_state: Joi.any(),

      status: Joi.number(),

      meta: Joi.any(),

      stack_trace: Joi.string().allow(""),

      message: Joi.string().allow(""),

      code: Joi.string().allow(""),
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
      store_id: Joi.number().required(),

      marketplace_store_id: Joi.string().allow("").required(),
    });
  }

  static AffiliateInventoryPaymentConfig() {
    return Joi.object({
      mode_of_payment: Joi.string().allow(""),

      source: Joi.string().allow(""),
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

  static AffiliateAppConfigMeta() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static AffiliateAppConfig() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),

      owner: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      updated_at: Joi.string().allow("").required(),

      description: Joi.string().allow(""),
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
      create_user: Joi.boolean(),

      store_lookup: Joi.string().allow(""),

      bag_end_state: Joi.string().allow(""),

      article_lookup: Joi.string().allow(""),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      affiliate: OrderModel.Affiliate().required(),
    });
  }

  static OrderUser() {
    return Joi.object({
      last_name: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      address2: Joi.string().allow("").allow(null),

      first_name: Joi.string().allow("").required(),

      address1: Joi.string().allow("").allow(null),

      city: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      phone: Joi.number().required(),

      email: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),
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
      amount_paid: Joi.number().required(),

      affiliate_meta: Joi.any().required(),

      company_id: Joi.number().required(),

      price_effective: Joi.number().required(),

      avl_qty: Joi.number().required(),

      fynd_store_id: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      discount: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      delivery_charge: Joi.number().required(),

      affiliate_store_id: Joi.string().allow("").required(),

      transfer_price: Joi.number().required(),

      identifier: Joi.any().required(),

      seller_identifier: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      price_marked: Joi.number().required(),

      item_id: Joi.number().required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      store_id: Joi.number().required(),

      quantity: Joi.number().required(),

      sku: Joi.string().allow("").required(),

      unit_price: Joi.number().required(),

      item_size: Joi.string().allow("").required(),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      category: Joi.any().required(),

      attributes: Joi.any().required(),

      quantity: Joi.number().required(),

      weight: Joi.any().required(),

      dimension: Joi.any().required(),

      brand_id: Joi.number().required(),

      _id: Joi.string().allow("").required(),
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
      dp_id: Joi.number().allow(null),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      fulfillment_id: Joi.number().required(),

      box_type: Joi.string().allow("").allow(null),

      shipments: Joi.number().required(),

      meta: Joi.any(),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      identifier: Joi.string().allow("").required(),

      journey: Joi.string().allow("").required(),

      location_details: OrderModel.LocationDetails(),

      source: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      payment_mode: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),
    });
  }

  static ShipmentData() {
    return Joi.object({
      shipment_data: OrderModel.ShipmentConfig().required(),
    });
  }

  static OrderPriority() {
    return Joi.object({
      fulfilment_priority: Joi.number().allow(null),

      fulfilment_priority_text: Joi.string().allow(""),

      affiliate_priority_code: Joi.string().allow("").allow(null),
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
      billing_address: OrderModel.OrderUser().required(),

      items: Joi.any().required(),

      payment: Joi.any(),

      cod_charges: Joi.number().required(),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      delivery_charges: Joi.number().required(),

      shipment: OrderModel.ShipmentData(),

      coupon: Joi.string().allow("").allow(null),

      order_priority: OrderModel.OrderPriority(),

      affiliate_order_id: Joi.string().allow(""),

      user: OrderModel.UserData().required(),

      shipping_address: OrderModel.OrderUser().required(),

      payment_mode: Joi.string().allow("").required(),

      discount: Joi.number().required(),

      order_value: Joi.number().required(),
    });
  }

  static CreateOrderPayload() {
    return Joi.object({
      order_config: OrderModel.OrderConfig().required(),

      affiliate_id: Joi.string().allow("").required(),

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
      slug: Joi.string().allow("").required(),

      id: Joi.number().required(),

      display_text: Joi.string().allow("").required(),

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
      user_name: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),
    });
  }

  static PostHistoryFilters() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),

      line_number: Joi.string().allow(""),
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
      bag_id: Joi.number(),

      l3_detail: Joi.string().allow(""),

      ticket_id: Joi.string().allow(""),

      l2_detail: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      ticket_url: Joi.string().allow(""),

      user: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      createdat: Joi.string().allow("").required(),

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
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static SmsDataPayload() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),

      phone_number: Joi.number().required(),

      shipment_id: Joi.number().required(),

      customer_name: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

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
      created_at: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow(""),
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
      shipment_id: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.number()),

      remarks: Joi.string().allow(""),

      id: Joi.number().required(),

      status: Joi.string().allow(""),

      meta: OrderModel.Meta1().required(),
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
      qc_required: Joi.string().allow("").required(),

      shipment_ids: Joi.array().items(Joi.string().allow("")),

      dp_id: Joi.number().required(),

      order_type: Joi.string().allow("").required(),
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
      b2b_gstin_number: Joi.string().allow(""),

      gstin: Joi.string().allow(""),
    });
  }

  static BillingInfo() {
    return Joi.object({
      gender: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      alternate_mobile_number: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      primary_email: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      title: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      state_code: Joi.string().allow(""),
    });
  }

  static Tax() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      amount: Joi.any().required(),

      rate: Joi.number().required(),

      breakup: Joi.array().items(Joi.any()),
    });
  }

  static Charge() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      tax: OrderModel.Tax(),

      amount: Joi.any().required(),

      type: Joi.string().allow("").required(),

      code: Joi.string().allow(""),
    });
  }

  static LineItem() {
    return Joi.object({
      custom_messasge: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),

      quantity: Joi.number(),

      charges: Joi.array().items(OrderModel.Charge()),

      external_line_id: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      customer_pickup_slot: Joi.any(),

      dispatch_by_date: Joi.string().allow(""),

      confirm_by_date: Joi.string().allow(""),

      pack_by_date: Joi.string().allow(""),

      dp_pickup_slot: Joi.any(),

      dispatch_after_date: Joi.string().allow(""),
    });
  }

  static Shipment() {
    return Joi.object({
      external_shipment_id: Joi.string().allow(""),

      priority: Joi.number(),

      location_id: Joi.number().required(),

      meta: Joi.any(),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),

      processing_dates: OrderModel.ProcessingDates(),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      gender: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      primary_email: Joi.string().allow("").required(),

      address_type: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),

      geo_location: Joi.any(),

      middle_name: Joi.string().allow(""),

      title: Joi.string().allow(""),

      shipping_type: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      slot: Joi.array().items(Joi.any()),

      city: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      state_code: Joi.string().allow(""),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      mode: Joi.string().allow("").required(),

      meta: Joi.any(),

      collect_by: Joi.string().allow("").required(),

      refund_by: Joi.string().allow("").required(),

      transaction_data: Joi.any(),
    });
  }

  static PaymentInfo() {
    return Joi.object({
      payment_methods: Joi.array().items(OrderModel.PaymentMethod()),

      primary_mode: Joi.string().allow("").required(),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      tax_info: OrderModel.TaxInfo(),

      billing_info: OrderModel.BillingInfo().required(),

      charges: Joi.array().items(OrderModel.Charge()),

      external_creation_date: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      meta: Joi.any(),

      shipping_info: OrderModel.ShippingInfo().required(),

      external_order_id: Joi.string().allow(""),

      currency_info: Joi.any(),

      payment_info: OrderModel.PaymentInfo().required(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      request_id: Joi.string().allow("").allow(null),

      exception: Joi.string().allow("").allow(null),

      info: Joi.any(),

      status: Joi.number().required(),

      meta: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      code: Joi.string().allow("").allow(null),
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

      refund_by: Joi.string().allow(""),

      collect_by: Joi.string().allow(""),
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
      shipment_assignment: Joi.string().allow(""),

      logo_url: Joi.any(),

      location_reassignment: Joi.boolean(),

      dp_configuration: OrderModel.DpConfiguration(),

      lock_states: Joi.array().items(Joi.string().allow("")),

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

      acknowledged: Joi.boolean(),

      is_upserted: Joi.boolean(),
    });
  }

  static CreateChannelConifgErrorResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
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

      end_date: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      start_date: Joi.string().allow("").required(),
    });
  }
}
module.exports = OrderModel;
