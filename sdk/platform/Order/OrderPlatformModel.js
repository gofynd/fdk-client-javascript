const Joi = require("joi");

class OrderModel {
  static Prices() {
    return Joi.object({
      amount_paid_roundoff: Joi.number(),

      coupon_value: Joi.number(),

      delivery_charge: Joi.number(),

      refund_credit: Joi.number(),

      cod_charges: Joi.number(),

      amount_paid: Joi.number(),

      price_effective: Joi.number(),

      refund_amount: Joi.number(),

      value_of_good: Joi.number(),

      promotion_effective_discount: Joi.number(),

      tax_collected_at_source: Joi.number(),

      price_marked: Joi.number(),

      discount: Joi.number(),

      cashback_applied: Joi.number(),

      transfer_price: Joi.number(),

      fynd_credits: Joi.number(),

      cashback: Joi.number(),
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
      id: Joi.number(),

      can_cancel: Joi.boolean(),

      images: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow("").allow(null),

      l1_category: Joi.array().items(Joi.string().allow("")),

      l3_category_name: Joi.string().allow(""),

      l3_category: Joi.number(),

      image: Joi.array().items(Joi.string().allow("")),

      size: Joi.string().allow(""),

      name: Joi.string().allow(""),

      can_return: Joi.boolean(),

      code: Joi.string().allow(""),

      department_id: Joi.number(),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      brand_calculated_amount: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),

      gst_fee: Joi.number().required(),

      value_of_good: Joi.number().required(),
    });
  }

  static BagUnit() {
    return Joi.object({
      prices: OrderModel.Prices(),

      item: OrderModel.PlatformItem(),

      can_cancel: Joi.boolean(),

      total_shipment_bags: Joi.number().required(),

      item_quantity: Joi.number().required(),

      ordering_channel: Joi.string().allow("").required(),

      status: Joi.any().required(),

      can_return: Joi.boolean(),

      shipment_id: Joi.string().allow("").required(),

      gst: OrderModel.GSTDetailsData(),

      bag_id: Joi.number().required(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      first_name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      uid: Joi.number(),

      mobile: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      avis_user_id: Joi.string().allow(""),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      ops_status: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),
    });
  }

  static PaymentModeInfo() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      prices: OrderModel.Prices(),

      id: Joi.string().allow("").required(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      sla: Joi.any(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      fulfilling_centre: Joi.string().allow("").required(),

      channel: Joi.any(),

      total_bags_count: Joi.number().required(),

      total_shipments_in_order: Joi.number().required(),

      user: OrderModel.UserDataInfo(),

      shipment_status: OrderModel.ShipmentStatus(),

      payment_methods: Joi.any(),

      shipment_created_at: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      application: Joi.any(),

      company: Joi.any(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      shipment_id: Joi.string().allow(""),
    });
  }

  static FilterInfoOption() {
    return Joi.object({
      name: Joi.string().allow(""),

      text: Joi.string().allow("").required(),

      value: Joi.string().allow(""),
    });
  }

  static FiltersInfo() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.FilterInfoOption()),
    });
  }

  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      items: Joi.array().items(OrderModel.ShipmentItem()),

      applied_filters: Joi.any(),

      page: Joi.any(),

      filters: Joi.array().items(OrderModel.FiltersInfo()),
    });
  }

  static Error() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      cod_charges: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),

      order_date: Joi.string().allow(""),

      order_value: Joi.string().allow(""),

      source: Joi.string().allow(""),

      ordering_channel: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow("").required(),

      tax_details: Joi.any(),
    });
  }

  static InvoiceInfo() {
    return Joi.object({
      store_invoice_id: Joi.string().allow(""),

      label_url: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      credit_note_id: Joi.string().allow(""),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      id: Joi.number(),

      bag_list: Joi.array().items(Joi.string().allow("")),

      created_at: Joi.string().allow("").allow(null),

      shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      country: Joi.string().allow(""),

      id: Joi.number(),

      track_url: Joi.string().allow("").allow(null),

      awb_no: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      name: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      eway_bill_id: Joi.string().allow("").allow(null),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      journey_type: Joi.string().allow("").required(),

      app_facing: Joi.boolean(),

      is_active: Joi.boolean(),

      display_name: Joi.string().allow("").required(),

      bs_id: Joi.number().required(),

      notify_customer: Joi.boolean(),

      app_state_name: Joi.string().allow(""),

      state_type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      app_display_name: Joi.string().allow(""),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      reasons: Joi.array().items(Joi.any()),

      updated_at: Joi.string().allow(""),

      delivery_awb_number: Joi.string().allow("").allow(null),

      app_display_name: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      bag_id: Joi.number(),

      forward: Joi.boolean().allow(null),

      bag_state_mapper: OrderModel.BagStateMapper(),

      display_name: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      store_id: Joi.number(),

      state_id: Joi.number(),

      state_type: Joi.string().allow(""),

      delivery_partner_id: Joi.number().allow(null),

      shipment_id: Joi.string().allow(""),

      status: Joi.string().allow("").required(),

      bsh_id: Joi.number(),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      id: Joi.number().required(),

      store_name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      address: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
    });
  }

  static Dimensions() {
    return Joi.object({
      height: Joi.number(),

      unit: Joi.string().allow(""),

      width: Joi.number(),

      is_default: Joi.boolean(),

      length: Joi.number(),
    });
  }

  static Meta() {
    return Joi.object({
      dimension: OrderModel.Dimensions(),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      ordering_store_id: Joi.number().required(),

      store_name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      address: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
    });
  }

  static TrackingList() {
    return Joi.object({
      text: Joi.string().allow("").required(),

      is_current: Joi.boolean(),

      time: Joi.string().allow(""),

      is_passed: Joi.boolean(),

      status: Joi.string().allow("").required(),
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

      price_marked: Joi.number().required(),

      size: Joi.string().allow("").required(),

      cashback_applied: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),

      promotion_effective_discount: Joi.number().required(),

      tax_collected_at_source: Joi.number(),

      gst_tag: Joi.string().allow("").required(),

      discount: Joi.number().required(),

      transfer_price: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      delivery_charge: Joi.number().required(),

      price_effective: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      total_units: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      gst_fee: Joi.number().required(),

      fynd_credits: Joi.number().required(),

      identifiers: OrderModel.Identifier().required(),

      brand_calculated_amount: Joi.number().required(),

      coupon_value: Joi.number().required(),

      refund_credit: Joi.number().required(),

      amount_paid: Joi.number().required(),

      cod_charges: Joi.number().required(),

      cashback: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      value_of_good: Joi.number().required(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      delivery_awb_number: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      created_at: Joi.string().allow("").allow(null),

      store_id: Joi.number(),

      state_id: Joi.number(),

      state_type: Joi.string().allow(""),

      delivery_partner_id: Joi.number(),

      current_status_id: Joi.number().required(),

      bag_id: Joi.number(),

      status: Joi.string().allow(""),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      id: Joi.number().required(),

      created_on: Joi.string().allow("").required(),

      company: Joi.string().allow("").allow(null).required(),

      logo: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      country: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      area: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      version: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      longitude: Joi.number(),

      email: Joi.string().allow(""),

      state: Joi.string().allow(""),

      latitude: Joi.number(),

      pincode: Joi.string().allow(""),

      phone: Joi.string().allow(""),
    });
  }

  static BagConfigs() {
    return Joi.object({
      is_returnable: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),
    });
  }

  static BagGST() {
    return Joi.object({
      brand_calculated_amount: Joi.number(),

      hsn_code: Joi.string().allow(""),

      gst_tax_percentage: Joi.number(),

      gstin_code: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      gst_fee: Joi.number(),

      is_default_hsn_code: Joi.boolean(),

      value_of_good: Joi.number(),
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
      type: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      mrp_promotion: Joi.boolean(),

      promo_id: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      promotion_type: Joi.string().allow(""),

      article_quantity: Joi.number(),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      amount: Joi.number(),
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
      prices: OrderModel.Prices(),

      can_cancel: Joi.boolean(),

      financial_breakup: OrderModel.FinancialBreakup(),

      seller_identifier: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      current_status: OrderModel.CurrentStatus(),

      item: OrderModel.PlatformItem(),

      quantity: Joi.number(),

      brand: OrderModel.OrderBrandName(),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      bag_configs: OrderModel.BagConfigs(),

      identifier: Joi.string().allow(""),

      gst_details: OrderModel.BagGST(),

      line_number: Joi.number(),

      entity_type: Joi.string().allow(""),

      parent_promo_bags: Joi.any(),

      can_return: Joi.boolean(),

      bag_id: Joi.number().required(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      article: OrderModel.OrderBagArticle(),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      source: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      channel_order_id: Joi.string().allow("").allow(null),

      size_level_total_qty: Joi.number().allow(null),

      employee_discount: Joi.number(),

      quantity: Joi.number(),

      order_item_id: Joi.string().allow(""),

      is_priority: Joi.boolean(),

      coupon_code: Joi.string().allow("").allow(null),

      loyalty_discount: Joi.number(),

      due_date: Joi.string().allow("").allow(null),

      channel_shipment_id: Joi.string().allow("").allow(null),

      box_type: Joi.string().allow("").allow(null),
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
      irn: Joi.string().allow(""),

      signed_invoice: Joi.string().allow(""),

      acknowledge_date: Joi.string().allow(""),

      acknowledge_no: Joi.number(),

      error_message: Joi.string().allow(""),

      error_code: Joi.string().allow(""),

      signed_qr_code: Joi.string().allow(""),
    });
  }

  static EinvoiceInfo() {
    return Joi.object({
      credit_note: OrderModel.EInvoice(),

      invoice: OrderModel.EInvoice(),
    });
  }

  static LockData() {
    return Joi.object({
      mto: Joi.boolean(),

      locked: Joi.boolean(),

      lock_message: Joi.string().allow(""),
    });
  }

  static DebugInfo() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow(""),
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
      city: Joi.string().allow("").required(),

      ajio_site_id: Joi.string().allow(""),

      address: Joi.string().allow("").allow(null).required(),

      gstin: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      pincode: Joi.number().required(),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      forward_affiliate_order_id: Joi.string().allow(""),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      formatted: OrderModel.Formatted(),

      weight: Joi.number().required(),

      return_details: Joi.any(),

      dp_options: Joi.any(),

      shipment_volumetric_weight: Joi.number(),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      ewaybill_info: Joi.any().allow(null),

      return_awb_number: Joi.string().allow(""),

      same_store_available: Joi.boolean().required(),

      store_invoice_updated_date: Joi.string().allow(""),

      dp_sort_key: Joi.string().allow(""),

      assign_dp_from_sb: Joi.boolean(),

      order_type: Joi.string().allow("").allow(null),

      einvoice_info: OrderModel.EinvoiceInfo(),

      marketplace_store_id: Joi.string().allow(""),

      lock_data: OrderModel.LockData(),

      return_affiliate_shipment_id: Joi.string().allow(""),

      awb_number: Joi.string().allow(""),

      dp_name: Joi.string().allow(""),

      shipment_weight: Joi.number(),

      debug_info: OrderModel.DebugInfo(),

      timestamp: OrderModel.ShipmentTimeStamp(),

      due_date: Joi.string().allow(""),

      return_store_node: Joi.number(),

      b2c_buyer_details: Joi.any().allow(null),

      box_type: Joi.string().allow("").allow(null),

      po_number: Joi.string().allow(""),

      packaging_name: Joi.string().allow(""),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      external: Joi.any(),

      bag_weight: Joi.any(),

      return_affiliate_order_id: Joi.string().allow(""),

      b2b_buyer_details: OrderModel.BuyerDetails(),
    });
  }

  static PDFLinks() {
    return Joi.object({
      label: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      label_a6: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      invoice_pos: Joi.string().allow(""),

      delivery_challan_a4: Joi.string().allow(""),

      b2b: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      ad_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      affiliate_store_id: Joi.string().allow("").required(),

      affiliate_id: Joi.string().allow(""),

      company_affiliate_tag: Joi.string().allow(""),

      pdf_links: OrderModel.PDFLinks(),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow("").required(),
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

  static PlatformShipment() {
    return Joi.object({
      prices: OrderModel.Prices(),

      lock_status: Joi.boolean(),

      order: OrderModel.OrderDetailsData(),

      total_items: Joi.number(),

      fulfilment_priority: Joi.number(),

      shipment_status: Joi.string().allow(""),

      invoice: OrderModel.InvoiceInfo(),

      shipment_quantity: Joi.number(),

      delivery_details: OrderModel.UserDetailsData(),

      status: OrderModel.ShipmentStatusData(),

      dp_details: OrderModel.DPDetailsData(),

      picked_date: Joi.string().allow(""),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      payment_methods: Joi.any(),

      payment_mode: Joi.string().allow(""),

      vertical: Joi.string().allow("").allow(null),

      gst_details: OrderModel.GSTDetailsData(),

      custom_meta: Joi.array().items(Joi.any()),

      fulfilling_store: OrderModel.FulfillingStore(),

      invoice_id: Joi.string().allow(""),

      user: OrderModel.UserDataInfo(),

      meta: OrderModel.Meta(),

      delivery_slot: Joi.any(),

      coupon: Joi.any(),

      ordering_store: OrderModel.OrderingStoreDetails(),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      platform_logo: Joi.string().allow(""),

      packaging_type: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.OrderBags()),

      priority_text: Joi.string().allow("").allow(null),

      billing_details: OrderModel.UserDetailsData(),

      operational_status: Joi.string().allow(""),

      journey_type: Joi.string().allow(""),

      user_agent: Joi.string().allow(""),

      forward_shipment_id: Joi.string().allow(""),

      total_bags: Joi.number(),

      payments: OrderModel.ShipmentPayments(),

      enable_dp_tracking: Joi.boolean(),

      affiliate_details: OrderModel.AffiliateDetails(),

      company_details: OrderModel.CompanyDetails(),

      shipment_id: Joi.string().allow("").required(),

      shipment_images: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      success: Joi.boolean().required(),

      message: Joi.string().allow(""),
    });
  }

  static BillingStaffDetails() {
    return Joi.object({
      last_name: Joi.string().allow(""),

      user: Joi.string().allow(""),

      staff_id: Joi.number(),

      first_name: Joi.string().allow(""),
    });
  }

  static PlatformUserDetails() {
    return Joi.object({
      platform_user_first_name: Joi.string().allow(""),

      platform_user_last_name: Joi.string().allow(""),

      platform_user_id: Joi.string().allow(""),
    });
  }

  static TransactionData() {
    return Joi.object({
      payment_id: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      amount_paid: Joi.string().allow(""),

      entity: Joi.string().allow(""),

      terminal_id: Joi.string().allow(""),

      transaction_id: Joi.string().allow(""),

      unique_reference_number: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static OrderMeta() {
    return Joi.object({
      staff: Joi.any(),

      currency_symbol: Joi.string().allow(""),

      company_logo: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      order_tags: Joi.array().items(Joi.any()),

      payment_type: Joi.string().allow(""),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      employee_id: Joi.number(),

      cart_id: Joi.number(),

      ordering_store: Joi.number(),

      order_platform: Joi.string().allow(""),

      files: Joi.array().items(Joi.any()),

      customer_note: Joi.string().allow(""),

      mongo_cart_id: Joi.number(),

      billing_staff_details: OrderModel.BillingStaffDetails(),

      comment: Joi.string().allow(""),

      platform_user_details: OrderModel.PlatformUserDetails(),

      transaction_data: OrderModel.TransactionData(),

      extra_meta: Joi.any(),
    });
  }

  static TaxDetails() {
    return Joi.object({
      pan_no: Joi.string().allow(""),

      gstin: Joi.string().allow(""),
    });
  }

  static OrderDict() {
    return Joi.object({
      prices: OrderModel.Prices(),

      payment_methods: Joi.any(),

      order_date: Joi.string().allow("").required(),

      meta: OrderModel.OrderMeta(),

      fynd_order_id: Joi.string().allow("").required(),

      tax_details: OrderModel.TaxDetails(),
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
      text: Joi.string().allow(""),

      total_items: Joi.number(),

      index: Joi.number(),

      value: Joi.string().allow(""),

      actions: Joi.array().items(Joi.any()),
    });
  }

  static SuperLane() {
    return Joi.object({
      text: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.SubLane()),

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
      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static PlatformBreakupValues() {
    return Joi.object({
      name: Joi.string().allow(""),

      display: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static PlatformOrderItems() {
    return Joi.object({
      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      channel: OrderModel.PlatformChannel(),

      total_order_value: Joi.number(),

      order_value: Joi.number(),

      meta: Joi.any(),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      user_info: OrderModel.UserDataInfo(),

      payment_mode: Joi.string().allow(""),

      order_created_time: Joi.string().allow(""),

      order_id: Joi.string().allow(""),
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
      items: Joi.array().items(OrderModel.PlatformOrderItems()),

      lane: Joi.string().allow(""),

      page: OrderModel.Page(),

      message: Joi.string().allow(""),

      success: Joi.boolean(),

      total_count: Joi.number(),
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
      updated_at: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

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

      action_centre: Joi.array().items(OrderModel.FiltersInfo()),

      unfulfilled: Joi.array().items(OrderModel.FiltersInfo()),

      processed: Joi.array().items(OrderModel.FiltersInfo()),

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
      report_type: Joi.string().allow(""),

      request_details: Joi.any(),

      report_created_at: Joi.string().allow("").allow(null),

      report_name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),

      s3_key: Joi.string().allow(""),

      status: Joi.string().allow(""),

      report_id: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      company_id: Joi.string().allow(""),

      jio_code: Joi.string().allow(""),

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
      type: Joi.string().allow(""),

      value: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()),

      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

      success: Joi.boolean(),

      identifier: Joi.string().allow(""),

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
      batch_id: Joi.string().allow("").required(),

      label: Joi.any(),

      data: Joi.any(),

      store_name: Joi.string().allow(""),

      invoice: Joi.any(),

      company_id: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      store_id: Joi.string().allow(""),

      do_invoice_label_generated: Joi.boolean().required(),

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
      url: Joi.string().allow(""),

      expiry: Joi.number(),
    });
  }

  static FileResponse() {
    return Joi.object({
      operation: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      cdn: OrderModel.URL(),

      content_type: Joi.string().allow(""),

      size: Joi.number(),

      upload: OrderModel.FileUploadResponse(),

      namespace: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      method: Joi.string().allow(""),
    });
  }

  static bulkListingData() {
    return Joi.object({
      id: Joi.string().allow(""),

      successful: Joi.number(),

      user_id: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      user_name: Joi.string().allow(""),

      status: Joi.string().allow(""),

      successful_shipments: Joi.array().items(Joi.any()),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      store_code: Joi.string().allow(""),

      total: Joi.number(),

      failed: Joi.number(),

      batch_id: Joi.string().allow(""),

      company_id: Joi.number(),

      store_id: Joi.number(),

      uploaded_on: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      excel_url: Joi.string().allow(""),

      processing: Joi.number(),

      failed_shipments: Joi.array().items(Joi.any()),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

      type: Joi.string().allow(""),

      size: Joi.number(),

      current: Joi.number(),

      total: Joi.number(),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      error: Joi.string().allow(""),

      success: Joi.boolean(),

      data: Joi.array().items(OrderModel.bulkListingData()),

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
      question_set: Joi.array().items(OrderModel.QuestionSet()),

      id: Joi.number(),

      qc_type: Joi.array().items(Joi.string().allow("")),

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
      message: Joi.string().allow(""),

      status: Joi.boolean(),
    });
  }

  static BulkActionDetailsDataField() {
    return Joi.object({
      batch_id: Joi.string().allow(""),

      company_id: Joi.string().allow(""),

      processing_shipments_count: Joi.number(),

      successful_shipments_count: Joi.number(),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      total_shipments_count: Joi.number(),

      failed_shipments_count: Joi.number(),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      uploaded_by: Joi.string().allow(""),

      message: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      error: Joi.array().items(Joi.string().allow("")),

      user_id: Joi.string().allow(""),

      success: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      status: Joi.boolean(),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      is_returnable: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),
    });
  }

  static Attributes() {
    return Joi.object({
      primary_material: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      marketer_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      essential: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      can_cancel: Joi.boolean(),

      l3_category: Joi.number(),

      l2_category_id: Joi.number(),

      gender: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").required(),

      size: Joi.string().allow("").required(),

      branch_url: Joi.string().allow("").allow(null),

      l1_category: Joi.array().items(Joi.string().allow("")),

      brand: Joi.string().allow("").required(),

      slug_key: Joi.string().allow("").required(),

      last_updated_at: Joi.string().allow(""),

      color: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      l1_category_id: Joi.number(),

      attributes: OrderModel.Attributes().required(),

      webstore_product_url: Joi.string().allow("").allow(null),

      image: Joi.array().items(Joi.string().allow("")).required(),

      can_return: Joi.boolean(),

      department_id: Joi.number(),

      brand_id: Joi.number().required(),

      l3_category_name: Joi.string().allow(""),

      item_id: Joi.number().required(),

      l2_category: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow(""),
    });
  }

  static Brand() {
    return Joi.object({
      credit_note_expiry_days: Joi.number().allow(null),

      credit_note_allowed: Joi.boolean(),

      brand_id: Joi.number().required(),

      invoice_prefix: Joi.string().allow("").allow(null),

      pickup_location: Joi.string().allow("").allow(null),

      created_on: Joi.number(),

      is_virtual_invoice: Joi.boolean().allow(null),

      modified_on: Joi.number(),

      company: Joi.string().allow("").required(),

      start_date: Joi.string().allow("").allow(null),

      logo: Joi.string().allow(""),

      brand_name: Joi.string().allow("").required(),

      script_last_ran: Joi.string().allow("").allow(null),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      brand_calculated_amount: Joi.number().required(),

      igst_gst_fee: Joi.string().allow("").required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

      gst_tax_percentage: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      sgst_tax_percentage: Joi.number().required(),

      igst_tax_percentage: Joi.number().required(),

      gstin_code: Joi.string().allow("").allow(null),

      gst_tag: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow("").required(),

      gst_fee: Joi.number().required(),

      cgst_tax_percentage: Joi.number().required(),

      is_default_hsn_code: Joi.boolean(),

      value_of_good: Joi.number().required(),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      employee_discount: Joi.number(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      loyalty_discount: Joi.number(),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow("").required(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      partial_can_ret: Joi.boolean(),

      docker_number: Joi.string().allow(""),

      total_gst_percentage: Joi.number(),

      po_line_amount: Joi.number(),

      item_base_price: Joi.number(),

      po_tax_amount: Joi.number(),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }

  static StoreAddress() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      phone: Joi.string().allow("").allow(null).required(),

      area: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      updated_at: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      email: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      version: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      address_category: Joi.string().allow("").required(),
    });
  }

  static EInvoicePortalDetails() {
    return Joi.object({
      username: Joi.string().allow(""),

      user: Joi.string().allow(""),

      password: Joi.string().allow(""),
    });
  }

  static StoreEinvoice() {
    return Joi.object({
      password: Joi.string().allow(""),

      user: Joi.string().allow(""),

      enabled: Joi.boolean().required(),

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

  static Document() {
    return Joi.object({
      ds_type: Joi.string().allow("").required(),

      verified: Joi.boolean().required(),

      value: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      legal_name: Joi.string().allow("").required(),
    });
  }

  static StoreDocuments() {
    return Joi.object({
      gst: OrderModel.Document(),
    });
  }

  static StoreMeta() {
    return Joi.object({
      notification_emails: Joi.array().items(Joi.string().allow("")),

      ewaybill_portal_details: Joi.any(),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      gst_number: Joi.string().allow(""),

      product_return_config: Joi.any(),

      timing: Joi.array().items(Joi.any()),

      display_name: Joi.string().allow("").required(),

      additional_contact_details: Joi.any(),

      stage: Joi.string().allow("").required(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      documents: OrderModel.StoreDocuments(),
    });
  }

  static Store() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      order_integration_id: Joi.string().allow(""),

      store_address_json: OrderModel.StoreAddress(),

      is_archived: Joi.boolean(),

      name: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      store_active_from: Joi.string().allow("").allow(null),

      packaging_material_count: Joi.number(),

      alohomora_user_id: Joi.number(),

      mall_area: Joi.string().allow("").allow(null),

      address2: Joi.string().allow(""),

      is_enabled_for_recon: Joi.boolean(),

      store_email: Joi.string().allow("").required(),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      updated_at: Joi.string().allow("").allow(null),

      mall_name: Joi.string().allow("").allow(null),

      meta: OrderModel.StoreMeta().required(),

      created_at: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      location_type: Joi.string().allow("").required(),

      s_id: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      brand_id: Joi.any(),

      city: Joi.string().allow("").required(),

      login_username: Joi.string().allow("").required(),

      parent_store_id: Joi.number(),

      fulfillment_channel: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      vat_no: Joi.string().allow("").allow(null),

      address1: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      code: Joi.string().allow(""),
    });
  }

  static Dates() {
    return Joi.object({
      order_created: Joi.string().allow(""),

      delivery_date: Joi.any(),
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
      shipping: Joi.number(),

      is_default: Joi.boolean(),

      unit: Joi.string().allow(""),
    });
  }

  static Article() {
    return Joi.object({
      return_config: OrderModel.ReturnConfig(),

      child_details: Joi.any().allow(null),

      weight: OrderModel.Weight(),

      seller_identifier: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      dimensions: OrderModel.Dimensions(),

      uid: Joi.string().allow("").required(),

      raw_meta: Joi.any(),

      esp_modified: Joi.any(),

      size: Joi.string().allow("").required(),

      a_set: Joi.any().allow(null),

      is_set: Joi.boolean(),

      identifiers: OrderModel.Identifier().required(),

      code: Joi.string().allow(""),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      order_integration_id: Joi.string().allow("").allow(null),

      prices: OrderModel.Prices().required(),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      restore_coupon: Joi.boolean(),

      seller_identifier: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      no_of_bags_order: Joi.number(),

      current_status: OrderModel.BagStatusHistory().required(),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      item: OrderModel.Item().required(),

      bag_status_history: OrderModel.BagStatusHistory(),

      quantity: Joi.number(),

      brand: OrderModel.Brand().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      identifier: Joi.string().allow(""),

      original_bag_list: Joi.array().items(Joi.number()),

      gst_details: OrderModel.BagGSTDetails().required(),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      line_number: Joi.number(),

      bag_update_time: Joi.number(),

      restore_promos: Joi.any(),

      meta: OrderModel.BagMeta(),

      ordering_store: OrderModel.Store(),

      dates: OrderModel.Dates(),

      entity_type: Joi.string().allow(""),

      parent_promo_bags: Joi.any(),

      qc_required: Joi.any(),

      reasons: Joi.array().items(Joi.any()),

      operational_status: Joi.string().allow(""),

      journey_type: Joi.string().allow("").required(),

      article_details: OrderModel.ArticleDetails(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      applied_promos: Joi.array().items(Joi.any()),

      b_type: Joi.string().allow(""),

      b_id: Joi.number().required(),

      affiliate_details: OrderModel.AffiliateDetails(),

      article: OrderModel.Article().required(),

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
      page_type: Joi.string().allow("").required(),

      has_next: Joi.boolean().required(),

      item_total: Joi.number().required(),

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
      payment_receipt: Joi.string().allow(""),

      success: Joi.boolean(),

      invoice_receipt: Joi.string().allow(""),

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

      error_trace: Joi.string().allow(""),

      status: Joi.number().required(),
    });
  }

  static StoreReassign() {
    return Joi.object({
      affiliate_order_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      bag_id: Joi.number().allow(null),

      mongo_article_id: Joi.string().allow("").allow(null),

      reason_ids: Joi.array().items(Joi.number()),

      set_id: Joi.string().allow("").allow(null),

      fynd_order_id: Joi.string().allow("").allow(null),

      item_id: Joi.string().allow("").allow(null),

      affiliate_id: Joi.string().allow("").allow(null),

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
      affiliate_shipment_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),

      affiliate_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow(""),
    });
  }

  static UpdateShipmentLockPayload() {
    return Joi.object({
      entities: Joi.array().items(OrderModel.Entities()).required(),

      action_type: Joi.string().allow("").required(),

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

      affiliate_order_id: Joi.string().allow(""),

      bag_id: Joi.number(),

      affiliate_bag_id: Joi.string().allow(""),
    });
  }

  static CheckResponse() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),

      original_filter: OrderModel.OriginalFilter(),

      affiliate_shipment_id: Joi.string().allow(""),

      is_bag_locked: Joi.boolean(),

      affiliate_id: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.Bags()),

      status: Joi.string().allow(""),

      is_shipment_locked: Joi.boolean(),

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
      platform_name: Joi.string().allow(""),

      title: Joi.string().allow(""),

      company_id: Joi.number(),

      id: Joi.number().required(),

      description: Joi.string().allow(""),

      from_datetime: Joi.string().allow(""),

      to_datetime: Joi.string().allow(""),

      logo_url: Joi.string().allow(""),

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
      exclude_bags_next_state: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.ShipmentsRequest()),

      status: Joi.string().allow(""),
    });
  }

  static UpdateShipmentStatusRequest() {
    return Joi.object({
      force_transition: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      task: Joi.boolean(),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      stack_trace: Joi.string().allow(""),

      final_state: Joi.any(),

      meta: Joi.any(),

      status: Joi.number(),

      message: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      code: Joi.string().allow(""),

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

  static AffiliateAppConfigMeta() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static AffiliateAppConfig() {
    return Joi.object({
      owner: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      created_at: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),
    });
  }

  static AffiliateInventoryPaymentConfig() {
    return Joi.object({
      source: Joi.string().allow(""),

      mode_of_payment: Joi.string().allow(""),
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

  static AffiliateInventoryConfig() {
    return Joi.object({
      payment: OrderModel.AffiliateInventoryPaymentConfig(),

      inventory: OrderModel.AffiliateInventoryStoreConfig(),

      order: OrderModel.AffiliateInventoryOrderConfig(),

      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),

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
      token: Joi.string().allow("").required(),

      config: OrderModel.AffiliateConfig(),

      id: Joi.string().allow("").required(),
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
      bag_end_state: Joi.string().allow(""),

      affiliate: OrderModel.Affiliate().required(),

      create_user: Joi.boolean(),

      article_lookup: Joi.string().allow(""),

      store_lookup: Joi.string().allow(""),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),
    });
  }

  static OrderUser() {
    return Joi.object({
      address1: Joi.string().allow("").allow(null),

      last_name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      address2: Joi.string().allow("").allow(null),

      phone: Joi.number().required(),

      email: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      quantity: Joi.number().required(),

      weight: Joi.any().required(),

      category: Joi.any().required(),

      dimension: Joi.any().required(),

      _id: Joi.string().allow("").required(),

      attributes: Joi.any().required(),

      brand_id: Joi.number().required(),
    });
  }

  static ShipmentDetails() {
    return Joi.object({
      affiliate_shipment_id: Joi.string().allow("").required(),

      dp_id: Joi.number().allow(null),

      fulfillment_id: Joi.number().required(),

      meta: Joi.any(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      box_type: Joi.string().allow("").allow(null),

      shipments: Joi.number().required(),
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
      source: Joi.string().allow("").required(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      action: Joi.string().allow("").required(),

      identifier: Joi.string().allow("").required(),

      location_details: OrderModel.LocationDetails(),

      journey: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),
    });
  }

  static ShipmentData() {
    return Joi.object({
      shipment_data: OrderModel.ShipmentConfig().required(),
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

      transfer_price: Joi.number().required(),

      amount_paid: Joi.number().required(),

      item_id: Joi.number().required(),

      price_effective: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      fynd_store_id: Joi.string().allow("").required(),

      store_id: Joi.number().required(),

      sku: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      item_size: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      unit_price: Joi.number().required(),

      discount: Joi.number().required(),

      seller_identifier: Joi.string().allow("").required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      affiliate_meta: Joi.any().required(),

      quantity: Joi.number().required(),

      avl_qty: Joi.number().required(),

      price_marked: Joi.number().required(),

      modified_on: Joi.string().allow("").required(),

      identifier: Joi.any().required(),
    });
  }

  static OrderInfo() {
    return Joi.object({
      billing_address: OrderModel.OrderUser().required(),

      payment: Joi.any(),

      affiliate_order_id: Joi.string().allow(""),

      discount: Joi.number().required(),

      cod_charges: Joi.number().required(),

      shipment: OrderModel.ShipmentData(),

      items: Joi.any().required(),

      user: OrderModel.UserData().required(),

      payment_mode: Joi.string().allow("").required(),

      order_value: Joi.number().required(),

      shipping_address: OrderModel.OrderUser().required(),

      order_priority: OrderModel.OrderPriority(),

      coupon: Joi.string().allow("").allow(null),

      delivery_charges: Joi.number().required(),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),
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
      description: Joi.string().allow("").required(),

      display_text: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

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
      type: Joi.string().allow("").required(),

      l2_detail: Joi.string().allow(""),

      bag_id: Joi.number(),

      message: Joi.string().allow("").required(),

      l1_detail: Joi.string().allow(""),

      ticket_url: Joi.string().allow(""),

      user: Joi.string().allow("").required(),

      createdat: Joi.string().allow("").required(),

      l3_detail: Joi.string().allow(""),

      ticket_id: Joi.string().allow(""),
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

      identifier: Joi.string().allow(""),

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

  static SmsDataPayload() {
    return Joi.object({
      shipment_id: Joi.number().required(),

      customer_name: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      phone_number: Joi.number().required(),

      message: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      payment_mode: Joi.string().allow("").required(),
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
      shipment_id: Joi.string().allow(""),

      id: Joi.number().required(),

      meta: OrderModel.Meta1().required(),

      status: Joi.string().allow(""),

      remarks: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.number()),
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
      order_type: Joi.string().allow("").required(),

      dp_id: Joi.number().required(),

      qc_required: Joi.string().allow("").required(),

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
      amount: Joi.any().required(),

      breakup: Joi.array().items(Joi.any()),

      name: Joi.string().allow("").required(),

      rate: Joi.number().required(),
    });
  }

  static Charge() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      amount: Joi.any().required(),

      name: Joi.string().allow("").required(),

      tax: OrderModel.Tax(),

      code: Joi.string().allow(""),
    });
  }

  static BillingInfo() {
    return Joi.object({
      primary_email: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      title: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      state_code: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),
    });
  }

  static TaxInfo() {
    return Joi.object({
      gstin: Joi.string().allow(""),

      b2b_gstin_number: Joi.string().allow(""),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      primary_email: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      slot: Joi.array().items(Joi.any()),

      last_name: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      geo_location: Joi.any(),

      address2: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      title: Joi.string().allow(""),

      shipping_type: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      state_code: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      collect_by: Joi.string().allow("").required(),

      transaction_data: Joi.any(),

      amount: Joi.number().required(),

      name: Joi.string().allow("").required(),

      meta: Joi.any(),

      mode: Joi.string().allow("").required(),

      refund_by: Joi.string().allow("").required(),
    });
  }

  static PaymentInfo() {
    return Joi.object({
      payment_methods: Joi.array().items(OrderModel.PaymentMethod()),

      primary_mode: Joi.string().allow("").required(),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      pack_by_date: Joi.string().allow(""),

      dispatch_after_date: Joi.string().allow(""),

      dp_pickup_slot: Joi.any(),

      confirm_by_date: Joi.string().allow(""),

      dispatch_by_date: Joi.string().allow(""),

      customer_pickup_slot: Joi.any(),
    });
  }

  static LineItem() {
    return Joi.object({
      quantity: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      meta: Joi.any(),

      custom_messasge: Joi.string().allow(""),

      external_line_id: Joi.string().allow(""),

      charges: Joi.array().items(OrderModel.Charge()),
    });
  }

  static Shipment() {
    return Joi.object({
      location_id: Joi.number().required(),

      meta: Joi.any(),

      priority: Joi.number(),

      processing_dates: OrderModel.ProcessingDates(),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),

      external_shipment_id: Joi.string().allow(""),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      charges: Joi.array().items(OrderModel.Charge()),

      billing_info: OrderModel.BillingInfo().required(),

      currency_info: Joi.any(),

      tax_info: OrderModel.TaxInfo(),

      meta: Joi.any(),

      shipping_info: OrderModel.ShippingInfo().required(),

      payment_info: OrderModel.PaymentInfo().required(),

      external_creation_date: Joi.string().allow(""),

      external_order_id: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      exception: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),

      request_id: Joi.string().allow("").allow(null),

      meta: Joi.string().allow("").allow(null),

      status: Joi.number().required(),

      message: Joi.string().allow("").required(),

      code: Joi.string().allow("").allow(null),

      info: Joi.any(),
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
      shipment_assignment: Joi.string().allow(""),

      lock_states: Joi.array().items(Joi.string().allow("")),

      location_reassignment: Joi.boolean(),

      payment_info: OrderModel.CreateChannelPaymentInfo(),

      logo_url: Joi.any(),

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
      acknowledged: Joi.boolean(),

      is_upserted: Joi.boolean(),

      is_inserted: Joi.boolean(),
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

      mobile: Joi.number().required(),

      start_date: Joi.string().allow("").required(),

      end_date: Joi.string().allow("").required(),
    });
  }
}
module.exports = OrderModel;
