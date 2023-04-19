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

      options: Joi.array().items(OrderModel.FilterInfoOption()),

      value: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      actual_status: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),
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

      email: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      uid: Joi.number(),

      mobile: Joi.string().allow(""),

      avis_user_id: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static Prices() {
    return Joi.object({
      promotion_effective_discount: Joi.number(),

      refund_amount: Joi.number(),

      delivery_charge: Joi.number(),

      discount: Joi.number(),

      price_effective: Joi.number(),

      coupon_value: Joi.number(),

      cashback_applied: Joi.number(),

      cashback: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      tax_collected_at_source: Joi.number(),

      value_of_good: Joi.number(),

      transfer_price: Joi.number(),

      fynd_credits: Joi.number(),

      refund_credit: Joi.number(),

      price_marked: Joi.number(),

      cod_charges: Joi.number(),

      amount_paid: Joi.number(),
    });
  }

  static ShipmentItemFulFillingStore() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      images: Joi.array().items(Joi.string().allow("")),

      l3_category_name: Joi.string().allow(""),

      code: Joi.string().allow(""),

      department_id: Joi.number(),

      can_cancel: Joi.boolean(),

      image: Joi.array().items(Joi.string().allow("")),

      id: Joi.number(),

      size: Joi.string().allow(""),

      can_return: Joi.boolean(),

      l3_category: Joi.number(),

      name: Joi.string().allow(""),

      color: Joi.string().allow("").allow(null),

      l1_category: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      gst_fee: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),
    });
  }

  static BagUnit() {
    return Joi.object({
      bag_id: Joi.number().required(),

      item_quantity: Joi.number().required(),

      can_cancel: Joi.boolean(),

      item: OrderModel.PlatformItem(),

      total_shipment_bags: Joi.number().required(),

      prices: OrderModel.Prices(),

      ordering_channel: Joi.string().allow("").required(),

      shipment_id: Joi.string().allow("").required(),

      can_return: Joi.boolean(),

      gst: OrderModel.GSTDetailsData(),

      status: Joi.any().required(),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      channel: Joi.any(),

      created_at: Joi.string().allow("").required(),

      shipment_created_at: Joi.string().allow("").required(),

      sla: Joi.any(),

      application: Joi.any(),

      shipment_status: OrderModel.ShipmentStatus(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      user: OrderModel.UserDataInfo(),

      id: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      fulfilling_centre: Joi.string().allow("").required(),

      shipment_id: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.BagUnit()),

      payment_methods: Joi.any(),

      total_bags_count: Joi.number().required(),

      total_shipments_in_order: Joi.number().required(),
    });
  }

  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      filters: Joi.array().items(OrderModel.FiltersInfo()),

      items: Joi.array().items(OrderModel.ShipmentItem()),

      applied_filters: Joi.any(),

      page: Joi.any(),
    });
  }

  static Error() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static Dimensions() {
    return Joi.object({
      is_default: Joi.boolean(),

      unit: Joi.string().allow(""),

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

  static Formatted() {
    return Joi.object({
      f_min: Joi.string().allow(""),

      f_max: Joi.string().allow(""),
    });
  }

  static LockData() {
    return Joi.object({
      lock_message: Joi.string().allow(""),

      mto: Joi.boolean(),

      locked: Joi.boolean(),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      address: Joi.string().allow("").allow(null).required(),

      ajio_site_id: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      gstin: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
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

  static ShipmentTimeStamp() {
    return Joi.object({
      t_min: Joi.string().allow(""),

      t_max: Joi.string().allow(""),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      forward_affiliate_shipment_id: Joi.string().allow(""),

      return_store_node: Joi.number(),

      formatted: OrderModel.Formatted(),

      packaging_name: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      due_date: Joi.string().allow(""),

      weight: Joi.number().required(),

      dp_name: Joi.string().allow(""),

      return_awb_number: Joi.string().allow(""),

      store_invoice_updated_date: Joi.string().allow(""),

      lock_data: OrderModel.LockData(),

      assign_dp_from_sb: Joi.boolean(),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      dp_id: Joi.string().allow("").allow(null),

      return_affiliate_shipment_id: Joi.string().allow(""),

      b2c_buyer_details: Joi.any().allow(null),

      einvoice_info: OrderModel.EinvoiceInfo(),

      awb_number: Joi.string().allow(""),

      po_number: Joi.string().allow(""),

      debug_info: OrderModel.DebugInfo(),

      ewaybill_info: Joi.any().allow(null),

      dp_sort_key: Joi.string().allow(""),

      shipment_volumetric_weight: Joi.number(),

      return_details: Joi.any(),

      marketplace_store_id: Joi.string().allow(""),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      dp_options: Joi.any(),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      same_store_available: Joi.boolean().required(),

      timestamp: OrderModel.ShipmentTimeStamp(),

      bag_weight: Joi.any(),

      shipment_weight: Joi.number(),

      order_type: Joi.string().allow("").allow(null),

      forward_affiliate_order_id: Joi.string().allow(""),

      external: Joi.any(),

      return_affiliate_order_id: Joi.string().allow(""),
    });
  }

  static PDFLinks() {
    return Joi.object({
      label_a4: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),

      delivery_challan_a4: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      invoice_type: Joi.string().allow("").required(),

      b2b: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      label: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      channel_order_id: Joi.string().allow("").allow(null),

      coupon_code: Joi.string().allow("").allow(null),

      loyalty_discount: Joi.number(),

      due_date: Joi.string().allow("").allow(null),

      size_level_total_qty: Joi.number().allow(null),

      quantity: Joi.number(),

      is_priority: Joi.boolean(),

      employee_discount: Joi.number(),

      box_type: Joi.string().allow("").allow(null),

      channel_shipment_id: Joi.string().allow("").allow(null),

      order_item_id: Joi.string().allow(""),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      ad_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      affiliate_store_id: Joi.string().allow("").required(),

      pdf_links: OrderModel.PDFLinks(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      company_affiliate_tag: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address_type: Joi.string().allow(""),

      email: Joi.string().allow(""),

      phone: Joi.string().allow("").required(),

      address1: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      area: Joi.string().allow(""),
    });
  }

  static TrackingList() {
    return Joi.object({
      is_passed: Joi.boolean(),

      text: Joi.string().allow("").required(),

      is_current: Joi.boolean(),

      time: Joi.string().allow(""),

      status: Joi.string().allow("").required(),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      city: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      ordering_store_id: Joi.number().required(),

      contact_person: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      ordering_channel_logo: Joi.any(),

      affiliate_id: Joi.string().allow(""),

      ordering_channel: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow("").required(),

      order_date: Joi.string().allow(""),

      tax_details: Joi.any(),

      order_value: Joi.string().allow(""),

      source: Joi.string().allow(""),

      cod_charges: Joi.string().allow(""),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      country: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      version: Joi.string().allow(""),

      latitude: Joi.number(),

      city: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      email: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      state: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      longitude: Joi.number(),

      area: Joi.string().allow(""),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      identifiers: Joi.any(),

      uid: Joi.string().allow(""),

      return_config: Joi.any(),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      is_active: Joi.boolean(),

      app_display_name: Joi.string().allow(""),

      app_state_name: Joi.string().allow(""),

      journey_type: Joi.string().allow("").required(),

      bs_id: Joi.number().required(),

      app_facing: Joi.boolean(),

      name: Joi.string().allow("").required(),

      state_type: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      notify_customer: Joi.boolean(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      bag_id: Joi.number(),

      updated_at: Joi.string().allow(""),

      created_at: Joi.string().allow("").allow(null),

      kafka_sync: Joi.boolean(),

      delivery_awb_number: Joi.string().allow(""),

      current_status_id: Joi.number().required(),

      state_id: Joi.number(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      store_id: Joi.number(),

      shipment_id: Joi.string().allow(""),

      delivery_partner_id: Joi.number(),

      state_type: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      brand_name: Joi.string().allow("").required(),

      id: Joi.number().required(),

      logo: Joi.string().allow("").required(),

      company: Joi.string().allow("").allow(null).required(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),
    });
  }

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      promotion_effective_discount: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      coupon_value: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),

      value_of_good: Joi.number().required(),

      fynd_credits: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      discount: Joi.number().required(),

      gst_fee: Joi.number().required(),

      cashback: Joi.number().required(),

      transfer_price: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      total_units: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      price_effective: Joi.number().required(),

      amount_paid: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      tax_collected_at_source: Joi.number(),

      size: Joi.string().allow("").required(),

      identifiers: OrderModel.Identifier().required(),

      brand_calculated_amount: Joi.number().required(),

      refund_credit: Joi.number().required(),

      cod_charges: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      price_marked: Joi.number().required(),

      item_name: Joi.string().allow("").required(),
    });
  }

  static BagGST() {
    return Joi.object({
      gst_fee: Joi.number(),

      is_default_hsn_code: Joi.boolean(),

      gstin_code: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      value_of_good: Joi.number(),

      brand_calculated_amount: Joi.number(),

      gst_tax_percentage: Joi.number(),

      hsn_code: Joi.string().allow(""),
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
      promotion_name: Joi.string().allow(""),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      amount: Joi.number(),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      article_quantity: Joi.number(),

      promo_id: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),
    });
  }

  static BagConfigs() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),
    });
  }

  static OrderBags() {
    return Joi.object({
      bag_id: Joi.number().required(),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      parent_promo_bags: Joi.any(),

      article: OrderModel.OrderBagArticle(),

      current_status: OrderModel.CurrentStatus(),

      brand: OrderModel.OrderBrandName(),

      line_number: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      can_return: Joi.boolean(),

      financial_breakup: OrderModel.FinancialBreakup(),

      gst_details: OrderModel.BagGST(),

      item: OrderModel.PlatformItem(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      prices: OrderModel.Prices(),

      bag_configs: OrderModel.BagConfigs(),

      quantity: Joi.number(),

      identifier: Joi.string().allow(""),

      display_name: Joi.string().allow(""),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      bag_id: Joi.number(),

      created_at: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      delivery_awb_number: Joi.string().allow("").allow(null),

      state_id: Joi.number(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      store_id: Joi.number(),

      reasons: Joi.array().items(Joi.any()),

      shipment_id: Joi.string().allow(""),

      forward: Joi.boolean().allow(null),

      display_name: Joi.string().allow(""),

      delivery_partner_id: Joi.number().allow(null),

      state_type: Joi.string().allow(""),

      status: Joi.string().allow("").required(),

      app_display_name: Joi.string().allow(""),

      bsh_id: Joi.number(),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      logo: Joi.string().allow(""),

      source: Joi.string().allow(""),

      mode: Joi.string().allow(""),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      country: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      eway_bill_id: Joi.string().allow("").allow(null),

      id: Joi.number(),

      gst_tag: Joi.string().allow(""),

      track_url: Joi.string().allow("").allow(null),

      pincode: Joi.string().allow(""),

      name: Joi.string().allow(""),
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

      company_id: Joi.number(),

      company_gst: Joi.string().allow(""),

      company_cin: Joi.string().allow(""),

      company_name: Joi.string().allow(""),

      company_contact: OrderModel.ContactDetails(),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      city: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      id: Joi.number().required(),

      contact_person: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),
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

  static InvoiceInfo() {
    return Joi.object({
      credit_note_id: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      store_invoice_id: Joi.string().allow(""),

      label_url: Joi.string().allow(""),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      fulfilment_priority: Joi.number(),

      meta: OrderModel.Meta(),

      platform_logo: Joi.string().allow(""),

      affiliate_details: OrderModel.AffiliateDetails(),

      billing_details: OrderModel.UserDetailsData(),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      ordering_store: OrderModel.OrderingStoreDetails(),

      order: OrderModel.OrderDetailsData(),

      bags: Joi.array().items(OrderModel.OrderBags()),

      picked_date: Joi.string().allow(""),

      forward_shipment_id: Joi.string().allow(""),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      journey_type: Joi.string().allow(""),

      shipment_status: Joi.string().allow(""),

      payments: OrderModel.ShipmentPayments(),

      shipment_quantity: Joi.number(),

      shipment_id: Joi.string().allow("").required(),

      dp_details: OrderModel.DPDetailsData(),

      lock_status: Joi.boolean(),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      company_details: OrderModel.CompanyDetails(),

      invoice_id: Joi.string().allow(""),

      packaging_type: Joi.string().allow(""),

      user: OrderModel.UserDataInfo(),

      total_items: Joi.number(),

      fulfilling_store: OrderModel.FulfillingStore(),

      custom_meta: Joi.array().items(Joi.any()),

      total_bags: Joi.number(),

      payment_methods: Joi.any(),

      delivery_details: OrderModel.UserDetailsData(),

      coupon: Joi.any(),

      status: OrderModel.ShipmentStatusData(),

      delivery_slot: Joi.any(),

      invoice: OrderModel.InvoiceInfo(),

      priority_text: Joi.string().allow("").allow(null),

      gst_details: OrderModel.GSTDetailsData(),

      operational_status: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      payment_mode: Joi.string().allow(""),

      user_agent: Joi.string().allow(""),

      enable_dp_tracking: Joi.boolean(),

      vertical: Joi.string().allow("").allow(null),
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
      entity: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      payment_id: Joi.string().allow(""),

      transaction_id: Joi.string().allow(""),

      unique_reference_number: Joi.string().allow(""),

      status: Joi.string().allow(""),

      terminal_id: Joi.string().allow(""),

      amount_paid: Joi.string().allow(""),
    });
  }

  static BillingStaffDetails() {
    return Joi.object({
      user: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      staff_id: Joi.number(),

      employee_code: Joi.string().allow(""),

      first_name: Joi.string().allow(""),
    });
  }

  static PlatformUserDetails() {
    return Joi.object({
      platform_user_employee_code: Joi.string().allow(""),

      platform_user_first_name: Joi.string().allow(""),

      platform_user_last_name: Joi.string().allow(""),

      platform_user_id: Joi.string().allow(""),
    });
  }

  static OrderMeta() {
    return Joi.object({
      transaction_data: OrderModel.TransactionData(),

      currency_symbol: Joi.string().allow(""),

      billing_staff_details: OrderModel.BillingStaffDetails(),

      extra_meta: Joi.any(),

      order_platform: Joi.string().allow(""),

      ordering_store: Joi.number(),

      platform_user_details: OrderModel.PlatformUserDetails(),

      employee_id: Joi.number(),

      cart_id: Joi.number(),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      files: Joi.array().items(Joi.any()),

      mongo_cart_id: Joi.number(),

      customer_note: Joi.string().allow(""),

      staff: Joi.any(),

      comment: Joi.string().allow(""),

      company_logo: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      order_tags: Joi.array().items(Joi.any()),

      payment_type: Joi.string().allow(""),
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
      meta: OrderModel.OrderMeta(),

      prices: OrderModel.Prices(),

      fynd_order_id: Joi.string().allow("").required(),

      order_date: Joi.string().allow("").required(),

      tax_details: OrderModel.TaxDetails(),

      payment_methods: Joi.any(),
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

      actions: Joi.array().items(Joi.any()),

      value: Joi.string().allow(""),

      total_items: Joi.number(),

      index: Joi.number(),
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

  static PlatformChannel() {
    return Joi.object({
      logo: Joi.string().allow(""),

      name: Joi.string().allow(""),
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

      channel: OrderModel.PlatformChannel(),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      user_info: OrderModel.UserDataInfo(),

      order_created_time: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      order_id: Joi.string().allow(""),

      order_value: Joi.number(),

      total_order_value: Joi.number(),
    });
  }

  static OrderListingResponse() {
    return Joi.object({
      success: Joi.boolean(),

      lane: Joi.string().allow(""),

      page: OrderModel.Page(),

      items: Joi.array().items(OrderModel.PlatformOrderItems()),

      total_count: Joi.number(),

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
      key: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.Options()),

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

      meta: Joi.any(),

      reason: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      status: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

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
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static OmsReports() {
    return Joi.object({
      report_requested_at: Joi.string().allow("").allow(null),

      request_details: Joi.any(),

      report_name: Joi.string().allow(""),

      report_created_at: Joi.string().allow("").allow(null),

      s3_key: Joi.string().allow(""),

      report_id: Joi.string().allow(""),

      report_type: Joi.string().allow(""),

      status: Joi.string().allow(""),

      display_name: Joi.string().allow(""),
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

      type: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()),

      success: Joi.boolean(),

      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

      trace_id: Joi.string().allow(""),

      identifier: Joi.string().allow(""),
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
      company_id: Joi.string().allow(""),

      data: Joi.any(),

      store_name: Joi.string().allow(""),

      do_invoice_label_generated: Joi.boolean().required(),

      store_id: Joi.string().allow(""),

      batch_id: Joi.string().allow("").required(),

      store_code: Joi.string().allow(""),

      label: Joi.any(),

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
      url: Joi.string().allow(""),

      expiry: Joi.number(),
    });
  }

  static FileResponse() {
    return Joi.object({
      content_type: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      operation: Joi.string().allow(""),

      cdn: OrderModel.URL(),

      file_name: Joi.string().allow(""),

      method: Joi.string().allow(""),

      namespace: Joi.string().allow(""),

      size: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      upload: OrderModel.FileUploadResponse(),
    });
  }

  static bulkListingData() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      excel_url: Joi.string().allow(""),

      batch_id: Joi.string().allow(""),

      failed_shipments: Joi.array().items(Joi.any()),

      successful: Joi.number(),

      id: Joi.string().allow(""),

      successful_shipments: Joi.array().items(Joi.any()),

      company_id: Joi.number(),

      store_id: Joi.number(),

      store_code: Joi.string().allow(""),

      status: Joi.string().allow(""),

      processing: Joi.number(),

      failed: Joi.number(),

      total: Joi.number(),

      file_name: Joi.string().allow(""),

      user_name: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      total: Joi.number(),

      current: Joi.number(),

      type: Joi.string().allow(""),

      has_previous: Joi.boolean(),

      size: Joi.number(),

      has_next: Joi.boolean(),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      error: Joi.string().allow(""),

      data: Joi.array().items(OrderModel.bulkListingData()),

      success: Joi.boolean(),

      page: OrderModel.BulkListingPage(),
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
      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.string().allow(""),

      total_shipments_count: Joi.number(),

      failed_shipments_count: Joi.number(),

      batch_id: Joi.string().allow(""),

      successful_shipments_count: Joi.number(),

      processing_shipments_count: Joi.number(),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      success: Joi.string().allow(""),

      error: Joi.array().items(Joi.string().allow("")),

      failed_records: Joi.array().items(Joi.string().allow("")),

      uploaded_on: Joi.string().allow(""),

      message: Joi.string().allow(""),

      uploaded_by: Joi.string().allow(""),

      status: Joi.boolean(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      po_tax_amount: Joi.number(),

      total_gst_percentage: Joi.number(),

      po_line_amount: Joi.number(),

      partial_can_ret: Joi.boolean(),

      item_base_price: Joi.number(),

      docker_number: Joi.string().allow(""),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }

  static EInvoicePortalDetails() {
    return Joi.object({
      user: Joi.string().allow(""),

      username: Joi.string().allow(""),

      password: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      verified: Joi.boolean().required(),

      legal_name: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

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
      user: Joi.string().allow(""),

      username: Joi.string().allow(""),

      enabled: Joi.boolean().required(),

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
      product_return_config: Joi.any(),

      stage: Joi.string().allow("").required(),

      gst_number: Joi.string().allow(""),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      timing: Joi.array().items(Joi.any()),

      ewaybill_portal_details: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      documents: OrderModel.StoreDocuments(),

      additional_contact_details: Joi.any(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      display_name: Joi.string().allow("").required(),
    });
  }

  static StoreAddress() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      contact_person: Joi.string().allow("").required(),

      phone: Joi.string().allow("").allow(null).required(),

      state: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow("").required(),

      address_category: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      longitude: Joi.number().required(),

      address2: Joi.string().allow(""),

      updated_at: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      area: Joi.string().allow(""),

      latitude: Joi.number().required(),

      version: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),
    });
  }

  static Store() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      meta: OrderModel.StoreMeta().required(),

      is_active: Joi.boolean(),

      created_at: Joi.string().allow("").required(),

      parent_store_id: Joi.number(),

      mall_name: Joi.string().allow("").allow(null),

      contact_person: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      fulfillment_channel: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      store_address_json: OrderModel.StoreAddress(),

      name: Joi.string().allow("").required(),

      store_email: Joi.string().allow("").required(),

      is_enabled_for_recon: Joi.boolean(),

      store_active_from: Joi.string().allow("").allow(null),

      packaging_material_count: Joi.number(),

      pincode: Joi.string().allow("").required(),

      alohomora_user_id: Joi.number(),

      longitude: Joi.number().required(),

      address2: Joi.string().allow(""),

      updated_at: Joi.string().allow("").allow(null),

      is_archived: Joi.boolean(),

      city: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      vat_no: Joi.string().allow("").allow(null),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      latitude: Joi.number().required(),

      brand_id: Joi.any(),

      code: Joi.string().allow(""),

      order_integration_id: Joi.string().allow(""),

      location_type: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      mall_area: Joi.string().allow("").allow(null),

      s_id: Joi.string().allow("").required(),

      login_username: Joi.string().allow("").required(),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      unit: Joi.string().allow(""),

      time: Joi.number(),

      returnable: Joi.boolean(),
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
      _id: Joi.string().allow("").required(),

      esp_modified: Joi.any(),

      code: Joi.string().allow(""),

      raw_meta: Joi.any(),

      dimensions: OrderModel.Dimensions(),

      a_set: Joi.any().allow(null),

      return_config: OrderModel.ReturnConfig(),

      size: Joi.string().allow("").required(),

      identifiers: OrderModel.Identifier().required(),

      uid: Joi.string().allow("").required(),

      child_details: Joi.any().allow(null),

      is_set: Joi.boolean(),

      seller_identifier: Joi.string().allow("").required(),

      weight: OrderModel.Weight(),
    });
  }

  static Brand() {
    return Joi.object({
      credit_note_allowed: Joi.boolean(),

      brand_id: Joi.number().required(),

      start_date: Joi.string().allow("").allow(null),

      brand_name: Joi.string().allow("").required(),

      script_last_ran: Joi.string().allow("").allow(null),

      logo: Joi.string().allow(""),

      credit_note_expiry_days: Joi.number().allow(null),

      company: Joi.string().allow("").required(),

      is_virtual_invoice: Joi.boolean().allow(null),

      modified_on: Joi.number(),

      created_on: Joi.number(),

      invoice_prefix: Joi.string().allow("").allow(null),

      pickup_location: Joi.string().allow("").allow(null),
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

  static BagReturnableCancelableStatus() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      gst_fee: Joi.number().required(),

      sgst_tax_percentage: Joi.number().required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      is_default_hsn_code: Joi.boolean(),

      tax_collected_at_source: Joi.number().required(),

      gstin_code: Joi.string().allow("").allow(null),

      hsn_code_id: Joi.string().allow("").required(),

      gst_tag: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      brand_calculated_amount: Joi.number().required(),

      igst_gst_fee: Joi.string().allow("").required(),

      gst_tax_percentage: Joi.number().required(),

      cgst_tax_percentage: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      igst_tax_percentage: Joi.number().required(),
    });
  }

  static Attributes() {
    return Joi.object({
      brand_name: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      primary_material: Joi.string().allow(""),

      essential: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),

      name: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      meta: Joi.any(),

      department_id: Joi.number(),

      webstore_product_url: Joi.string().allow("").allow(null),

      l2_category: Joi.array().items(Joi.string().allow("")),

      brand: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      branch_url: Joi.string().allow("").allow(null),

      slug_key: Joi.string().allow("").required(),

      gender: Joi.string().allow("").allow(null),

      l1_category_id: Joi.number(),

      l3_category: Joi.number(),

      l2_category_id: Joi.number(),

      item_id: Joi.number().required(),

      l3_category_name: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      image: Joi.array().items(Joi.string().allow("")).required(),

      size: Joi.string().allow("").required(),

      can_return: Joi.boolean(),

      color: Joi.string().allow("").allow(null),

      l1_category: Joi.array().items(Joi.string().allow("")),

      attributes: OrderModel.Attributes().required(),

      last_updated_at: Joi.string().allow(""),

      brand_id: Joi.number().required(),

      code: Joi.string().allow(""),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      loyalty_discount: Joi.number(),

      employee_discount: Joi.number(),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      meta: OrderModel.BagMeta(),

      affiliate_details: OrderModel.AffiliateDetails(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      original_bag_list: Joi.array().items(Joi.number()),

      ordering_store: OrderModel.Store(),

      parent_promo_bags: Joi.any(),

      article: OrderModel.Article().required(),

      current_status: OrderModel.BagStatusHistory().required(),

      brand: OrderModel.Brand().required(),

      line_number: Joi.number(),

      bag_status_history: OrderModel.BagStatusHistory(),

      journey_type: Joi.string().allow("").required(),

      qc_required: Joi.any(),

      reasons: Joi.array().items(Joi.any()),

      shipment_id: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      seller_identifier: Joi.string().allow(""),

      b_id: Joi.number().required(),

      dates: OrderModel.Dates(),

      entity_type: Joi.string().allow(""),

      bag_update_time: Joi.number(),

      no_of_bags_order: Joi.number(),

      article_details: OrderModel.ArticleDetails(),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      b_type: Joi.string().allow(""),

      restore_coupon: Joi.boolean(),

      gst_details: OrderModel.BagGSTDetails().required(),

      order_integration_id: Joi.string().allow("").allow(null),

      applied_promos: Joi.array().items(Joi.any()),

      item: OrderModel.Item().required(),

      operational_status: Joi.string().allow(""),

      prices: OrderModel.Prices().required(),

      identifier: Joi.string().allow(""),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      quantity: Joi.number(),

      restore_promos: Joi.any(),

      display_name: Joi.string().allow(""),
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

      page_type: Joi.string().allow("").required(),

      has_next: Joi.boolean().required(),

      item_total: Joi.number().required(),
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

      invoice_receipt: Joi.string().allow(""),

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
      error: Joi.string().allow(""),

      message: Joi.string().allow(""),

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
      error_trace: Joi.string().allow(""),

      message: Joi.string().allow("").required(),

      status: Joi.number().required(),
    });
  }

  static StoreReassign() {
    return Joi.object({
      bag_id: Joi.number().allow(null),

      set_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      affiliate_order_id: Joi.string().allow("").allow(null),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      affiliate_id: Joi.string().allow("").allow(null),

      fynd_order_id: Joi.string().allow("").allow(null),

      mongo_article_id: Joi.string().allow("").allow(null),

      reason_ids: Joi.array().items(Joi.number()),

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
      affiliate_order_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),

      affiliate_bag_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),
    });
  }

  static UpdateShipmentLockPayload() {
    return Joi.object({
      entity_type: Joi.string().allow("").required(),

      action_type: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

      entities: Joi.array().items(OrderModel.Entities()).required(),
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

  static OriginalFilter() {
    return Joi.object({
      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),
    });
  }

  static CheckResponse() {
    return Joi.object({
      bags: Joi.array().items(OrderModel.Bags()),

      is_bag_locked: Joi.boolean(),

      affiliate_shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      lock_status: Joi.boolean().allow(null),

      original_filter: OrderModel.OriginalFilter(),

      is_shipment_locked: Joi.boolean(),
    });
  }

  static UpdateShipmentLockResponse() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),

      check_response: Joi.array().items(OrderModel.CheckResponse()),
    });
  }

  static AnnouncementResponse() {
    return Joi.object({
      created_at: Joi.string().allow(""),

      platform_name: Joi.string().allow(""),

      id: Joi.number().required(),

      to_datetime: Joi.string().allow(""),

      title: Joi.string().allow(""),

      platform_id: Joi.string().allow(""),

      description: Joi.string().allow(""),

      from_datetime: Joi.string().allow(""),

      company_id: Joi.number(),

      logo_url: Joi.string().allow(""),
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

  static Products() {
    return Joi.object({
      quantity: Joi.number(),

      line_number: Joi.number(),

      identifier: Joi.string().allow(""),
    });
  }

  static ShipmentsRequest() {
    return Joi.object({
      data_updates: OrderModel.DataUpdates(),

      reasons: OrderModel.ReasonsData(),

      products: Joi.array().items(OrderModel.Products()),

      identifier: Joi.string().allow("").required(),
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
      lock_after_transition: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),

      force_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      task: Joi.boolean(),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      final_state: Joi.any(),

      message: Joi.string().allow(""),

      stack_trace: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.number(),

      code: Joi.string().allow(""),

      exception: Joi.string().allow(""),

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

  static AffiliateInventoryPaymentConfig() {
    return Joi.object({
      source: Joi.string().allow(""),

      mode_of_payment: Joi.string().allow(""),
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

  static AffiliateInventoryConfig() {
    return Joi.object({
      payment: OrderModel.AffiliateInventoryPaymentConfig(),

      order: OrderModel.AffiliateInventoryOrderConfig(),

      inventory: OrderModel.AffiliateInventoryStoreConfig(),

      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

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
      created_at: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      token: Joi.string().allow("").required(),

      owner: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

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
      id: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),

      config: OrderModel.AffiliateConfig(),
    });
  }

  static AffiliateStoreIdMapping() {
    return Joi.object({
      marketplace_store_id: Joi.string().allow("").required(),

      store_id: Joi.number().required(),
    });
  }

  static OrderConfig() {
    return Joi.object({
      create_user: Joi.boolean(),

      affiliate: OrderModel.Affiliate().required(),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      article_lookup: Joi.string().allow(""),

      store_lookup: Joi.string().allow(""),

      bag_end_state: Joi.string().allow(""),
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
      fynd_store_id: Joi.string().allow("").required(),

      delivery_charge: Joi.number().required(),

      item_id: Joi.number().required(),

      item_size: Joi.string().allow("").required(),

      affiliate_meta: Joi.any().required(),

      price_effective: Joi.number().required(),

      avl_qty: Joi.number().required(),

      price_marked: Joi.number().required(),

      identifier: Joi.any().required(),

      seller_identifier: Joi.string().allow("").required(),

      quantity: Joi.number().required(),

      modified_on: Joi.string().allow("").required(),

      store_id: Joi.number().required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      sku: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      unit_price: Joi.number().required(),

      transfer_price: Joi.number().required(),

      discount: Joi.number().required(),

      company_id: Joi.number().required(),
    });
  }

  static OrderUser() {
    return Joi.object({
      address2: Joi.string().allow("").allow(null),

      state: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      mobile: Joi.number().required(),

      address1: Joi.string().allow("").allow(null),

      first_name: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),
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

  static ArticleDetails1() {
    return Joi.object({
      attributes: Joi.any().required(),

      category: Joi.any().required(),

      dimension: Joi.any().required(),

      weight: Joi.any().required(),

      brand_id: Joi.number().required(),

      quantity: Joi.number().required(),

      _id: Joi.string().allow("").required(),
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

      affiliate_shipment_id: Joi.string().allow("").required(),

      shipments: Joi.number().required(),

      dp_id: Joi.number().allow(null),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      fulfillment_id: Joi.number().required(),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      journey: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      location_details: OrderModel.LocationDetails(),

      source: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),

      identifier: Joi.string().allow("").required(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      action: Joi.string().allow("").required(),
    });
  }

  static ShipmentData() {
    return Joi.object({
      shipment_data: OrderModel.ShipmentConfig().required(),
    });
  }

  static OrderInfo() {
    return Joi.object({
      coupon: Joi.string().allow("").allow(null),

      order_value: Joi.number().required(),

      payment_mode: Joi.string().allow("").required(),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      billing_address: OrderModel.OrderUser().required(),

      payment: Joi.any(),

      affiliate_order_id: Joi.string().allow(""),

      shipping_address: OrderModel.OrderUser().required(),

      cod_charges: Joi.number().required(),

      items: Joi.any().required(),

      order_priority: OrderModel.OrderPriority(),

      user: OrderModel.UserData().required(),

      delivery_charges: Joi.number().required(),

      discount: Joi.number().required(),

      shipment: OrderModel.ShipmentData(),
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
      id: Joi.number().required(),

      description: Joi.string().allow("").required(),

      display_text: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),
    });
  }

  static GetActionsResponse() {
    return Joi.object({
      permissions: OrderModel.ActionInfo().required(),
    });
  }

  static HistoryDict() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      bag_id: Joi.number(),

      l2_detail: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      ticket_url: Joi.string().allow(""),

      user: Joi.string().allow("").required(),

      createdat: Joi.string().allow("").required(),

      ticket_id: Joi.string().allow(""),

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

      payment_mode: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      phone_number: Joi.number().required(),

      order_id: Joi.string().allow("").required(),

      shipment_id: Joi.number().required(),

      customer_name: Joi.string().allow("").required(),
    });
  }

  static SendSmsPayload() {
    return Joi.object({
      data: OrderModel.SmsDataPayload(),

      bag_id: Joi.number().required(),

      slug: Joi.string().allow("").required(),
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
      remarks: Joi.string().allow(""),

      meta: OrderModel.Meta1().required(),

      id: Joi.number().required(),

      status: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.number()),
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
      dp_id: Joi.number().required(),

      order_type: Joi.string().allow("").required(),

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

  static TaxInfo() {
    return Joi.object({
      gstin: Joi.string().allow(""),

      b2b_gstin_number: Joi.string().allow(""),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      gender: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      shipping_type: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      primary_mobile_number: Joi.string().allow("").required(),

      customer_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      title: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      geo_location: Joi.any(),

      slot: Joi.array().items(Joi.any()),

      state_code: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      dispatch_by_date: Joi.string().allow(""),

      dispatch_after_date: Joi.string().allow(""),

      customer_pickup_slot: Joi.any(),

      confirm_by_date: Joi.string().allow(""),

      pack_by_date: Joi.string().allow(""),

      dp_pickup_slot: Joi.any(),
    });
  }

  static Tax() {
    return Joi.object({
      breakup: Joi.array().items(Joi.any()),

      name: Joi.string().allow("").required(),

      amount: Joi.any().required(),

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
      external_line_id: Joi.string().allow(""),

      meta: Joi.any(),

      seller_identifier: Joi.string().allow("").required(),

      custom_messasge: Joi.string().allow(""),

      quantity: Joi.number(),

      charges: Joi.array().items(OrderModel.Charge()),
    });
  }

  static Shipment() {
    return Joi.object({
      external_shipment_id: Joi.string().allow(""),

      meta: Joi.any(),

      location_id: Joi.number().required(),

      processing_dates: OrderModel.ProcessingDates(),

      priority: Joi.number(),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),
    });
  }

  static BillingInfo() {
    return Joi.object({
      gender: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      floor_no: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      alternate_mobile_number: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      primary_mobile_number: Joi.string().allow("").required(),

      customer_code: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      title: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      amount: Joi.number().required(),

      meta: Joi.any(),

      collect_by: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      mode: Joi.string().allow("").required(),

      transaction_data: Joi.any(),

      refund_by: Joi.string().allow("").required(),
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
      external_creation_date: Joi.string().allow(""),

      tax_info: OrderModel.TaxInfo(),

      meta: Joi.any(),

      shipping_info: OrderModel.ShippingInfo().required(),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      external_order_id: Joi.string().allow(""),

      currency_info: Joi.any(),

      billing_info: OrderModel.BillingInfo().required(),

      charges: Joi.array().items(OrderModel.Charge()),

      payment_info: OrderModel.PaymentInfo().required(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      stack_trace: Joi.string().allow("").allow(null),

      info: Joi.any(),

      meta: Joi.string().allow("").allow(null),

      status: Joi.number().required(),

      code: Joi.string().allow("").allow(null),

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
      collect_by: Joi.string().allow(""),

      refund_by: Joi.string().allow(""),

      mode: Joi.string().allow(""),
    });
  }

  static CreateChannelPaymentInfo() {
    return Joi.object({
      payment_methods: Joi.array().items(OrderModel.PaymentMethods()),

      source: Joi.string().allow(""),

      mode_of_payment: Joi.string().allow(""),
    });
  }

  static CreateChannelConfig() {
    return Joi.object({
      lock_states: Joi.array().items(Joi.string().allow("")),

      dp_configuration: OrderModel.DpConfiguration(),

      shipment_assignment: Joi.string().allow(""),

      location_reassignment: Joi.boolean(),

      payment_info: OrderModel.CreateChannelPaymentInfo(),

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
      is_inserted: Joi.boolean(),

      acknowledged: Joi.boolean(),

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

      mobile: Joi.number().required(),

      start_date: Joi.string().allow("").required(),

      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),
    });
  }
}
module.exports = OrderModel;
