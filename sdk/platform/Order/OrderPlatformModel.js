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

      type: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      hex_code: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      gst_fee: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      value_of_good: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),
    });
  }

  static Prices() {
    return Joi.object({
      price_marked: Joi.number(),

      fynd_credits: Joi.number(),

      cashback_applied: Joi.number(),

      cod_charges: Joi.number(),

      cashback: Joi.number(),

      promotion_effective_discount: Joi.number(),

      coupon_value: Joi.number(),

      amount_paid: Joi.number(),

      price_effective: Joi.number(),

      discount: Joi.number(),

      transfer_price: Joi.number(),

      refund_amount: Joi.number(),

      refund_credit: Joi.number(),

      delivery_charge: Joi.number(),

      value_of_good: Joi.number(),

      tax_collected_at_source: Joi.number(),

      amount_paid_roundoff: Joi.number(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      can_cancel: Joi.boolean(),

      l3_category: Joi.number(),

      image: Joi.array().items(Joi.string().allow("")),

      color: Joi.string().allow("").allow(null),

      images: Joi.array().items(Joi.string().allow("")),

      department_id: Joi.number(),

      id: Joi.number(),

      l3_category_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      size: Joi.string().allow(""),

      code: Joi.string().allow(""),

      l1_category: Joi.array().items(Joi.string().allow("")),

      can_return: Joi.boolean(),
    });
  }

  static BagUnit() {
    return Joi.object({
      can_cancel: Joi.boolean(),

      bag_id: Joi.number().required(),

      ordering_channel: Joi.string().allow("").required(),

      gst: OrderModel.GSTDetailsData(),

      total_shipment_bags: Joi.number().required(),

      status: Joi.any().required(),

      shipment_id: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),

      item_quantity: Joi.number().required(),

      item: OrderModel.PlatformItem(),

      can_return: Joi.boolean(),
    });
  }

  static PaymentModeInfo() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),
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

      mobile: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      email: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      name: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      uid: Joi.number(),

      last_name: Joi.string().allow(""),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      channel: Joi.any(),

      shipment_status: OrderModel.ShipmentStatus(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      fulfilling_centre: Joi.string().allow("").required(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      total_bags_count: Joi.number().required(),

      created_at: Joi.string().allow("").required(),

      payment_methods: Joi.any(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      user: OrderModel.UserDataInfo(),

      shipment_id: Joi.string().allow(""),

      id: Joi.string().allow("").required(),

      sla: Joi.any(),

      application: Joi.any(),

      shipment_created_at: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),

      total_shipments_in_order: Joi.number().required(),
    });
  }

  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      applied_filters: Joi.any(),

      page: Joi.any(),

      filters: Joi.array().items(OrderModel.FiltersInfo()),

      items: Joi.array().items(OrderModel.ShipmentItem()),
    });
  }

  static Error() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static Dimensions() {
    return Joi.object({
      height: Joi.number(),

      unit: Joi.string().allow(""),

      is_default: Joi.boolean(),

      length: Joi.number(),

      width: Joi.number(),
    });
  }

  static Meta() {
    return Joi.object({
      dimension: OrderModel.Dimensions(),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      source: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      ordering_store_id: Joi.number().required(),

      state: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      contact_person: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      tax_details: Joi.any(),

      cod_charges: Joi.string().allow(""),

      ordering_channel: Joi.string().allow(""),

      source: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),

      order_value: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow("").required(),

      order_date: Joi.string().allow(""),
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
      phone: Joi.array().items(OrderModel.PhoneDetails()),

      emails: Joi.array().items(Joi.string().allow("")),
    });
  }

  static CompanyDetails() {
    return Joi.object({
      address: Joi.any(),

      company_cin: Joi.string().allow(""),

      company_name: Joi.string().allow(""),

      company_gst: Joi.string().allow(""),

      company_contact: OrderModel.ContactDetails(),

      company_id: Joi.number(),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      state: Joi.string().allow("").required(),

      area: Joi.string().allow(""),

      address: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      address_type: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      address1: Joi.string().allow(""),

      email: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      latitude: Joi.number(),

      state: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      area: Joi.string().allow(""),

      longitude: Joi.number(),

      address_type: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      country: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      email: Joi.string().allow(""),

      version: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      city: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address2: Joi.string().allow(""),
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

      gst_fee: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      delivery_charge: Joi.number().required(),

      fynd_credits: Joi.number().required(),

      cashback: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      price_effective: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      size: Joi.string().allow("").required(),

      amount_paid_roundoff: Joi.number(),

      promotion_effective_discount: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      brand_calculated_amount: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      discount: Joi.number().required(),

      refund_credit: Joi.number().required(),

      value_of_good: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      cod_charges: Joi.number().required(),

      identifiers: OrderModel.Identifier().required(),

      coupon_value: Joi.number().required(),

      transfer_price: Joi.number().required(),

      total_units: Joi.number().required(),

      tax_collected_at_source: Joi.number(),

      item_name: Joi.string().allow("").required(),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      created_on: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      company: Joi.string().allow("").allow(null).required(),

      brand_name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      id: Joi.number().required(),
    });
  }

  static BagConfigs() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      is_active: Joi.boolean(),

      app_facing: Joi.boolean(),

      state_type: Joi.string().allow("").required(),

      notify_customer: Joi.boolean(),

      display_name: Joi.string().allow("").required(),

      bs_id: Joi.number().required(),

      journey_type: Joi.string().allow("").required(),

      app_display_name: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      app_state_name: Joi.string().allow(""),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      kafka_sync: Joi.boolean(),

      current_status_id: Joi.number().required(),

      delivery_partner_id: Joi.number(),

      state_type: Joi.string().allow(""),

      bag_id: Joi.number(),

      updated_at: Joi.string().allow(""),

      store_id: Joi.number(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      delivery_awb_number: Joi.string().allow(""),

      created_at: Joi.string().allow("").allow(null),

      state_id: Joi.number(),

      shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      return_config: Joi.any(),

      identifiers: Joi.any(),

      uid: Joi.string().allow(""),
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
      article_quantity: Joi.number(),

      promotion_type: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      promotion_name: Joi.string().allow(""),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      amount: Joi.number(),

      promo_id: Joi.string().allow(""),
    });
  }

  static BagGST() {
    return Joi.object({
      gst_tag: Joi.string().allow(""),

      gst_fee: Joi.number(),

      hsn_code: Joi.string().allow(""),

      is_default_hsn_code: Joi.boolean(),

      gst_tax_percentage: Joi.number(),

      brand_calculated_amount: Joi.number(),

      value_of_good: Joi.number(),

      gstin_code: Joi.string().allow(""),
    });
  }

  static OrderBags() {
    return Joi.object({
      delivery_address: OrderModel.PlatformDeliveryAddress(),

      financial_breakup: OrderModel.FinancialBreakup(),

      item: OrderModel.PlatformItem(),

      can_return: Joi.boolean(),

      brand: OrderModel.OrderBrandName(),

      identifier: Joi.string().allow(""),

      bag_configs: OrderModel.BagConfigs(),

      prices: OrderModel.Prices(),

      current_status: OrderModel.CurrentStatus(),

      can_cancel: Joi.boolean(),

      quantity: Joi.number(),

      article: OrderModel.OrderBagArticle(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      gst_details: OrderModel.BagGST(),

      bag_id: Joi.number().required(),

      display_name: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      entity_type: Joi.string().allow(""),

      parent_promo_bags: Joi.any(),

      line_number: Joi.number(),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      channel_order_id: Joi.string().allow("").allow(null),

      employee_discount: Joi.number(),

      quantity: Joi.number(),

      coupon_code: Joi.string().allow("").allow(null),

      due_date: Joi.string().allow("").allow(null),

      is_priority: Joi.boolean(),

      order_item_id: Joi.string().allow(""),

      loyalty_discount: Joi.number(),

      channel_shipment_id: Joi.string().allow("").allow(null),

      size_level_total_qty: Joi.number().allow(null),

      box_type: Joi.string().allow("").allow(null),
    });
  }

  static PDFLinks() {
    return Joi.object({
      invoice_a4: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      b2b: Joi.string().allow(""),

      label: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      label_a6: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),

      delivery_challan_a4: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      invoice_a6: Joi.string().allow(""),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      state: Joi.string().allow("").required(),

      ajio_site_id: Joi.string().allow(""),

      address: Joi.string().allow("").allow(null).required(),

      gstin: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      pincode: Joi.number().required(),
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

  static EinvoiceInfo() {
    return Joi.object({
      credit_note: Joi.any(),

      invoice: Joi.any(),
    });
  }

  static Formatted() {
    return Joi.object({
      f_max: Joi.string().allow(""),

      f_min: Joi.string().allow(""),
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
      external: Joi.any(),

      dp_id: Joi.string().allow("").allow(null),

      forward_affiliate_order_id: Joi.string().allow(""),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      return_awb_number: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      ewaybill_info: Joi.any().allow(null),

      b2c_buyer_details: Joi.any().allow(null),

      weight: Joi.number().required(),

      assign_dp_from_sb: Joi.boolean(),

      marketplace_store_id: Joi.string().allow(""),

      lock_data: OrderModel.LockData(),

      return_details: Joi.any(),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      debug_info: OrderModel.DebugInfo(),

      dp_options: Joi.any(),

      store_invoice_updated_date: Joi.string().allow(""),

      einvoice_info: OrderModel.EinvoiceInfo(),

      awb_number: Joi.string().allow(""),

      dp_sort_key: Joi.string().allow(""),

      return_affiliate_shipment_id: Joi.string().allow(""),

      shipment_volumetric_weight: Joi.number(),

      formatted: OrderModel.Formatted(),

      timestamp: OrderModel.ShipmentTimeStamp(),

      bag_weight: Joi.any(),

      packaging_name: Joi.string().allow(""),

      order_type: Joi.string().allow("").allow(null),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      dp_name: Joi.string().allow(""),

      po_number: Joi.string().allow(""),

      return_store_node: Joi.number(),

      return_affiliate_order_id: Joi.string().allow(""),

      due_date: Joi.string().allow(""),

      same_store_available: Joi.boolean().required(),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      shipment_weight: Joi.number(),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      pdf_links: OrderModel.PDFLinks(),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      company_affiliate_tag: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      affiliate_store_id: Joi.string().allow("").required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      ad_id: Joi.string().allow(""),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      state: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      code: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      id: Joi.number().required(),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      gst_tag: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      country: Joi.string().allow(""),

      track_url: Joi.string().allow("").allow(null),

      name: Joi.string().allow(""),

      eway_bill_id: Joi.string().allow("").allow(null),

      id: Joi.number(),

      pincode: Joi.string().allow(""),
    });
  }

  static InvoiceInfo() {
    return Joi.object({
      store_invoice_id: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      label_url: Joi.string().allow(""),

      credit_note_id: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      kafka_sync: Joi.boolean(),

      delivery_partner_id: Joi.number().allow(null),

      reasons: Joi.array().items(Joi.any()),

      bag_id: Joi.number(),

      state_type: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      store_id: Joi.number(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      delivery_awb_number: Joi.string().allow("").allow(null),

      forward: Joi.boolean().allow(null),

      created_at: Joi.string().allow(""),

      state_id: Joi.number(),

      app_display_name: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      status: Joi.string().allow("").required(),

      bsh_id: Joi.number(),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      created_at: Joi.string().allow("").allow(null),

      shipment_id: Joi.string().allow(""),

      id: Joi.number(),

      bag_list: Joi.array().items(Joi.string().allow("")),

      status: Joi.string().allow(""),
    });
  }

  static TrackingList() {
    return Joi.object({
      text: Joi.string().allow("").required(),

      is_passed: Joi.boolean(),

      is_current: Joi.boolean(),

      time: Joi.string().allow(""),

      status: Joi.string().allow("").required(),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      shipment_status: Joi.string().allow(""),

      operational_status: Joi.string().allow(""),

      meta: OrderModel.Meta(),

      vertical: Joi.string().allow("").allow(null),

      fulfilment_priority: Joi.number(),

      payments: OrderModel.ShipmentPayments(),

      ordering_store: OrderModel.OrderingStoreDetails(),

      order: OrderModel.OrderDetailsData(),

      company_details: OrderModel.CompanyDetails(),

      payment_methods: Joi.any(),

      user: OrderModel.UserDataInfo(),

      lock_status: Joi.boolean(),

      billing_details: OrderModel.UserDetailsData(),

      total_items: Joi.number(),

      coupon: Joi.any(),

      user_agent: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.OrderBags()),

      affiliate_details: OrderModel.AffiliateDetails(),

      shipment_quantity: Joi.number(),

      fulfilling_store: OrderModel.FulfillingStore(),

      total_bags: Joi.number(),

      shipment_id: Joi.string().allow("").required(),

      picked_date: Joi.string().allow(""),

      delivery_slot: Joi.any(),

      dp_details: OrderModel.DPDetailsData(),

      prices: OrderModel.Prices(),

      payment_mode: Joi.string().allow(""),

      invoice: OrderModel.InvoiceInfo(),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      gst_details: OrderModel.GSTDetailsData(),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      journey_type: Joi.string().allow(""),

      status: OrderModel.ShipmentStatusData(),

      enable_dp_tracking: Joi.boolean(),

      packaging_type: Joi.string().allow(""),

      invoice_id: Joi.string().allow(""),

      platform_logo: Joi.string().allow(""),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      priority_text: Joi.string().allow("").allow(null),

      forward_shipment_id: Joi.string().allow(""),

      delivery_details: OrderModel.UserDetailsData(),

      custom_meta: Joi.array().items(Joi.any()),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      success: Joi.boolean().required(),

      message: Joi.string().allow(""),
    });
  }

  static TaxDetails() {
    return Joi.object({
      gstin: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),
    });
  }

  static BillingStaffDetails() {
    return Joi.object({
      user: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      staff_id: Joi.number(),

      employee_code: Joi.string().allow(""),

      last_name: Joi.string().allow(""),
    });
  }

  static TransactionData() {
    return Joi.object({
      payment_id: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      unique_reference_number: Joi.string().allow(""),

      amount_paid: Joi.string().allow(""),

      terminal_id: Joi.string().allow(""),

      entity: Joi.string().allow(""),

      transaction_id: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static PlatformUserDetails() {
    return Joi.object({
      platform_user_first_name: Joi.string().allow(""),

      platform_user_employee_code: Joi.string().allow(""),

      platform_user_last_name: Joi.string().allow(""),

      platform_user_id: Joi.string().allow(""),
    });
  }

  static OrderMeta() {
    return Joi.object({
      billing_staff_details: OrderModel.BillingStaffDetails(),

      cart_id: Joi.number(),

      staff: Joi.any(),

      ordering_store: Joi.number(),

      customer_note: Joi.string().allow(""),

      company_logo: Joi.string().allow(""),

      mongo_cart_id: Joi.number(),

      payment_type: Joi.string().allow(""),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      currency_symbol: Joi.string().allow(""),

      employee_id: Joi.number(),

      order_type: Joi.string().allow(""),

      transaction_data: OrderModel.TransactionData(),

      order_platform: Joi.string().allow(""),

      extra_meta: Joi.any(),

      order_tags: Joi.array().items(Joi.any()),

      platform_user_details: OrderModel.PlatformUserDetails(),

      files: Joi.array().items(Joi.any()),

      comment: Joi.string().allow(""),
    });
  }

  static OrderDict() {
    return Joi.object({
      tax_details: OrderModel.TaxDetails(),

      meta: OrderModel.OrderMeta(),

      payment_methods: Joi.any(),

      fynd_order_id: Joi.string().allow("").required(),

      order_date: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),
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
      total_items: Joi.number(),

      index: Joi.number(),

      text: Joi.string().allow(""),

      actions: Joi.array().items(Joi.any()),

      value: Joi.string().allow(""),
    });
  }

  static SuperLane() {
    return Joi.object({
      total_items: Joi.number(),

      options: Joi.array().items(OrderModel.SubLane()),

      text: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
    });
  }

  static LaneConfigResponse() {
    return Joi.object({
      super_lanes: Joi.array().items(OrderModel.SuperLane()),
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

      name: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static PlatformOrderItems() {
    return Joi.object({
      channel: OrderModel.PlatformChannel(),

      meta: Joi.any(),

      total_order_value: Joi.number(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      order_id: Joi.string().allow(""),

      user_info: OrderModel.UserDataInfo(),

      order_value: Joi.number(),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      payment_mode: Joi.string().allow(""),

      order_created_time: Joi.string().allow(""),
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

      lane: Joi.string().allow(""),

      items: Joi.array().items(OrderModel.PlatformOrderItems()),

      success: Joi.boolean(),

      page: OrderModel.Page(),

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
      key: Joi.string().allow("").required(),

      value: Joi.number().required(),

      text: Joi.string().allow("").required(),

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
      meta: Joi.any(),

      reason: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      awb: Joi.string().allow(""),

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
      report_requested_at: Joi.string().allow("").allow(null),

      request_details: Joi.any(),

      report_created_at: Joi.string().allow("").allow(null),

      s3_key: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      report_type: Joi.string().allow(""),

      report_name: Joi.string().allow(""),

      report_id: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      article_id: Joi.string().allow(""),

      item_id: Joi.string().allow(""),

      jio_code: Joi.string().allow(""),

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
      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

      trace_id: Joi.string().allow(""),

      data: Joi.array().items(Joi.any()),

      success: Joi.boolean(),

      identifier: Joi.string().allow(""),
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
      label: Joi.any(),

      invoice: Joi.any(),

      batch_id: Joi.string().allow("").required(),

      invoice_status: Joi.string().allow(""),

      data: Joi.any(),

      store_id: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      do_invoice_label_generated: Joi.boolean().required(),

      company_id: Joi.string().allow(""),
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

      file_name: Joi.string().allow(""),

      method: Joi.string().allow(""),

      namespace: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      upload: OrderModel.FileUploadResponse(),

      cdn: OrderModel.URL(),

      size: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      operation: Joi.string().allow(""),
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

  static bulkListingData() {
    return Joi.object({
      store_name: Joi.string().allow(""),

      user_name: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      company_id: Joi.number(),

      failed: Joi.number(),

      processing: Joi.number(),

      store_code: Joi.string().allow(""),

      id: Joi.string().allow(""),

      successful_shipments: Joi.array().items(Joi.any()),

      total: Joi.number(),

      store_id: Joi.number(),

      successful: Joi.number(),

      status: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      batch_id: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      failed_shipments: Joi.array().items(Joi.any()),

      excel_url: Joi.string().allow(""),

      processing_shipments: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      success: Joi.boolean(),

      page: OrderModel.BulkListingPage(),

      data: Joi.array().items(OrderModel.bulkListingData()),

      error: Joi.string().allow(""),
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
      successful_shipments_count: Joi.number(),

      batch_id: Joi.string().allow(""),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      total_shipments_count: Joi.number(),

      failed_shipments_count: Joi.number(),

      processing_shipments_count: Joi.number(),

      company_id: Joi.string().allow(""),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      user_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      uploaded_by: Joi.string().allow(""),

      error: Joi.array().items(Joi.string().allow("")),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      success: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      uploaded_on: Joi.string().allow(""),

      status: Joi.boolean(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      po_line_amount: Joi.number(),

      item_base_price: Joi.number(),

      po_tax_amount: Joi.number(),

      partial_can_ret: Joi.boolean(),

      total_gst_percentage: Joi.number(),

      docker_number: Joi.string().allow(""),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }

  static Dates() {
    return Joi.object({
      order_created: Joi.string().allow(""),

      delivery_date: Joi.any(),
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

  static Document() {
    return Joi.object({
      url: Joi.string().allow(""),

      verified: Joi.boolean().required(),

      ds_type: Joi.string().allow("").required(),

      legal_name: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
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

      password: Joi.string().allow(""),

      user: Joi.string().allow(""),
    });
  }

  static StoreMeta() {
    return Joi.object({
      stage: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      timing: Joi.array().items(Joi.any()),

      additional_contact_details: Joi.any(),

      product_return_config: Joi.any(),

      ewaybill_portal_details: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      gst_number: Joi.string().allow(""),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      documents: OrderModel.StoreDocuments(),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),
    });
  }

  static StoreAddress() {
    return Joi.object({
      area: Joi.string().allow(""),

      longitude: Joi.number().required(),

      phone: Joi.string().allow("").allow(null).required(),

      created_at: Joi.string().allow("").required(),

      address_category: Joi.string().allow("").required(),

      version: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      state: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      address_type: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),
    });
  }

  static Store() {
    return Joi.object({
      meta: OrderModel.StoreMeta().required(),

      longitude: Joi.number().required(),

      order_integration_id: Joi.string().allow(""),

      phone: Joi.number().required(),

      mall_name: Joi.string().allow("").allow(null),

      brand_id: Joi.any(),

      created_at: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      is_enabled_for_recon: Joi.boolean(),

      login_username: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      is_archived: Joi.boolean(),

      parent_store_id: Joi.number(),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      alohomora_user_id: Joi.number(),

      mall_area: Joi.string().allow("").allow(null),

      latitude: Joi.number().required(),

      state: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      store_address_json: OrderModel.StoreAddress(),

      s_id: Joi.string().allow("").required(),

      packaging_material_count: Joi.number(),

      address1: Joi.string().allow("").required(),

      store_email: Joi.string().allow("").required(),

      store_active_from: Joi.string().allow("").allow(null),

      pincode: Joi.string().allow("").required(),

      location_type: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      country: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").allow(null),

      fulfillment_channel: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      vat_no: Joi.string().allow("").allow(null),

      address2: Joi.string().allow(""),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      employee_discount: Joi.number(),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      loyalty_discount: Joi.number(),
    });
  }

  static Attributes() {
    return Joi.object({
      essential: Joi.string().allow(""),

      primary_material: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      marketer_address: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      meta: Joi.any(),

      l3_category: Joi.number(),

      attributes: OrderModel.Attributes().required(),

      brand_id: Joi.number().required(),

      name: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      last_updated_at: Joi.string().allow(""),

      l1_category: Joi.array().items(Joi.string().allow("")),

      can_return: Joi.boolean(),

      l2_category_id: Joi.number(),

      brand: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      branch_url: Joi.string().allow("").allow(null),

      webstore_product_url: Joi.string().allow("").allow(null),

      image: Joi.array().items(Joi.string().allow("")).required(),

      slug_key: Joi.string().allow("").required(),

      size: Joi.string().allow("").required(),

      l2_category: Joi.array().items(Joi.string().allow("")),

      can_cancel: Joi.boolean(),

      color: Joi.string().allow("").allow(null),

      l3_category_name: Joi.string().allow(""),

      l1_category_id: Joi.number(),

      gender: Joi.string().allow("").allow(null),

      department_id: Joi.number(),
    });
  }

  static Brand() {
    return Joi.object({
      is_virtual_invoice: Joi.boolean().allow(null),

      created_on: Joi.number(),

      credit_note_allowed: Joi.boolean(),

      logo: Joi.string().allow(""),

      company: Joi.string().allow("").required(),

      invoice_prefix: Joi.string().allow("").allow(null),

      credit_note_expiry_days: Joi.number().allow(null),

      script_last_ran: Joi.string().allow("").allow(null),

      brand_id: Joi.number().required(),

      modified_on: Joi.number(),

      pickup_location: Joi.string().allow("").allow(null),

      brand_name: Joi.string().allow("").required(),

      start_date: Joi.string().allow("").allow(null),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      time: Joi.number(),

      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),
    });
  }

  static Weight() {
    return Joi.object({
      unit: Joi.string().allow(""),

      is_default: Joi.boolean(),

      shipping: Joi.number(),
    });
  }

  static Article() {
    return Joi.object({
      esp_modified: Joi.any(),

      identifiers: OrderModel.Identifier().required(),

      is_set: Joi.boolean(),

      return_config: OrderModel.ReturnConfig(),

      raw_meta: Joi.any(),

      dimensions: OrderModel.Dimensions(),

      weight: OrderModel.Weight(),

      seller_identifier: Joi.string().allow("").required(),

      a_set: Joi.any().allow(null),

      child_details: Joi.any().allow(null),

      _id: Joi.string().allow("").required(),

      size: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      uid: Joi.string().allow("").required(),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      cgst_gst_fee: Joi.string().allow("").required(),

      igst_tax_percentage: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      gst_fee: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      is_default_hsn_code: Joi.boolean(),

      gst_tax_percentage: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      igst_gst_fee: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow("").required(),

      sgst_tax_percentage: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      value_of_good: Joi.number().required(),

      gstin_code: Joi.string().allow("").allow(null),

      cgst_tax_percentage: Joi.number().required(),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      meta: OrderModel.BagMeta(),

      operational_status: Joi.string().allow(""),

      reasons: Joi.array().items(Joi.any()),

      order_integration_id: Joi.string().allow("").allow(null),

      restore_coupon: Joi.boolean(),

      dates: OrderModel.Dates(),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      ordering_store: OrderModel.Store(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      b_type: Joi.string().allow(""),

      article_details: OrderModel.ArticleDetails(),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      item: OrderModel.Item().required(),

      brand: OrderModel.Brand().required(),

      affiliate_details: OrderModel.AffiliateDetails(),

      qc_required: Joi.any(),

      identifier: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      prices: OrderModel.Prices().required(),

      current_status: OrderModel.BagStatusHistory().required(),

      quantity: Joi.number(),

      bag_update_time: Joi.number(),

      article: OrderModel.Article().required(),

      no_of_bags_order: Joi.number(),

      applied_promos: Joi.array().items(Joi.any()),

      gst_details: OrderModel.BagGSTDetails().required(),

      bag_status_history: OrderModel.BagStatusHistory(),

      b_id: Joi.number().required(),

      journey_type: Joi.string().allow("").required(),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      tags: Joi.array().items(Joi.string().allow("")),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      restore_promos: Joi.any(),

      display_name: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      original_bag_list: Joi.array().items(Joi.number()),

      entity_type: Joi.string().allow(""),

      parent_promo_bags: Joi.any(),

      line_number: Joi.number(),
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
      current: Joi.number().required(),

      item_total: Joi.number().required(),

      size: Joi.number().required(),

      has_next: Joi.boolean().required(),

      page_type: Joi.string().allow("").required(),
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
      shipment_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

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
      message: Joi.string().allow("").required(),

      status: Joi.number().required(),

      error_trace: Joi.string().allow(""),
    });
  }

  static StoreReassign() {
    return Joi.object({
      item_id: Joi.string().allow("").allow(null),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      affiliate_order_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      bag_id: Joi.number().allow(null),

      affiliate_id: Joi.string().allow("").allow(null),

      reason_ids: Joi.array().items(Joi.number()),

      fynd_order_id: Joi.string().allow("").allow(null),

      mongo_article_id: Joi.string().allow("").allow(null),

      set_id: Joi.string().allow("").allow(null),
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

      affiliate_bag_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),

      id: Joi.string().allow(""),
    });
  }

  static UpdateShipmentLockPayload() {
    return Joi.object({
      action: Joi.string().allow("").required(),

      entity_type: Joi.string().allow("").required(),

      action_type: Joi.string().allow("").required(),

      entities: Joi.array().items(OrderModel.Entities()).required(),
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
      shipment_id: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.Bags()),

      affiliate_shipment_id: Joi.string().allow(""),

      is_bag_locked: Joi.boolean(),

      is_shipment_locked: Joi.boolean(),

      status: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      original_filter: OrderModel.OriginalFilter(),

      lock_status: Joi.boolean().allow(null),
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
      platform_name: Joi.string().allow(""),

      to_datetime: Joi.string().allow(""),

      platform_id: Joi.string().allow(""),

      logo_url: Joi.string().allow(""),

      from_datetime: Joi.string().allow(""),

      company_id: Joi.number(),

      title: Joi.string().allow(""),

      id: Joi.number().required(),

      description: Joi.string().allow(""),

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
      exclude_bags_next_state: Joi.string().allow(""),

      status: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.ShipmentsRequest()),
    });
  }

  static UpdateShipmentStatusRequest() {
    return Joi.object({
      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      unlock_before_transition: Joi.boolean(),

      task: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

      force_transition: Joi.boolean(),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      final_state: Joi.any(),

      status: Joi.number(),

      meta: Joi.any(),

      message: Joi.string().allow(""),

      code: Joi.string().allow(""),

      stack_trace: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

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
      value: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static AffiliateAppConfig() {
    return Joi.object({
      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      id: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      owner: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),
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

      config: OrderModel.AffiliateConfig(),

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
      article_lookup: Joi.string().allow(""),

      bag_end_state: Joi.string().allow(""),

      affiliate: OrderModel.Affiliate().required(),

      create_user: Joi.boolean(),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      store_lookup: Joi.string().allow(""),
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

      pdf_links: OrderModel.MarketPlacePdf(),

      unit_price: Joi.number().required(),

      sku: Joi.string().allow("").required(),

      affiliate_meta: Joi.any().required(),

      delivery_charge: Joi.number().required(),

      affiliate_store_id: Joi.string().allow("").required(),

      discount: Joi.number().required(),

      avl_qty: Joi.number().required(),

      seller_identifier: Joi.string().allow("").required(),

      fynd_store_id: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      price_effective: Joi.number().required(),

      item_id: Joi.number().required(),

      modified_on: Joi.string().allow("").required(),

      price_marked: Joi.number().required(),

      transfer_price: Joi.number().required(),

      amount_paid: Joi.number().required(),

      item_size: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      identifier: Joi.any().required(),

      store_id: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      brand_id: Joi.number().required(),

      weight: Joi.any().required(),

      category: Joi.any().required(),

      quantity: Joi.number().required(),

      attributes: Joi.any().required(),

      _id: Joi.string().allow("").required(),

      dimension: Joi.any().required(),
    });
  }

  static ShipmentDetails() {
    return Joi.object({
      box_type: Joi.string().allow("").allow(null),

      affiliate_shipment_id: Joi.string().allow("").required(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      dp_id: Joi.number().allow(null),

      meta: Joi.any(),

      fulfillment_id: Joi.number().required(),

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
      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      to_pincode: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

      journey: Joi.string().allow("").required(),

      location_details: OrderModel.LocationDetails(),

      source: Joi.string().allow("").required(),

      identifier: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),
    });
  }

  static ShipmentData() {
    return Joi.object({
      shipment_data: OrderModel.ShipmentConfig().required(),
    });
  }

  static OrderUser() {
    return Joi.object({
      email: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      address1: Joi.string().allow("").allow(null),

      phone: Joi.number().required(),

      address2: Joi.string().allow("").allow(null),

      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),
    });
  }

  static OrderPriority() {
    return Joi.object({
      fulfilment_priority_text: Joi.string().allow(""),

      fulfilment_priority: Joi.number().allow(null),

      affiliate_priority_code: Joi.string().allow("").allow(null),
    });
  }

  static UserData() {
    return Joi.object({
      billing_user: OrderModel.OrderUser(),

      shipping_user: OrderModel.OrderUser(),
    });
  }

  static OrderInfo() {
    return Joi.object({
      discount: Joi.number().required(),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      coupon: Joi.string().allow("").allow(null),

      shipment: OrderModel.ShipmentData(),

      affiliate_order_id: Joi.string().allow(""),

      order_value: Joi.number().required(),

      cod_charges: Joi.number().required(),

      billing_address: OrderModel.OrderUser().required(),

      shipping_address: OrderModel.OrderUser().required(),

      order_priority: OrderModel.OrderPriority(),

      user: OrderModel.UserData().required(),

      payment: Joi.any(),

      delivery_charges: Joi.number().required(),

      payment_mode: Joi.string().allow("").required(),

      items: Joi.any().required(),
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

  static HistoryDict() {
    return Joi.object({
      l1_detail: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      ticket_id: Joi.string().allow(""),

      l2_detail: Joi.string().allow(""),

      bag_id: Joi.number(),

      message: Joi.string().allow("").required(),

      createdat: Joi.string().allow("").required(),

      ticket_url: Joi.string().allow(""),

      user: Joi.string().allow("").required(),

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

  static SmsDataPayload() {
    return Joi.object({
      shipment_id: Joi.number().required(),

      customer_name: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      phone_number: Joi.number().required(),

      payment_mode: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      country_code: Joi.string().allow("").required(),
    });
  }

  static SendSmsPayload() {
    return Joi.object({
      bag_id: Joi.number().required(),

      data: OrderModel.SmsDataPayload(),

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
      kafka_emission_status: Joi.number(),

      state_manager_used: Joi.string().allow(""),
    });
  }

  static ShipmentDetail() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),

      remarks: Joi.string().allow(""),

      status: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.number()),

      meta: OrderModel.Meta1().required(),

      id: Joi.number().required(),
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
      success: Joi.string().allow("").required(),

      result: Joi.array().items(OrderModel.OrderStatusData()),
    });
  }

  static ManualAssignDPToShipment() {
    return Joi.object({
      shipment_ids: Joi.array().items(Joi.string().allow("")),

      order_type: Joi.string().allow("").required(),

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
      rate: Joi.number().required(),

      breakup: Joi.array().items(Joi.any()),

      amount: Joi.any().required(),

      name: Joi.string().allow("").required(),
    });
  }

  static Charge() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      tax: OrderModel.Tax(),

      code: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      amount: Joi.any().required(),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      customer_code: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      alternate_mobile_number: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),

      title: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      state_code: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      shipping_type: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      address_type: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      geo_location: Joi.any(),

      slot: Joi.array().items(Joi.any()),
    });
  }

  static LineItem() {
    return Joi.object({
      seller_identifier: Joi.string().allow("").required(),

      external_line_id: Joi.string().allow(""),

      quantity: Joi.number(),

      meta: Joi.any(),

      charges: Joi.array().items(OrderModel.Charge()),

      custom_messasge: Joi.string().allow(""),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      confirm_by_date: Joi.string().allow(""),

      dp_pickup_slot: Joi.any(),

      pack_by_date: Joi.string().allow(""),

      dispatch_after_date: Joi.string().allow(""),

      dispatch_by_date: Joi.string().allow(""),

      customer_pickup_slot: Joi.any(),
    });
  }

  static Shipment() {
    return Joi.object({
      line_items: Joi.array().items(OrderModel.LineItem()).required(),

      processing_dates: OrderModel.ProcessingDates(),

      meta: Joi.any(),

      location_id: Joi.number().required(),

      priority: Joi.number(),

      external_shipment_id: Joi.string().allow(""),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      transaction_data: Joi.any(),

      mode: Joi.string().allow("").required(),

      refund_by: Joi.string().allow("").required(),

      meta: Joi.any(),

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
      customer_code: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      alternate_mobile_number: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),

      title: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      state_code: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      primary_mobile_number: Joi.string().allow("").required(),
    });
  }

  static TaxInfo() {
    return Joi.object({
      b2b_gstin_number: Joi.string().allow(""),

      gstin: Joi.string().allow(""),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      external_order_id: Joi.string().allow(""),

      meta: Joi.any(),

      charges: Joi.array().items(OrderModel.Charge()),

      shipping_info: OrderModel.ShippingInfo().required(),

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
      info: Joi.any(),

      status: Joi.number().required(),

      meta: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      request_id: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),

      exception: Joi.string().allow("").allow(null),
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

      mode_of_payment: Joi.string().allow(""),

      payment_methods: Joi.array().items(OrderModel.PaymentMethods()),
    });
  }

  static CreateChannelConfig() {
    return Joi.object({
      shipment_assignment: Joi.string().allow(""),

      dp_configuration: OrderModel.DpConfiguration(),

      logo_url: Joi.any(),

      lock_states: Joi.array().items(Joi.string().allow("")),

      payment_info: OrderModel.CreateChannelPaymentInfo(),

      location_reassignment: Joi.boolean(),
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
