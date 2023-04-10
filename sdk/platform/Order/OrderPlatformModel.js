const Joi = require("joi");

class OrderModel {
  static PlatformItem() {
    return Joi.object({
      color: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      l3_category_name: Joi.string().allow(""),

      can_return: Joi.boolean(),

      department_id: Joi.number(),

      image: Joi.array().items(Joi.string().allow("")),

      images: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      l1_category: Joi.array().items(Joi.string().allow("")),

      can_cancel: Joi.boolean(),

      l3_category: Joi.number(),

      size: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      brand_calculated_amount: Joi.number().required(),

      gst_fee: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number().required(),

      value_of_good: Joi.number().required(),
    });
  }

  static Prices() {
    return Joi.object({
      fynd_credits: Joi.number(),

      cod_charges: Joi.number(),

      refund_amount: Joi.number(),

      cashback: Joi.number(),

      discount: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      transfer_price: Joi.number(),

      delivery_charge: Joi.number(),

      price_effective: Joi.number(),

      refund_credit: Joi.number(),

      coupon_value: Joi.number(),

      cashback_applied: Joi.number(),

      tax_collected_at_source: Joi.number(),

      value_of_good: Joi.number(),

      price_marked: Joi.number(),

      amount_paid: Joi.number(),

      promotion_effective_discount: Joi.number(),
    });
  }

  static BagUnit() {
    return Joi.object({
      status: Joi.any().required(),

      item_quantity: Joi.number().required(),

      total_shipment_bags: Joi.number().required(),

      bag_id: Joi.number().required(),

      item: OrderModel.PlatformItem(),

      shipment_id: Joi.string().allow("").required(),

      can_return: Joi.boolean(),

      can_cancel: Joi.boolean(),

      gst: OrderModel.GSTDetailsData(),

      prices: OrderModel.Prices(),

      ordering_channel: Joi.string().allow("").required(),
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
      code: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      uid: Joi.number(),

      first_name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      avis_user_id: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      name: Joi.string().allow(""),

      email: Joi.string().allow(""),

      gender: Joi.string().allow(""),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      fulfilling_centre: Joi.string().allow("").required(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      shipment_status: OrderModel.ShipmentStatus(),

      shipment_id: Joi.string().allow(""),

      total_shipments_in_order: Joi.number().required(),

      shipment_created_at: Joi.string().allow("").required(),

      channel: Joi.any(),

      sla: Joi.any(),

      payment_methods: Joi.any(),

      total_bags_count: Joi.number().required(),

      application: Joi.any(),

      prices: OrderModel.Prices(),

      created_at: Joi.string().allow("").required(),

      user: OrderModel.UserDataInfo(),

      id: Joi.string().allow("").required(),
    });
  }

  static FilterInfoOption() {
    return Joi.object({
      value: Joi.string().allow(""),

      name: Joi.string().allow(""),

      text: Joi.string().allow("").required(),
    });
  }

  static FiltersInfo() {
    return Joi.object({
      options: Joi.array().items(OrderModel.FilterInfoOption()),

      value: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),
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

  static OrderBagArticle() {
    return Joi.object({
      identifiers: Joi.any(),

      uid: Joi.string().allow(""),

      return_config: Joi.any(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      country: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      city: Joi.string().allow(""),

      area: Joi.string().allow(""),

      version: Joi.string().allow(""),

      latitude: Joi.number(),

      landmark: Joi.string().allow(""),

      longitude: Joi.number(),

      address2: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      email: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      state: Joi.string().allow(""),
    });
  }

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      amount_paid_roundoff: Joi.number(),

      transfer_price: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      gst_fee: Joi.number().required(),

      price_marked: Joi.number().required(),

      amount_paid: Joi.number().required(),

      size: Joi.string().allow("").required(),

      added_to_fynd_cash: Joi.boolean().required(),

      gst_tax_percentage: Joi.number().required(),

      tax_collected_at_source: Joi.number(),

      identifiers: OrderModel.Identifier().required(),

      gst_tag: Joi.string().allow("").required(),

      cashback: Joi.number().required(),

      discount: Joi.number().required(),

      price_effective: Joi.number().required(),

      refund_credit: Joi.number().required(),

      coupon_value: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      promotion_effective_discount: Joi.number().required(),

      fynd_credits: Joi.number().required(),

      cod_charges: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      coupon_effective_discount: Joi.number().required(),

      total_units: Joi.number().required(),

      value_of_good: Joi.number().required(),
    });
  }

  static BagConfigs() {
    return Joi.object({
      allow_force_return: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      company: Joi.string().allow("").allow(null).required(),

      brand_name: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      id: Joi.number().required(),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      app_state_name: Joi.string().allow(""),

      app_display_name: Joi.string().allow(""),

      journey_type: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      state_type: Joi.string().allow("").required(),

      app_facing: Joi.boolean(),

      notify_customer: Joi.boolean(),

      name: Joi.string().allow("").required(),

      bs_id: Joi.number().required(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      updated_at: Joi.string().allow(""),

      status: Joi.string().allow(""),

      delivery_partner_id: Joi.number(),

      current_status_id: Joi.number().required(),

      bag_id: Joi.number(),

      shipment_id: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      delivery_awb_number: Joi.string().allow(""),

      state_type: Joi.string().allow(""),

      bag_state_mapper: OrderModel.BagStateMapper(),

      store_id: Joi.number(),

      state_id: Joi.number(),

      created_at: Joi.string().allow("").allow(null),
    });
  }

  static BagGST() {
    return Joi.object({
      brand_calculated_amount: Joi.number(),

      gst_tax_percentage: Joi.number(),

      gst_fee: Joi.number(),

      gstin_code: Joi.string().allow(""),

      is_default_hsn_code: Joi.boolean(),

      value_of_good: Joi.number(),

      hsn_code: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),
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
      item_criteria: OrderModel.ItemCriterias(),

      cart_conditions: Joi.any(),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      amount: Joi.number(),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      article_quantity: Joi.number(),

      mrp_promotion: Joi.boolean(),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      promotion_type: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      promotion_name: Joi.string().allow(""),
    });
  }

  static OrderBags() {
    return Joi.object({
      line_number: Joi.number(),

      article: OrderModel.OrderBagArticle(),

      quantity: Joi.number(),

      seller_identifier: Joi.string().allow(""),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      item: OrderModel.PlatformItem(),

      can_return: Joi.boolean(),

      financial_breakup: OrderModel.FinancialBreakup(),

      can_cancel: Joi.boolean(),

      parent_promo_bags: Joi.any(),

      bag_configs: OrderModel.BagConfigs(),

      display_name: Joi.string().allow(""),

      brand: OrderModel.OrderBrandName(),

      current_status: OrderModel.CurrentStatus(),

      identifier: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      entity_type: Joi.string().allow(""),

      gst_details: OrderModel.BagGST(),

      bag_id: Joi.number().required(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      status: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      created_at: Joi.string().allow("").allow(null),

      bag_list: Joi.array().items(Joi.string().allow("")),

      id: Joi.number(),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      order_value: Joi.string().allow(""),

      cod_charges: Joi.string().allow(""),

      order_date: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow("").required(),

      source: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      tax_details: Joi.any(),

      ordering_channel: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      channel_shipment_id: Joi.string().allow("").allow(null),

      is_priority: Joi.boolean(),

      box_type: Joi.string().allow("").allow(null),

      quantity: Joi.number(),

      channel_order_id: Joi.string().allow("").allow(null),

      employee_discount: Joi.number(),

      coupon_code: Joi.string().allow("").allow(null),

      order_item_id: Joi.string().allow(""),

      loyalty_discount: Joi.number(),

      size_level_total_qty: Joi.number().allow(null),

      due_date: Joi.string().allow("").allow(null),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      address: Joi.string().allow("").allow(null).required(),

      ajio_site_id: Joi.string().allow(""),

      gstin: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      state: Joi.string().allow("").required(),
    });
  }

  static LockData() {
    return Joi.object({
      mto: Joi.boolean(),

      lock_message: Joi.string().allow(""),

      locked: Joi.boolean(),
    });
  }

  static EinvoiceInfo() {
    return Joi.object({
      invoice: Joi.any(),

      credit_note: Joi.any(),
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

  static ShipmentTimeStamp() {
    return Joi.object({
      t_max: Joi.string().allow(""),

      t_min: Joi.string().allow(""),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      b2b_buyer_details: OrderModel.BuyerDetails(),

      b2c_buyer_details: Joi.any().allow(null),

      packaging_name: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      forward_affiliate_order_id: Joi.string().allow(""),

      return_affiliate_order_id: Joi.string().allow(""),

      dp_sort_key: Joi.string().allow(""),

      marketplace_store_id: Joi.string().allow(""),

      dp_options: Joi.any(),

      return_details: Joi.any(),

      po_number: Joi.string().allow(""),

      return_affiliate_shipment_id: Joi.string().allow(""),

      return_store_node: Joi.number(),

      order_type: Joi.string().allow("").allow(null),

      lock_data: OrderModel.LockData(),

      same_store_available: Joi.boolean().required(),

      einvoice_info: OrderModel.EinvoiceInfo(),

      formatted: OrderModel.Formatted(),

      return_awb_number: Joi.string().allow(""),

      ewaybill_info: Joi.any().allow(null),

      store_invoice_updated_date: Joi.string().allow(""),

      shipment_weight: Joi.number(),

      due_date: Joi.string().allow(""),

      bag_weight: Joi.any(),

      external: Joi.any(),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      dp_name: Joi.string().allow(""),

      debug_info: OrderModel.DebugInfo(),

      timestamp: OrderModel.ShipmentTimeStamp(),

      awb_number: Joi.string().allow(""),

      shipment_volumetric_weight: Joi.number(),

      assign_dp_from_sb: Joi.boolean(),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      weight: Joi.number().required(),

      dp_id: Joi.string().allow("").allow(null),

      forward_affiliate_shipment_id: Joi.string().allow(""),
    });
  }

  static PDFLinks() {
    return Joi.object({
      label_type: Joi.string().allow("").required(),

      po_invoice: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      delivery_challan_a4: Joi.string().allow(""),

      label: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      b2b: Joi.string().allow(""),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      company_affiliate_tag: Joi.string().allow(""),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      pdf_links: OrderModel.PDFLinks(),

      affiliate_id: Joi.string().allow(""),

      ad_id: Joi.string().allow(""),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      address: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      ordering_store_id: Joi.number().required(),

      store_name: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      logo: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      source: Joi.string().allow(""),
    });
  }

  static InvoiceInfo() {
    return Joi.object({
      label_url: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),

      credit_note_id: Joi.string().allow(""),

      store_invoice_id: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      country: Joi.string().allow(""),

      eway_bill_id: Joi.string().allow("").allow(null),

      awb_no: Joi.string().allow(""),

      name: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      track_url: Joi.string().allow("").allow(null),

      gst_tag: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      address1: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      area: Joi.string().allow(""),

      address: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      address_type: Joi.string().allow(""),

      state: Joi.string().allow("").required(),
    });
  }

  static Dimensions() {
    return Joi.object({
      length: Joi.number(),

      width: Joi.number(),

      is_default: Joi.boolean(),

      height: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static Meta() {
    return Joi.object({
      dimension: OrderModel.Dimensions(),
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
      company_gst: Joi.string().allow(""),

      address: Joi.any(),

      company_id: Joi.number(),

      company_cin: Joi.string().allow(""),

      company_name: Joi.string().allow(""),

      company_contact: OrderModel.ContactDetails(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      bsh_id: Joi.number(),

      updated_at: Joi.string().allow(""),

      reasons: Joi.array().items(Joi.any()),

      status: Joi.string().allow("").required(),

      app_display_name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      delivery_partner_id: Joi.number().allow(null),

      shipment_id: Joi.string().allow(""),

      bag_id: Joi.number(),

      kafka_sync: Joi.boolean(),

      delivery_awb_number: Joi.string().allow("").allow(null),

      state_type: Joi.string().allow(""),

      bag_state_mapper: OrderModel.BagStateMapper(),

      store_id: Joi.number(),

      forward: Joi.boolean().allow(null),

      state_id: Joi.number(),

      created_at: Joi.string().allow(""),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      address: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      id: Joi.number().required(),
    });
  }

  static TrackingList() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      time: Joi.string().allow(""),

      is_current: Joi.boolean(),

      is_passed: Joi.boolean(),

      text: Joi.string().allow("").required(),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      bags: Joi.array().items(OrderModel.OrderBags()),

      status: OrderModel.ShipmentStatusData(),

      order: OrderModel.OrderDetailsData(),

      journey_type: Joi.string().allow(""),

      priority_text: Joi.string().allow("").allow(null),

      lock_status: Joi.boolean(),

      fulfilment_priority: Joi.number(),

      affiliate_details: OrderModel.AffiliateDetails(),

      picked_date: Joi.string().allow(""),

      coupon: Joi.any(),

      ordering_store: OrderModel.OrderingStoreDetails(),

      user: OrderModel.UserDataInfo(),

      payments: OrderModel.ShipmentPayments(),

      invoice_id: Joi.string().allow(""),

      user_agent: Joi.string().allow(""),

      custom_meta: Joi.array().items(Joi.any()),

      invoice: OrderModel.InvoiceInfo(),

      operational_status: Joi.string().allow(""),

      dp_details: OrderModel.DPDetailsData(),

      total_bags: Joi.number(),

      shipment_quantity: Joi.number(),

      delivery_slot: Joi.any(),

      billing_details: OrderModel.UserDetailsData(),

      platform_logo: Joi.string().allow(""),

      meta: OrderModel.Meta(),

      delivery_details: OrderModel.UserDetailsData(),

      enable_dp_tracking: Joi.boolean(),

      company_details: OrderModel.CompanyDetails(),

      payment_mode: Joi.string().allow(""),

      shipment_status: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),

      packaging_type: Joi.string().allow(""),

      payment_methods: Joi.any(),

      prices: OrderModel.Prices(),

      gst_details: OrderModel.GSTDetailsData(),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      vertical: Joi.string().allow("").allow(null),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      fulfilling_store: OrderModel.FulfillingStore(),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      forward_shipment_id: Joi.string().allow(""),

      total_items: Joi.number(),
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
      employee_code: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      staff_id: Joi.number(),

      user: Joi.string().allow(""),
    });
  }

  static TransactionData() {
    return Joi.object({
      entity: Joi.string().allow(""),

      payment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      terminal_id: Joi.string().allow(""),

      transaction_id: Joi.string().allow(""),

      unique_reference_number: Joi.string().allow(""),

      amount_paid: Joi.string().allow(""),

      currency: Joi.string().allow(""),
    });
  }

  static PlatformUserDetails() {
    return Joi.object({
      platform_user_employee_code: Joi.string().allow(""),

      platform_user_last_name: Joi.string().allow(""),

      platform_user_first_name: Joi.string().allow(""),

      platform_user_id: Joi.string().allow(""),
    });
  }

  static OrderMeta() {
    return Joi.object({
      extra_meta: Joi.any(),

      billing_staff_details: OrderModel.BillingStaffDetails(),

      staff: Joi.any(),

      company_logo: Joi.string().allow(""),

      ordering_store: Joi.number(),

      comment: Joi.string().allow(""),

      order_platform: Joi.string().allow(""),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      order_type: Joi.string().allow(""),

      files: Joi.array().items(Joi.any()),

      cart_id: Joi.number(),

      payment_type: Joi.string().allow(""),

      transaction_data: OrderModel.TransactionData(),

      order_tags: Joi.array().items(Joi.any()),

      mongo_cart_id: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      employee_id: Joi.number(),

      customer_note: Joi.string().allow(""),

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
      order_date: Joi.string().allow("").required(),

      meta: OrderModel.OrderMeta(),

      fynd_order_id: Joi.string().allow("").required(),

      payment_methods: Joi.any(),

      prices: OrderModel.Prices(),

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
      value: Joi.string().allow(""),

      text: Joi.string().allow(""),

      actions: Joi.array().items(Joi.any()),

      index: Joi.number(),

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
      value: Joi.string().allow(""),

      display: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static PlatformOrderItems() {
    return Joi.object({
      order_value: Joi.number(),

      order_created_time: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      total_order_value: Joi.number(),

      payment_mode: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      channel: OrderModel.PlatformChannel(),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      meta: Joi.any(),

      user_info: OrderModel.UserDataInfo(),
    });
  }

  static OrderListingResponse() {
    return Joi.object({
      page: OrderModel.Page(),

      message: Joi.string().allow(""),

      lane: Joi.string().allow(""),

      items: Joi.array().items(OrderModel.PlatformOrderItems()),

      total_count: Joi.number(),

      success: Joi.boolean(),
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

      status: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      meta: Joi.any(),

      shipment_type: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),
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

      report_id: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      report_type: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),

      report_created_at: Joi.string().allow("").allow(null),

      report_name: Joi.string().allow(""),

      request_details: Joi.any(),

      s3_key: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      jio_code: Joi.string().allow(""),

      company_id: Joi.string().allow(""),

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
      value: Joi.string().allow(""),

      type: Joi.string().allow(""),

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
      success: Joi.boolean().required(),

      message: Joi.string().allow(""),
    });
  }

  static BulkInvoiceLabelResponse() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),

      do_invoice_label_generated: Joi.boolean().required(),

      invoice: Joi.any(),

      company_id: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      data: Joi.any(),

      store_id: Joi.string().allow(""),

      invoice_status: Joi.string().allow(""),

      label: Joi.any(),

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
      url: Joi.string().allow(""),

      expiry: Joi.number(),
    });
  }

  static FileResponse() {
    return Joi.object({
      method: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      namespace: Joi.string().allow(""),

      cdn: OrderModel.URL(),

      operation: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      size: Joi.number(),

      file_name: Joi.string().allow(""),

      upload: OrderModel.FileUploadResponse(),

      content_type: Joi.string().allow(""),
    });
  }

  static bulkListingData() {
    return Joi.object({
      status: Joi.string().allow(""),

      total: Joi.number(),

      user_name: Joi.string().allow(""),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      store_id: Joi.number(),

      file_name: Joi.string().allow(""),

      failed: Joi.number(),

      batch_id: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      successful: Joi.number(),

      uploaded_on: Joi.string().allow(""),

      successful_shipments: Joi.array().items(Joi.any()),

      processing: Joi.number(),

      failed_shipments: Joi.array().items(Joi.any()),

      company_id: Joi.number(),

      user_id: Joi.string().allow(""),

      excel_url: Joi.string().allow(""),

      id: Joi.string().allow(""),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      has_previous: Joi.boolean(),

      total: Joi.number(),

      type: Joi.string().allow(""),

      has_next: Joi.boolean(),

      size: Joi.number(),

      current: Joi.number(),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      data: Joi.array().items(OrderModel.bulkListingData()),

      page: OrderModel.BulkListingPage(),

      success: Joi.boolean(),

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
      question_set: Joi.array().items(OrderModel.QuestionSet()),

      display_name: Joi.string().allow(""),

      qc_type: Joi.array().items(Joi.string().allow("")),

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
      successful_shipments_count: Joi.number(),

      batch_id: Joi.string().allow(""),

      failed_shipments_count: Joi.number(),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.string().allow(""),

      processing_shipments_count: Joi.number(),

      total_shipments_count: Joi.number(),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      status: Joi.boolean(),

      uploaded_by: Joi.string().allow(""),

      message: Joi.string().allow(""),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      user_id: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      success: Joi.string().allow(""),

      error: Joi.array().items(Joi.string().allow("")),

      failed_records: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      enable_tracking: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),
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
      is_default: Joi.boolean(),

      unit: Joi.string().allow(""),

      shipping: Joi.number(),
    });
  }

  static Article() {
    return Joi.object({
      return_config: OrderModel.ReturnConfig(),

      uid: Joi.string().allow("").required(),

      is_set: Joi.boolean(),

      code: Joi.string().allow(""),

      esp_modified: Joi.any(),

      child_details: Joi.any().allow(null),

      raw_meta: Joi.any(),

      size: Joi.string().allow("").required(),

      a_set: Joi.any().allow(null),

      dimensions: OrderModel.Dimensions(),

      weight: OrderModel.Weight(),

      _id: Joi.string().allow("").required(),

      identifiers: OrderModel.Identifier().required(),

      seller_identifier: Joi.string().allow("").required(),
    });
  }

  static StoreAddress() {
    return Joi.object({
      address2: Joi.string().allow(""),

      pincode: Joi.number().required(),

      created_at: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      area: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      contact_person: Joi.string().allow("").required(),

      phone: Joi.string().allow("").allow(null).required(),

      address_type: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      email: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      address_category: Joi.string().allow("").required(),

      version: Joi.string().allow(""),
    });
  }

  static EInvoicePortalDetails() {
    return Joi.object({
      password: Joi.string().allow(""),

      username: Joi.string().allow(""),

      user: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      url: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      legal_name: Joi.string().allow("").required(),

      ds_type: Joi.string().allow("").required(),

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
      password: Joi.string().allow(""),

      username: Joi.string().allow(""),

      enabled: Joi.boolean().required(),

      user: Joi.string().allow(""),
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
      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      product_return_config: Joi.any(),

      display_name: Joi.string().allow("").required(),

      gst_number: Joi.string().allow(""),

      stage: Joi.string().allow("").required(),

      additional_contact_details: Joi.any(),

      ewaybill_portal_details: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      documents: OrderModel.StoreDocuments(),

      timing: Joi.array().items(Joi.any()),

      gst_credentials: OrderModel.StoreGstCredentials().required(),
    });
  }

  static Store() {
    return Joi.object({
      packaging_material_count: Joi.number(),

      address2: Joi.string().allow(""),

      mall_area: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").required(),

      store_address_json: OrderModel.StoreAddress(),

      pincode: Joi.string().allow("").required(),

      location_type: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      is_enabled_for_recon: Joi.boolean(),

      store_active_from: Joi.string().allow("").allow(null),

      country: Joi.string().allow("").required(),

      parent_store_id: Joi.number(),

      is_active: Joi.boolean(),

      contact_person: Joi.string().allow("").required(),

      vat_no: Joi.string().allow("").allow(null),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      login_username: Joi.string().allow("").required(),

      meta: OrderModel.StoreMeta().required(),

      phone: Joi.number().required(),

      s_id: Joi.string().allow("").required(),

      alohomora_user_id: Joi.number(),

      city: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      order_integration_id: Joi.string().allow(""),

      is_archived: Joi.boolean(),

      store_email: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      state: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").allow(null),

      address1: Joi.string().allow("").required(),

      mall_name: Joi.string().allow("").allow(null),

      brand_id: Joi.any(),

      code: Joi.string().allow(""),

      company_id: Joi.number().required(),

      latitude: Joi.number().required(),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static Attributes() {
    return Joi.object({
      marketer_address: Joi.string().allow(""),

      primary_material: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      primary_color_hex: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      essential: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      item_id: Joi.number().required(),

      name: Joi.string().allow("").required(),

      l1_category_id: Joi.number(),

      size: Joi.string().allow("").required(),

      webstore_product_url: Joi.string().allow("").allow(null),

      l2_category_id: Joi.number(),

      color: Joi.string().allow("").allow(null),

      can_return: Joi.boolean(),

      department_id: Joi.number(),

      l2_category: Joi.array().items(Joi.string().allow("")),

      can_cancel: Joi.boolean(),

      gender: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      attributes: OrderModel.Attributes().required(),

      branch_url: Joi.string().allow("").allow(null),

      l3_category_name: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")).required(),

      brand: Joi.string().allow("").required(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      slug_key: Joi.string().allow("").required(),

      brand_id: Joi.number().required(),

      code: Joi.string().allow(""),

      l3_category: Joi.number(),

      last_updated_at: Joi.string().allow(""),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      partial_can_ret: Joi.boolean(),

      item_base_price: Joi.number(),

      po_line_amount: Joi.number(),

      po_tax_amount: Joi.number(),

      docker_number: Joi.string().allow(""),

      total_gst_percentage: Joi.number(),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }

  static Brand() {
    return Joi.object({
      credit_note_expiry_days: Joi.number().allow(null),

      is_virtual_invoice: Joi.boolean().allow(null),

      created_on: Joi.number(),

      modified_on: Joi.number(),

      start_date: Joi.string().allow("").allow(null),

      brand_id: Joi.number().required(),

      company: Joi.string().allow("").required(),

      credit_note_allowed: Joi.boolean(),

      pickup_location: Joi.string().allow("").allow(null),

      script_last_ran: Joi.string().allow("").allow(null),

      brand_name: Joi.string().allow("").required(),

      invoice_prefix: Joi.string().allow("").allow(null),

      logo: Joi.string().allow(""),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      employee_discount: Joi.number(),

      loyalty_discount: Joi.number(),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      brand_calculated_amount: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      cgst_tax_percentage: Joi.number().required(),

      sgst_tax_percentage: Joi.number().required(),

      gst_fee: Joi.number().required(),

      gstin_code: Joi.string().allow("").allow(null),

      igst_tax_percentage: Joi.number().required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      is_default_hsn_code: Joi.boolean(),

      tax_collected_at_source: Joi.number().required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      igst_gst_fee: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow("").required(),

      gst_tag: Joi.string().allow("").required(),
    });
  }

  static Dates() {
    return Joi.object({
      delivery_date: Joi.any(),

      order_created: Joi.string().allow(""),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      status: OrderModel.BagReturnableCancelableStatus().required(),

      journey_type: Joi.string().allow("").required(),

      line_number: Joi.number(),

      article: OrderModel.Article().required(),

      b_id: Joi.number().required(),

      affiliate_details: OrderModel.AffiliateDetails(),

      quantity: Joi.number(),

      ordering_store: OrderModel.Store(),

      restore_promos: Joi.any(),

      seller_identifier: Joi.string().allow(""),

      reasons: Joi.array().items(Joi.any()),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      article_details: OrderModel.ArticleDetails(),

      item: OrderModel.Item().required(),

      operational_status: Joi.string().allow(""),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      no_of_bags_order: Joi.number(),

      b_type: Joi.string().allow(""),

      bag_update_time: Joi.number(),

      meta: OrderModel.BagMeta(),

      parent_promo_bags: Joi.any(),

      original_bag_list: Joi.array().items(Joi.number()),

      display_name: Joi.string().allow(""),

      order_integration_id: Joi.string().allow("").allow(null),

      shipment_id: Joi.string().allow(""),

      restore_coupon: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      brand: OrderModel.Brand().required(),

      current_status: OrderModel.BagStatusHistory().required(),

      identifier: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      prices: OrderModel.Prices().required(),

      gst_details: OrderModel.BagGSTDetails().required(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      bag_status_history: OrderModel.BagStatusHistory(),

      applied_promos: Joi.array().items(Joi.any()),

      dates: OrderModel.Dates(),

      qc_required: Joi.any(),
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

      page_type: Joi.string().allow("").required(),

      has_next: Joi.boolean().required(),

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
      error: Joi.string().allow(""),

      message: Joi.string().allow(""),

      status: Joi.number(),

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
      error_trace: Joi.string().allow(""),

      message: Joi.string().allow("").required(),

      status: Joi.number().required(),
    });
  }

  static StoreReassign() {
    return Joi.object({
      set_id: Joi.string().allow("").allow(null),

      item_id: Joi.string().allow("").allow(null),

      bag_id: Joi.number().allow(null),

      store_id: Joi.number().required(),

      affiliate_id: Joi.string().allow("").allow(null),

      fynd_order_id: Joi.string().allow("").allow(null),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      reason_ids: Joi.array().items(Joi.number()),

      mongo_article_id: Joi.string().allow("").allow(null),

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
      id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),
    });
  }

  static UpdateShipmentLockPayload() {
    return Joi.object({
      entities: Joi.array().items(OrderModel.Entities()).required(),

      entity_type: Joi.string().allow("").required(),

      action_type: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),
    });
  }

  static Bags() {
    return Joi.object({
      bag_id: Joi.number(),

      is_locked: Joi.boolean(),

      affiliate_bag_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),
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

      lock_status: Joi.boolean().allow(null),

      is_shipment_locked: Joi.boolean(),

      bags: Joi.array().items(OrderModel.Bags()),

      original_filter: OrderModel.OriginalFilter(),

      affiliate_id: Joi.string().allow(""),

      is_bag_locked: Joi.boolean(),

      affiliate_shipment_id: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),
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
      from_datetime: Joi.string().allow(""),

      id: Joi.number().required(),

      company_id: Joi.number(),

      description: Joi.string().allow(""),

      platform_id: Joi.string().allow(""),

      to_datetime: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      title: Joi.string().allow(""),

      logo_url: Joi.string().allow(""),

      platform_name: Joi.string().allow(""),
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

  static Products() {
    return Joi.object({
      quantity: Joi.number(),

      identifier: Joi.string().allow(""),

      line_number: Joi.number(),
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
      reasons: OrderModel.ReasonsData(),

      products: Joi.array().items(OrderModel.Products()),

      data_updates: OrderModel.DataUpdates(),

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
      unlock_before_transition: Joi.boolean(),

      task: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      force_transition: Joi.boolean(),

      lock_after_transition: Joi.boolean(),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      meta: Joi.any(),

      status: Joi.number(),

      code: Joi.string().allow(""),

      message: Joi.string().allow(""),

      final_state: Joi.any(),

      exception: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      stack_trace: Joi.string().allow(""),
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
      quantity: Joi.number().required(),

      _id: Joi.string().allow("").required(),

      transfer_price: Joi.number().required(),

      affiliate_meta: Joi.any().required(),

      price_marked: Joi.number().required(),

      company_id: Joi.number().required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      item_id: Joi.number().required(),

      store_id: Joi.number().required(),

      amount_paid: Joi.number().required(),

      price_effective: Joi.number().required(),

      seller_identifier: Joi.string().allow("").required(),

      identifier: Joi.any().required(),

      avl_qty: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      discount: Joi.number().required(),

      sku: Joi.string().allow("").required(),

      unit_price: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      fynd_store_id: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      item_size: Joi.string().allow("").required(),
    });
  }

  static OrderUser() {
    return Joi.object({
      first_name: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address2: Joi.string().allow("").allow(null),

      address1: Joi.string().allow("").allow(null),

      mobile: Joi.number().required(),

      phone: Joi.number().required(),

      pincode: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),
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
      fulfilment_priority_text: Joi.string().allow(""),

      fulfilment_priority: Joi.number().allow(null),

      affiliate_priority_code: Joi.string().allow("").allow(null),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      quantity: Joi.number().required(),

      _id: Joi.string().allow("").required(),

      attributes: Joi.any().required(),

      brand_id: Joi.number().required(),

      dimension: Joi.any().required(),

      category: Joi.any().required(),

      weight: Joi.any().required(),
    });
  }

  static ShipmentDetails() {
    return Joi.object({
      meta: Joi.any(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      fulfillment_id: Joi.number().required(),

      box_type: Joi.string().allow("").allow(null),

      dp_id: Joi.number().allow(null),

      shipments: Joi.number().required(),
    });
  }

  static LocationDetails() {
    return Joi.object({
      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      fulfillment_type: Joi.string().allow("").required(),

      fulfillment_id: Joi.number().required(),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      action: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      source: Joi.string().allow("").required(),

      journey: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      identifier: Joi.string().allow("").required(),

      location_details: OrderModel.LocationDetails(),
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

      payment_mode: Joi.string().allow("").required(),

      payment: Joi.any(),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      cod_charges: Joi.number().required(),

      user: OrderModel.UserData().required(),

      delivery_charges: Joi.number().required(),

      shipping_address: OrderModel.OrderUser().required(),

      billing_address: OrderModel.OrderUser().required(),

      order_priority: OrderModel.OrderPriority(),

      order_value: Joi.number().required(),

      discount: Joi.number().required(),

      shipment: OrderModel.ShipmentData(),

      affiliate_order_id: Joi.string().allow(""),

      items: Joi.any().required(),
    });
  }

  static AffiliateStoreIdMapping() {
    return Joi.object({
      store_id: Joi.number().required(),

      marketplace_store_id: Joi.string().allow("").required(),
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
      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      secret: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      created_at: Joi.string().allow("").required(),

      owner: Joi.string().allow("").required(),
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

  static AffiliateInventoryLogisticsConfig() {
    return Joi.object({
      dp_assignment: Joi.boolean(),
    });
  }

  static AffiliateInventoryConfig() {
    return Joi.object({
      order: OrderModel.AffiliateInventoryOrderConfig(),

      inventory: OrderModel.AffiliateInventoryStoreConfig(),

      payment: OrderModel.AffiliateInventoryPaymentConfig(),

      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),
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

      create_user: Joi.boolean(),

      store_lookup: Joi.string().allow(""),

      article_lookup: Joi.string().allow(""),

      affiliate: OrderModel.Affiliate().required(),
    });
  }

  static CreateOrderPayload() {
    return Joi.object({
      affiliate_id: Joi.string().allow("").required(),

      order_info: OrderModel.OrderInfo().required(),

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
      ticket_id: Joi.string().allow(""),

      bag_id: Joi.number(),

      message: Joi.string().allow("").required(),

      createdat: Joi.string().allow("").required(),

      l3_detail: Joi.string().allow(""),

      ticket_url: Joi.string().allow(""),

      user: Joi.string().allow("").required(),

      l2_detail: Joi.string().allow(""),

      l1_detail: Joi.string().allow(""),

      type: Joi.string().allow("").required(),
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

  static PostHistoryData() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      user_name: Joi.string().allow("").required(),
    });
  }

  static PostHistoryFilters() {
    return Joi.object({
      line_number: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

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
      order_id: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      customer_name: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),

      phone_number: Joi.number().required(),

      shipment_id: Joi.number().required(),
    });
  }

  static SendSmsPayload() {
    return Joi.object({
      bag_id: Joi.number().required(),

      data: OrderModel.SmsDataPayload(),

      slug: Joi.string().allow("").required(),
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

      status: Joi.string().allow(""),

      id: Joi.number().required(),

      bag_list: Joi.array().items(Joi.number()),

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
      errors: Joi.array().items(Joi.string().allow("")),

      shipment_details: Joi.array().items(OrderModel.ShipmentDetail()),

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
      order_type: Joi.string().allow("").required(),

      shipment_ids: Joi.array().items(Joi.string().allow("")),

      dp_id: Joi.number().required(),

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
      amount: Joi.any().required(),

      name: Joi.string().allow("").required(),

      breakup: Joi.array().items(Joi.any()),

      rate: Joi.number().required(),
    });
  }

  static Charge() {
    return Joi.object({
      code: Joi.string().allow(""),

      amount: Joi.any().required(),

      name: Joi.string().allow("").required(),

      tax: OrderModel.Tax(),

      type: Joi.string().allow("").required(),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      alternate_email: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      primary_mobile_number: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      geo_location: Joi.any(),

      title: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      slot: Joi.array().items(Joi.any()),

      address_type: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      shipping_type: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      meta: Joi.any(),

      collect_by: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      transaction_data: Joi.any(),

      refund_by: Joi.string().allow("").required(),

      mode: Joi.string().allow("").required(),
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
      alternate_email: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      primary_mobile_number: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      title: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),
    });
  }

  static TaxInfo() {
    return Joi.object({
      gstin: Joi.string().allow(""),

      b2b_gstin_number: Joi.string().allow(""),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      dispatch_after_date: Joi.string().allow(""),

      customer_pickup_slot: Joi.any(),

      confirm_by_date: Joi.string().allow(""),

      pack_by_date: Joi.string().allow(""),

      dispatch_by_date: Joi.string().allow(""),

      dp_pickup_slot: Joi.any(),
    });
  }

  static LineItem() {
    return Joi.object({
      quantity: Joi.number(),

      custom_messasge: Joi.string().allow(""),

      meta: Joi.any(),

      charges: Joi.array().items(OrderModel.Charge()),

      external_line_id: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),
    });
  }

  static Shipment() {
    return Joi.object({
      meta: Joi.any(),

      processing_dates: OrderModel.ProcessingDates(),

      priority: Joi.number(),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),

      location_id: Joi.number().required(),

      external_shipment_id: Joi.string().allow(""),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      meta: Joi.any(),

      charges: Joi.array().items(OrderModel.Charge()),

      external_order_id: Joi.string().allow(""),

      external_creation_date: Joi.string().allow(""),

      shipping_info: OrderModel.ShippingInfo().required(),

      payment_info: OrderModel.PaymentInfo().required(),

      billing_info: OrderModel.BillingInfo().required(),

      tax_info: OrderModel.TaxInfo(),

      currency_info: Joi.any(),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      meta: Joi.string().allow("").allow(null),

      status: Joi.number().required(),

      code: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      exception: Joi.string().allow("").allow(null),

      info: Joi.any(),

      request_id: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),
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

      mode_of_payment: Joi.string().allow(""),

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
      lock_states: Joi.array().items(Joi.string().allow("")),

      payment_info: OrderModel.CreateChannelPaymentInfo(),

      location_reassignment: Joi.boolean(),

      dp_configuration: OrderModel.DpConfiguration(),

      logo_url: Joi.any(),

      shipment_assignment: Joi.string().allow(""),
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
      start_date: Joi.string().allow("").required(),

      end_date: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),
    });
  }
}
module.exports = OrderModel;
