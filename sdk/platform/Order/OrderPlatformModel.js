const Joi = require("joi");

class OrderModel {
  static FilterInfoOption() {
    return Joi.object({
      name: Joi.string().allow(""),

      text: Joi.string().allow("").required(),

      value: Joi.string().allow(""),
    });
  }

  static FiltersInfo() {
    return Joi.object({
      options: Joi.array().items(OrderModel.FilterInfoOption()),

      text: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      email: Joi.string().allow(""),

      avis_user_id: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      uid: Joi.number(),

      last_name: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static PaymentModeInfo() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      code: Joi.string().allow(""),

      l3_category: Joi.number(),

      id: Joi.number(),

      images: Joi.array().items(Joi.string().allow("")),

      can_cancel: Joi.boolean(),

      department_id: Joi.number(),

      image: Joi.array().items(Joi.string().allow("")),

      can_return: Joi.boolean(),

      color: Joi.string().allow("").allow(null),

      size: Joi.string().allow(""),

      l1_category: Joi.array().items(Joi.string().allow("")),

      l3_category_name: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static Prices() {
    return Joi.object({
      fynd_credits: Joi.number(),

      promotion_effective_discount: Joi.number(),

      price_effective: Joi.number(),

      amount_paid: Joi.number(),

      price_marked: Joi.number(),

      cashback_applied: Joi.number(),

      delivery_charge: Joi.number(),

      coupon_value: Joi.number(),

      discount: Joi.number(),

      refund_credit: Joi.number(),

      tax_collected_at_source: Joi.number(),

      transfer_price: Joi.number(),

      cod_charges: Joi.number(),

      value_of_good: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      cashback: Joi.number(),

      refund_amount: Joi.number(),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      gstin_code: Joi.string().allow("").required(),

      brand_calculated_amount: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      gst_fee: Joi.number().required(),

      value_of_good: Joi.number().required(),
    });
  }

  static BagUnit() {
    return Joi.object({
      item: OrderModel.PlatformItem(),

      ordering_channel: Joi.string().allow("").required(),

      total_shipment_bags: Joi.number().required(),

      bag_id: Joi.number().required(),

      status: Joi.any().required(),

      can_cancel: Joi.boolean(),

      can_return: Joi.boolean(),

      prices: OrderModel.Prices(),

      gst: OrderModel.GSTDetailsData(),

      item_quantity: Joi.number().required(),

      shipment_id: Joi.string().allow("").required(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      actual_status: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),
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
      application: Joi.any(),

      total_shipments_in_order: Joi.number().required(),

      company: Joi.any(),

      id: Joi.string().allow("").required(),

      user: OrderModel.UserDataInfo(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      shipment_created_at: Joi.string().allow("").required(),

      payment_methods: Joi.any(),

      total_bags_count: Joi.number().required(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      channel: Joi.any(),

      prices: OrderModel.Prices(),

      created_at: Joi.string().allow("").required(),

      shipment_status: OrderModel.ShipmentStatus(),

      shipment_id: Joi.string().allow(""),

      sla: Joi.any(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      fulfilling_centre: Joi.string().allow("").required(),
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

      ordering_channel_logo: Joi.any(),

      order_date: Joi.string().allow(""),

      order_value: Joi.string().allow(""),

      source: Joi.string().allow(""),

      tax_details: Joi.any(),

      cod_charges: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow("").required(),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      state_type: Joi.string().allow("").required(),

      bs_id: Joi.number().required(),

      journey_type: Joi.string().allow("").required(),

      app_state_name: Joi.string().allow(""),

      app_display_name: Joi.string().allow(""),

      notify_customer: Joi.boolean(),

      display_name: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      app_facing: Joi.boolean(),

      name: Joi.string().allow("").required(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      state_type: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      bag_id: Joi.number(),

      delivery_awb_number: Joi.string().allow("").allow(null),

      reasons: Joi.array().items(Joi.any()),

      status: Joi.string().allow("").required(),

      state_id: Joi.number(),

      bsh_id: Joi.number(),

      kafka_sync: Joi.boolean(),

      store_id: Joi.number(),

      created_at: Joi.string().allow(""),

      app_display_name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      forward: Joi.boolean().allow(null),

      shipment_id: Joi.string().allow(""),

      delivery_partner_id: Joi.number().allow(null),

      bag_state_mapper: OrderModel.BagStateMapper(),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      id: Joi.number(),

      bag_list: Joi.array().items(Joi.string().allow("")),

      status: Joi.string().allow(""),

      created_at: Joi.string().allow("").allow(null),

      shipment_id: Joi.string().allow(""),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      area: Joi.string().allow(""),

      email: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      address_type: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      address: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),
    });
  }

  static InvoiceInfo() {
    return Joi.object({
      label_url: Joi.string().allow(""),

      store_invoice_id: Joi.string().allow(""),

      credit_note_id: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      eway_bill_id: Joi.string().allow("").allow(null),

      id: Joi.number(),

      awb_no: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      track_url: Joi.string().allow("").allow(null),

      name: Joi.string().allow(""),

      country: Joi.string().allow(""),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      source: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      logo: Joi.string().allow(""),
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
      item_criteria: OrderModel.ItemCriterias(),

      cart_conditions: Joi.any(),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      promotion_type: Joi.string().allow(""),

      amount: Joi.number(),

      mrp_promotion: Joi.boolean(),

      article_quantity: Joi.number(),

      promotion_name: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      company: Joi.string().allow("").allow(null).required(),

      modified_on: Joi.string().allow(""),

      id: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      return_config: Joi.any(),

      identifiers: Joi.any(),

      uid: Joi.string().allow(""),
    });
  }

  static BagGST() {
    return Joi.object({
      is_default_hsn_code: Joi.boolean(),

      gstin_code: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      brand_calculated_amount: Joi.number(),

      gst_tax_percentage: Joi.number(),

      hsn_code: Joi.string().allow(""),

      gst_fee: Joi.number(),

      value_of_good: Joi.number(),
    });
  }

  static BagConfigs() {
    return Joi.object({
      can_be_cancelled: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      state_type: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      bag_id: Joi.number(),

      delivery_awb_number: Joi.string().allow(""),

      status: Joi.string().allow(""),

      state_id: Joi.number(),

      current_status_id: Joi.number().required(),

      kafka_sync: Joi.boolean(),

      store_id: Joi.number(),

      created_at: Joi.string().allow("").allow(null),

      shipment_id: Joi.string().allow(""),

      delivery_partner_id: Joi.number(),

      bag_state_mapper: OrderModel.BagStateMapper(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      area: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      email: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      state: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      latitude: Joi.number(),

      version: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      longitude: Joi.number(),

      city: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      country: Joi.string().allow(""),
    });
  }

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      cashback_applied: Joi.number().required(),

      total_units: Joi.number().required(),

      transfer_price: Joi.number().required(),

      discount: Joi.number().required(),

      gst_fee: Joi.number().required(),

      value_of_good: Joi.number().required(),

      size: Joi.string().allow("").required(),

      cashback: Joi.number().required(),

      refund_credit: Joi.number().required(),

      fynd_credits: Joi.number().required(),

      price_effective: Joi.number().required(),

      price_marked: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      tax_collected_at_source: Joi.number(),

      hsn_code: Joi.string().allow("").required(),

      coupon_value: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),

      promotion_effective_discount: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      brand_calculated_amount: Joi.number().required(),

      amount_paid: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      identifiers: OrderModel.Identifier().required(),

      cod_charges: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      added_to_fynd_cash: Joi.boolean().required(),
    });
  }

  static OrderBags() {
    return Joi.object({
      seller_identifier: Joi.string().allow(""),

      bag_id: Joi.number().required(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      can_cancel: Joi.boolean(),

      prices: OrderModel.Prices(),

      brand: OrderModel.OrderBrandName(),

      identifier: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      parent_promo_bags: Joi.any(),

      article: OrderModel.OrderBagArticle(),

      can_return: Joi.boolean(),

      display_name: Joi.string().allow(""),

      gst_details: OrderModel.BagGST(),

      item: OrderModel.PlatformItem(),

      bag_configs: OrderModel.BagConfigs(),

      current_status: OrderModel.CurrentStatus(),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      financial_breakup: OrderModel.FinancialBreakup(),

      line_number: Joi.number(),

      quantity: Joi.number(),
    });
  }

  static Dimensions() {
    return Joi.object({
      height: Joi.number(),

      is_default: Joi.boolean(),

      width: Joi.number(),

      length: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static Meta() {
    return Joi.object({
      dimension: OrderModel.Dimensions(),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      ordering_store_id: Joi.number().required(),

      state: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      quantity: Joi.number(),

      order_item_id: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      due_date: Joi.string().allow("").allow(null),

      size_level_total_qty: Joi.number().allow(null),

      channel_shipment_id: Joi.string().allow("").allow(null),

      is_priority: Joi.boolean(),

      employee_discount: Joi.number(),

      coupon_code: Joi.string().allow("").allow(null),

      channel_order_id: Joi.string().allow("").allow(null),

      loyalty_discount: Joi.number(),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      gstin: Joi.string().allow("").required(),

      ajio_site_id: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      city: Joi.string().allow("").required(),

      address: Joi.string().allow("").allow(null).required(),

      name: Joi.string().allow("").required(),
    });
  }

  static LockData() {
    return Joi.object({
      locked: Joi.boolean(),

      mto: Joi.boolean(),

      lock_message: Joi.string().allow(""),
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
      error_code: Joi.string().allow(""),

      acknowledge_date: Joi.string().allow(""),

      signed_qr_code: Joi.string().allow(""),

      irn: Joi.string().allow(""),

      acknowledge_no: Joi.number(),

      error_message: Joi.string().allow(""),

      signed_invoice: Joi.string().allow(""),
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
      f_max: Joi.string().allow(""),

      f_min: Joi.string().allow(""),
    });
  }

  static DebugInfo() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow(""),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      shipment_weight: Joi.number(),

      external: Joi.any(),

      store_invoice_updated_date: Joi.string().allow(""),

      shipment_volumetric_weight: Joi.number(),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      forward_affiliate_order_id: Joi.string().allow(""),

      lock_data: OrderModel.LockData(),

      timestamp: OrderModel.ShipmentTimeStamp(),

      b2c_buyer_details: Joi.any().allow(null),

      einvoice_info: OrderModel.EinvoiceInfo(),

      order_type: Joi.string().allow("").allow(null),

      packaging_name: Joi.string().allow(""),

      po_number: Joi.string().allow(""),

      marketplace_store_id: Joi.string().allow(""),

      due_date: Joi.string().allow(""),

      return_awb_number: Joi.string().allow(""),

      return_details: Joi.any(),

      return_store_node: Joi.number(),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      assign_dp_from_sb: Joi.boolean(),

      dp_sort_key: Joi.string().allow(""),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      same_store_available: Joi.boolean().required(),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      awb_number: Joi.string().allow(""),

      dp_name: Joi.string().allow(""),

      bag_weight: Joi.any(),

      weight: Joi.number().required(),

      return_affiliate_order_id: Joi.string().allow(""),

      formatted: OrderModel.Formatted(),

      box_type: Joi.string().allow("").allow(null),

      return_affiliate_shipment_id: Joi.string().allow(""),

      dp_options: Joi.any(),

      dp_id: Joi.string().allow("").allow(null),

      debug_info: OrderModel.DebugInfo(),

      ewaybill_info: Joi.any().allow(null),
    });
  }

  static PDFLinks() {
    return Joi.object({
      po_invoice: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      delivery_challan_a4: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      label_type: Joi.string().allow("").required(),

      invoice_pos: Joi.string().allow(""),

      b2b: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      label: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      affiliate_store_id: Joi.string().allow("").required(),

      company_affiliate_tag: Joi.string().allow(""),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      affiliate_bag_id: Joi.string().allow("").required(),

      ad_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow("").required(),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      pdf_links: OrderModel.PDFLinks(),

      affiliate_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow("").required(),
    });
  }

  static TrackingList() {
    return Joi.object({
      time: Joi.string().allow(""),

      is_passed: Joi.boolean(),

      text: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      is_current: Joi.boolean(),
    });
  }

  static PhoneDetails() {
    return Joi.object({
      mobile_number: Joi.string().allow(""),

      country_code: Joi.number(),
    });
  }

  static ContactDetails() {
    return Joi.object({
      emails: Joi.array().items(Joi.string().allow("")),

      phone: Joi.array().items(OrderModel.PhoneDetails()),
    });
  }

  static CompanyDetails() {
    return Joi.object({
      company_name: Joi.string().allow(""),

      company_contact: OrderModel.ContactDetails(),

      company_id: Joi.number(),

      address: Joi.any(),

      company_gst: Joi.string().allow(""),

      company_cin: Joi.string().allow(""),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      id: Joi.number().required(),

      state: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      user_agent: Joi.string().allow(""),

      fulfilment_priority: Joi.number(),

      order: OrderModel.OrderDetailsData(),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      delivery_slot: Joi.any(),

      user: OrderModel.UserDataInfo(),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      status: OrderModel.ShipmentStatusData(),

      billing_details: OrderModel.UserDetailsData(),

      total_items: Joi.number(),

      forward_shipment_id: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      payment_methods: Joi.any(),

      platform_logo: Joi.string().allow(""),

      invoice: OrderModel.InvoiceInfo(),

      dp_details: OrderModel.DPDetailsData(),

      payments: OrderModel.ShipmentPayments(),

      custom_meta: Joi.array().items(Joi.any()),

      bags: Joi.array().items(OrderModel.OrderBags()),

      invoice_id: Joi.string().allow(""),

      packaging_type: Joi.string().allow(""),

      gst_details: OrderModel.GSTDetailsData(),

      meta: OrderModel.Meta(),

      journey_type: Joi.string().allow(""),

      ordering_store: OrderModel.OrderingStoreDetails(),

      affiliate_details: OrderModel.AffiliateDetails(),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      operational_status: Joi.string().allow(""),

      shipment_status: Joi.string().allow(""),

      company_details: OrderModel.CompanyDetails(),

      delivery_details: OrderModel.UserDetailsData(),

      total_bags: Joi.number(),

      coupon: Joi.any(),

      picked_date: Joi.string().allow(""),

      shipment_quantity: Joi.number(),

      priority_text: Joi.string().allow("").allow(null),

      vertical: Joi.string().allow("").allow(null),

      payment_mode: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),

      lock_status: Joi.boolean(),

      fulfilling_store: OrderModel.FulfillingStore(),

      enable_dp_tracking: Joi.boolean(),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean().required(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),
    });
  }

  static BillingStaffDetails() {
    return Joi.object({
      user: Joi.string().allow(""),

      employee_code: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      staff_id: Joi.number(),
    });
  }

  static PlatformUserDetails() {
    return Joi.object({
      platform_user_id: Joi.string().allow(""),

      platform_user_last_name: Joi.string().allow(""),

      platform_user_first_name: Joi.string().allow(""),

      platform_user_employee_code: Joi.string().allow(""),
    });
  }

  static TransactionData() {
    return Joi.object({
      terminal_id: Joi.string().allow(""),

      entity: Joi.string().allow(""),

      transaction_id: Joi.string().allow(""),

      amount_paid: Joi.string().allow(""),

      status: Joi.string().allow(""),

      payment_id: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      unique_reference_number: Joi.string().allow(""),
    });
  }

  static OrderMeta() {
    return Joi.object({
      employee_id: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      cart_id: Joi.number(),

      comment: Joi.string().allow(""),

      staff: Joi.any(),

      order_type: Joi.string().allow(""),

      order_tags: Joi.array().items(Joi.any()),

      order_platform: Joi.string().allow(""),

      billing_staff_details: OrderModel.BillingStaffDetails(),

      company_logo: Joi.string().allow(""),

      files: Joi.array().items(Joi.any()),

      payment_type: Joi.string().allow(""),

      ordering_store: Joi.number(),

      platform_user_details: OrderModel.PlatformUserDetails(),

      extra_meta: Joi.any(),

      mongo_cart_id: Joi.number(),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      customer_note: Joi.string().allow(""),

      transaction_data: OrderModel.TransactionData(),
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
      meta: OrderModel.OrderMeta(),

      order_date: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),

      fynd_order_id: Joi.string().allow("").required(),

      payment_methods: Joi.any(),

      tax_details: OrderModel.TaxDetails(),
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
      text: Joi.string().allow(""),

      actions: Joi.array().items(Joi.any()),

      value: Joi.string().allow(""),

      total_items: Joi.number(),

      index: Joi.number(),
    });
  }

  static SuperLane() {
    return Joi.object({
      options: Joi.array().items(OrderModel.SubLane()),

      total_items: Joi.number(),

      text: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
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
      name: Joi.string().allow(""),

      value: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static PlatformOrderItems() {
    return Joi.object({
      meta: Joi.any(),

      total_order_value: Joi.number(),

      order_id: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      user_info: OrderModel.UserDataInfo(),

      order_value: Joi.number(),

      channel: OrderModel.PlatformChannel(),

      payment_mode: Joi.string().allow(""),

      order_created_time: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),
    });
  }

  static OrderListingResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      total_count: Joi.number(),

      lane: Joi.string().allow(""),

      success: Joi.boolean(),

      page: OrderModel.Page(),

      items: Joi.array().items(OrderModel.PlatformOrderItems()),
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
      key: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),

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
      reason: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      meta: Joi.any(),

      shipment_type: Joi.string().allow(""),

      status: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),
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
      unfulfilled: Joi.array().items(OrderModel.FiltersInfo()),

      action_centre: Joi.array().items(OrderModel.FiltersInfo()),

      returned: Joi.array().items(OrderModel.FiltersInfo()),

      filters: Joi.array().items(OrderModel.FiltersInfo()),

      processed: Joi.array().items(OrderModel.FiltersInfo()),
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
      request_details: Joi.any(),

      report_requested_at: Joi.string().allow("").allow(null),

      report_type: Joi.string().allow(""),

      report_name: Joi.string().allow(""),

      report_created_at: Joi.string().allow("").allow(null),

      status: Joi.string().allow(""),

      s3_key: Joi.string().allow(""),

      report_id: Joi.string().allow(""),

      display_name: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      article_id: Joi.string().allow(""),

      item_id: Joi.string().allow(""),

      company_id: Joi.string().allow(""),

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
      invoice_status: Joi.string().allow(""),

      do_invoice_label_generated: Joi.boolean().required(),

      store_name: Joi.string().allow(""),

      store_id: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      data: Joi.any(),

      invoice: Joi.any(),

      batch_id: Joi.string().allow("").required(),

      label: Joi.any(),

      company_id: Joi.string().allow(""),
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
      file_path: Joi.string().allow(""),

      method: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      cdn: OrderModel.URL(),

      content_type: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      size: Joi.number(),

      namespace: Joi.string().allow(""),

      upload: OrderModel.FileUploadResponse(),

      operation: Joi.string().allow(""),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      type: Joi.string().allow(""),

      total: Joi.number(),

      current: Joi.number(),

      has_previous: Joi.boolean(),

      size: Joi.number(),

      has_next: Joi.boolean(),
    });
  }

  static bulkListingData() {
    return Joi.object({
      total: Joi.number(),

      excel_url: Joi.string().allow(""),

      status: Joi.string().allow(""),

      failed_shipments: Joi.array().items(Joi.any()),

      successful_shipments: Joi.array().items(Joi.any()),

      user_id: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      failed: Joi.number(),

      batch_id: Joi.string().allow(""),

      company_id: Joi.number(),

      uploaded_on: Joi.string().allow(""),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      user_name: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      successful: Joi.number(),

      store_code: Joi.string().allow(""),

      store_id: Joi.number(),

      processing: Joi.number(),
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
      display_name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static Reason() {
    return Joi.object({
      qc_type: Joi.array().items(Joi.string().allow("")),

      question_set: Joi.array().items(OrderModel.QuestionSet()),

      display_name: Joi.string().allow(""),

      id: Joi.number(),
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

      successful_shipments_count: Joi.number(),

      failed_shipments_count: Joi.number(),

      processing_shipments_count: Joi.number(),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      batch_id: Joi.string().allow(""),

      company_id: Joi.string().allow(""),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      uploaded_on: Joi.string().allow(""),

      message: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      success: Joi.string().allow(""),

      uploaded_by: Joi.string().allow(""),

      status: Joi.boolean(),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      error: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      can_be_cancelled: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static Brand() {
    return Joi.object({
      invoice_prefix: Joi.string().allow("").allow(null),

      brand_id: Joi.number().required(),

      company: Joi.string().allow("").required(),

      is_virtual_invoice: Joi.boolean().allow(null),

      modified_on: Joi.number(),

      start_date: Joi.string().allow("").allow(null),

      credit_note_allowed: Joi.boolean(),

      brand_name: Joi.string().allow("").required(),

      script_last_ran: Joi.string().allow("").allow(null),

      created_on: Joi.number(),

      pickup_location: Joi.string().allow("").allow(null),

      logo: Joi.string().allow(""),

      credit_note_expiry_days: Joi.number().allow(null),
    });
  }

  static Dates() {
    return Joi.object({
      order_created: Joi.string().allow(""),

      delivery_date: Joi.any(),
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
      time: Joi.number(),

      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),
    });
  }

  static Article() {
    return Joi.object({
      _id: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      a_set: Joi.any().allow(null),

      seller_identifier: Joi.string().allow("").required(),

      is_set: Joi.boolean(),

      weight: OrderModel.Weight(),

      return_config: OrderModel.ReturnConfig(),

      dimensions: OrderModel.Dimensions(),

      identifiers: OrderModel.Identifier().required(),

      uid: Joi.string().allow("").required(),

      child_details: Joi.any().allow(null),

      esp_modified: Joi.any(),

      raw_meta: Joi.any(),

      size: Joi.string().allow("").required(),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      is_default_hsn_code: Joi.boolean(),

      gstin_code: Joi.string().allow("").allow(null),

      gst_tag: Joi.string().allow("").required(),

      brand_calculated_amount: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      sgst_tax_percentage: Joi.number().required(),

      cgst_tax_percentage: Joi.number().required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow("").required(),

      gst_fee: Joi.number().required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),

      igst_tax_percentage: Joi.number().required(),

      igst_gst_fee: Joi.string().allow("").required(),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      affiliate_meta: OrderModel.AffiliateMeta().required(),

      affiliate_bag_id: Joi.string().allow("").required(),

      employee_discount: Joi.number(),

      loyalty_discount: Joi.number(),

      affiliate_order_id: Joi.string().allow("").required(),
    });
  }

  static Attributes() {
    return Joi.object({
      marketer_address: Joi.string().allow(""),

      essential: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),

      primary_material: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      brand_name: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      gender: Joi.string().allow("").allow(null),

      can_cancel: Joi.boolean(),

      department_id: Joi.number(),

      color: Joi.string().allow("").allow(null),

      item_id: Joi.number().required(),

      size: Joi.string().allow("").required(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      brand: Joi.string().allow("").required(),

      attributes: OrderModel.Attributes().required(),

      image: Joi.array().items(Joi.string().allow("")).required(),

      can_return: Joi.boolean(),

      webstore_product_url: Joi.string().allow("").allow(null),

      last_updated_at: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      meta: Joi.any(),

      l3_category: Joi.number(),

      brand_id: Joi.number().required(),

      branch_url: Joi.string().allow("").allow(null),

      l1_category_id: Joi.number(),

      l2_category: Joi.array().items(Joi.string().allow("")),

      l3_category_name: Joi.string().allow(""),

      l2_category_id: Joi.number(),

      code: Joi.string().allow(""),

      slug_key: Joi.string().allow("").required(),
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

  static EInvoicePortalDetails() {
    return Joi.object({
      username: Joi.string().allow(""),

      user: Joi.string().allow(""),

      password: Joi.string().allow(""),
    });
  }

  static StoreEinvoice() {
    return Joi.object({
      username: Joi.string().allow(""),

      user: Joi.string().allow(""),

      enabled: Joi.boolean().required(),

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
      legal_name: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      ds_type: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      verified: Joi.boolean().required(),
    });
  }

  static StoreDocuments() {
    return Joi.object({
      gst: OrderModel.Document(),
    });
  }

  static StoreMeta() {
    return Joi.object({
      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      timing: Joi.array().items(Joi.any()),

      documents: OrderModel.StoreDocuments(),

      ewaybill_portal_details: Joi.any(),

      additional_contact_details: Joi.any(),

      display_name: Joi.string().allow("").required(),

      gst_number: Joi.string().allow(""),

      product_return_config: Joi.any(),

      stage: Joi.string().allow("").required(),
    });
  }

  static StoreAddress() {
    return Joi.object({
      area: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      email: Joi.string().allow(""),

      updated_at: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      state: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      contact_person: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      address_category: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      version: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      phone: Joi.string().allow("").allow(null).required(),

      country: Joi.string().allow("").required(),
    });
  }

  static Store() {
    return Joi.object({
      address2: Joi.string().allow(""),

      updated_at: Joi.string().allow("").allow(null),

      pincode: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      s_id: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      contact_person: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      packaging_material_count: Joi.number(),

      is_archived: Joi.boolean(),

      fulfillment_channel: Joi.string().allow("").required(),

      mall_name: Joi.string().allow("").allow(null),

      store_email: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      alohomora_user_id: Joi.number(),

      location_type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      meta: OrderModel.StoreMeta().required(),

      brand_id: Joi.any(),

      is_enabled_for_recon: Joi.boolean(),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      order_integration_id: Joi.string().allow(""),

      code: Joi.string().allow(""),

      mall_area: Joi.string().allow("").allow(null),

      phone: Joi.number().required(),

      store_address_json: OrderModel.StoreAddress(),

      parent_store_id: Joi.number(),

      address1: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      vat_no: Joi.string().allow("").allow(null),

      longitude: Joi.number().required(),

      store_active_from: Joi.string().allow("").allow(null),

      login_username: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      seller_identifier: Joi.string().allow(""),

      applied_promos: Joi.array().items(Joi.any()),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      bag_status_history: OrderModel.BagStatusHistory(),

      original_bag_list: Joi.array().items(Joi.number()),

      prices: OrderModel.Prices().required(),

      no_of_bags_order: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      brand: OrderModel.Brand().required(),

      identifier: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      qc_required: Joi.any(),

      b_id: Joi.number().required(),

      dates: OrderModel.Dates(),

      parent_promo_bags: Joi.any(),

      article: OrderModel.Article().required(),

      display_name: Joi.string().allow(""),

      article_details: OrderModel.ArticleDetails(),

      gst_details: OrderModel.BagGSTDetails().required(),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      shipment_id: Joi.string().allow(""),

      item: OrderModel.Item().required(),

      meta: OrderModel.BagMeta(),

      reasons: Joi.array().items(Joi.any()),

      journey_type: Joi.string().allow("").required(),

      restore_promos: Joi.any(),

      ordering_store: OrderModel.Store(),

      affiliate_details: OrderModel.AffiliateDetails(),

      operational_status: Joi.string().allow(""),

      bag_update_time: Joi.number(),

      order_integration_id: Joi.string().allow("").allow(null),

      current_status: OrderModel.BagStatusHistory().required(),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      line_number: Joi.number(),

      b_type: Joi.string().allow(""),

      restore_coupon: Joi.boolean(),

      quantity: Joi.number(),
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
      page_type: Joi.string().allow("").required(),

      current: Joi.number().required(),

      item_total: Joi.number().required(),

      size: Joi.number().required(),

      has_next: Joi.boolean().required(),
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

      message: Joi.string().allow(""),

      error: Joi.string().allow(""),

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
      store_id: Joi.number().required(),

      mongo_article_id: Joi.string().allow("").allow(null),

      set_id: Joi.string().allow("").allow(null),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      reason_ids: Joi.array().items(Joi.number()),

      affiliate_order_id: Joi.string().allow("").allow(null),

      bag_id: Joi.number().allow(null),

      item_id: Joi.string().allow("").allow(null),

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
      reason_text: Joi.string().allow("").required(),

      affiliate_bag_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),
    });
  }

  static UpdateShipmentLockPayload() {
    return Joi.object({
      entities: Joi.array().items(OrderModel.Entities()).required(),

      action: Joi.string().allow("").required(),

      action_type: Joi.string().allow("").required(),

      entity_type: Joi.string().allow("").required(),
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
      affiliate_order_id: Joi.string().allow(""),

      bag_id: Joi.number(),

      affiliate_bag_id: Joi.string().allow(""),

      is_locked: Joi.boolean(),
    });
  }

  static CheckResponse() {
    return Joi.object({
      is_bag_locked: Joi.boolean(),

      shipment_id: Joi.string().allow(""),

      original_filter: OrderModel.OriginalFilter(),

      status: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.Bags()),

      affiliate_id: Joi.string().allow(""),

      lock_status: Joi.boolean().allow(null),

      is_shipment_locked: Joi.boolean(),
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
      platform_name: Joi.string().allow(""),

      title: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      id: Joi.number().required(),

      description: Joi.string().allow(""),

      logo_url: Joi.string().allow(""),

      from_datetime: Joi.string().allow(""),

      platform_id: Joi.string().allow(""),

      company_id: Joi.number(),

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

  static ReasonsData() {
    return Joi.object({
      entities: Joi.array().items(OrderModel.EntitiesReasons()),

      products: Joi.array().items(OrderModel.ProductsReasons()),
    });
  }

  static Products() {
    return Joi.object({
      quantity: Joi.number(),

      identifier: Joi.string().allow(""),

      line_number: Joi.number(),
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

  static ShipmentsRequest() {
    return Joi.object({
      reasons: OrderModel.ReasonsData(),

      products: Joi.array().items(OrderModel.Products()),

      identifier: Joi.string().allow("").required(),

      data_updates: OrderModel.DataUpdates(),
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
      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      force_transition: Joi.boolean(),

      task: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),

      lock_after_transition: Joi.boolean(),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      final_state: Joi.any(),

      code: Joi.string().allow(""),

      stack_trace: Joi.string().allow(""),

      status: Joi.number(),

      identifier: Joi.string().allow(""),

      message: Joi.string().allow(""),

      exception: Joi.string().allow(""),

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
      store_id: Joi.number().required(),

      marketplace_store_id: Joi.string().allow("").required(),
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

  static AffiliateInventoryPaymentConfig() {
    return Joi.object({
      source: Joi.string().allow(""),

      mode_of_payment: Joi.string().allow(""),
    });
  }

  static AffiliateInventoryLogisticsConfig() {
    return Joi.object({
      dp_assignment: Joi.boolean(),
    });
  }

  static AffiliateInventoryStoreConfig() {
    return Joi.object({
      store: Joi.any(),
    });
  }

  static AffiliateInventoryConfig() {
    return Joi.object({
      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

      order: OrderModel.AffiliateInventoryOrderConfig(),

      payment: OrderModel.AffiliateInventoryPaymentConfig(),

      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),

      inventory: OrderModel.AffiliateInventoryStoreConfig(),
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

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      secret: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      owner: Joi.string().allow("").required(),
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

      bag_end_state: Joi.string().allow(""),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      affiliate: OrderModel.Affiliate().required(),

      create_user: Joi.boolean(),

      store_lookup: Joi.string().allow(""),
    });
  }

  static OrderUser() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      address2: Joi.string().allow("").allow(null),

      address1: Joi.string().allow("").allow(null),

      mobile: Joi.number().required(),

      pincode: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      first_name: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),
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

      brand_id: Joi.number().required(),

      dimension: Joi.any().required(),

      attributes: Joi.any().required(),

      quantity: Joi.number().required(),

      _id: Joi.string().allow("").required(),

      weight: Joi.any().required(),
    });
  }

  static LocationDetails() {
    return Joi.object({
      fulfillment_id: Joi.number().required(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      fulfillment_type: Joi.string().allow("").required(),
    });
  }

  static ShipmentDetails() {
    return Joi.object({
      box_type: Joi.string().allow("").allow(null),

      fulfillment_id: Joi.number().required(),

      dp_id: Joi.number().allow(null),

      affiliate_shipment_id: Joi.string().allow("").required(),

      shipments: Joi.number().required(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      meta: Joi.any(),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      location_details: OrderModel.LocationDetails(),

      to_pincode: Joi.string().allow("").required(),

      source: Joi.string().allow("").required(),

      identifier: Joi.string().allow("").required(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      journey: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),
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
      affiliate_meta: Joi.any().required(),

      discount: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      identifier: Joi.any().required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      _id: Joi.string().allow("").required(),

      delivery_charge: Joi.number().required(),

      amount_paid: Joi.number().required(),

      item_size: Joi.string().allow("").required(),

      price_marked: Joi.number().required(),

      price_effective: Joi.number().required(),

      company_id: Joi.number().required(),

      fynd_store_id: Joi.string().allow("").required(),

      store_id: Joi.number().required(),

      avl_qty: Joi.number().required(),

      sku: Joi.string().allow("").required(),

      transfer_price: Joi.number().required(),

      modified_on: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      unit_price: Joi.number().required(),

      quantity: Joi.number().required(),

      seller_identifier: Joi.string().allow("").required(),
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
      order_value: Joi.number().required(),

      shipping_address: OrderModel.OrderUser().required(),

      delivery_charges: Joi.number().required(),

      user: OrderModel.UserData().required(),

      coupon: Joi.string().allow("").allow(null),

      discount: Joi.number().required(),

      items: Joi.any().required(),

      cod_charges: Joi.number().required(),

      shipment: OrderModel.ShipmentData(),

      payment: Joi.any(),

      payment_mode: Joi.string().allow("").required(),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      billing_address: OrderModel.OrderUser().required(),

      affiliate_order_id: Joi.string().allow(""),

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

      id: Joi.number().required(),

      description: Joi.string().allow("").required(),

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
      user_name: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),
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

  static HistoryDict() {
    return Joi.object({
      ticket_id: Joi.string().allow(""),

      user: Joi.string().allow("").required(),

      ticket_url: Joi.string().allow(""),

      l2_detail: Joi.string().allow(""),

      l3_detail: Joi.string().allow(""),

      message: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      l1_detail: Joi.string().allow(""),

      createdat: Joi.string().allow("").required(),

      bag_id: Joi.number(),
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
      brand_name: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      customer_name: Joi.string().allow("").required(),

      shipment_id: Joi.number().required(),

      message: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      phone_number: Joi.number().required(),

      order_id: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),
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
      bag_list: Joi.array().items(Joi.number()),

      shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      id: Joi.number().required(),

      remarks: Joi.string().allow(""),

      meta: OrderModel.Meta1().required(),
    });
  }

  static OrderStatusData() {
    return Joi.object({
      order_details: OrderModel.OrderDetails().required(),

      errors: Joi.array().items(Joi.string().allow("")),

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

      dp_id: Joi.number().required(),

      order_type: Joi.string().allow("").required(),

      shipment_ids: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ManualAssignDPToShipmentResponse() {
    return Joi.object({
      errors: Joi.array().items(Joi.string().allow("")),

      success: Joi.string().allow("").required(),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      slot: Joi.array().items(Joi.any()),

      address_type: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      state_code: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      geo_location: Joi.any(),

      alternate_mobile_number: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      primary_mobile_number: Joi.string().allow("").required(),

      floor_no: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      shipping_type: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),
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
      code: Joi.string().allow(""),

      tax: OrderModel.Tax(),

      name: Joi.string().allow("").required(),

      amount: Joi.any().required(),

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
      city: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      state_code: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      primary_mobile_number: Joi.string().allow("").required(),

      floor_no: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      transaction_data: Joi.any(),

      refund_by: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      mode: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      collect_by: Joi.string().allow("").required(),

      meta: Joi.any(),
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
      dispatch_by_date: Joi.string().allow(""),

      pack_by_date: Joi.string().allow(""),

      confirm_by_date: Joi.string().allow(""),

      dispatch_after_date: Joi.string().allow(""),

      dp_pickup_slot: Joi.any(),

      customer_pickup_slot: Joi.any(),
    });
  }

  static LineItem() {
    return Joi.object({
      charges: Joi.array().items(OrderModel.Charge()),

      quantity: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      external_line_id: Joi.string().allow(""),

      custom_messasge: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static Shipment() {
    return Joi.object({
      location_id: Joi.number().required(),

      processing_dates: OrderModel.ProcessingDates(),

      priority: Joi.number(),

      external_shipment_id: Joi.string().allow(""),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),

      meta: Joi.any(),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      shipping_info: OrderModel.ShippingInfo().required(),

      currency_info: Joi.any(),

      charges: Joi.array().items(OrderModel.Charge()),

      tax_info: OrderModel.TaxInfo(),

      billing_info: OrderModel.BillingInfo().required(),

      external_creation_date: Joi.string().allow(""),

      payment_info: OrderModel.PaymentInfo().required(),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      external_order_id: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      info: Joi.any(),

      code: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),

      status: Joi.number().required(),

      message: Joi.string().allow("").required(),

      exception: Joi.string().allow("").allow(null),

      request_id: Joi.string().allow("").allow(null),

      meta: Joi.string().allow("").allow(null),
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
      source: Joi.string().allow(""),

      payment_methods: Joi.array().items(OrderModel.PaymentMethods()),

      mode_of_payment: Joi.string().allow(""),
    });
  }

  static CreateChannelConfig() {
    return Joi.object({
      location_reassignment: Joi.boolean(),

      lock_states: Joi.array().items(Joi.string().allow("")),

      dp_configuration: OrderModel.DpConfiguration(),

      logo_url: Joi.any(),

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
      acknowledged: Joi.boolean(),

      is_inserted: Joi.boolean(),

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

      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),

      mobile: Joi.number().required(),

      start_date: Joi.string().allow("").required(),
    });
  }
}
module.exports = OrderModel;
