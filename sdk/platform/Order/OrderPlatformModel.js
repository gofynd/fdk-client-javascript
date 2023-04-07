const Joi = require("joi");

class OrderModel {
  static ShipmentItemFulFillingStore() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),
    });
  }

  static Prices() {
    return Joi.object({
      delivery_charge: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      price_marked: Joi.number(),

      discount: Joi.number(),

      cashback: Joi.number(),

      cod_charges: Joi.number(),

      cashback_applied: Joi.number(),

      promotion_effective_discount: Joi.number(),

      price_effective: Joi.number(),

      refund_amount: Joi.number(),

      tax_collected_at_source: Joi.number(),

      value_of_good: Joi.number(),

      refund_credit: Joi.number(),

      transfer_price: Joi.number(),

      amount_paid: Joi.number(),

      fynd_credits: Joi.number(),

      coupon_value: Joi.number(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      l3_category: Joi.number(),

      code: Joi.string().allow(""),

      l3_category_name: Joi.string().allow(""),

      department_id: Joi.number(),

      color: Joi.string().allow("").allow(null),

      can_return: Joi.boolean(),

      can_cancel: Joi.boolean(),

      name: Joi.string().allow(""),

      size: Joi.string().allow(""),

      id: Joi.number(),

      images: Joi.array().items(Joi.string().allow("")),

      l1_category: Joi.array().items(Joi.string().allow("")),

      image: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      gst_fee: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      value_of_good: Joi.number().required(),
    });
  }

  static BagUnit() {
    return Joi.object({
      can_return: Joi.boolean(),

      prices: OrderModel.Prices(),

      total_shipment_bags: Joi.number().required(),

      can_cancel: Joi.boolean(),

      item: OrderModel.PlatformItem(),

      status: Joi.any().required(),

      shipment_id: Joi.string().allow("").required(),

      item_quantity: Joi.number().required(),

      gst: OrderModel.GSTDetailsData(),

      bag_id: Joi.number().required(),

      ordering_channel: Joi.string().allow("").required(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      ops_status: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      gender: Joi.string().allow(""),

      email: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      avis_user_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      uid: Joi.number(),

      last_name: Joi.string().allow(""),

      first_name: Joi.string().allow(""),
    });
  }

  static PaymentModeInfo() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      total_shipments_in_order: Joi.number().required(),

      fulfilling_centre: Joi.string().allow("").required(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      total_bags_count: Joi.number().required(),

      application: Joi.any(),

      created_at: Joi.string().allow("").required(),

      sla: Joi.any(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      prices: OrderModel.Prices(),

      company: Joi.any(),

      shipment_status: OrderModel.ShipmentStatus(),

      user: OrderModel.UserDataInfo(),

      id: Joi.string().allow("").required(),

      shipment_created_at: Joi.string().allow("").required(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      shipment_id: Joi.string().allow(""),

      payment_methods: Joi.any(),

      channel: Joi.any(),
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
      text: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.FilterInfoOption()),

      value: Joi.string().allow("").required(),
    });
  }

  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      items: Joi.array().items(OrderModel.ShipmentItem()),

      filters: Joi.array().items(OrderModel.FiltersInfo()),

      applied_filters: Joi.any(),

      page: Joi.any(),
    });
  }

  static Error() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      state: Joi.string().allow("").required(),

      ordering_store_id: Joi.number().required(),

      city: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),
    });
  }

  static Dimensions() {
    return Joi.object({
      width: Joi.number(),

      height: Joi.number(),

      is_default: Joi.boolean(),

      length: Joi.number(),

      unit: Joi.string().allow(""),
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

      id: Joi.number(),

      status: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.string().allow("")),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      fulfillment_channel: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      id: Joi.number().required(),

      phone: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),
    });
  }

  static EinvoiceInfo() {
    return Joi.object({
      credit_note: Joi.any(),

      invoice: Joi.any(),
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
      ajio_site_id: Joi.string().allow(""),

      pincode: Joi.number().required(),

      name: Joi.string().allow("").required(),

      gstin: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address: Joi.string().allow("").allow(null).required(),

      state: Joi.string().allow("").required(),
    });
  }

  static ShipmentTimeStamp() {
    return Joi.object({
      t_max: Joi.string().allow(""),

      t_min: Joi.string().allow(""),
    });
  }

  static Formatted() {
    return Joi.object({
      f_min: Joi.string().allow(""),

      f_max: Joi.string().allow(""),
    });
  }

  static DebugInfo() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow(""),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      ewaybill_info: Joi.any().allow(null),

      weight: Joi.number().required(),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      einvoice_info: OrderModel.EinvoiceInfo(),

      return_store_node: Joi.number(),

      return_affiliate_order_id: Joi.string().allow(""),

      packaging_name: Joi.string().allow(""),

      shipment_weight: Joi.number(),

      lock_data: OrderModel.LockData(),

      shipment_volumetric_weight: Joi.number(),

      po_number: Joi.string().allow(""),

      b2c_buyer_details: Joi.any().allow(null),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      due_date: Joi.string().allow(""),

      same_store_available: Joi.boolean().required(),

      return_affiliate_shipment_id: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      store_invoice_updated_date: Joi.string().allow(""),

      assign_dp_from_sb: Joi.boolean(),

      dp_name: Joi.string().allow(""),

      dp_sort_key: Joi.string().allow(""),

      external: Joi.any(),

      box_type: Joi.string().allow("").allow(null),

      marketplace_store_id: Joi.string().allow(""),

      dp_options: Joi.any(),

      forward_affiliate_order_id: Joi.string().allow(""),

      timestamp: OrderModel.ShipmentTimeStamp(),

      formatted: OrderModel.Formatted(),

      bag_weight: Joi.any(),

      debug_info: OrderModel.DebugInfo(),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      awb_number: Joi.string().allow(""),

      return_awb_number: Joi.string().allow(""),

      order_type: Joi.string().allow("").allow(null),

      return_details: Joi.any(),
    });
  }

  static PDFLinks() {
    return Joi.object({
      invoice: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      delivery_challan_a4: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      label_a4: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      label: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),

      b2b: Joi.string().allow(""),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      box_type: Joi.string().allow("").allow(null),

      size_level_total_qty: Joi.number().allow(null),

      coupon_code: Joi.string().allow("").allow(null),

      order_item_id: Joi.string().allow(""),

      employee_discount: Joi.number(),

      due_date: Joi.string().allow("").allow(null),

      is_priority: Joi.boolean(),

      channel_order_id: Joi.string().allow("").allow(null),

      quantity: Joi.number(),

      channel_shipment_id: Joi.string().allow("").allow(null),

      loyalty_discount: Joi.number(),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      ad_id: Joi.string().allow(""),

      company_affiliate_tag: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow("").required(),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      affiliate_bag_id: Joi.string().allow("").required(),

      pdf_links: OrderModel.PDFLinks(),

      affiliate_id: Joi.string().allow(""),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      affiliate_store_id: Joi.string().allow("").required(),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      email: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      area: Joi.string().allow(""),

      phone: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),
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
      emails: Joi.array().items(Joi.string().allow("")),

      phone: Joi.array().items(OrderModel.PhoneDetails()),
    });
  }

  static CompanyDetails() {
    return Joi.object({
      company_gst: Joi.string().allow(""),

      company_contact: OrderModel.ContactDetails(),

      company_id: Joi.number(),

      company_name: Joi.string().allow(""),

      company_cin: Joi.string().allow(""),

      address: Joi.any(),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      source: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      mode: Joi.string().allow(""),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      app_state_name: Joi.string().allow(""),

      app_facing: Joi.boolean(),

      is_active: Joi.boolean(),

      notify_customer: Joi.boolean(),

      name: Joi.string().allow("").required(),

      journey_type: Joi.string().allow("").required(),

      app_display_name: Joi.string().allow(""),

      state_type: Joi.string().allow("").required(),

      bs_id: Joi.number().required(),

      display_name: Joi.string().allow("").required(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      state_id: Joi.number(),

      delivery_awb_number: Joi.string().allow(""),

      created_at: Joi.string().allow("").allow(null),

      delivery_partner_id: Joi.number(),

      kafka_sync: Joi.boolean(),

      store_id: Joi.number(),

      status: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      state_type: Joi.string().allow(""),

      bag_id: Joi.number(),

      current_status_id: Joi.number().required(),

      bag_state_mapper: OrderModel.BagStateMapper(),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      company: Joi.string().allow("").allow(null).required(),

      created_on: Joi.string().allow("").required(),

      id: Joi.number().required(),
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
      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      amount: Joi.number(),

      mrp_promotion: Joi.boolean(),

      promo_id: Joi.string().allow(""),

      article_quantity: Joi.number(),

      promotion_name: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),
    });
  }

  static BagGST() {
    return Joi.object({
      gst_fee: Joi.number(),

      is_default_hsn_code: Joi.boolean(),

      hsn_code: Joi.string().allow(""),

      gstin_code: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      gst_tax_percentage: Joi.number(),

      brand_calculated_amount: Joi.number(),

      value_of_good: Joi.number(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      version: Joi.string().allow(""),

      email: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      latitude: Joi.number(),

      address_type: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      city: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      area: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      longitude: Joi.number(),

      state: Joi.string().allow(""),
    });
  }

  static BagConfigs() {
    return Joi.object({
      is_customer_return_allowed: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      identifiers: Joi.any(),

      uid: Joi.string().allow(""),

      return_config: Joi.any(),
    });
  }

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      price_marked: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      discount: Joi.number().required(),

      cod_charges: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      price_effective: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      size: Joi.string().allow("").required(),

      brand_calculated_amount: Joi.number().required(),

      value_of_good: Joi.number().required(),

      total_units: Joi.number().required(),

      refund_credit: Joi.number().required(),

      transfer_price: Joi.number().required(),

      coupon_value: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),

      gst_tag: Joi.string().allow("").required(),

      coupon_effective_discount: Joi.number().required(),

      cashback: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      identifiers: OrderModel.Identifier().required(),

      tax_collected_at_source: Joi.number(),

      amount_paid: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      gst_fee: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      promotion_effective_discount: Joi.number().required(),

      fynd_credits: Joi.number().required(),
    });
  }

  static OrderBags() {
    return Joi.object({
      seller_identifier: Joi.string().allow(""),

      parent_promo_bags: Joi.any(),

      identifier: Joi.string().allow(""),

      item: OrderModel.PlatformItem(),

      current_status: OrderModel.CurrentStatus(),

      quantity: Joi.number(),

      line_number: Joi.number(),

      brand: OrderModel.OrderBrandName(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      can_return: Joi.boolean(),

      can_cancel: Joi.boolean(),

      gst_details: OrderModel.BagGST(),

      bag_id: Joi.number().required(),

      display_name: Joi.string().allow(""),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      bag_configs: OrderModel.BagConfigs(),

      prices: OrderModel.Prices(),

      article: OrderModel.OrderBagArticle(),

      entity_type: Joi.string().allow(""),

      financial_breakup: OrderModel.FinancialBreakup(),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      eway_bill_id: Joi.string().allow("").allow(null),

      awb_no: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      track_url: Joi.string().allow("").allow(null),

      pincode: Joi.string().allow(""),

      name: Joi.string().allow(""),

      country: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static InvoiceInfo() {
    return Joi.object({
      updated_date: Joi.string().allow(""),

      label_url: Joi.string().allow(""),

      credit_note_id: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      store_invoice_id: Joi.string().allow(""),
    });
  }

  static TrackingList() {
    return Joi.object({
      text: Joi.string().allow("").required(),

      is_current: Joi.boolean(),

      status: Joi.string().allow("").required(),

      is_passed: Joi.boolean(),

      time: Joi.string().allow(""),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      source: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),

      fynd_order_id: Joi.string().allow("").required(),

      cod_charges: Joi.string().allow(""),

      tax_details: Joi.any(),

      order_value: Joi.string().allow(""),

      order_date: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      ordering_channel: Joi.string().allow(""),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      bsh_id: Joi.number(),

      state_id: Joi.number(),

      forward: Joi.boolean().allow(null),

      delivery_awb_number: Joi.string().allow("").allow(null),

      created_at: Joi.string().allow(""),

      app_display_name: Joi.string().allow(""),

      delivery_partner_id: Joi.number().allow(null),

      kafka_sync: Joi.boolean(),

      reasons: Joi.array().items(Joi.any()),

      store_id: Joi.number(),

      status: Joi.string().allow("").required(),

      shipment_id: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      state_type: Joi.string().allow(""),

      bag_id: Joi.number(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      display_name: Joi.string().allow(""),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      ordering_store: OrderModel.OrderingStoreDetails(),

      meta: OrderModel.Meta(),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      picked_date: Joi.string().allow(""),

      priority_text: Joi.string().allow("").allow(null),

      lock_status: Joi.boolean(),

      platform_logo: Joi.string().allow(""),

      enable_dp_tracking: Joi.boolean(),

      forward_shipment_id: Joi.string().allow(""),

      coupon: Joi.any(),

      journey_type: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),

      status: OrderModel.ShipmentStatusData(),

      total_bags: Joi.number(),

      vertical: Joi.string().allow("").allow(null),

      total_items: Joi.number(),

      operational_status: Joi.string().allow(""),

      fulfilling_store: OrderModel.FulfillingStore(),

      affiliate_details: OrderModel.AffiliateDetails(),

      gst_details: OrderModel.GSTDetailsData(),

      user: OrderModel.UserDataInfo(),

      delivery_slot: Joi.any(),

      packaging_type: Joi.string().allow(""),

      fulfilment_priority: Joi.number(),

      delivery_details: OrderModel.UserDetailsData(),

      user_agent: Joi.string().allow(""),

      company_details: OrderModel.CompanyDetails(),

      payments: OrderModel.ShipmentPayments(),

      bags: Joi.array().items(OrderModel.OrderBags()),

      prices: OrderModel.Prices(),

      dp_details: OrderModel.DPDetailsData(),

      custom_meta: Joi.array().items(Joi.any()),

      payment_mode: Joi.string().allow(""),

      billing_details: OrderModel.UserDetailsData(),

      payment_methods: Joi.any(),

      invoice_id: Joi.string().allow(""),

      invoice: OrderModel.InvoiceInfo(),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      shipment_quantity: Joi.number(),

      order: OrderModel.OrderDetailsData(),

      shipment_status: Joi.string().allow(""),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),
    });
  }

  static TransactionData() {
    return Joi.object({
      terminal_id: Joi.string().allow(""),

      transaction_id: Joi.string().allow(""),

      entity: Joi.string().allow(""),

      payment_id: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      unique_reference_number: Joi.string().allow(""),

      status: Joi.string().allow(""),

      amount_paid: Joi.string().allow(""),
    });
  }

  static BillingStaffDetails() {
    return Joi.object({
      staff_id: Joi.number(),

      employee_code: Joi.string().allow(""),

      user: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      first_name: Joi.string().allow(""),
    });
  }

  static PlatformUserDetails() {
    return Joi.object({
      platform_user_last_name: Joi.string().allow(""),

      platform_user_id: Joi.string().allow(""),

      platform_user_employee_code: Joi.string().allow(""),

      platform_user_first_name: Joi.string().allow(""),
    });
  }

  static OrderMeta() {
    return Joi.object({
      staff: Joi.any(),

      transaction_data: OrderModel.TransactionData(),

      ordering_store: Joi.number(),

      billing_staff_details: OrderModel.BillingStaffDetails(),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      order_tags: Joi.array().items(Joi.any()),

      extra_meta: Joi.any(),

      platform_user_details: OrderModel.PlatformUserDetails(),

      payment_type: Joi.string().allow(""),

      employee_id: Joi.number(),

      customer_note: Joi.string().allow(""),

      cart_id: Joi.number(),

      company_logo: Joi.string().allow(""),

      files: Joi.array().items(Joi.any()),

      comment: Joi.string().allow(""),

      order_platform: Joi.string().allow(""),

      mongo_cart_id: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      order_type: Joi.string().allow(""),
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

      fynd_order_id: Joi.string().allow("").required(),

      tax_details: OrderModel.TaxDetails(),

      prices: OrderModel.Prices(),

      payment_methods: Joi.any(),

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
      total_items: Joi.number(),

      index: Joi.number(),

      text: Joi.string().allow(""),

      value: Joi.string().allow(""),

      actions: Joi.array().items(Joi.any()),
    });
  }

  static SuperLane() {
    return Joi.object({
      total_items: Joi.number(),

      text: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.SubLane()),

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

  static PlatformBreakupValues() {
    return Joi.object({
      value: Joi.string().allow(""),

      name: Joi.string().allow(""),

      display: Joi.string().allow(""),
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
      order_created_time: Joi.string().allow(""),

      user_info: OrderModel.UserDataInfo(),

      meta: Joi.any(),

      total_order_value: Joi.number(),

      order_value: Joi.number(),

      order_id: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      payment_mode: Joi.string().allow(""),

      channel: OrderModel.PlatformChannel(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),
    });
  }

  static OrderListingResponse() {
    return Joi.object({
      lane: Joi.string().allow(""),

      page: OrderModel.Page(),

      total_count: Joi.number(),

      success: Joi.boolean(),

      message: Joi.string().allow(""),

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

      options: Joi.array().items(OrderModel.Options()),

      value: Joi.number().required(),
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

      shipment_type: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      status: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),
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

      processed: Joi.array().items(OrderModel.FiltersInfo()),

      filters: Joi.array().items(OrderModel.FiltersInfo()),

      returned: Joi.array().items(OrderModel.FiltersInfo()),

      action_centre: Joi.array().items(OrderModel.FiltersInfo()),
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

      report_id: Joi.string().allow(""),

      s3_key: Joi.string().allow(""),

      report_created_at: Joi.string().allow("").allow(null),

      report_requested_at: Joi.string().allow("").allow(null),

      status: Joi.string().allow(""),

      report_name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      jio_code: Joi.string().allow(""),

      company_id: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      item_id: Joi.string().allow(""),
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

      message: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      data: Joi.array().items(Joi.any()),

      trace_id: Joi.string().allow(""),

      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

      success: Joi.boolean(),
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

      batch_id: Joi.string().allow("").required(),

      invoice_status: Joi.string().allow(""),

      company_id: Joi.string().allow(""),

      do_invoice_label_generated: Joi.boolean().required(),

      data: Joi.any(),

      store_id: Joi.string().allow(""),

      label: Joi.any(),

      store_name: Joi.string().allow(""),

      store_code: Joi.string().allow(""),
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

      upload: OrderModel.FileUploadResponse(),

      cdn: OrderModel.URL(),

      method: Joi.string().allow(""),

      size: Joi.number(),

      file_name: Joi.string().allow(""),

      content_type: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      file_path: Joi.string().allow(""),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      type: Joi.string().allow(""),

      has_next: Joi.boolean(),

      size: Joi.number(),

      has_previous: Joi.boolean(),

      current: Joi.number(),

      total: Joi.number(),
    });
  }

  static bulkListingData() {
    return Joi.object({
      file_name: Joi.string().allow(""),

      successful: Joi.number(),

      status: Joi.string().allow(""),

      processing: Joi.number(),

      store_code: Joi.string().allow(""),

      user_name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      total: Joi.number(),

      batch_id: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      company_id: Joi.number(),

      failed_shipments: Joi.array().items(Joi.any()),

      excel_url: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      successful_shipments: Joi.array().items(Joi.any()),

      user_id: Joi.string().allow(""),

      failed: Joi.number(),

      store_id: Joi.number(),
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
      qc_type: Joi.array().items(Joi.string().allow("")),

      question_set: Joi.array().items(OrderModel.QuestionSet()),

      id: Joi.number(),

      display_name: Joi.string().allow(""),
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

      processing_shipments_count: Joi.number(),

      company_id: Joi.string().allow(""),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      successful_shipments_count: Joi.number(),

      failed_shipments_count: Joi.number(),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      uploaded_on: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uploaded_by: Joi.string().allow(""),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      error: Joi.array().items(Joi.string().allow("")),

      success: Joi.string().allow(""),

      message: Joi.string().allow(""),

      status: Joi.boolean(),

      failed_records: Joi.array().items(Joi.string().allow("")),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      item_base_price: Joi.number(),

      total_gst_percentage: Joi.number(),

      po_tax_amount: Joi.number(),

      partial_can_ret: Joi.boolean(),

      po_line_amount: Joi.number(),

      docker_number: Joi.string().allow(""),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }

  static Document() {
    return Joi.object({
      ds_type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      legal_name: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

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

      enabled: Joi.boolean().required(),

      password: Joi.string().allow(""),

      user: Joi.string().allow(""),
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

      password: Joi.string().allow(""),

      user: Joi.string().allow(""),
    });
  }

  static StoreMeta() {
    return Joi.object({
      documents: OrderModel.StoreDocuments(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      stage: Joi.string().allow("").required(),

      gst_number: Joi.string().allow(""),

      additional_contact_details: Joi.any(),

      timing: Joi.array().items(Joi.any()),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      product_return_config: Joi.any(),

      ewaybill_portal_details: Joi.any(),

      display_name: Joi.string().allow("").required(),
    });
  }

  static StoreAddress() {
    return Joi.object({
      address2: Joi.string().allow(""),

      latitude: Joi.number().required(),

      address1: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      address_category: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      area: Joi.string().allow(""),

      updated_at: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      version: Joi.string().allow(""),

      contact_person: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      landmark: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      phone: Joi.string().allow("").allow(null).required(),

      email: Joi.string().allow(""),

      created_at: Joi.string().allow("").required(),
    });
  }

  static Store() {
    return Joi.object({
      fulfillment_channel: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      meta: OrderModel.StoreMeta().required(),

      latitude: Joi.number().required(),

      vat_no: Joi.string().allow("").allow(null),

      is_active: Joi.boolean(),

      mall_name: Joi.string().allow("").allow(null),

      store_email: Joi.string().allow("").required(),

      alohomora_user_id: Joi.number(),

      address1: Joi.string().allow("").required(),

      store_active_from: Joi.string().allow("").allow(null),

      pincode: Joi.string().allow("").required(),

      login_username: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      brand_id: Joi.any(),

      updated_at: Joi.string().allow("").allow(null),

      order_integration_id: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      parent_store_id: Joi.number(),

      mall_area: Joi.string().allow("").allow(null),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      city: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      code: Joi.string().allow(""),

      is_archived: Joi.boolean(),

      company_id: Joi.number().required(),

      name: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      created_at: Joi.string().allow("").required(),

      location_type: Joi.string().allow("").required(),

      is_enabled_for_recon: Joi.boolean(),

      store_address_json: OrderModel.StoreAddress(),

      packaging_material_count: Joi.number(),

      s_id: Joi.string().allow("").required(),
    });
  }

  static Attributes() {
    return Joi.object({
      gender: Joi.array().items(Joi.string().allow("")),

      marketer_name: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      primary_material: Joi.string().allow(""),

      essential: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),

      name: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      meta: Joi.any(),

      color: Joi.string().allow("").allow(null),

      size: Joi.string().allow("").required(),

      attributes: OrderModel.Attributes().required(),

      brand_id: Joi.number().required(),

      l2_category: Joi.array().items(Joi.string().allow("")),

      l3_category: Joi.number(),

      item_id: Joi.number().required(),

      brand: Joi.string().allow("").required(),

      can_return: Joi.boolean(),

      can_cancel: Joi.boolean(),

      last_updated_at: Joi.string().allow(""),

      l2_category_id: Joi.number(),

      l1_category_id: Joi.number(),

      gender: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      webstore_product_url: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").required(),

      slug_key: Joi.string().allow("").required(),

      l3_category_name: Joi.string().allow(""),

      department_id: Joi.number(),

      branch_url: Joi.string().allow("").allow(null),

      l1_category: Joi.array().items(Joi.string().allow("")),

      image: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      is_customer_return_allowed: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      affiliate_order_id: Joi.string().allow("").required(),

      employee_discount: Joi.number(),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      loyalty_discount: Joi.number(),
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
      logo: Joi.string().allow(""),

      brand_name: Joi.string().allow("").required(),

      modified_on: Joi.number(),

      is_virtual_invoice: Joi.boolean().allow(null),

      credit_note_allowed: Joi.boolean(),

      pickup_location: Joi.string().allow("").allow(null),

      company: Joi.string().allow("").required(),

      created_on: Joi.number(),

      brand_id: Joi.number().required(),

      start_date: Joi.string().allow("").allow(null),

      credit_note_expiry_days: Joi.number().allow(null),

      invoice_prefix: Joi.string().allow("").allow(null),

      script_last_ran: Joi.string().allow("").allow(null),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      sgst_tax_percentage: Joi.number().required(),

      gst_fee: Joi.number().required(),

      is_default_hsn_code: Joi.boolean(),

      hsn_code: Joi.string().allow("").required(),

      gstin_code: Joi.string().allow("").allow(null),

      igst_gst_fee: Joi.string().allow("").required(),

      gst_tag: Joi.string().allow("").required(),

      igst_tax_percentage: Joi.number().required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      gst_tax_percentage: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      value_of_good: Joi.number().required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow("").required(),

      cgst_tax_percentage: Joi.number().required(),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static Weight() {
    return Joi.object({
      unit: Joi.string().allow(""),

      is_default: Joi.boolean(),

      shipping: Joi.number(),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),

      time: Joi.number(),
    });
  }

  static Article() {
    return Joi.object({
      is_set: Joi.boolean(),

      code: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),

      dimensions: OrderModel.Dimensions(),

      raw_meta: Joi.any(),

      child_details: Joi.any().allow(null),

      esp_modified: Joi.any(),

      weight: OrderModel.Weight(),

      identifiers: OrderModel.Identifier().required(),

      size: Joi.string().allow("").required(),

      a_set: Joi.any().allow(null),

      uid: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      return_config: OrderModel.ReturnConfig(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      bag_update_time: Joi.number(),

      meta: OrderModel.BagMeta(),

      ordering_store: OrderModel.Store(),

      parent_promo_bags: Joi.any(),

      identifier: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      item: OrderModel.Item().required(),

      current_status: OrderModel.BagStatusHistory().required(),

      journey_type: Joi.string().allow("").required(),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      line_number: Joi.number(),

      quantity: Joi.number(),

      shipment_id: Joi.string().allow(""),

      order_integration_id: Joi.string().allow("").allow(null),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      operational_status: Joi.string().allow(""),

      dates: OrderModel.Dates(),

      applied_promos: Joi.array().items(Joi.any()),

      brand: OrderModel.Brand().required(),

      affiliate_details: OrderModel.AffiliateDetails(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      qc_required: Joi.any(),

      gst_details: OrderModel.BagGSTDetails().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      article_details: OrderModel.ArticleDetails(),

      restore_coupon: Joi.boolean(),

      display_name: Joi.string().allow(""),

      no_of_bags_order: Joi.number(),

      prices: OrderModel.Prices().required(),

      restore_promos: Joi.any(),

      reasons: Joi.array().items(Joi.any()),

      b_id: Joi.number().required(),

      article: OrderModel.Article().required(),

      entity_type: Joi.string().allow(""),

      b_type: Joi.string().allow(""),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      original_bag_list: Joi.array().items(Joi.number()),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      bag_status_history: OrderModel.BagStatusHistory(),
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

      has_next: Joi.boolean().required(),

      size: Joi.number().required(),

      page_type: Joi.string().allow("").required(),

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

      payment_receipt: Joi.string().allow(""),

      success: Joi.boolean(),

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

      error: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

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
      item_id: Joi.string().allow("").allow(null),

      reason_ids: Joi.array().items(Joi.number()),

      set_id: Joi.string().allow("").allow(null),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      fynd_order_id: Joi.string().allow("").allow(null),

      affiliate_order_id: Joi.string().allow("").allow(null),

      mongo_article_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      affiliate_id: Joi.string().allow("").allow(null),

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
      affiliate_bag_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),
    });
  }

  static UpdateShipmentLockPayload() {
    return Joi.object({
      action_type: Joi.string().allow("").required(),

      entity_type: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

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
      is_locked: Joi.boolean(),

      affiliate_order_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow(""),

      bag_id: Joi.number(),
    });
  }

  static CheckResponse() {
    return Joi.object({
      original_filter: OrderModel.OriginalFilter(),

      is_shipment_locked: Joi.boolean(),

      bags: Joi.array().items(OrderModel.Bags()),

      shipment_id: Joi.string().allow(""),

      lock_status: Joi.boolean().allow(null),

      status: Joi.string().allow(""),

      is_bag_locked: Joi.boolean(),

      affiliate_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),
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
      platform_id: Joi.string().allow(""),

      to_datetime: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      logo_url: Joi.string().allow(""),

      from_datetime: Joi.string().allow(""),

      company_id: Joi.number(),

      platform_name: Joi.string().allow(""),

      id: Joi.number().required(),

      title: Joi.string().allow(""),

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

  static ReasonsData() {
    return Joi.object({
      entities: Joi.array().items(OrderModel.EntitiesReasons()),

      products: Joi.array().items(OrderModel.ProductsReasons()),
    });
  }

  static Products() {
    return Joi.object({
      line_number: Joi.number(),

      identifier: Joi.string().allow(""),

      quantity: Joi.number(),
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

  static DataUpdates() {
    return Joi.object({
      entities: Joi.array().items(OrderModel.EntitiesDataUpdates()),

      products: Joi.array().items(OrderModel.ProductsDataUpdates()),
    });
  }

  static ShipmentsRequest() {
    return Joi.object({
      identifier: Joi.string().allow("").required(),

      reasons: OrderModel.ReasonsData(),

      products: Joi.array().items(OrderModel.Products()),

      data_updates: OrderModel.DataUpdates(),
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
      unlock_before_transition: Joi.boolean(),

      force_transition: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

      task: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      exception: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.number(),

      final_state: Joi.any(),

      stack_trace: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

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

      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),

      order: OrderModel.AffiliateInventoryOrderConfig(),

      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

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
      created_at: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      updated_at: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),

      owner: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

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

  static OrderUser() {
    return Joi.object({
      pincode: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      country: Joi.string().allow("").required(),

      address1: Joi.string().allow("").allow(null),

      address2: Joi.string().allow("").allow(null),

      first_name: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      mobile: Joi.number().required(),
    });
  }

  static UserData() {
    return Joi.object({
      shipping_user: OrderModel.OrderUser(),

      billing_user: OrderModel.OrderUser(),
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
      price_effective: Joi.number().required(),

      price_marked: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      item_size: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      transfer_price: Joi.number().required(),

      company_id: Joi.number().required(),

      seller_identifier: Joi.string().allow("").required(),

      store_id: Joi.number().required(),

      unit_price: Joi.number().required(),

      avl_qty: Joi.number().required(),

      fynd_store_id: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      affiliate_meta: Joi.any().required(),

      quantity: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      sku: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      discount: Joi.number().required(),

      identifier: Joi.any().required(),

      modified_on: Joi.string().allow("").required(),

      item_id: Joi.number().required(),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      quantity: Joi.number().required(),

      attributes: Joi.any().required(),

      category: Joi.any().required(),

      brand_id: Joi.number().required(),

      _id: Joi.string().allow("").required(),

      weight: Joi.any().required(),

      dimension: Joi.any().required(),
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

      meta: Joi.any(),

      dp_id: Joi.number().allow(null),

      shipments: Joi.number().required(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      fulfillment_id: Joi.number().required(),

      affiliate_shipment_id: Joi.string().allow("").required(),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      location_details: OrderModel.LocationDetails(),

      action: Joi.string().allow("").required(),

      source: Joi.string().allow("").required(),

      journey: Joi.string().allow("").required(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      payment_mode: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),

      identifier: Joi.string().allow("").required(),
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
      billing_address: OrderModel.OrderUser().required(),

      user: OrderModel.UserData().required(),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      shipment: OrderModel.ShipmentData(),

      items: Joi.any().required(),

      payment_mode: Joi.string().allow("").required(),

      order_priority: OrderModel.OrderPriority(),

      coupon: Joi.string().allow("").allow(null),

      order_value: Joi.number().required(),

      discount: Joi.number().required(),

      payment: Joi.any(),

      affiliate_order_id: Joi.string().allow(""),

      shipping_address: OrderModel.OrderUser().required(),

      cod_charges: Joi.number().required(),

      delivery_charges: Joi.number().required(),
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
      message: Joi.string().allow("").required(),

      user_name: Joi.string().allow("").required(),
    });
  }

  static PostHistoryFilters() {
    return Joi.object({
      line_number: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),

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
      type: Joi.string().allow("").required(),

      user: Joi.string().allow("").required(),

      ticket_url: Joi.string().allow(""),

      l3_detail: Joi.string().allow(""),

      l1_detail: Joi.string().allow(""),

      createdat: Joi.string().allow("").required(),

      ticket_id: Joi.string().allow(""),

      message: Joi.string().allow("").required(),

      l2_detail: Joi.string().allow(""),

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
      customer_name: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      shipment_id: Joi.number().required(),

      message: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      phone_number: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),
    });
  }

  static SendSmsPayload() {
    return Joi.object({
      data: OrderModel.SmsDataPayload(),

      slug: Joi.string().allow("").required(),

      bag_id: Joi.number().required(),
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
      meta: OrderModel.Meta1().required(),

      remarks: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.number()),

      id: Joi.number().required(),
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
      success: Joi.string().allow("").required(),

      result: Joi.array().items(OrderModel.OrderStatusData()),
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

  static PaymentMethod() {
    return Joi.object({
      meta: Joi.any(),

      amount: Joi.number().required(),

      transaction_data: Joi.any(),

      refund_by: Joi.string().allow("").required(),

      mode: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      collect_by: Joi.string().allow("").required(),
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
      customer_pickup_slot: Joi.any(),

      dp_pickup_slot: Joi.any(),

      pack_by_date: Joi.string().allow(""),

      confirm_by_date: Joi.string().allow(""),

      dispatch_by_date: Joi.string().allow(""),

      dispatch_after_date: Joi.string().allow(""),
    });
  }

  static Tax() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      breakup: Joi.array().items(Joi.any()),

      rate: Joi.number().required(),

      amount: Joi.any().required(),
    });
  }

  static Charge() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      amount: Joi.any().required(),

      tax: OrderModel.Tax(),

      code: Joi.string().allow(""),

      name: Joi.string().allow("").required(),
    });
  }

  static LineItem() {
    return Joi.object({
      quantity: Joi.number(),

      meta: Joi.any(),

      seller_identifier: Joi.string().allow("").required(),

      external_line_id: Joi.string().allow(""),

      custom_messasge: Joi.string().allow(""),

      charges: Joi.array().items(OrderModel.Charge()),
    });
  }

  static Shipment() {
    return Joi.object({
      meta: Joi.any(),

      external_shipment_id: Joi.string().allow(""),

      priority: Joi.number(),

      processing_dates: OrderModel.ProcessingDates(),

      location_id: Joi.number().required(),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),
    });
  }

  static BillingInfo() {
    return Joi.object({
      alternate_mobile_number: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      floor_no: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      primary_email: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      title: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),
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
      alternate_mobile_number: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      floor_no: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      shipping_type: Joi.string().allow(""),

      slot: Joi.array().items(Joi.any()),

      address_type: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      primary_email: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      title: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      geo_location: Joi.any(),

      middle_name: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      meta: Joi.any(),

      payment_info: OrderModel.PaymentInfo().required(),

      external_order_id: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      billing_info: OrderModel.BillingInfo().required(),

      tax_info: OrderModel.TaxInfo(),

      currency_info: Joi.any(),

      external_creation_date: Joi.string().allow(""),

      shipping_info: OrderModel.ShippingInfo().required(),

      charges: Joi.array().items(OrderModel.Charge()),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      exception: Joi.string().allow("").allow(null),

      request_id: Joi.string().allow("").allow(null),

      meta: Joi.string().allow("").allow(null),

      info: Joi.any(),

      status: Joi.number().required(),

      stack_trace: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),
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
      lock_states: Joi.array().items(Joi.string().allow("")),

      payment_info: OrderModel.CreateChannelPaymentInfo(),

      dp_configuration: OrderModel.DpConfiguration(),

      shipment_assignment: Joi.string().allow(""),

      location_reassignment: Joi.boolean(),

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
      start_date: Joi.string().allow("").required(),

      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),

      end_date: Joi.string().allow("").required(),

      mobile: Joi.number().required(),
    });
  }
}
module.exports = OrderModel;
