const Joi = require("joi");

class OrderModel {
  static ShipmentStatus() {
    return Joi.object({
      hex_code: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      name: Joi.string().allow(""),

      avis_user_id: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      gender: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      email: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      uid: Joi.number(),
    });
  }

  static Prices() {
    return Joi.object({
      cod_charges: Joi.number(),

      discount: Joi.number(),

      price_effective: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      refund_credit: Joi.number(),

      tax_collected_at_source: Joi.number(),

      coupon_value: Joi.number(),

      fynd_credits: Joi.number(),

      value_of_good: Joi.number(),

      promotion_effective_discount: Joi.number(),

      price_marked: Joi.number(),

      cashback_applied: Joi.number(),

      delivery_charge: Joi.number(),

      transfer_price: Joi.number(),

      cashback: Joi.number(),

      refund_amount: Joi.number(),

      amount_paid: Joi.number(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      department_id: Joi.number(),

      name: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      image: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow("").allow(null),

      l3_category: Joi.number(),

      images: Joi.array().items(Joi.string().allow("")),

      l1_category: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow(""),

      can_return: Joi.boolean(),

      size: Joi.string().allow(""),

      l3_category_name: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      tax_collected_at_source: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      value_of_good: Joi.number().required(),

      gst_fee: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),
    });
  }

  static BagUnit() {
    return Joi.object({
      can_cancel: Joi.boolean(),

      bag_id: Joi.number().required(),

      total_shipment_bags: Joi.number().required(),

      ordering_channel: Joi.string().allow("").required(),

      item: OrderModel.PlatformItem(),

      can_return: Joi.boolean(),

      prices: OrderModel.Prices(),

      gst: OrderModel.GSTDetailsData(),

      item_quantity: Joi.number().required(),

      shipment_id: Joi.string().allow("").required(),

      status: Joi.any().required(),
    });
  }

  static PaymentModeInfo() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),
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
      sla: Joi.any(),

      shipment_status: OrderModel.ShipmentStatus(),

      user: OrderModel.UserDataInfo(),

      prices: OrderModel.Prices(),

      shipment_created_at: Joi.string().allow("").required(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      total_bags_count: Joi.number().required(),

      created_at: Joi.string().allow("").required(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      payment_methods: Joi.any(),

      fulfilling_centre: Joi.string().allow("").required(),

      shipment_id: Joi.string().allow(""),

      total_shipments_in_order: Joi.number().required(),

      id: Joi.string().allow("").required(),

      application: Joi.any(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      channel: Joi.any(),
    });
  }

  static FilterInfoOption() {
    return Joi.object({
      text: Joi.string().allow("").required(),

      name: Joi.string().allow(""),

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
      page: Joi.any(),

      items: Joi.array().items(OrderModel.ShipmentItem()),

      applied_filters: Joi.any(),

      filters: Joi.array().items(OrderModel.FiltersInfo()),
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

      state: Joi.string().allow("").required(),

      ordering_store_id: Joi.number().required(),

      country: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      city: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      logo: Joi.string().allow(""),

      source: Joi.string().allow(""),

      mode: Joi.string().allow(""),
    });
  }

  static Dimensions() {
    return Joi.object({
      width: Joi.number(),

      is_default: Joi.boolean(),

      height: Joi.number(),

      unit: Joi.string().allow(""),

      length: Joi.number(),
    });
  }

  static Meta() {
    return Joi.object({
      dimension: OrderModel.Dimensions(),
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
      address: Joi.any(),

      company_cin: Joi.string().allow(""),

      company_id: Joi.number(),

      company_name: Joi.string().allow(""),

      company_gst: Joi.string().allow(""),

      company_contact: OrderModel.ContactDetails(),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      bag_list: Joi.array().items(Joi.string().allow("")),

      shipment_id: Joi.string().allow(""),

      id: Joi.number(),

      created_at: Joi.string().allow("").allow(null),

      status: Joi.string().allow(""),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      employee_discount: Joi.number(),

      size_level_total_qty: Joi.number().allow(null),

      box_type: Joi.string().allow("").allow(null),

      channel_shipment_id: Joi.string().allow("").allow(null),

      quantity: Joi.number(),

      order_item_id: Joi.string().allow(""),

      channel_order_id: Joi.string().allow("").allow(null),

      coupon_code: Joi.string().allow("").allow(null),

      due_date: Joi.string().allow("").allow(null),

      is_priority: Joi.boolean(),

      loyalty_discount: Joi.number(),
    });
  }

  static PDFLinks() {
    return Joi.object({
      label_a4: Joi.string().allow(""),

      label: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),

      b2b: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      label_type: Joi.string().allow("").required(),

      invoice_a4: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      delivery_challan_a4: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),

      invoice: Joi.string().allow(""),
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

  static BuyerDetails() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address: Joi.string().allow("").allow(null).required(),

      pincode: Joi.number().required(),

      ajio_site_id: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      gstin: Joi.string().allow("").required(),
    });
  }

  static Formatted() {
    return Joi.object({
      f_min: Joi.string().allow(""),

      f_max: Joi.string().allow(""),
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

  static ShipmentMeta() {
    return Joi.object({
      forward_affiliate_order_id: Joi.string().allow(""),

      return_details: Joi.any(),

      ewaybill_info: Joi.any().allow(null),

      timestamp: OrderModel.ShipmentTimeStamp(),

      return_store_node: Joi.number(),

      marketplace_store_id: Joi.string().allow(""),

      debug_info: OrderModel.DebugInfo(),

      shipment_volumetric_weight: Joi.number(),

      return_affiliate_shipment_id: Joi.string().allow(""),

      packaging_name: Joi.string().allow(""),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      shipment_weight: Joi.number(),

      store_invoice_updated_date: Joi.string().allow(""),

      return_affiliate_order_id: Joi.string().allow(""),

      dp_sort_key: Joi.string().allow(""),

      b2c_buyer_details: Joi.any().allow(null),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      due_date: Joi.string().allow(""),

      formatted: OrderModel.Formatted(),

      einvoice_info: OrderModel.EinvoiceInfo(),

      return_awb_number: Joi.string().allow(""),

      dp_name: Joi.string().allow(""),

      external: Joi.any(),

      lock_data: OrderModel.LockData(),

      same_store_available: Joi.boolean().required(),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      weight: Joi.number().required(),

      po_number: Joi.string().allow(""),

      order_type: Joi.string().allow("").allow(null),

      dp_options: Joi.any(),

      bag_weight: Joi.any(),

      dp_id: Joi.string().allow("").allow(null),

      awb_number: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      assign_dp_from_sb: Joi.boolean(),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),

      company_affiliate_tag: Joi.string().allow(""),

      affiliate_store_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      pdf_links: OrderModel.PDFLinks(),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow("").required(),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      ad_id: Joi.string().allow(""),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      area: Joi.string().allow(""),

      phone: Joi.string().allow("").required(),

      address1: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow(""),
    });
  }

  static TrackingList() {
    return Joi.object({
      is_current: Joi.boolean(),

      text: Joi.string().allow("").required(),

      time: Joi.string().allow(""),

      is_passed: Joi.boolean(),

      status: Joi.string().allow("").required(),
    });
  }

  static InvoiceInfo() {
    return Joi.object({
      invoice_url: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),

      credit_note_id: Joi.string().allow(""),

      label_url: Joi.string().allow(""),

      store_invoice_id: Joi.string().allow(""),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      cod_charges: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),

      ordering_channel: Joi.string().allow(""),

      source: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow("").required(),

      order_date: Joi.string().allow(""),

      order_value: Joi.string().allow(""),

      tax_details: Joi.any(),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      contact_person: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      city: Joi.string().allow("").required(),

      id: Joi.number().required(),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      is_active: Joi.boolean(),

      name: Joi.string().allow("").required(),

      notify_customer: Joi.boolean(),

      state_type: Joi.string().allow("").required(),

      app_state_name: Joi.string().allow(""),

      bs_id: Joi.number().required(),

      display_name: Joi.string().allow("").required(),

      journey_type: Joi.string().allow("").required(),

      app_display_name: Joi.string().allow(""),

      app_facing: Joi.boolean(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      state_id: Joi.number(),

      shipment_id: Joi.string().allow(""),

      state_type: Joi.string().allow(""),

      bag_id: Joi.number(),

      updated_at: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      reasons: Joi.array().items(Joi.any()),

      bsh_id: Joi.number(),

      display_name: Joi.string().allow(""),

      store_id: Joi.number(),

      delivery_awb_number: Joi.string().allow("").allow(null),

      bag_state_mapper: OrderModel.BagStateMapper(),

      app_display_name: Joi.string().allow(""),

      delivery_partner_id: Joi.number().allow(null),

      created_at: Joi.string().allow(""),

      status: Joi.string().allow("").required(),

      forward: Joi.boolean().allow(null),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      country: Joi.string().allow(""),

      name: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      track_url: Joi.string().allow("").allow(null),

      eway_bill_id: Joi.string().allow("").allow(null),

      id: Joi.number(),

      gst_tag: Joi.string().allow(""),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      logo: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      id: Joi.number().required(),

      company: Joi.string().allow("").allow(null).required(),
    });
  }

  static BagGST() {
    return Joi.object({
      brand_calculated_amount: Joi.number(),

      value_of_good: Joi.number(),

      gst_tax_percentage: Joi.number(),

      is_default_hsn_code: Joi.boolean(),

      hsn_code: Joi.string().allow(""),

      gst_fee: Joi.number(),

      gstin_code: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      country: Joi.string().allow(""),

      state: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      area: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      email: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      version: Joi.string().allow(""),

      latitude: Joi.number(),

      created_at: Joi.string().allow(""),

      longitude: Joi.number(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      state_id: Joi.number(),

      state_type: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      bag_id: Joi.number(),

      kafka_sync: Joi.boolean(),

      updated_at: Joi.string().allow(""),

      store_id: Joi.number(),

      delivery_awb_number: Joi.string().allow(""),

      current_status_id: Joi.number().required(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      delivery_partner_id: Joi.number(),

      created_at: Joi.string().allow("").allow(null),

      status: Joi.string().allow(""),
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
      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      article_quantity: Joi.number(),

      mrp_promotion: Joi.boolean(),

      promo_id: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),

      amount: Joi.number(),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      promotion_type: Joi.string().allow(""),
    });
  }

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      tax_collected_at_source: Joi.number(),

      coupon_value: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      transfer_price: Joi.number().required(),

      gst_fee: Joi.number().required(),

      amount_paid: Joi.number().required(),

      price_effective: Joi.number().required(),

      value_of_good: Joi.number().required(),

      size: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

      item_name: Joi.string().allow("").required(),

      added_to_fynd_cash: Joi.boolean().required(),

      amount_paid_roundoff: Joi.number(),

      price_marked: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      identifiers: OrderModel.Identifier().required(),

      coupon_effective_discount: Joi.number().required(),

      total_units: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      cod_charges: Joi.number().required(),

      refund_credit: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      fynd_credits: Joi.number().required(),

      promotion_effective_discount: Joi.number().required(),

      cashback: Joi.number().required(),

      discount: Joi.number().required(),
    });
  }

  static BagConfigs() {
    return Joi.object({
      can_be_cancelled: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      identifiers: Joi.any(),

      return_config: Joi.any(),

      uid: Joi.string().allow(""),
    });
  }

  static OrderBags() {
    return Joi.object({
      can_return: Joi.boolean(),

      display_name: Joi.string().allow(""),

      brand: OrderModel.OrderBrandName(),

      gst_details: OrderModel.BagGST(),

      line_number: Joi.number(),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      bag_id: Joi.number().required(),

      can_cancel: Joi.boolean(),

      quantity: Joi.number(),

      identifier: Joi.string().allow(""),

      item: OrderModel.PlatformItem(),

      current_status: OrderModel.CurrentStatus(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      seller_identifier: Joi.string().allow(""),

      parent_promo_bags: Joi.any(),

      financial_breakup: OrderModel.FinancialBreakup(),

      entity_type: Joi.string().allow(""),

      bag_configs: OrderModel.BagConfigs(),

      prices: OrderModel.Prices(),

      article: OrderModel.OrderBagArticle(),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      ordering_store: OrderModel.OrderingStoreDetails(),

      payments: OrderModel.ShipmentPayments(),

      meta: OrderModel.Meta(),

      gst_details: OrderModel.GSTDetailsData(),

      coupon: Joi.any(),

      operational_status: Joi.string().allow(""),

      company_details: OrderModel.CompanyDetails(),

      status: OrderModel.ShipmentStatusData(),

      affiliate_details: OrderModel.AffiliateDetails(),

      shipment_quantity: Joi.number(),

      priority_text: Joi.string().allow("").allow(null),

      invoice_id: Joi.string().allow(""),

      shipment_status: Joi.string().allow(""),

      delivery_details: OrderModel.UserDetailsData(),

      user_agent: Joi.string().allow(""),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      picked_date: Joi.string().allow(""),

      user: OrderModel.UserDataInfo(),

      fulfilment_priority: Joi.number(),

      invoice: OrderModel.InvoiceInfo(),

      order: OrderModel.OrderDetailsData(),

      custom_meta: Joi.array().items(Joi.any()),

      vertical: Joi.string().allow("").allow(null),

      billing_details: OrderModel.UserDetailsData(),

      total_items: Joi.number(),

      enable_dp_tracking: Joi.boolean(),

      payment_methods: Joi.any(),

      total_bags: Joi.number(),

      shipment_id: Joi.string().allow("").required(),

      fulfilling_store: OrderModel.FulfillingStore(),

      platform_logo: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      dp_details: OrderModel.DPDetailsData(),

      prices: OrderModel.Prices(),

      bags: Joi.array().items(OrderModel.OrderBags()),

      lock_status: Joi.boolean(),

      journey_type: Joi.string().allow(""),

      delivery_slot: Joi.any(),

      packaging_type: Joi.string().allow(""),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      forward_shipment_id: Joi.string().allow(""),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      message: Joi.string().allow(""),

      success: Joi.boolean().required(),
    });
  }

  static BillingStaffDetails() {
    return Joi.object({
      employee_code: Joi.string().allow(""),

      staff_id: Joi.number(),

      user: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),
    });
  }

  static TransactionData() {
    return Joi.object({
      entity: Joi.string().allow(""),

      transaction_id: Joi.string().allow(""),

      terminal_id: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      payment_id: Joi.string().allow(""),

      unique_reference_number: Joi.string().allow(""),

      status: Joi.string().allow(""),

      amount_paid: Joi.string().allow(""),
    });
  }

  static PlatformUserDetails() {
    return Joi.object({
      platform_user_employee_code: Joi.string().allow(""),

      platform_user_id: Joi.string().allow(""),

      platform_user_first_name: Joi.string().allow(""),

      platform_user_last_name: Joi.string().allow(""),
    });
  }

  static OrderMeta() {
    return Joi.object({
      ordering_store: Joi.number(),

      company_logo: Joi.string().allow(""),

      files: Joi.array().items(Joi.any()),

      staff: Joi.any(),

      order_tags: Joi.array().items(Joi.any()),

      mongo_cart_id: Joi.number(),

      comment: Joi.string().allow(""),

      employee_id: Joi.number(),

      billing_staff_details: OrderModel.BillingStaffDetails(),

      order_platform: Joi.string().allow(""),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      customer_note: Joi.string().allow(""),

      extra_meta: Joi.any(),

      order_type: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      cart_id: Joi.number(),

      transaction_data: OrderModel.TransactionData(),

      payment_type: Joi.string().allow(""),

      platform_user_details: OrderModel.PlatformUserDetails(),
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
      prices: OrderModel.Prices(),

      meta: OrderModel.OrderMeta(),

      fynd_order_id: Joi.string().allow("").required(),

      order_date: Joi.string().allow("").required(),

      payment_methods: Joi.any(),

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
      total_items: Joi.number(),

      text: Joi.string().allow(""),

      index: Joi.number(),

      value: Joi.string().allow(""),

      actions: Joi.array().items(Joi.any()),
    });
  }

  static SuperLane() {
    return Joi.object({
      text: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.SubLane()),

      value: Joi.string().allow("").required(),

      total_items: Joi.number(),
    });
  }

  static LaneConfigResponse() {
    return Joi.object({
      super_lanes: Joi.array().items(OrderModel.SuperLane()),
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
      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      order_id: Joi.string().allow(""),

      meta: Joi.any(),

      user_info: OrderModel.UserDataInfo(),

      order_created_time: Joi.string().allow(""),

      total_order_value: Joi.number(),

      order_value: Joi.number(),

      payment_mode: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

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
      total_count: Joi.number(),

      items: Joi.array().items(OrderModel.PlatformOrderItems()),

      lane: Joi.string().allow(""),

      page: OrderModel.Page(),

      message: Joi.string().allow(""),

      success: Joi.boolean(),
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
      updated_time: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      meta: Joi.any(),

      awb: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      status: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),
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
      report_name: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),

      report_id: Joi.string().allow(""),

      s3_key: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      report_created_at: Joi.string().allow("").allow(null),

      request_details: Joi.any(),

      report_type: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      jio_code: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      company_id: Joi.string().allow(""),

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

      value: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      trace_id: Joi.string().allow(""),

      data: Joi.array().items(Joi.any()),

      identifier: Joi.string().allow(""),

      success: Joi.boolean(),

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
      label: Joi.any(),

      data: Joi.any(),

      store_code: Joi.string().allow(""),

      invoice_status: Joi.string().allow(""),

      invoice: Joi.any(),

      store_id: Joi.string().allow(""),

      batch_id: Joi.string().allow("").required(),

      company_id: Joi.string().allow(""),

      do_invoice_label_generated: Joi.boolean().required(),

      store_name: Joi.string().allow(""),
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
      file_name: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      method: Joi.string().allow(""),

      namespace: Joi.string().allow(""),

      cdn: OrderModel.URL(),

      file_path: Joi.string().allow(""),

      size: Joi.number(),

      content_type: Joi.string().allow(""),

      upload: OrderModel.FileUploadResponse(),

      operation: Joi.string().allow(""),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      has_next: Joi.boolean(),

      total: Joi.number(),

      size: Joi.number(),

      type: Joi.string().allow(""),

      has_previous: Joi.boolean(),

      current: Joi.number(),
    });
  }

  static bulkListingData() {
    return Joi.object({
      file_name: Joi.string().allow(""),

      excel_url: Joi.string().allow(""),

      status: Joi.string().allow(""),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      store_name: Joi.string().allow(""),

      successful: Joi.number(),

      id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      successful_shipments: Joi.array().items(Joi.any()),

      user_name: Joi.string().allow(""),

      batch_id: Joi.string().allow(""),

      store_id: Joi.number(),

      uploaded_on: Joi.string().allow(""),

      failed_shipments: Joi.array().items(Joi.any()),

      store_code: Joi.string().allow(""),

      total: Joi.number(),

      company_id: Joi.number(),

      failed: Joi.number(),

      processing: Joi.number(),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      error: Joi.string().allow(""),

      page: OrderModel.BulkListingPage(),

      data: Joi.array().items(OrderModel.bulkListingData()),

      success: Joi.boolean(),
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
      status: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static BulkActionDetailsDataField() {
    return Joi.object({
      total_shipments_count: Joi.number(),

      processing_shipments_count: Joi.number(),

      failed_shipments_count: Joi.number(),

      successful_shipments_count: Joi.number(),

      batch_id: Joi.string().allow(""),

      company_id: Joi.string().allow(""),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      status: Joi.boolean(),

      success: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      uploaded_on: Joi.string().allow(""),

      uploaded_by: Joi.string().allow(""),

      message: Joi.string().allow(""),

      error: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Document() {
    return Joi.object({
      url: Joi.string().allow(""),

      verified: Joi.boolean().required(),

      legal_name: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

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
      enabled: Joi.boolean().required(),

      user: Joi.string().allow(""),

      username: Joi.string().allow(""),

      password: Joi.string().allow(""),
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
      user: Joi.string().allow(""),

      username: Joi.string().allow(""),

      password: Joi.string().allow(""),
    });
  }

  static StoreMeta() {
    return Joi.object({
      documents: OrderModel.StoreDocuments(),

      product_return_config: Joi.any(),

      additional_contact_details: Joi.any(),

      stage: Joi.string().allow("").required(),

      gst_number: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      display_name: Joi.string().allow("").required(),

      timing: Joi.array().items(Joi.any()),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      ewaybill_portal_details: Joi.any(),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),
    });
  }

  static StoreAddress() {
    return Joi.object({
      pincode: Joi.number().required(),

      email: Joi.string().allow(""),

      address_category: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      area: Joi.string().allow(""),

      phone: Joi.string().allow("").allow(null).required(),

      address_type: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      contact_person: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      version: Joi.string().allow(""),

      latitude: Joi.number().required(),

      created_at: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),
    });
  }

  static Store() {
    return Joi.object({
      is_active: Joi.boolean(),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      pincode: Joi.string().allow("").required(),

      mall_name: Joi.string().allow("").allow(null),

      meta: OrderModel.StoreMeta().required(),

      is_enabled_for_recon: Joi.boolean(),

      location_type: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").allow(null),

      phone: Joi.number().required(),

      brand_id: Joi.any(),

      packaging_material_count: Joi.number(),

      vat_no: Joi.string().allow("").allow(null),

      order_integration_id: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      store_address_json: OrderModel.StoreAddress(),

      store_email: Joi.string().allow("").required(),

      login_username: Joi.string().allow("").required(),

      mall_area: Joi.string().allow("").allow(null),

      store_active_from: Joi.string().allow("").allow(null),

      is_archived: Joi.boolean(),

      longitude: Joi.number().required(),

      contact_person: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      parent_store_id: Joi.number(),

      city: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      s_id: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      alohomora_user_id: Joi.number(),

      latitude: Joi.number().required(),

      created_at: Joi.string().allow("").required(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      po_tax_amount: Joi.number(),

      total_gst_percentage: Joi.number(),

      partial_can_ret: Joi.boolean(),

      item_base_price: Joi.number(),

      po_line_amount: Joi.number(),

      docker_number: Joi.string().allow(""),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }

  static Brand() {
    return Joi.object({
      is_virtual_invoice: Joi.boolean().allow(null),

      logo: Joi.string().allow(""),

      created_on: Joi.number(),

      credit_note_expiry_days: Joi.number().allow(null),

      brand_name: Joi.string().allow("").required(),

      brand_id: Joi.number().required(),

      pickup_location: Joi.string().allow("").allow(null),

      modified_on: Joi.number(),

      invoice_prefix: Joi.string().allow("").allow(null),

      start_date: Joi.string().allow("").allow(null),

      credit_note_allowed: Joi.boolean(),

      company: Joi.string().allow("").required(),

      script_last_ran: Joi.string().allow("").allow(null),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      cgst_tax_percentage: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      value_of_good: Joi.number().required(),

      igst_tax_percentage: Joi.number().required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      gst_tax_percentage: Joi.number().required(),

      is_default_hsn_code: Joi.boolean(),

      sgst_tax_percentage: Joi.number().required(),

      igst_gst_fee: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

      gst_fee: Joi.number().required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      gstin_code: Joi.string().allow("").allow(null),

      gst_tag: Joi.string().allow("").required(),
    });
  }

  static Dates() {
    return Joi.object({
      delivery_date: Joi.any(),

      order_created: Joi.string().allow(""),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      can_be_cancelled: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static Attributes() {
    return Joi.object({
      name: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      essential: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      primary_material: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      department_id: Joi.number(),

      branch_url: Joi.string().allow("").allow(null),

      l3_category: Joi.number(),

      last_updated_at: Joi.string().allow(""),

      can_return: Joi.boolean(),

      meta: Joi.any(),

      brand: Joi.string().allow("").required(),

      l2_category_id: Joi.number(),

      l3_category_name: Joi.string().allow(""),

      l1_category_id: Joi.number(),

      slug_key: Joi.string().allow("").required(),

      can_cancel: Joi.boolean(),

      brand_id: Joi.number().required(),

      size: Joi.string().allow("").required(),

      l2_category: Joi.array().items(Joi.string().allow("")),

      attributes: OrderModel.Attributes().required(),

      image: Joi.array().items(Joi.string().allow("")).required(),

      webstore_product_url: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      color: Joi.string().allow("").allow(null),

      l1_category: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow(""),

      gender: Joi.string().allow("").allow(null),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      employee_discount: Joi.number(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow("").required(),

      loyalty_discount: Joi.number(),
    });
  }

  static Weight() {
    return Joi.object({
      is_default: Joi.boolean(),

      unit: Joi.string().allow(""),

      shipping: Joi.number(),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      unit: Joi.string().allow(""),

      time: Joi.number(),

      returnable: Joi.boolean(),
    });
  }

  static Article() {
    return Joi.object({
      seller_identifier: Joi.string().allow("").required(),

      weight: OrderModel.Weight(),

      child_details: Joi.any().allow(null),

      code: Joi.string().allow(""),

      raw_meta: Joi.any(),

      _id: Joi.string().allow("").required(),

      size: Joi.string().allow("").required(),

      esp_modified: Joi.any(),

      a_set: Joi.any().allow(null),

      dimensions: OrderModel.Dimensions(),

      identifiers: OrderModel.Identifier().required(),

      return_config: OrderModel.ReturnConfig(),

      is_set: Joi.boolean(),

      uid: Joi.string().allow("").required(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      tags: Joi.array().items(Joi.string().allow("")),

      ordering_store: OrderModel.Store(),

      original_bag_list: Joi.array().items(Joi.number()),

      meta: OrderModel.BagMeta(),

      brand: OrderModel.Brand().required(),

      display_name: Joi.string().allow(""),

      gst_details: OrderModel.BagGSTDetails().required(),

      b_type: Joi.string().allow(""),

      line_number: Joi.number(),

      operational_status: Joi.string().allow(""),

      dates: OrderModel.Dates(),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      affiliate_details: OrderModel.AffiliateDetails(),

      article_details: OrderModel.ArticleDetails(),

      identifier: Joi.string().allow(""),

      quantity: Joi.number(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      item: OrderModel.Item().required(),

      current_status: OrderModel.BagStatusHistory().required(),

      order_integration_id: Joi.string().allow("").allow(null),

      applied_promos: Joi.array().items(Joi.any()),

      seller_identifier: Joi.string().allow(""),

      reasons: Joi.array().items(Joi.any()),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      parent_promo_bags: Joi.any(),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      shipment_id: Joi.string().allow(""),

      no_of_bags_order: Joi.number(),

      entity_type: Joi.string().allow(""),

      restore_promos: Joi.any(),

      bag_status_history: OrderModel.BagStatusHistory(),

      restore_coupon: Joi.boolean(),

      b_id: Joi.number().required(),

      prices: OrderModel.Prices().required(),

      qc_required: Joi.any(),

      journey_type: Joi.string().allow("").required(),

      article: OrderModel.Article().required(),

      bag_update_time: Joi.number(),
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

      page_type: Joi.string().allow("").required(),

      size: Joi.number().required(),

      item_total: Joi.number().required(),

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

      order_id: Joi.string().allow(""),

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
      message: Joi.string().allow(""),

      status: Joi.number(),

      shipment_id: Joi.string().allow(""),

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
      affiliate_bag_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      reason_ids: Joi.array().items(Joi.number()),

      set_id: Joi.string().allow("").allow(null),

      bag_id: Joi.number().allow(null),

      affiliate_id: Joi.string().allow("").allow(null),

      affiliate_order_id: Joi.string().allow("").allow(null),

      fynd_order_id: Joi.string().allow("").allow(null),

      mongo_article_id: Joi.string().allow("").allow(null),

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
      affiliate_bag_id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),

      affiliate_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),
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
      affiliate_order_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow(""),

      is_locked: Joi.boolean(),

      bag_id: Joi.number(),
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

      affiliate_shipment_id: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.Bags()),

      affiliate_id: Joi.string().allow(""),

      is_shipment_locked: Joi.boolean(),

      is_bag_locked: Joi.boolean(),

      original_filter: OrderModel.OriginalFilter(),

      shipment_id: Joi.string().allow(""),

      lock_status: Joi.boolean().allow(null),
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
      company_id: Joi.number(),

      logo_url: Joi.string().allow(""),

      to_datetime: Joi.string().allow(""),

      from_datetime: Joi.string().allow(""),

      title: Joi.string().allow(""),

      id: Joi.number().required(),

      platform_id: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      platform_name: Joi.string().allow(""),

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

  static Products() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      line_number: Joi.number(),

      quantity: Joi.number(),
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

  static ShipmentsRequest() {
    return Joi.object({
      products: Joi.array().items(OrderModel.Products()),

      reasons: OrderModel.ReasonsData(),

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
      unlock_before_transition: Joi.boolean(),

      task: Joi.boolean(),

      force_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      lock_after_transition: Joi.boolean(),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      status: Joi.number(),

      identifier: Joi.string().allow(""),

      code: Joi.string().allow(""),

      stack_trace: Joi.string().allow(""),

      meta: Joi.any(),

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

  static AffiliateAppConfigMeta() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static AffiliateAppConfig() {
    return Joi.object({
      secret: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      owner: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      id: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      description: Joi.string().allow(""),
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

  static AffiliateInventoryOrderConfig() {
    return Joi.object({
      force_reassignment: Joi.boolean(),
    });
  }

  static AffiliateInventoryConfig() {
    return Joi.object({
      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),

      inventory: OrderModel.AffiliateInventoryStoreConfig(),

      payment: OrderModel.AffiliateInventoryPaymentConfig(),

      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

      order: OrderModel.AffiliateInventoryOrderConfig(),
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

      id: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),
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
      affiliate: OrderModel.Affiliate().required(),

      bag_end_state: Joi.string().allow(""),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      store_lookup: Joi.string().allow(""),

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
      price_marked: Joi.number().required(),

      fynd_store_id: Joi.string().allow("").required(),

      affiliate_meta: Joi.any().required(),

      seller_identifier: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      item_size: Joi.string().allow("").required(),

      transfer_price: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      discount: Joi.number().required(),

      company_id: Joi.number().required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      avl_qty: Joi.number().required(),

      item_id: Joi.number().required(),

      sku: Joi.string().allow("").required(),

      identifier: Joi.any().required(),

      amount_paid: Joi.number().required(),

      _id: Joi.string().allow("").required(),

      unit_price: Joi.number().required(),

      affiliate_store_id: Joi.string().allow("").required(),

      store_id: Joi.number().required(),

      quantity: Joi.number().required(),

      price_effective: Joi.number().required(),

      delivery_charge: Joi.number().required(),
    });
  }

  static OrderUser() {
    return Joi.object({
      address2: Joi.string().allow("").allow(null),

      last_name: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      state: Joi.string().allow("").required(),

      address1: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      mobile: Joi.number().required(),
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
      quantity: Joi.number().required(),

      _id: Joi.string().allow("").required(),

      category: Joi.any().required(),

      brand_id: Joi.number().required(),

      attributes: Joi.any().required(),

      weight: Joi.any().required(),

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
      box_type: Joi.string().allow("").allow(null),

      fulfillment_id: Joi.number().required(),

      meta: Joi.any(),

      shipments: Joi.number().required(),

      dp_id: Joi.number().allow(null),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      affiliate_shipment_id: Joi.string().allow("").required(),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      identifier: Joi.string().allow("").required(),

      source: Joi.string().allow("").required(),

      journey: Joi.string().allow("").required(),

      location_details: OrderModel.LocationDetails(),

      to_pincode: Joi.string().allow("").required(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      action: Joi.string().allow("").required(),

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
      shipping_user: OrderModel.OrderUser(),

      billing_user: OrderModel.OrderUser(),
    });
  }

  static OrderInfo() {
    return Joi.object({
      discount: Joi.number().required(),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      shipping_address: OrderModel.OrderUser().required(),

      delivery_charges: Joi.number().required(),

      coupon: Joi.string().allow("").allow(null),

      payment: Joi.any(),

      order_priority: OrderModel.OrderPriority(),

      items: Joi.any().required(),

      shipment: OrderModel.ShipmentData(),

      cod_charges: Joi.number().required(),

      billing_address: OrderModel.OrderUser().required(),

      payment_mode: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow(""),

      user: OrderModel.UserData().required(),

      order_value: Joi.number().required(),
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
      description: Joi.string().allow("").required(),

      id: Joi.number().required(),

      slug: Joi.string().allow("").required(),

      display_text: Joi.string().allow("").required(),
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

      message: Joi.string().allow("").required(),

      ticket_id: Joi.string().allow(""),

      createdat: Joi.string().allow("").required(),

      l2_detail: Joi.string().allow(""),

      bag_id: Joi.number(),

      ticket_url: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      l1_detail: Joi.string().allow(""),

      user: Joi.string().allow("").required(),
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
      identifier: Joi.string().allow(""),

      line_number: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),
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
      message: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      customer_name: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      payment_mode: Joi.string().allow("").required(),

      phone_number: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),

      shipment_id: Joi.number().required(),
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
      remarks: Joi.string().allow(""),

      status: Joi.string().allow(""),

      meta: OrderModel.Meta1().required(),

      bag_list: Joi.array().items(Joi.number()),

      id: Joi.number().required(),

      shipment_id: Joi.string().allow(""),
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

      errors: Joi.array().items(Joi.string().allow("")),

      order_details: OrderModel.OrderDetails().required(),
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

  static Tax() {
    return Joi.object({
      rate: Joi.number().required(),

      breakup: Joi.array().items(Joi.any()),

      name: Joi.string().allow("").required(),

      amount: Joi.any().required(),
    });
  }

  static Charge() {
    return Joi.object({
      tax: OrderModel.Tax(),

      code: Joi.string().allow(""),

      amount: Joi.any().required(),

      type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      pincode: Joi.string().allow("").required(),

      floor_no: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      geo_location: Joi.any(),

      shipping_type: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      primary_email: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      slot: Joi.array().items(Joi.any()),

      country: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      state_code: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),
    });
  }

  static LineItem() {
    return Joi.object({
      charges: Joi.array().items(OrderModel.Charge()),

      quantity: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      meta: Joi.any(),

      external_line_id: Joi.string().allow(""),

      custom_messasge: Joi.string().allow(""),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      dp_pickup_slot: Joi.any(),

      pack_by_date: Joi.string().allow(""),

      dispatch_by_date: Joi.string().allow(""),

      customer_pickup_slot: Joi.any(),

      dispatch_after_date: Joi.string().allow(""),

      confirm_by_date: Joi.string().allow(""),
    });
  }

  static Shipment() {
    return Joi.object({
      external_shipment_id: Joi.string().allow(""),

      location_id: Joi.number().required(),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),

      priority: Joi.number(),

      meta: Joi.any(),

      processing_dates: OrderModel.ProcessingDates(),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      mode: Joi.string().allow("").required(),

      collect_by: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      meta: Joi.any(),

      transaction_data: Joi.any(),

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

  static BillingInfo() {
    return Joi.object({
      pincode: Joi.string().allow("").required(),

      floor_no: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      primary_email: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      state_code: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),
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
      charges: Joi.array().items(OrderModel.Charge()),

      external_order_id: Joi.string().allow(""),

      shipping_info: OrderModel.ShippingInfo().required(),

      meta: Joi.any(),

      external_creation_date: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      payment_info: OrderModel.PaymentInfo().required(),

      billing_info: OrderModel.BillingInfo().required(),

      tax_info: OrderModel.TaxInfo(),

      currency_info: Joi.any(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      status: Joi.number().required(),

      code: Joi.string().allow("").allow(null),

      request_id: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),

      info: Joi.any(),

      meta: Joi.string().allow("").allow(null),

      exception: Joi.string().allow("").allow(null),
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

      payment_methods: Joi.array().items(OrderModel.PaymentMethods()),

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

      logo_url: Joi.any(),

      payment_info: OrderModel.CreateChannelPaymentInfo(),

      location_reassignment: Joi.boolean(),

      shipment_assignment: Joi.string().allow(""),

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
      is_upserted: Joi.boolean(),

      is_inserted: Joi.boolean(),

      acknowledged: Joi.boolean(),
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
      end_date: Joi.string().allow("").required(),

      start_date: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),
    });
  }
}
module.exports = OrderModel;
