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

      value: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
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

  static Prices() {
    return Joi.object({
      promotion_effective_discount: Joi.number(),

      tax_collected_at_source: Joi.number(),

      refund_amount: Joi.number(),

      cashback: Joi.number(),

      price_marked: Joi.number(),

      cashback_applied: Joi.number(),

      refund_credit: Joi.number(),

      discount: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      transfer_price: Joi.number(),

      fynd_credits: Joi.number(),

      price_effective: Joi.number(),

      cod_charges: Joi.number(),

      amount_paid: Joi.number(),

      delivery_charge: Joi.number(),

      value_of_good: Joi.number(),

      coupon_value: Joi.number(),
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
      avis_user_id: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      uid: Joi.number(),

      email: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      tax_collected_at_source: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),

      gst_fee: Joi.number().required(),

      value_of_good: Joi.number().required(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      code: Joi.string().allow(""),

      l3_category_name: Joi.string().allow(""),

      size: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      id: Joi.number(),

      images: Joi.array().items(Joi.string().allow("")),

      can_return: Joi.boolean(),

      color: Joi.string().allow("").allow(null),

      department_id: Joi.number(),

      name: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")),

      l1_category: Joi.array().items(Joi.string().allow("")),

      l3_category: Joi.number(),
    });
  }

  static BagUnit() {
    return Joi.object({
      gst: OrderModel.GSTDetailsData(),

      item: OrderModel.PlatformItem(),

      item_quantity: Joi.number().required(),

      status: Joi.any().required(),

      prices: OrderModel.Prices(),

      ordering_channel: Joi.string().allow("").required(),

      can_cancel: Joi.boolean(),

      shipment_id: Joi.string().allow("").required(),

      total_shipment_bags: Joi.number().required(),

      bag_id: Joi.number().required(),

      can_return: Joi.boolean(),
    });
  }

  static ShipmentItemFulFillingStore() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      shipment_status: OrderModel.ShipmentStatus(),

      application: Joi.any(),

      prices: OrderModel.Prices(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      channel: Joi.any(),

      id: Joi.string().allow("").required(),

      user: OrderModel.UserDataInfo(),

      shipment_id: Joi.string().allow(""),

      fulfilling_centre: Joi.string().allow("").required(),

      payment_methods: Joi.any(),

      sla: Joi.any(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      total_bags_count: Joi.number().required(),

      total_shipments_in_order: Joi.number().required(),

      shipment_created_at: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),
    });
  }

  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      page: Joi.any(),

      filters: Joi.array().items(OrderModel.FiltersInfo()),

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

  static UserDetailsData() {
    return Joi.object({
      phone: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      area: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      address_type: Joi.string().allow(""),

      email: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

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

  static InvoiceInfo() {
    return Joi.object({
      invoice_url: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),

      label_url: Joi.string().allow(""),

      store_invoice_id: Joi.string().allow(""),

      credit_note_id: Joi.string().allow(""),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      app_state_name: Joi.string().allow(""),

      notify_customer: Joi.boolean(),

      app_facing: Joi.boolean(),

      bs_id: Joi.number().required(),

      is_active: Joi.boolean(),

      journey_type: Joi.string().allow("").required(),

      app_display_name: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      state_type: Joi.string().allow("").required(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      kafka_sync: Joi.boolean(),

      state_id: Joi.number(),

      created_at: Joi.string().allow("").allow(null),

      status: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      delivery_partner_id: Joi.number(),

      shipment_id: Joi.string().allow(""),

      bag_id: Joi.number(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      delivery_awb_number: Joi.string().allow(""),

      store_id: Joi.number(),

      state_type: Joi.string().allow(""),

      current_status_id: Joi.number().required(),
    });
  }

  static BagGST() {
    return Joi.object({
      hsn_code: Joi.string().allow(""),

      brand_calculated_amount: Joi.number(),

      gstin_code: Joi.string().allow(""),

      gst_tax_percentage: Joi.number(),

      gst_fee: Joi.number(),

      gst_tag: Joi.string().allow(""),

      is_default_hsn_code: Joi.boolean(),

      value_of_good: Joi.number(),
    });
  }

  static BagConfigs() {
    return Joi.object({
      is_customer_return_allowed: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),
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
      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      amount: Joi.number(),

      promotion_type: Joi.string().allow(""),

      article_quantity: Joi.number(),

      mrp_promotion: Joi.boolean(),

      promotion_name: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      return_config: Joi.any(),

      uid: Joi.string().allow(""),

      identifiers: Joi.any(),
    });
  }

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      hsn_code: Joi.string().allow("").required(),

      item_name: Joi.string().allow("").required(),

      cashback: Joi.number().required(),

      refund_credit: Joi.number().required(),

      price_marked: Joi.number().required(),

      discount: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      transfer_price: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),

      promotion_effective_discount: Joi.number().required(),

      tax_collected_at_source: Joi.number(),

      coupon_effective_discount: Joi.number().required(),

      size: Joi.string().allow("").required(),

      cashback_applied: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      total_units: Joi.number().required(),

      price_effective: Joi.number().required(),

      cod_charges: Joi.number().required(),

      coupon_value: Joi.number().required(),

      identifiers: OrderModel.Identifier().required(),

      fynd_credits: Joi.number().required(),

      amount_paid: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      value_of_good: Joi.number().required(),

      gst_fee: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      phone: Joi.string().allow(""),

      city: Joi.string().allow(""),

      country: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      area: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      state: Joi.string().allow(""),

      version: Joi.string().allow(""),

      latitude: Joi.number(),

      email: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      longitude: Joi.number(),

      landmark: Joi.string().allow(""),

      created_at: Joi.string().allow(""),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      id: Joi.number().required(),

      company: Joi.string().allow("").allow(null).required(),

      logo: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),
    });
  }

  static OrderBags() {
    return Joi.object({
      item: OrderModel.PlatformItem(),

      current_status: OrderModel.CurrentStatus(),

      gst_details: OrderModel.BagGST(),

      bag_configs: OrderModel.BagConfigs(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      article: OrderModel.OrderBagArticle(),

      seller_identifier: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      financial_breakup: OrderModel.FinancialBreakup(),

      can_cancel: Joi.boolean(),

      parent_promo_bags: Joi.any(),

      quantity: Joi.number(),

      line_number: Joi.number(),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      entity_type: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      bag_id: Joi.number().required(),

      can_return: Joi.boolean(),

      brand: OrderModel.OrderBrandName(),

      display_name: Joi.string().allow(""),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      awb_no: Joi.string().allow(""),

      country: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      id: Joi.number(),

      eway_bill_id: Joi.string().allow("").allow(null),

      gst_tag: Joi.string().allow(""),

      name: Joi.string().allow(""),

      track_url: Joi.string().allow("").allow(null),
    });
  }

  static DebugInfo() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow(""),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      ajio_site_id: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      gstin: Joi.string().allow("").required(),

      address: Joi.string().allow("").allow(null).required(),
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
      invoice: Joi.any(),

      credit_note: Joi.any(),
    });
  }

  static LockData() {
    return Joi.object({
      lock_message: Joi.string().allow(""),

      mto: Joi.boolean(),

      locked: Joi.boolean(),
    });
  }

  static ShipmentTimeStamp() {
    return Joi.object({
      t_min: Joi.string().allow(""),

      t_max: Joi.string().allow(""),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      po_number: Joi.string().allow(""),

      external: Joi.any(),

      dp_name: Joi.string().allow(""),

      shipment_volumetric_weight: Joi.number(),

      store_invoice_updated_date: Joi.string().allow(""),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      debug_info: OrderModel.DebugInfo(),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      forward_affiliate_order_id: Joi.string().allow(""),

      dp_sort_key: Joi.string().allow(""),

      return_affiliate_order_id: Joi.string().allow(""),

      ewaybill_info: Joi.any().allow(null),

      marketplace_store_id: Joi.string().allow(""),

      same_store_available: Joi.boolean().required(),

      weight: Joi.number().required(),

      packaging_name: Joi.string().allow(""),

      formatted: OrderModel.Formatted(),

      dp_options: Joi.any(),

      due_date: Joi.string().allow(""),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      b2c_buyer_details: Joi.any().allow(null),

      box_type: Joi.string().allow("").allow(null),

      return_details: Joi.any(),

      awb_number: Joi.string().allow(""),

      shipment_weight: Joi.number(),

      bag_weight: Joi.any(),

      order_type: Joi.string().allow("").allow(null),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      einvoice_info: OrderModel.EinvoiceInfo(),

      return_affiliate_shipment_id: Joi.string().allow(""),

      assign_dp_from_sb: Joi.boolean(),

      return_store_node: Joi.number(),

      return_awb_number: Joi.string().allow(""),

      lock_data: OrderModel.LockData(),

      dp_id: Joi.string().allow("").allow(null),

      timestamp: OrderModel.ShipmentTimeStamp(),
    });
  }

  static PDFLinks() {
    return Joi.object({
      invoice: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      delivery_challan_a4: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      b2b: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      label_pos: Joi.string().allow(""),

      label: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      channel_shipment_id: Joi.string().allow("").allow(null),

      due_date: Joi.string().allow("").allow(null),

      is_priority: Joi.boolean(),

      loyalty_discount: Joi.number(),

      order_item_id: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      employee_discount: Joi.number(),

      quantity: Joi.number(),

      size_level_total_qty: Joi.number().allow(null),

      coupon_code: Joi.string().allow("").allow(null),

      channel_order_id: Joi.string().allow("").allow(null),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow("").required(),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      affiliate_store_id: Joi.string().allow("").required(),

      company_affiliate_tag: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow("").required(),

      pdf_links: OrderModel.PDFLinks(),

      affiliate_id: Joi.string().allow(""),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      ad_id: Joi.string().allow(""),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      order_date: Joi.string().allow(""),

      cod_charges: Joi.string().allow(""),

      ordering_channel: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),

      source: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      order_value: Joi.string().allow(""),

      tax_details: Joi.any(),

      fynd_order_id: Joi.string().allow("").required(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      kafka_sync: Joi.boolean(),

      state_id: Joi.number(),

      created_at: Joi.string().allow(""),

      bsh_id: Joi.number(),

      status: Joi.string().allow("").required(),

      forward: Joi.boolean().allow(null),

      updated_at: Joi.string().allow(""),

      delivery_partner_id: Joi.number().allow(null),

      shipment_id: Joi.string().allow(""),

      bag_id: Joi.number(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      reasons: Joi.array().items(Joi.any()),

      delivery_awb_number: Joi.string().allow("").allow(null),

      app_display_name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      store_id: Joi.number(),

      state_type: Joi.string().allow(""),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      store_name: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      ordering_store_id: Joi.number().required(),

      city: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

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
      company_cin: Joi.string().allow(""),

      company_name: Joi.string().allow(""),

      company_id: Joi.number(),

      company_gst: Joi.string().allow(""),

      address: Joi.any(),

      company_contact: OrderModel.ContactDetails(),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      logo: Joi.string().allow(""),

      source: Joi.string().allow(""),

      mode: Joi.string().allow(""),
    });
  }

  static TrackingList() {
    return Joi.object({
      is_passed: Joi.boolean(),

      time: Joi.string().allow(""),

      status: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),

      is_current: Joi.boolean(),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      status: Joi.string().allow(""),

      id: Joi.number(),

      shipment_id: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.string().allow("")),

      created_at: Joi.string().allow("").allow(null),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      store_name: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      city: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      id: Joi.number().required(),

      state: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      billing_details: OrderModel.UserDetailsData(),

      packaging_type: Joi.string().allow(""),

      shipment_status: Joi.string().allow(""),

      meta: OrderModel.Meta(),

      forward_shipment_id: Joi.string().allow(""),

      total_items: Joi.number(),

      journey_type: Joi.string().allow(""),

      invoice: OrderModel.InvoiceInfo(),

      gst_details: OrderModel.GSTDetailsData(),

      bags: Joi.array().items(OrderModel.OrderBags()),

      dp_details: OrderModel.DPDetailsData(),

      affiliate_details: OrderModel.AffiliateDetails(),

      platform_logo: Joi.string().allow(""),

      operational_status: Joi.string().allow(""),

      order: OrderModel.OrderDetailsData(),

      invoice_id: Joi.string().allow(""),

      delivery_details: OrderModel.UserDetailsData(),

      shipment_quantity: Joi.number(),

      coupon: Joi.any(),

      custom_meta: Joi.array().items(Joi.any()),

      delivery_slot: Joi.any(),

      shipment_id: Joi.string().allow("").required(),

      total_bags: Joi.number(),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      user_agent: Joi.string().allow(""),

      picked_date: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      ordering_store: OrderModel.OrderingStoreDetails(),

      company_details: OrderModel.CompanyDetails(),

      user: OrderModel.UserDataInfo(),

      payments: OrderModel.ShipmentPayments(),

      vertical: Joi.string().allow("").allow(null),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      fulfilment_priority: Joi.number(),

      priority_text: Joi.string().allow("").allow(null),

      prices: OrderModel.Prices(),

      status: OrderModel.ShipmentStatusData(),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      payment_methods: Joi.any(),

      lock_status: Joi.boolean(),

      enable_dp_tracking: Joi.boolean(),

      fulfilling_store: OrderModel.FulfillingStore(),
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
      staff_id: Joi.number(),

      last_name: Joi.string().allow(""),

      user: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      employee_code: Joi.string().allow(""),
    });
  }

  static PlatformUserDetails() {
    return Joi.object({
      platform_user_employee_code: Joi.string().allow(""),

      platform_user_id: Joi.string().allow(""),

      platform_user_last_name: Joi.string().allow(""),

      platform_user_first_name: Joi.string().allow(""),
    });
  }

  static TransactionData() {
    return Joi.object({
      payment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      terminal_id: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      entity: Joi.string().allow(""),

      unique_reference_number: Joi.string().allow(""),

      amount_paid: Joi.string().allow(""),

      transaction_id: Joi.string().allow(""),
    });
  }

  static OrderMeta() {
    return Joi.object({
      mongo_cart_id: Joi.number(),

      customer_note: Joi.string().allow(""),

      extra_meta: Joi.any(),

      order_platform: Joi.string().allow(""),

      company_logo: Joi.string().allow(""),

      payment_type: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      staff: Joi.any(),

      billing_staff_details: OrderModel.BillingStaffDetails(),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      platform_user_details: OrderModel.PlatformUserDetails(),

      ordering_store: Joi.number(),

      transaction_data: OrderModel.TransactionData(),

      cart_id: Joi.number(),

      files: Joi.array().items(Joi.any()),

      order_type: Joi.string().allow(""),

      order_tags: Joi.array().items(Joi.any()),

      employee_id: Joi.number(),

      comment: Joi.string().allow(""),
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
      order_date: Joi.string().allow("").required(),

      meta: OrderModel.OrderMeta(),

      prices: OrderModel.Prices(),

      payment_methods: Joi.any(),

      tax_details: OrderModel.TaxDetails(),

      fynd_order_id: Joi.string().allow("").required(),
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
      value: Joi.string().allow(""),

      total_items: Joi.number(),

      actions: Joi.array().items(Joi.any()),

      text: Joi.string().allow(""),

      index: Joi.number(),
    });
  }

  static SuperLane() {
    return Joi.object({
      options: Joi.array().items(OrderModel.SubLane()),

      value: Joi.string().allow("").required(),

      total_items: Joi.number(),

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

      value: Joi.string().allow(""),

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
      meta: Joi.any(),

      order_id: Joi.string().allow(""),

      user_info: OrderModel.UserDataInfo(),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      channel: OrderModel.PlatformChannel(),

      order_created_time: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      total_order_value: Joi.number(),

      order_value: Joi.number(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),
    });
  }

  static OrderListingResponse() {
    return Joi.object({
      success: Joi.boolean(),

      page: OrderModel.Page(),

      items: Joi.array().items(OrderModel.PlatformOrderItems()),

      total_count: Joi.number(),

      lane: Joi.string().allow(""),

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
      meta: Joi.any(),

      status: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),
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
      status: Joi.string().allow(""),

      report_id: Joi.string().allow(""),

      report_name: Joi.string().allow(""),

      report_created_at: Joi.string().allow("").allow(null),

      report_type: Joi.string().allow(""),

      request_details: Joi.any(),

      s3_key: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      company_id: Joi.string().allow(""),

      jio_code: Joi.string().allow(""),

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
      message: Joi.string().allow(""),

      value: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      success: Joi.boolean(),

      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

      identifier: Joi.string().allow(""),

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

      company_id: Joi.string().allow(""),

      invoice_status: Joi.string().allow(""),

      do_invoice_label_generated: Joi.boolean().required(),

      data: Joi.any(),

      store_code: Joi.string().allow(""),

      invoice: Joi.any(),

      store_id: Joi.string().allow(""),

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
      namespace: Joi.string().allow(""),

      method: Joi.string().allow(""),

      upload: OrderModel.FileUploadResponse(),

      size: Joi.number(),

      content_type: Joi.string().allow(""),

      cdn: OrderModel.URL(),

      tags: Joi.array().items(Joi.string().allow("")),

      file_path: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      operation: Joi.string().allow(""),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      size: Joi.number(),

      current: Joi.number(),

      type: Joi.string().allow(""),

      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

      total: Joi.number(),
    });
  }

  static bulkListingData() {
    return Joi.object({
      store_name: Joi.string().allow(""),

      company_id: Joi.number(),

      file_name: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      successful: Joi.number(),

      store_id: Joi.number(),

      failed_shipments: Joi.array().items(Joi.any()),

      id: Joi.string().allow(""),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      successful_shipments: Joi.array().items(Joi.any()),

      store_code: Joi.string().allow(""),

      failed: Joi.number(),

      excel_url: Joi.string().allow(""),

      total: Joi.number(),

      batch_id: Joi.string().allow(""),

      processing: Joi.number(),

      user_name: Joi.string().allow(""),

      status: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
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
      id: Joi.number(),

      display_name: Joi.string().allow(""),
    });
  }

  static Reason() {
    return Joi.object({
      id: Joi.number(),

      display_name: Joi.string().allow(""),

      qc_type: Joi.array().items(Joi.string().allow("")),

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
      batch_id: Joi.string().allow(""),

      successful_shipments_count: Joi.number(),

      processing_shipments_count: Joi.number(),

      company_id: Joi.string().allow(""),

      total_shipments_count: Joi.number(),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      failed_shipments_count: Joi.number(),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      uploaded_on: Joi.string().allow(""),

      success: Joi.string().allow(""),

      error: Joi.array().items(Joi.string().allow("")),

      status: Joi.boolean(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      message: Joi.string().allow(""),

      uploaded_by: Joi.string().allow(""),

      user_id: Joi.string().allow(""),
    });
  }

  static Attributes() {
    return Joi.object({
      essential: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      primary_material: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      brand_name: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      meta: Joi.any(),

      item_id: Joi.number().required(),

      brand_id: Joi.number().required(),

      gender: Joi.string().allow("").allow(null),

      department_id: Joi.number(),

      color: Joi.string().allow("").allow(null),

      image: Joi.array().items(Joi.string().allow("")).required(),

      branch_url: Joi.string().allow("").allow(null),

      last_updated_at: Joi.string().allow(""),

      l3_category: Joi.number(),

      l3_category_name: Joi.string().allow(""),

      size: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      webstore_product_url: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      l2_category: Joi.array().items(Joi.string().allow("")),

      can_cancel: Joi.boolean(),

      l2_category_id: Joi.number(),

      slug_key: Joi.string().allow("").required(),

      l1_category_id: Joi.number(),

      can_return: Joi.boolean(),

      brand: Joi.string().allow("").required(),

      attributes: OrderModel.Attributes().required(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      po_line_amount: Joi.number(),

      total_gst_percentage: Joi.number(),

      partial_can_ret: Joi.boolean(),

      po_tax_amount: Joi.number(),

      docker_number: Joi.string().allow(""),

      item_base_price: Joi.number(),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      tax_collected_at_source: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      igst_tax_percentage: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      gstin_code: Joi.string().allow("").allow(null),

      gst_tax_percentage: Joi.number().required(),

      gst_fee: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      is_default_hsn_code: Joi.boolean(),

      igst_gst_fee: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),

      cgst_tax_percentage: Joi.number().required(),

      sgst_tax_percentage: Joi.number().required(),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow("").required(),

      loyalty_discount: Joi.number(),

      employee_discount: Joi.number(),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),
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
      shipping: Joi.number(),

      unit: Joi.string().allow(""),

      is_default: Joi.boolean(),
    });
  }

  static Article() {
    return Joi.object({
      is_set: Joi.boolean(),

      seller_identifier: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      return_config: OrderModel.ReturnConfig(),

      size: Joi.string().allow("").required(),

      weight: OrderModel.Weight(),

      a_set: Joi.any().allow(null),

      raw_meta: Joi.any(),

      esp_modified: Joi.any(),

      uid: Joi.string().allow("").required(),

      child_details: Joi.any().allow(null),

      dimensions: OrderModel.Dimensions(),

      _id: Joi.string().allow("").required(),

      identifiers: OrderModel.Identifier().required(),
    });
  }

  static Dates() {
    return Joi.object({
      order_created: Joi.string().allow(""),

      delivery_date: Joi.any(),
    });
  }

  static StoreEinvoice() {
    return Joi.object({
      user: Joi.string().allow(""),

      username: Joi.string().allow(""),

      password: Joi.string().allow(""),

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

  static Document() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      legal_name: Joi.string().allow("").required(),

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

      ewaybill_portal_details: Joi.any(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      additional_contact_details: Joi.any(),

      documents: OrderModel.StoreDocuments(),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      product_return_config: Joi.any(),

      timing: Joi.array().items(Joi.any()),

      display_name: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      gst_number: Joi.string().allow(""),
    });
  }

  static StoreAddress() {
    return Joi.object({
      phone: Joi.string().allow("").allow(null).required(),

      city: Joi.string().allow("").required(),

      area: Joi.string().allow(""),

      updated_at: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      address_type: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      address_category: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      created_at: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      version: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      state: Joi.string().allow("").required(),

      email: Joi.string().allow(""),
    });
  }

  static Store() {
    return Joi.object({
      phone: Joi.number().required(),

      location_type: Joi.string().allow("").required(),

      mall_area: Joi.string().allow("").allow(null),

      meta: OrderModel.StoreMeta().required(),

      city: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      updated_at: Joi.string().allow("").allow(null),

      latitude: Joi.number().required(),

      brand_id: Joi.any(),

      contact_person: Joi.string().allow("").required(),

      s_id: Joi.string().allow("").required(),

      packaging_material_count: Joi.number(),

      mall_name: Joi.string().allow("").allow(null),

      address1: Joi.string().allow("").required(),

      is_archived: Joi.boolean(),

      longitude: Joi.number().required(),

      name: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      vat_no: Joi.string().allow("").allow(null),

      country: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      store_email: Joi.string().allow("").required(),

      parent_store_id: Joi.number(),

      fulfillment_channel: Joi.string().allow("").required(),

      store_address_json: OrderModel.StoreAddress(),

      login_username: Joi.string().allow("").required(),

      store_active_from: Joi.string().allow("").allow(null),

      order_integration_id: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      is_enabled_for_recon: Joi.boolean(),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      state: Joi.string().allow("").required(),

      alohomora_user_id: Joi.number(),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      is_customer_return_allowed: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),
    });
  }

  static Brand() {
    return Joi.object({
      pickup_location: Joi.string().allow("").allow(null),

      is_virtual_invoice: Joi.boolean().allow(null),

      credit_note_allowed: Joi.boolean(),

      modified_on: Joi.number(),

      invoice_prefix: Joi.string().allow("").allow(null),

      start_date: Joi.string().allow("").allow(null),

      company: Joi.string().allow("").required(),

      logo: Joi.string().allow(""),

      brand_id: Joi.number().required(),

      script_last_ran: Joi.string().allow("").allow(null),

      brand_name: Joi.string().allow("").required(),

      credit_note_expiry_days: Joi.number().allow(null),

      created_on: Joi.number(),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      item: OrderModel.Item().required(),

      meta: OrderModel.BagMeta(),

      current_status: OrderModel.BagStatusHistory().required(),

      journey_type: Joi.string().allow("").required(),

      qc_required: Joi.any(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      restore_promos: Joi.any(),

      no_of_bags_order: Joi.number(),

      gst_details: OrderModel.BagGSTDetails().required(),

      affiliate_details: OrderModel.AffiliateDetails(),

      original_bag_list: Joi.array().items(Joi.number()),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      restore_coupon: Joi.boolean(),

      applied_promos: Joi.array().items(Joi.any()),

      article: OrderModel.Article().required(),

      operational_status: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      b_id: Joi.number().required(),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      dates: OrderModel.Dates(),

      bag_status_history: OrderModel.BagStatusHistory(),

      parent_promo_bags: Joi.any(),

      reasons: Joi.array().items(Joi.any()),

      shipment_id: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      line_number: Joi.number(),

      ordering_store: OrderModel.Store(),

      bag_update_time: Joi.number(),

      quantity: Joi.number(),

      entity_type: Joi.string().allow(""),

      order_integration_id: Joi.string().allow("").allow(null),

      prices: OrderModel.Prices().required(),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      brand: OrderModel.Brand().required(),

      article_details: OrderModel.ArticleDetails(),

      display_name: Joi.string().allow(""),

      b_type: Joi.string().allow(""),
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
      size: Joi.number().required(),

      current: Joi.number().required(),

      item_total: Joi.number().required(),

      page_type: Joi.string().allow("").required(),

      has_next: Joi.boolean().required(),
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
      error: Joi.string().allow(""),

      status: Joi.number(),

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

      message: Joi.string().allow("").required(),

      error_trace: Joi.string().allow(""),
    });
  }

  static StoreReassign() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow("").allow(null),

      item_id: Joi.string().allow("").allow(null),

      affiliate_id: Joi.string().allow("").allow(null),

      reason_ids: Joi.array().items(Joi.number()),

      store_id: Joi.number().required(),

      fynd_order_id: Joi.string().allow("").allow(null),

      affiliate_order_id: Joi.string().allow("").allow(null),

      set_id: Joi.string().allow("").allow(null),

      bag_id: Joi.number().allow(null),

      mongo_article_id: Joi.string().allow("").allow(null),
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
      affiliate_bag_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),
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
      bag_id: Joi.number(),

      affiliate_bag_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      is_locked: Joi.boolean(),
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
      status: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      is_bag_locked: Joi.boolean(),

      affiliate_shipment_id: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      is_shipment_locked: Joi.boolean(),

      bags: Joi.array().items(OrderModel.Bags()),

      original_filter: OrderModel.OriginalFilter(),

      lock_status: Joi.boolean().allow(null),
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
      from_datetime: Joi.string().allow(""),

      title: Joi.string().allow(""),

      platform_name: Joi.string().allow(""),

      id: Joi.number().required(),

      created_at: Joi.string().allow(""),

      logo_url: Joi.string().allow(""),

      platform_id: Joi.string().allow(""),

      to_datetime: Joi.string().allow(""),

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
      filters: Joi.array().items(Joi.any()),

      data: OrderModel.EntityReasonData(),
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
      reason_id: Joi.number(),

      reason_text: Joi.string().allow(""),
    });
  }

  static ProductsReasons() {
    return Joi.object({
      filters: Joi.array().items(OrderModel.ProductsReasonsFilters()),

      data: OrderModel.ProductsReasonsData(),
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

      line_number: Joi.number(),

      identifier: Joi.string().allow(""),
    });
  }

  static EntitiesDataUpdates() {
    return Joi.object({
      filters: Joi.array().items(Joi.any()),

      data: Joi.any(),
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

      data_updates: OrderModel.DataUpdates(),

      identifier: Joi.string().allow("").required(),
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

      message: Joi.string().allow(""),

      exception: Joi.string().allow(""),

      meta: Joi.any(),

      final_state: Joi.any(),

      stack_trace: Joi.string().allow(""),

      code: Joi.string().allow(""),

      identifier: Joi.string().allow(""),
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
      order: OrderModel.AffiliateInventoryOrderConfig(),

      payment: OrderModel.AffiliateInventoryPaymentConfig(),

      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

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
      token: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      owner: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      updated_at: Joi.string().allow("").required(),
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

      token: Joi.string().allow("").required(),

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

      article_lookup: Joi.string().allow(""),

      store_lookup: Joi.string().allow(""),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      create_user: Joi.boolean(),
    });
  }

  static OrderUser() {
    return Joi.object({
      last_name: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      address1: Joi.string().allow("").allow(null),

      country: Joi.string().allow("").required(),

      address2: Joi.string().allow("").allow(null),

      state: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      city: Joi.string().allow("").required(),

      mobile: Joi.number().required(),
    });
  }

  static OrderPriority() {
    return Joi.object({
      fulfilment_priority_text: Joi.string().allow(""),

      fulfilment_priority: Joi.number().allow(null),

      affiliate_priority_code: Joi.string().allow("").allow(null),
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

      sku: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      transfer_price: Joi.number().required(),

      quantity: Joi.number().required(),

      company_id: Joi.number().required(),

      identifier: Joi.any().required(),

      price_effective: Joi.number().required(),

      store_id: Joi.number().required(),

      amount_paid: Joi.number().required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      modified_on: Joi.string().allow("").required(),

      unit_price: Joi.number().required(),

      item_id: Joi.number().required(),

      affiliate_meta: Joi.any().required(),

      affiliate_store_id: Joi.string().allow("").required(),

      delivery_charge: Joi.number().required(),

      item_size: Joi.string().allow("").required(),

      price_marked: Joi.number().required(),

      avl_qty: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      discount: Joi.number().required(),
    });
  }

  static UserData() {
    return Joi.object({
      billing_user: OrderModel.OrderUser(),

      shipping_user: OrderModel.OrderUser(),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      _id: Joi.string().allow("").required(),

      weight: Joi.any().required(),

      category: Joi.any().required(),

      brand_id: Joi.number().required(),

      dimension: Joi.any().required(),

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
      fulfillment_id: Joi.number().required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      dp_id: Joi.number().allow(null),

      box_type: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      shipments: Joi.number().required(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      location_details: OrderModel.LocationDetails(),

      journey: Joi.string().allow("").required(),

      source: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      identifier: Joi.string().allow("").required(),
    });
  }

  static ShipmentData() {
    return Joi.object({
      shipment_data: OrderModel.ShipmentConfig().required(),
    });
  }

  static OrderInfo() {
    return Joi.object({
      payment_mode: Joi.string().allow("").required(),

      items: Joi.any().required(),

      billing_address: OrderModel.OrderUser().required(),

      shipping_address: OrderModel.OrderUser().required(),

      order_priority: OrderModel.OrderPriority(),

      payment: Joi.any(),

      delivery_charges: Joi.number().required(),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      coupon: Joi.string().allow("").allow(null),

      affiliate_order_id: Joi.string().allow(""),

      order_value: Joi.number().required(),

      cod_charges: Joi.number().required(),

      user: OrderModel.UserData().required(),

      discount: Joi.number().required(),

      shipment: OrderModel.ShipmentData(),
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
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static ActionInfo() {
    return Joi.object({
      display_text: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

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
      l1_detail: Joi.string().allow(""),

      message: Joi.string().allow("").required(),

      l3_detail: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      createdat: Joi.string().allow("").required(),

      ticket_id: Joi.string().allow(""),

      user: Joi.string().allow("").required(),

      l2_detail: Joi.string().allow(""),

      ticket_url: Joi.string().allow(""),

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
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static PostHistoryFilters() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      line_number: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),
    });
  }

  static PostHistoryData() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      user_name: Joi.string().allow("").required(),
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
      message: Joi.string().allow("").required(),

      shipment_id: Joi.number().required(),

      amount_paid: Joi.number().required(),

      phone_number: Joi.number().required(),

      order_id: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      customer_name: Joi.string().allow("").required(),

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
      state_manager_used: Joi.string().allow(""),

      kafka_emission_status: Joi.number(),
    });
  }

  static ShipmentDetail() {
    return Joi.object({
      status: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      id: Joi.number().required(),

      meta: OrderModel.Meta1().required(),

      bag_list: Joi.array().items(Joi.number()),

      remarks: Joi.string().allow(""),
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
      success: Joi.string().allow("").required(),

      result: Joi.array().items(OrderModel.OrderStatusData()),
    });
  }

  static ManualAssignDPToShipment() {
    return Joi.object({
      dp_id: Joi.number().required(),

      order_type: Joi.string().allow("").required(),

      shipment_ids: Joi.array().items(Joi.string().allow("")),

      qc_required: Joi.string().allow("").required(),
    });
  }

  static ManualAssignDPToShipmentResponse() {
    return Joi.object({
      errors: Joi.array().items(Joi.string().allow("")),

      success: Joi.string().allow("").required(),
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

      type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      amount: Joi.any().required(),

      code: Joi.string().allow(""),
    });
  }

  static TaxInfo() {
    return Joi.object({
      b2b_gstin_number: Joi.string().allow(""),

      gstin: Joi.string().allow(""),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      dp_pickup_slot: Joi.any(),

      dispatch_by_date: Joi.string().allow(""),

      pack_by_date: Joi.string().allow(""),

      customer_pickup_slot: Joi.any(),

      confirm_by_date: Joi.string().allow(""),

      dispatch_after_date: Joi.string().allow(""),
    });
  }

  static LineItem() {
    return Joi.object({
      custom_messasge: Joi.string().allow(""),

      external_line_id: Joi.string().allow(""),

      charges: Joi.array().items(OrderModel.Charge()),

      meta: Joi.any(),

      seller_identifier: Joi.string().allow("").required(),

      quantity: Joi.number(),
    });
  }

  static Shipment() {
    return Joi.object({
      priority: Joi.number(),

      meta: Joi.any(),

      processing_dates: OrderModel.ProcessingDates(),

      external_shipment_id: Joi.string().allow(""),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),

      location_id: Joi.number().required(),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      primary_mobile_number: Joi.string().allow("").required(),

      floor_no: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      geo_location: Joi.any(),

      middle_name: Joi.string().allow(""),

      slot: Joi.array().items(Joi.any()),

      alternate_email: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      state_code: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      primary_email: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      alternate_mobile_number: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      title: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      shipping_type: Joi.string().allow(""),

      landmark: Joi.string().allow(""),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      mode: Joi.string().allow("").required(),

      transaction_data: Joi.any(),

      meta: Joi.any(),

      refund_by: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      collect_by: Joi.string().allow("").required(),
    });
  }

  static PaymentInfo() {
    return Joi.object({
      primary_mode: Joi.string().allow("").required(),

      payment_methods: Joi.array().items(OrderModel.PaymentMethod()),
    });
  }

  static BillingInfo() {
    return Joi.object({
      primary_mobile_number: Joi.string().allow("").required(),

      floor_no: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      state_code: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      primary_email: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      alternate_mobile_number: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      title: Joi.string().allow(""),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      charges: Joi.array().items(OrderModel.Charge()),

      tax_info: OrderModel.TaxInfo(),

      meta: Joi.any(),

      external_order_id: Joi.string().allow(""),

      external_creation_date: Joi.string().allow(""),

      currency_info: Joi.any(),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      shipping_info: OrderModel.ShippingInfo().required(),

      payment_info: OrderModel.PaymentInfo().required(),

      billing_info: OrderModel.BillingInfo().required(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      info: Joi.any(),

      status: Joi.number().required(),

      message: Joi.string().allow("").required(),

      exception: Joi.string().allow("").allow(null),

      meta: Joi.string().allow("").allow(null),

      request_id: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),
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
      shipment_assignment: Joi.string().allow(""),

      location_reassignment: Joi.boolean(),

      logo_url: Joi.any(),

      payment_info: OrderModel.CreateChannelPaymentInfo(),

      dp_configuration: OrderModel.DpConfiguration(),

      lock_states: Joi.array().items(Joi.string().allow("")),
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
      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),

      end_date: Joi.string().allow("").required(),

      start_date: Joi.string().allow("").required(),

      mobile: Joi.number().required(),
    });
  }
}
module.exports = OrderModel;
