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
      options: Joi.array().items(OrderModel.FilterInfoOption()),

      type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),
    });
  }

  static Prices() {
    return Joi.object({
      refund_amount: Joi.number(),

      delivery_charge: Joi.number(),

      price_marked: Joi.number(),

      cod_charges: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      discount: Joi.number(),

      price_effective: Joi.number(),

      tax_collected_at_source: Joi.number(),

      cashback_applied: Joi.number(),

      promotion_effective_discount: Joi.number(),

      coupon_value: Joi.number(),

      value_of_good: Joi.number(),

      transfer_price: Joi.number(),

      amount_paid: Joi.number(),

      fynd_credits: Joi.number(),

      refund_credit: Joi.number(),

      cashback: Joi.number(),
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
      email: Joi.string().allow(""),

      avis_user_id: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      uid: Joi.number(),

      last_name: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      mobile: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static ShipmentItemFulFillingStore() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      tax_collected_at_source: Joi.number().required(),

      value_of_good: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),

      brand_calculated_amount: Joi.number().required(),

      gst_fee: Joi.number().required(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      can_return: Joi.boolean(),

      code: Joi.string().allow(""),

      name: Joi.string().allow(""),

      l3_category_name: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      size: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      department_id: Joi.number(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow("").allow(null),

      l3_category: Joi.number(),

      image: Joi.array().items(Joi.string().allow("")),

      id: Joi.number(),
    });
  }

  static BagUnit() {
    return Joi.object({
      prices: OrderModel.Prices(),

      gst: OrderModel.GSTDetailsData(),

      can_return: Joi.boolean(),

      shipment_id: Joi.string().allow("").required(),

      bag_id: Joi.number().required(),

      item: OrderModel.PlatformItem(),

      can_cancel: Joi.boolean(),

      status: Joi.any().required(),

      ordering_channel: Joi.string().allow("").required(),

      item_quantity: Joi.number().required(),

      total_shipment_bags: Joi.number().required(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      ops_status: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      prices: OrderModel.Prices(),

      shipment_created_at: Joi.string().allow("").required(),

      fulfilling_centre: Joi.string().allow("").required(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      total_shipments_in_order: Joi.number().required(),

      user: OrderModel.UserDataInfo(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      payment_methods: Joi.any(),

      sla: Joi.any(),

      created_at: Joi.string().allow("").required(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      company: Joi.any(),

      shipment_id: Joi.string().allow(""),

      total_bags_count: Joi.number().required(),

      channel: Joi.any(),

      shipment_status: OrderModel.ShipmentStatus(),

      application: Joi.any(),

      id: Joi.string().allow("").required(),
    });
  }

  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      filters: Joi.array().items(OrderModel.FiltersInfo()),

      page: Joi.any(),

      applied_filters: Joi.any(),

      items: Joi.array().items(OrderModel.ShipmentItem()),
    });
  }

  static Error() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      contact_person: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      ordering_store_id: Joi.number().required(),

      country: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      store_name: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      contact_person: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      store_name: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      id: Joi.number().required(),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      coupon_code: Joi.string().allow("").allow(null),

      employee_discount: Joi.number(),

      order_item_id: Joi.string().allow(""),

      is_priority: Joi.boolean(),

      loyalty_discount: Joi.number(),

      channel_shipment_id: Joi.string().allow("").allow(null),

      quantity: Joi.number(),

      box_type: Joi.string().allow("").allow(null),

      size_level_total_qty: Joi.number().allow(null),

      channel_order_id: Joi.string().allow("").allow(null),

      due_date: Joi.string().allow("").allow(null),
    });
  }

  static PDFLinks() {
    return Joi.object({
      label_type: Joi.string().allow("").required(),

      invoice_a6: Joi.string().allow(""),

      b2b: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      invoice: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      delivery_challan_a4: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      label: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      address: Joi.string().allow("").allow(null).required(),

      city: Joi.string().allow("").required(),

      gstin: Joi.string().allow("").required(),

      ajio_site_id: Joi.string().allow(""),

      pincode: Joi.number().required(),

      state: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
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
      lock_message: Joi.string().allow(""),

      locked: Joi.boolean(),

      mto: Joi.boolean(),
    });
  }

  static Formatted() {
    return Joi.object({
      f_max: Joi.string().allow(""),

      f_min: Joi.string().allow(""),
    });
  }

  static EinvoiceInfo() {
    return Joi.object({
      credit_note: Joi.any(),

      invoice: Joi.any(),
    });
  }

  static DebugInfo() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow(""),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      return_store_node: Joi.number(),

      return_details: Joi.any(),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      awb_number: Joi.string().allow(""),

      external: Joi.any(),

      return_affiliate_order_id: Joi.string().allow(""),

      marketplace_store_id: Joi.string().allow(""),

      b2c_buyer_details: Joi.any().allow(null),

      return_affiliate_shipment_id: Joi.string().allow(""),

      shipment_weight: Joi.number(),

      timestamp: OrderModel.ShipmentTimeStamp(),

      lock_data: OrderModel.LockData(),

      dp_name: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      packaging_name: Joi.string().allow(""),

      forward_affiliate_order_id: Joi.string().allow(""),

      formatted: OrderModel.Formatted(),

      same_store_available: Joi.boolean().required(),

      po_number: Joi.string().allow(""),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      weight: Joi.number().required(),

      einvoice_info: OrderModel.EinvoiceInfo(),

      debug_info: OrderModel.DebugInfo(),

      dp_sort_key: Joi.string().allow(""),

      ewaybill_info: Joi.any().allow(null),

      bag_weight: Joi.any(),

      dp_id: Joi.string().allow("").allow(null),

      shipment_volumetric_weight: Joi.number(),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      dp_options: Joi.any(),

      assign_dp_from_sb: Joi.boolean(),

      store_invoice_updated_date: Joi.string().allow(""),

      order_type: Joi.string().allow("").allow(null),

      return_awb_number: Joi.string().allow(""),

      due_date: Joi.string().allow(""),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      company_affiliate_tag: Joi.string().allow(""),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      ad_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow("").required(),

      pdf_links: OrderModel.PDFLinks(),

      affiliate_order_id: Joi.string().allow("").required(),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      affiliate_id: Joi.string().allow(""),

      affiliate_store_id: Joi.string().allow("").required(),
    });
  }

  static PhoneDetails() {
    return Joi.object({
      country_code: Joi.number(),

      mobile_number: Joi.string().allow(""),
    });
  }

  static ContactDetails() {
    return Joi.object({
      phone: Joi.array().items(OrderModel.PhoneDetails()),

      emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CompanyDetails() {
    return Joi.object({
      address: Joi.any(),

      company_cin: Joi.string().allow(""),

      company_id: Joi.number(),

      company_contact: OrderModel.ContactDetails(),

      company_gst: Joi.string().allow(""),

      company_name: Joi.string().allow(""),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      email: Joi.string().allow(""),

      area: Joi.string().allow(""),

      address: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      address_type: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      address1: Joi.string().allow(""),

      phone: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      logo: Joi.string().allow(""),

      source: Joi.string().allow(""),

      mode: Joi.string().allow(""),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      order_value: Joi.string().allow(""),

      cod_charges: Joi.string().allow(""),

      source: Joi.string().allow(""),

      order_date: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow("").required(),

      ordering_channel_logo: Joi.any(),

      ordering_channel: Joi.string().allow(""),

      tax_details: Joi.any(),

      affiliate_id: Joi.string().allow(""),
    });
  }

  static Dimensions() {
    return Joi.object({
      is_default: Joi.boolean(),

      height: Joi.number(),

      width: Joi.number(),

      unit: Joi.string().allow(""),

      length: Joi.number(),
    });
  }

  static Meta() {
    return Joi.object({
      dimension: OrderModel.Dimensions(),
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

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      delivery_charge: Joi.number().required(),

      price_marked: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      identifiers: OrderModel.Identifier().required(),

      size: Joi.string().allow("").required(),

      price_effective: Joi.number().required(),

      transfer_price: Joi.number().required(),

      promotion_effective_discount: Joi.number().required(),

      value_of_good: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      fynd_credits: Joi.number().required(),

      cod_charges: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      brand_calculated_amount: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      amount_paid_roundoff: Joi.number(),

      tax_collected_at_source: Joi.number(),

      amount_paid: Joi.number().required(),

      refund_credit: Joi.number().required(),

      cashback: Joi.number().required(),

      total_units: Joi.number().required(),

      discount: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      coupon_value: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      gst_fee: Joi.number().required(),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      app_state_name: Joi.string().allow(""),

      app_display_name: Joi.string().allow(""),

      journey_type: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      state_type: Joi.string().allow("").required(),

      bs_id: Joi.number().required(),

      is_active: Joi.boolean(),

      app_facing: Joi.boolean(),

      notify_customer: Joi.boolean(),

      name: Joi.string().allow("").required(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      store_id: Joi.number(),

      kafka_sync: Joi.boolean(),

      current_status_id: Joi.number().required(),

      delivery_awb_number: Joi.string().allow(""),

      created_at: Joi.string().allow("").allow(null),

      bag_state_mapper: OrderModel.BagStateMapper(),

      state_type: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      bag_id: Joi.number(),

      status: Joi.string().allow(""),

      state_id: Joi.number(),

      delivery_partner_id: Joi.number(),
    });
  }

  static BagGST() {
    return Joi.object({
      gst_tag: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      is_default_hsn_code: Joi.boolean(),

      gst_tax_percentage: Joi.number(),

      value_of_good: Joi.number(),

      gstin_code: Joi.string().allow(""),

      brand_calculated_amount: Joi.number(),

      gst_fee: Joi.number(),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      company: Joi.string().allow("").allow(null).required(),

      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      brand_name: Joi.string().allow("").required(),

      id: Joi.number().required(),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      uid: Joi.string().allow(""),

      identifiers: Joi.any(),

      return_config: Joi.any(),
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
      type: Joi.string().allow(""),

      value: Joi.number(),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      promo_id: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      mrp_promotion: Joi.boolean(),

      article_quantity: Joi.number(),

      amount: Joi.number(),

      promotion_type: Joi.string().allow(""),
    });
  }

  static BagConfigs() {
    return Joi.object({
      allow_force_return: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      area: Joi.string().allow(""),

      email: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      city: Joi.string().allow(""),

      longitude: Joi.number(),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      latitude: Joi.number(),

      pincode: Joi.string().allow(""),

      version: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      state: Joi.string().allow(""),
    });
  }

  static OrderBags() {
    return Joi.object({
      line_number: Joi.number(),

      quantity: Joi.number(),

      financial_breakup: OrderModel.FinancialBreakup(),

      can_return: Joi.boolean(),

      parent_promo_bags: Joi.any(),

      current_status: OrderModel.CurrentStatus(),

      seller_identifier: Joi.string().allow(""),

      bag_id: Joi.number().required(),

      item: OrderModel.PlatformItem(),

      entity_type: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      gst_details: OrderModel.BagGST(),

      brand: OrderModel.OrderBrandName(),

      article: OrderModel.OrderBagArticle(),

      identifier: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      bag_configs: OrderModel.BagConfigs(),

      delivery_address: OrderModel.PlatformDeliveryAddress(),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      track_url: Joi.string().allow("").allow(null),

      gst_tag: Joi.string().allow(""),

      country: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      eway_bill_id: Joi.string().allow("").allow(null),

      id: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      store_id: Joi.number(),

      forward: Joi.boolean().allow(null),

      kafka_sync: Joi.boolean(),

      delivery_awb_number: Joi.string().allow("").allow(null),

      created_at: Joi.string().allow(""),

      bag_state_mapper: OrderModel.BagStateMapper(),

      app_display_name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      state_type: Joi.string().allow(""),

      bag_id: Joi.number(),

      reasons: Joi.array().items(Joi.any()),

      status: Joi.string().allow("").required(),

      state_id: Joi.number(),

      bsh_id: Joi.number(),

      delivery_partner_id: Joi.number().allow(null),
    });
  }

  static TrackingList() {
    return Joi.object({
      time: Joi.string().allow(""),

      is_current: Joi.boolean(),

      is_passed: Joi.boolean(),

      text: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),
    });
  }

  static InvoiceInfo() {
    return Joi.object({
      credit_note_id: Joi.string().allow(""),

      label_url: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      store_invoice_id: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      packaging_type: Joi.string().allow(""),

      picked_date: Joi.string().allow(""),

      ordering_store: OrderModel.OrderingStoreDetails(),

      fulfilling_store: OrderModel.FulfillingStore(),

      journey_type: Joi.string().allow(""),

      total_items: Joi.number(),

      fulfilment_priority: Joi.number(),

      affiliate_details: OrderModel.AffiliateDetails(),

      company_details: OrderModel.CompanyDetails(),

      shipment_status: Joi.string().allow(""),

      user: OrderModel.UserDataInfo(),

      coupon: Joi.any(),

      billing_details: OrderModel.UserDetailsData(),

      platform_logo: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      priority_text: Joi.string().allow("").allow(null),

      vertical: Joi.string().allow("").allow(null),

      payments: OrderModel.ShipmentPayments(),

      order: OrderModel.OrderDetailsData(),

      meta: OrderModel.Meta(),

      payment_methods: Joi.any(),

      custom_meta: Joi.array().items(Joi.any()),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      status: OrderModel.ShipmentStatusData(),

      invoice_id: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      gst_details: OrderModel.GSTDetailsData(),

      delivery_slot: Joi.any(),

      enable_dp_tracking: Joi.boolean(),

      total_bags: Joi.number(),

      delivery_details: OrderModel.UserDetailsData(),

      bags: Joi.array().items(OrderModel.OrderBags()),

      operational_status: Joi.string().allow(""),

      dp_details: OrderModel.DPDetailsData(),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      shipment_quantity: Joi.number(),

      forward_shipment_id: Joi.string().allow(""),

      invoice: OrderModel.InvoiceInfo(),

      shipment_id: Joi.string().allow("").required(),

      lock_status: Joi.boolean(),

      user_agent: Joi.string().allow(""),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      success: Joi.boolean().required(),
    });
  }

  static TransactionData() {
    return Joi.object({
      payment_id: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      terminal_id: Joi.string().allow(""),

      entity: Joi.string().allow(""),

      transaction_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      unique_reference_number: Joi.string().allow(""),

      amount_paid: Joi.string().allow(""),
    });
  }

  static PlatformUserDetails() {
    return Joi.object({
      platform_user_last_name: Joi.string().allow(""),

      platform_user_id: Joi.string().allow(""),

      platform_user_first_name: Joi.string().allow(""),

      platform_user_employee_code: Joi.string().allow(""),
    });
  }

  static BillingStaffDetails() {
    return Joi.object({
      employee_code: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      staff_id: Joi.number(),

      user: Joi.string().allow(""),
    });
  }

  static OrderMeta() {
    return Joi.object({
      ordering_store: Joi.number(),

      company_logo: Joi.string().allow(""),

      transaction_data: OrderModel.TransactionData(),

      currency_symbol: Joi.string().allow(""),

      platform_user_details: OrderModel.PlatformUserDetails(),

      order_tags: Joi.array().items(Joi.any()),

      order_platform: Joi.string().allow(""),

      employee_id: Joi.number(),

      comment: Joi.string().allow(""),

      extra_meta: Joi.any(),

      billing_staff_details: OrderModel.BillingStaffDetails(),

      customer_note: Joi.string().allow(""),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      files: Joi.array().items(Joi.any()),

      staff: Joi.any(),

      cart_id: Joi.number(),

      payment_type: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      mongo_cart_id: Joi.number(),
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

      meta: OrderModel.OrderMeta(),

      order_date: Joi.string().allow("").required(),

      fynd_order_id: Joi.string().allow("").required(),

      tax_details: OrderModel.TaxDetails(),
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
      index: Joi.number(),

      value: Joi.string().allow(""),

      text: Joi.string().allow(""),

      actions: Joi.array().items(Joi.any()),

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

  static PlatformBreakupValues() {
    return Joi.object({
      display: Joi.string().allow(""),

      value: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static PlatformChannel() {
    return Joi.object({
      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static PlatformOrderItems() {
    return Joi.object({
      user_info: OrderModel.UserDataInfo(),

      payment_mode: Joi.string().allow(""),

      order_created_time: Joi.string().allow(""),

      order_value: Joi.number(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      order_id: Joi.string().allow(""),

      meta: Joi.any(),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      total_order_value: Joi.number(),

      channel: OrderModel.PlatformChannel(),
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

      items: Joi.array().items(OrderModel.PlatformOrderItems()),

      total_count: Joi.number(),

      lane: Joi.string().allow(""),

      page: OrderModel.Page(),

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
      options: Joi.array().items(OrderModel.Options()),

      key: Joi.string().allow("").required(),

      value: Joi.number().required(),

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

      last_location_recieved_at: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      meta: Joi.any(),

      awb: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      status: Joi.string().allow(""),

      account_name: Joi.string().allow(""),
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
      report_id: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),

      s3_key: Joi.string().allow(""),

      report_name: Joi.string().allow(""),

      report_created_at: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow(""),

      status: Joi.string().allow(""),

      request_details: Joi.any(),

      report_type: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      jio_code: Joi.string().allow(""),

      item_id: Joi.string().allow(""),

      company_id: Joi.string().allow(""),

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
      message: Joi.string().allow(""),

      type: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      success: Joi.boolean(),

      trace_id: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

      data: Joi.array().items(Joi.any()),
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

      company_id: Joi.string().allow(""),

      batch_id: Joi.string().allow("").required(),

      store_code: Joi.string().allow(""),

      invoice: Joi.any(),

      store_name: Joi.string().allow(""),

      do_invoice_label_generated: Joi.boolean().required(),

      invoice_status: Joi.string().allow(""),

      label: Joi.any(),

      data: Joi.any(),
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
      file_name: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      upload: OrderModel.FileUploadResponse(),

      namespace: Joi.string().allow(""),

      size: Joi.number(),

      cdn: OrderModel.URL(),

      file_path: Joi.string().allow(""),

      content_type: Joi.string().allow(""),

      operation: Joi.string().allow(""),

      method: Joi.string().allow(""),
    });
  }

  static bulkListingData() {
    return Joi.object({
      failed: Joi.number(),

      store_code: Joi.string().allow(""),

      store_id: Joi.number(),

      status: Joi.string().allow(""),

      failed_shipments: Joi.array().items(Joi.any()),

      total: Joi.number(),

      file_name: Joi.string().allow(""),

      company_id: Joi.number(),

      processing: Joi.number(),

      store_name: Joi.string().allow(""),

      user_name: Joi.string().allow(""),

      successful_shipments: Joi.array().items(Joi.any()),

      excel_url: Joi.string().allow(""),

      successful: Joi.number(),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      batch_id: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      total: Joi.number(),

      type: Joi.string().allow(""),

      current: Joi.number(),

      size: Joi.number(),

      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      error: Joi.string().allow(""),

      data: Joi.array().items(OrderModel.bulkListingData()),

      page: OrderModel.BulkListingPage(),

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
      qc_type: Joi.array().items(Joi.string().allow("")),

      display_name: Joi.string().allow(""),

      question_set: Joi.array().items(OrderModel.QuestionSet()),

      id: Joi.number(),
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
      failed_shipments_count: Joi.number(),

      processing_shipments_count: Joi.number(),

      company_id: Joi.string().allow(""),

      batch_id: Joi.string().allow(""),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      successful_shipments_count: Joi.number(),

      total_shipments_count: Joi.number(),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      failed_records: Joi.array().items(Joi.string().allow("")),

      success: Joi.string().allow(""),

      uploaded_by: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      error: Joi.array().items(Joi.string().allow("")),

      status: Joi.boolean(),

      message: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),
    });
  }

  static StoreAddress() {
    return Joi.object({
      updated_at: Joi.string().allow("").required(),

      address_category: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      address_type: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      phone: Joi.string().allow("").allow(null).required(),

      area: Joi.string().allow(""),

      email: Joi.string().allow(""),

      longitude: Joi.number().required(),

      latitude: Joi.number().required(),

      pincode: Joi.number().required(),

      version: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),
    });
  }

  static Document() {
    return Joi.object({
      url: Joi.string().allow(""),

      ds_type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      verified: Joi.boolean().required(),

      legal_name: Joi.string().allow("").required(),
    });
  }

  static StoreDocuments() {
    return Joi.object({
      gst: OrderModel.Document(),
    });
  }

  static StoreEinvoice() {
    return Joi.object({
      password: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user: Joi.string().allow(""),

      enabled: Joi.boolean().required(),
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
      username: Joi.string().allow(""),

      user: Joi.string().allow(""),

      password: Joi.string().allow(""),
    });
  }

  static StoreMeta() {
    return Joi.object({
      additional_contact_details: Joi.any(),

      timing: Joi.array().items(Joi.any()),

      documents: OrderModel.StoreDocuments(),

      ewaybill_portal_details: Joi.any(),

      display_name: Joi.string().allow("").required(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      stage: Joi.string().allow("").required(),

      gst_number: Joi.string().allow(""),

      product_return_config: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Store() {
    return Joi.object({
      updated_at: Joi.string().allow("").allow(null),

      location_type: Joi.string().allow("").required(),

      parent_store_id: Joi.number(),

      country: Joi.string().allow("").required(),

      is_archived: Joi.boolean(),

      store_address_json: OrderModel.StoreAddress(),

      packaging_material_count: Joi.number(),

      state: Joi.string().allow("").required(),

      brand_id: Joi.any(),

      contact_person: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      is_enabled_for_recon: Joi.boolean(),

      meta: OrderModel.StoreMeta().required(),

      store_active_from: Joi.string().allow("").allow(null),

      created_at: Joi.string().allow("").required(),

      mall_name: Joi.string().allow("").allow(null),

      address2: Joi.string().allow(""),

      login_username: Joi.string().allow("").required(),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow(""),

      store_email: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      alohomora_user_id: Joi.number(),

      phone: Joi.number().required(),

      vat_no: Joi.string().allow("").allow(null),

      order_integration_id: Joi.string().allow(""),

      longitude: Joi.number().required(),

      s_id: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      pincode: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      mall_area: Joi.string().allow("").allow(null),

      address1: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      affiliate_meta: OrderModel.AffiliateMeta().required(),

      employee_discount: Joi.number(),

      loyalty_discount: Joi.number(),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow("").required(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      po_tax_amount: Joi.number(),

      docker_number: Joi.string().allow(""),

      po_line_amount: Joi.number(),

      partial_can_ret: Joi.boolean(),

      total_gst_percentage: Joi.number(),

      item_base_price: Joi.number(),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }

  static Attributes() {
    return Joi.object({
      primary_material: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      essential: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      brand_name: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      size: Joi.string().allow("").required(),

      attributes: OrderModel.Attributes().required(),

      l2_category: Joi.array().items(Joi.string().allow("")),

      l1_category: Joi.array().items(Joi.string().allow("")),

      gender: Joi.string().allow("").allow(null),

      image: Joi.array().items(Joi.string().allow("")).required(),

      l1_category_id: Joi.number(),

      can_return: Joi.boolean(),

      brand_id: Joi.number().required(),

      l3_category_name: Joi.string().allow(""),

      meta: Joi.any(),

      department_id: Joi.number(),

      webstore_product_url: Joi.string().allow("").allow(null),

      color: Joi.string().allow("").allow(null),

      l3_category: Joi.number(),

      branch_url: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      brand: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      l2_category_id: Joi.number(),

      last_updated_at: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      slug_key: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      can_be_cancelled: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),
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
      cgst_tax_percentage: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

      igst_tax_percentage: Joi.number().required(),

      is_default_hsn_code: Joi.boolean(),

      gst_tax_percentage: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      sgst_tax_percentage: Joi.number().required(),

      value_of_good: Joi.number().required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      gstin_code: Joi.string().allow("").allow(null),

      hsn_code_id: Joi.string().allow("").required(),

      igst_gst_fee: Joi.string().allow("").required(),

      brand_calculated_amount: Joi.number().required(),

      gst_fee: Joi.number().required(),
    });
  }

  static Brand() {
    return Joi.object({
      logo: Joi.string().allow(""),

      brand_id: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),

      is_virtual_invoice: Joi.boolean().allow(null),

      pickup_location: Joi.string().allow("").allow(null),

      credit_note_expiry_days: Joi.number().allow(null),

      script_last_ran: Joi.string().allow("").allow(null),

      start_date: Joi.string().allow("").allow(null),

      company: Joi.string().allow("").required(),

      created_on: Joi.number(),

      invoice_prefix: Joi.string().allow("").allow(null),

      modified_on: Joi.number(),

      credit_note_allowed: Joi.boolean(),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      returnable: Joi.boolean(),

      time: Joi.number(),

      unit: Joi.string().allow(""),
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
      code: Joi.string().allow(""),

      return_config: OrderModel.ReturnConfig(),

      esp_modified: Joi.any(),

      is_set: Joi.boolean(),

      dimensions: OrderModel.Dimensions(),

      raw_meta: Joi.any(),

      identifiers: OrderModel.Identifier().required(),

      size: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      child_details: Joi.any().allow(null),

      weight: OrderModel.Weight(),

      uid: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      a_set: Joi.any().allow(null),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      ordering_store: OrderModel.Store(),

      line_number: Joi.number(),

      quantity: Joi.number(),

      b_type: Joi.string().allow(""),

      journey_type: Joi.string().allow("").required(),

      affiliate_details: OrderModel.AffiliateDetails(),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      article_details: OrderModel.ArticleDetails(),

      original_bag_list: Joi.array().items(Joi.number()),

      qc_required: Joi.any(),

      parent_promo_bags: Joi.any(),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      b_id: Joi.number().required(),

      current_status: OrderModel.BagStatusHistory().required(),

      meta: OrderModel.BagMeta(),

      restore_coupon: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      seller_identifier: Joi.string().allow(""),

      bag_update_time: Joi.number(),

      item: OrderModel.Item().required(),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      reasons: Joi.array().items(Joi.any()),

      dates: OrderModel.Dates(),

      entity_type: Joi.string().allow(""),

      gst_details: OrderModel.BagGSTDetails().required(),

      prices: OrderModel.Prices().required(),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      brand: OrderModel.Brand().required(),

      operational_status: Joi.string().allow(""),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      bag_status_history: OrderModel.BagStatusHistory(),

      order_integration_id: Joi.string().allow("").allow(null),

      article: OrderModel.Article().required(),

      no_of_bags_order: Joi.number(),

      identifier: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      applied_promos: Joi.array().items(Joi.any()),

      restore_promos: Joi.any(),
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

  static GeneratePosOrderReceiptResponse() {
    return Joi.object({
      order_id: Joi.string().allow(""),

      invoice_receipt: Joi.string().allow(""),

      payment_receipt: Joi.string().allow(""),

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
      shipment_id: Joi.string().allow(""),

      status: Joi.number(),

      error: Joi.string().allow(""),

      message: Joi.string().allow(""),
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
      bag_id: Joi.number().allow(null),

      reason_ids: Joi.array().items(Joi.number()),

      mongo_article_id: Joi.string().allow("").allow(null),

      affiliate_order_id: Joi.string().allow("").allow(null),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      affiliate_id: Joi.string().allow("").allow(null),

      fynd_order_id: Joi.string().allow("").allow(null),

      set_id: Joi.string().allow("").allow(null),

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
      reason_text: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),
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

  static Bags() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow(""),

      bag_id: Joi.number(),

      is_locked: Joi.boolean(),

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
      status: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.Bags()),

      is_bag_locked: Joi.boolean(),

      is_shipment_locked: Joi.boolean(),

      shipment_id: Joi.string().allow(""),

      original_filter: OrderModel.OriginalFilter(),

      lock_status: Joi.boolean().allow(null),

      affiliate_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),
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
      platform_id: Joi.string().allow(""),

      description: Joi.string().allow(""),

      company_id: Joi.number(),

      id: Joi.number().required(),

      created_at: Joi.string().allow(""),

      title: Joi.string().allow(""),

      from_datetime: Joi.string().allow(""),

      logo_url: Joi.string().allow(""),

      platform_name: Joi.string().allow(""),

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
      quantity: Joi.number(),

      line_number: Joi.number(),

      identifier: Joi.string().allow(""),
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

  static ShipmentsRequest() {
    return Joi.object({
      products: Joi.array().items(OrderModel.Products()),

      identifier: Joi.string().allow("").required(),

      reasons: OrderModel.ReasonsData(),

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
      task: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      lock_after_transition: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),

      force_transition: Joi.boolean(),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      exception: Joi.string().allow(""),

      final_state: Joi.any(),

      message: Joi.string().allow(""),

      code: Joi.string().allow(""),

      stack_trace: Joi.string().allow(""),

      status: Joi.number(),

      identifier: Joi.string().allow(""),

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

  static MarketPlacePdf() {
    return Joi.object({
      invoice: Joi.string().allow("").allow(null),

      label: Joi.string().allow("").allow(null),
    });
  }

  static AffiliateBag() {
    return Joi.object({
      _id: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      avl_qty: Joi.number().required(),

      identifier: Joi.any().required(),

      price_marked: Joi.number().required(),

      item_size: Joi.string().allow("").required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      seller_identifier: Joi.string().allow("").required(),

      discount: Joi.number().required(),

      affiliate_meta: Joi.any().required(),

      amount_paid: Joi.number().required(),

      sku: Joi.string().allow("").required(),

      delivery_charge: Joi.number().required(),

      fynd_store_id: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      store_id: Joi.number().required(),

      quantity: Joi.number().required(),

      modified_on: Joi.string().allow("").required(),

      unit_price: Joi.number().required(),

      price_effective: Joi.number().required(),

      transfer_price: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      item_id: Joi.number().required(),
    });
  }

  static OrderUser() {
    return Joi.object({
      first_name: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      city: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      address1: Joi.string().allow("").allow(null),

      address2: Joi.string().allow("").allow(null),

      country: Joi.string().allow("").required(),
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

      fulfilment_priority: Joi.number().allow(null),

      fulfilment_priority_text: Joi.string().allow(""),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      category: Joi.any().required(),

      _id: Joi.string().allow("").required(),

      weight: Joi.any().required(),

      brand_id: Joi.number().required(),

      quantity: Joi.number().required(),

      dimension: Joi.any().required(),

      attributes: Joi.any().required(),
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
      box_type: Joi.string().allow("").allow(null),

      dp_id: Joi.number().allow(null),

      shipments: Joi.number().required(),

      fulfillment_id: Joi.number().required(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      meta: Joi.any(),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      to_pincode: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

      source: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      location_details: OrderModel.LocationDetails(),

      journey: Joi.string().allow("").required(),

      identifier: Joi.string().allow("").required(),

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
      order_value: Joi.number().required(),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      user: OrderModel.UserData().required(),

      coupon: Joi.string().allow("").allow(null),

      affiliate_order_id: Joi.string().allow(""),

      discount: Joi.number().required(),

      payment_mode: Joi.string().allow("").required(),

      shipping_address: OrderModel.OrderUser().required(),

      order_priority: OrderModel.OrderPriority(),

      cod_charges: Joi.number().required(),

      delivery_charges: Joi.number().required(),

      items: Joi.any().required(),

      billing_address: OrderModel.OrderUser().required(),

      shipment: OrderModel.ShipmentData(),

      payment: Joi.any(),
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

  static AffiliateInventoryPaymentConfig() {
    return Joi.object({
      source: Joi.string().allow(""),

      mode_of_payment: Joi.string().allow(""),
    });
  }

  static AffiliateInventoryConfig() {
    return Joi.object({
      inventory: OrderModel.AffiliateInventoryStoreConfig(),

      order: OrderModel.AffiliateInventoryOrderConfig(),

      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),

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
      name: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      owner: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),
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

      store_lookup: Joi.string().allow(""),

      article_lookup: Joi.string().allow(""),

      bag_end_state: Joi.string().allow(""),

      create_user: Joi.boolean(),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),
    });
  }

  static CreateOrderPayload() {
    return Joi.object({
      order_info: OrderModel.OrderInfo().required(),

      affiliate_id: Joi.string().allow("").required(),

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
      user: Joi.string().allow("").required(),

      bag_id: Joi.number(),

      createdat: Joi.string().allow("").required(),

      ticket_id: Joi.string().allow(""),

      message: Joi.string().allow("").required(),

      l3_detail: Joi.string().allow(""),

      l1_detail: Joi.string().allow(""),

      l2_detail: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

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
      success: Joi.boolean(),

      message: Joi.string().allow(""),
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
      brand_name: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      phone_number: Joi.number().required(),

      shipment_id: Joi.number().required(),

      customer_name: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),
    });
  }

  static SendSmsPayload() {
    return Joi.object({
      bag_id: Joi.number().required(),

      slug: Joi.string().allow("").required(),

      data: OrderModel.SmsDataPayload(),
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
      id: Joi.number().required(),

      shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      remarks: Joi.string().allow(""),

      meta: OrderModel.Meta1().required(),

      bag_list: Joi.array().items(Joi.number()),
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
      result: Joi.array().items(OrderModel.OrderStatusData()),

      success: Joi.string().allow("").required(),
    });
  }

  static ManualAssignDPToShipment() {
    return Joi.object({
      shipment_ids: Joi.array().items(Joi.string().allow("")),

      qc_required: Joi.string().allow("").required(),

      order_type: Joi.string().allow("").required(),

      dp_id: Joi.number().required(),
    });
  }

  static ManualAssignDPToShipmentResponse() {
    return Joi.object({
      success: Joi.string().allow("").required(),

      errors: Joi.array().items(Joi.string().allow("")),
    });
  }

  static TaxInfo() {
    return Joi.object({
      gstin: Joi.string().allow(""),

      b2b_gstin_number: Joi.string().allow(""),
    });
  }

  static Tax() {
    return Joi.object({
      rate: Joi.number().required(),

      name: Joi.string().allow("").required(),

      amount: Joi.any().required(),

      breakup: Joi.array().items(Joi.any()),
    });
  }

  static Charge() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      tax: OrderModel.Tax(),

      code: Joi.string().allow(""),

      amount: Joi.any().required(),

      type: Joi.string().allow("").required(),
    });
  }

  static LineItem() {
    return Joi.object({
      custom_messasge: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),

      external_line_id: Joi.string().allow(""),

      charges: Joi.array().items(OrderModel.Charge()),

      quantity: Joi.number(),

      meta: Joi.any(),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      customer_pickup_slot: Joi.any(),

      pack_by_date: Joi.string().allow(""),

      dp_pickup_slot: Joi.any(),

      dispatch_after_date: Joi.string().allow(""),

      dispatch_by_date: Joi.string().allow(""),

      confirm_by_date: Joi.string().allow(""),
    });
  }

  static Shipment() {
    return Joi.object({
      line_items: Joi.array().items(OrderModel.LineItem()).required(),

      processing_dates: OrderModel.ProcessingDates(),

      location_id: Joi.number().required(),

      external_shipment_id: Joi.string().allow(""),

      meta: Joi.any(),

      priority: Joi.number(),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      mode: Joi.string().allow("").required(),

      transaction_data: Joi.any(),

      meta: Joi.any(),

      collect_by: Joi.string().allow("").required(),

      refund_by: Joi.string().allow("").required(),
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
      first_name: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      primary_mobile_number: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      slot: Joi.array().items(Joi.any()),

      address2: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      shipping_type: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      state_code: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      geo_location: Joi.any(),
    });
  }

  static BillingInfo() {
    return Joi.object({
      first_name: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      primary_mobile_number: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      state_code: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      title: Joi.string().allow(""),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      tax_info: OrderModel.TaxInfo(),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      currency_info: Joi.any(),

      payment_info: OrderModel.PaymentInfo().required(),

      shipping_info: OrderModel.ShippingInfo().required(),

      billing_info: OrderModel.BillingInfo().required(),

      charges: Joi.array().items(OrderModel.Charge()),

      external_order_id: Joi.string().allow(""),

      external_creation_date: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      exception: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      code: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),

      request_id: Joi.string().allow("").allow(null),

      info: Joi.any(),

      status: Joi.number().required(),

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

      collect_by: Joi.string().allow(""),

      refund_by: Joi.string().allow(""),
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
      shipment_assignment: Joi.string().allow(""),

      dp_configuration: OrderModel.DpConfiguration(),

      lock_states: Joi.array().items(Joi.string().allow("")),

      payment_info: OrderModel.CreateChannelPaymentInfo(),

      location_reassignment: Joi.boolean(),

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
      mobile: Joi.number().required(),

      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),

      end_date: Joi.string().allow("").required(),

      start_date: Joi.string().allow("").required(),
    });
  }
}
module.exports = OrderModel;
