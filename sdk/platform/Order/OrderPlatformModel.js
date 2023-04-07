const Joi = require("joi");

class OrderModel {
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

      value: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.FilterInfoOption()),

      type: Joi.string().allow("").required(),
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

  static ShipmentStatus() {
    return Joi.object({
      actual_status: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      mobile: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      avis_user_id: Joi.string().allow(""),

      email: Joi.string().allow(""),

      uid: Joi.number(),

      name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      first_name: Joi.string().allow(""),
    });
  }

  static Prices() {
    return Joi.object({
      delivery_charge: Joi.number(),

      refund_amount: Joi.number(),

      price_effective: Joi.number(),

      cod_charges: Joi.number(),

      coupon_value: Joi.number(),

      discount: Joi.number(),

      price_marked: Joi.number(),

      refund_credit: Joi.number(),

      tax_collected_at_source: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      amount_paid: Joi.number(),

      value_of_good: Joi.number(),

      cashback_applied: Joi.number(),

      transfer_price: Joi.number(),

      fynd_credits: Joi.number(),

      promotion_effective_discount: Joi.number(),

      cashback: Joi.number(),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      tax_collected_at_source: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),

      gst_fee: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      images: Joi.array().items(Joi.string().allow("")),

      can_cancel: Joi.boolean(),

      can_return: Joi.boolean(),

      code: Joi.string().allow(""),

      l3_category_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      department_id: Joi.number(),

      color: Joi.string().allow("").allow(null),

      size: Joi.string().allow(""),

      l1_category: Joi.array().items(Joi.string().allow("")),

      id: Joi.number(),

      l3_category: Joi.number(),

      image: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BagUnit() {
    return Joi.object({
      total_shipment_bags: Joi.number().required(),

      shipment_id: Joi.string().allow("").required(),

      can_cancel: Joi.boolean(),

      prices: OrderModel.Prices(),

      ordering_channel: Joi.string().allow("").required(),

      status: Joi.any().required(),

      bag_id: Joi.number().required(),

      can_return: Joi.boolean(),

      gst: OrderModel.GSTDetailsData(),

      item: OrderModel.PlatformItem(),

      item_quantity: Joi.number().required(),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      total_shipments_in_order: Joi.number().required(),

      shipment_id: Joi.string().allow(""),

      fulfilling_centre: Joi.string().allow("").required(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      payment_methods: Joi.any(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      shipment_status: OrderModel.ShipmentStatus(),

      user: OrderModel.UserDataInfo(),

      sla: Joi.any(),

      created_at: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),

      shipment_created_at: Joi.string().allow("").required(),

      total_bags_count: Joi.number().required(),

      application: Joi.any(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      company: Joi.any(),

      id: Joi.string().allow("").required(),

      channel: Joi.any(),
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

  static FulfillingStore() {
    return Joi.object({
      contact_person: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      city: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      id: Joi.number().required(),

      country: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      contact_person: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      city: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      ordering_store_id: Joi.number().required(),

      phone: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      bag_list: Joi.array().items(Joi.string().allow("")),

      shipment_id: Joi.string().allow(""),

      created_at: Joi.string().allow("").allow(null),

      status: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static InvoiceInfo() {
    return Joi.object({
      label_url: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),

      store_invoice_id: Joi.string().allow(""),

      credit_note_id: Joi.string().allow(""),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      state: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      email: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      address1: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      area: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      phone: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),
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

  static LockData() {
    return Joi.object({
      mto: Joi.boolean(),

      locked: Joi.boolean(),

      lock_message: Joi.string().allow(""),
    });
  }

  static Formatted() {
    return Joi.object({
      f_min: Joi.string().allow(""),

      f_max: Joi.string().allow(""),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      state: Joi.string().allow("").required(),

      address: Joi.string().allow("").allow(null).required(),

      ajio_site_id: Joi.string().allow(""),

      pincode: Joi.number().required(),

      name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      gstin: Joi.string().allow("").required(),
    });
  }

  static EinvoiceInfo() {
    return Joi.object({
      invoice: Joi.any(),

      credit_note: Joi.any(),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      timestamp: OrderModel.ShipmentTimeStamp(),

      order_type: Joi.string().allow("").allow(null),

      packaging_name: Joi.string().allow(""),

      awb_number: Joi.string().allow(""),

      due_date: Joi.string().allow(""),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      b2c_buyer_details: Joi.any().allow(null),

      shipment_weight: Joi.number(),

      debug_info: OrderModel.DebugInfo(),

      return_affiliate_order_id: Joi.string().allow(""),

      lock_data: OrderModel.LockData(),

      return_affiliate_shipment_id: Joi.string().allow(""),

      return_awb_number: Joi.string().allow(""),

      external: Joi.any(),

      dp_id: Joi.string().allow("").allow(null),

      forward_affiliate_order_id: Joi.string().allow(""),

      formatted: OrderModel.Formatted(),

      return_details: Joi.any(),

      dp_name: Joi.string().allow(""),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      assign_dp_from_sb: Joi.boolean(),

      bag_weight: Joi.any(),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      return_store_node: Joi.number(),

      dp_sort_key: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      po_number: Joi.string().allow(""),

      shipment_volumetric_weight: Joi.number(),

      store_invoice_updated_date: Joi.string().allow(""),

      dp_options: Joi.any(),

      same_store_available: Joi.boolean().required(),

      einvoice_info: OrderModel.EinvoiceInfo(),

      weight: Joi.number().required(),

      marketplace_store_id: Joi.string().allow(""),

      ewaybill_info: Joi.any().allow(null),
    });
  }

  static PDFLinks() {
    return Joi.object({
      invoice_a4: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      label: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      b2b: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      delivery_challan_a4: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      quantity: Joi.number(),

      due_date: Joi.string().allow("").allow(null),

      coupon_code: Joi.string().allow("").allow(null),

      channel_shipment_id: Joi.string().allow("").allow(null),

      box_type: Joi.string().allow("").allow(null),

      is_priority: Joi.boolean(),

      order_item_id: Joi.string().allow(""),

      employee_discount: Joi.number(),

      loyalty_discount: Joi.number(),

      size_level_total_qty: Joi.number().allow(null),

      channel_order_id: Joi.string().allow("").allow(null),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      affiliate_shipment_id: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow("").required(),

      company_affiliate_tag: Joi.string().allow(""),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      ad_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow("").required(),

      pdf_links: OrderModel.PDFLinks(),

      affiliate_id: Joi.string().allow(""),

      affiliate_meta: OrderModel.AffiliateMeta().required(),
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

      company_name: Joi.string().allow(""),

      company_contact: OrderModel.ContactDetails(),

      company_cin: Joi.string().allow(""),

      company_gst: Joi.string().allow(""),

      company_id: Joi.number(),
    });
  }

  static TrackingList() {
    return Joi.object({
      time: Joi.string().allow(""),

      is_current: Joi.boolean(),

      text: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      is_passed: Joi.boolean(),
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
      source: Joi.string().allow(""),

      tax_details: Joi.any(),

      fynd_order_id: Joi.string().allow("").required(),

      cod_charges: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),

      order_date: Joi.string().allow(""),

      ordering_channel: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      order_value: Joi.string().allow(""),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      app_state_name: Joi.string().allow(""),

      state_type: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      notify_customer: Joi.boolean(),

      app_facing: Joi.boolean(),

      app_display_name: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      bs_id: Joi.number().required(),

      journey_type: Joi.string().allow("").required(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      shipment_id: Joi.string().allow(""),

      delivery_awb_number: Joi.string().allow("").allow(null),

      state_type: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      delivery_partner_id: Joi.number().allow(null),

      reasons: Joi.array().items(Joi.any()),

      display_name: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      forward: Joi.boolean().allow(null),

      created_at: Joi.string().allow(""),

      app_display_name: Joi.string().allow(""),

      state_id: Joi.number(),

      store_id: Joi.number(),

      bsh_id: Joi.number(),

      status: Joi.string().allow("").required(),

      bag_id: Joi.number(),

      bag_state_mapper: OrderModel.BagStateMapper(),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      eway_bill_id: Joi.string().allow("").allow(null),

      name: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      id: Joi.number(),

      awb_no: Joi.string().allow(""),

      track_url: Joi.string().allow("").allow(null),

      country: Joi.string().allow(""),
    });
  }

  static Dimensions() {
    return Joi.object({
      is_default: Joi.boolean(),

      unit: Joi.string().allow(""),

      length: Joi.number(),

      height: Joi.number(),

      width: Joi.number(),
    });
  }

  static Meta() {
    return Joi.object({
      dimension: OrderModel.Dimensions(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      delivery_awb_number: Joi.string().allow(""),

      state_type: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      delivery_partner_id: Joi.number(),

      kafka_sync: Joi.boolean(),

      created_at: Joi.string().allow("").allow(null),

      current_status_id: Joi.number().required(),

      state_id: Joi.number(),

      store_id: Joi.number(),

      status: Joi.string().allow(""),

      bag_id: Joi.number(),

      bag_state_mapper: OrderModel.BagStateMapper(),
    });
  }

  static BagConfigs() {
    return Joi.object({
      is_returnable: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),
    });
  }

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      price_effective: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),

      amount_paid: Joi.number().required(),

      identifiers: OrderModel.Identifier().required(),

      coupon_value: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      gst_tag: Joi.string().allow("").required(),

      transfer_price: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      refund_credit: Joi.number().required(),

      discount: Joi.number().required(),

      total_units: Joi.number().required(),

      size: Joi.string().allow("").required(),

      gst_fee: Joi.number().required(),

      fynd_credits: Joi.number().required(),

      cod_charges: Joi.number().required(),

      price_marked: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number(),

      coupon_effective_discount: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      value_of_good: Joi.number().required(),

      promotion_effective_discount: Joi.number().required(),

      cashback: Joi.number().required(),
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
      promotion_type: Joi.string().allow(""),

      article_quantity: Joi.number(),

      mrp_promotion: Joi.boolean(),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      promotion_name: Joi.string().allow(""),

      amount: Joi.number(),

      promo_id: Joi.string().allow(""),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      uid: Joi.string().allow(""),

      return_config: Joi.any(),

      identifiers: Joi.any(),
    });
  }

  static BagGST() {
    return Joi.object({
      is_default_hsn_code: Joi.boolean(),

      gst_tax_percentage: Joi.number(),

      hsn_code: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      gstin_code: Joi.string().allow(""),

      value_of_good: Joi.number(),

      gst_fee: Joi.number(),

      brand_calculated_amount: Joi.number(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      latitude: Joi.number(),

      state: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      email: Joi.string().allow(""),

      longitude: Joi.number(),

      address2: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      version: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      city: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      area: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      country: Joi.string().allow(""),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      created_on: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      logo: Joi.string().allow("").required(),

      company: Joi.string().allow("").allow(null).required(),

      id: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),
    });
  }

  static OrderBags() {
    return Joi.object({
      quantity: Joi.number(),

      bag_id: Joi.number().required(),

      item: OrderModel.PlatformItem(),

      entity_type: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      current_status: OrderModel.CurrentStatus(),

      prices: OrderModel.Prices(),

      line_number: Joi.number(),

      bag_configs: OrderModel.BagConfigs(),

      financial_breakup: OrderModel.FinancialBreakup(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      display_name: Joi.string().allow(""),

      article: OrderModel.OrderBagArticle(),

      gst_details: OrderModel.BagGST(),

      can_return: Joi.boolean(),

      identifier: Joi.string().allow(""),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      parent_promo_bags: Joi.any(),

      seller_identifier: Joi.string().allow(""),

      brand: OrderModel.OrderBrandName(),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      invoice_id: Joi.string().allow(""),

      coupon: Joi.any(),

      payment_methods: Joi.any(),

      fulfilling_store: OrderModel.FulfillingStore(),

      ordering_store: OrderModel.OrderingStoreDetails(),

      shipment_status: Joi.string().allow(""),

      enable_dp_tracking: Joi.boolean(),

      total_items: Joi.number(),

      shipment_quantity: Joi.number(),

      status: OrderModel.ShipmentStatusData(),

      invoice: OrderModel.InvoiceInfo(),

      delivery_details: OrderModel.UserDetailsData(),

      platform_logo: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),

      custom_meta: Joi.array().items(Joi.any()),

      affiliate_details: OrderModel.AffiliateDetails(),

      operational_status: Joi.string().allow(""),

      packaging_type: Joi.string().allow(""),

      lock_status: Joi.boolean(),

      company_details: OrderModel.CompanyDetails(),

      forward_shipment_id: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      journey_type: Joi.string().allow(""),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      payments: OrderModel.ShipmentPayments(),

      picked_date: Joi.string().allow(""),

      gst_details: OrderModel.GSTDetailsData(),

      vertical: Joi.string().allow("").allow(null),

      billing_details: OrderModel.UserDetailsData(),

      payment_mode: Joi.string().allow(""),

      total_bags: Joi.number(),

      order: OrderModel.OrderDetailsData(),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      dp_details: OrderModel.DPDetailsData(),

      user_agent: Joi.string().allow(""),

      delivery_slot: Joi.any(),

      fulfilment_priority: Joi.number(),

      priority_text: Joi.string().allow("").allow(null),

      user: OrderModel.UserDataInfo(),

      meta: OrderModel.Meta(),

      bags: Joi.array().items(OrderModel.OrderBags()),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      message: Joi.string().allow(""),

      success: Joi.boolean().required(),
    });
  }

  static TaxDetails() {
    return Joi.object({
      pan_no: Joi.string().allow(""),

      gstin: Joi.string().allow(""),
    });
  }

  static TransactionData() {
    return Joi.object({
      payment_id: Joi.string().allow(""),

      terminal_id: Joi.string().allow(""),

      transaction_id: Joi.string().allow(""),

      entity: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      amount_paid: Joi.string().allow(""),

      unique_reference_number: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static BillingStaffDetails() {
    return Joi.object({
      last_name: Joi.string().allow(""),

      employee_code: Joi.string().allow(""),

      user: Joi.string().allow(""),

      staff_id: Joi.number(),

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
      cart_id: Joi.number(),

      order_type: Joi.string().allow(""),

      ordering_store: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      extra_meta: Joi.any(),

      order_platform: Joi.string().allow(""),

      payment_type: Joi.string().allow(""),

      order_tags: Joi.array().items(Joi.any()),

      mongo_cart_id: Joi.number(),

      company_logo: Joi.string().allow(""),

      transaction_data: OrderModel.TransactionData(),

      billing_staff_details: OrderModel.BillingStaffDetails(),

      staff: Joi.any(),

      platform_user_details: OrderModel.PlatformUserDetails(),

      comment: Joi.string().allow(""),

      files: Joi.array().items(Joi.any()),

      employee_id: Joi.number(),

      customer_note: Joi.string().allow(""),

      order_child_entities: Joi.array().items(Joi.string().allow("")),
    });
  }

  static OrderDict() {
    return Joi.object({
      tax_details: OrderModel.TaxDetails(),

      fynd_order_id: Joi.string().allow("").required(),

      payment_methods: Joi.any(),

      order_date: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),

      meta: OrderModel.OrderMeta(),
    });
  }

  static ShipmentDetailsResponse() {
    return Joi.object({
      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      order: OrderModel.OrderDict(),

      success: Joi.boolean().required(),
    });
  }

  static SubLane() {
    return Joi.object({
      text: Joi.string().allow(""),

      value: Joi.string().allow(""),

      actions: Joi.array().items(Joi.any()),

      index: Joi.number(),

      total_items: Joi.number(),
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
      user_info: OrderModel.UserDataInfo(),

      total_order_value: Joi.number(),

      order_id: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      order_created_time: Joi.string().allow(""),

      meta: Joi.any(),

      payment_mode: Joi.string().allow(""),

      order_value: Joi.number(),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

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
      items: Joi.array().items(OrderModel.PlatformOrderItems()),

      message: Joi.string().allow(""),

      success: Joi.boolean(),

      total_count: Joi.number(),

      page: OrderModel.Page(),

      lane: Joi.string().allow(""),
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
      text: Joi.string().allow("").required(),

      value: Joi.number().required(),

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
      last_location_recieved_at: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      meta: Joi.any(),

      reason: Joi.string().allow(""),

      status: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),
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
      processed: Joi.array().items(OrderModel.FiltersInfo()),

      action_centre: Joi.array().items(OrderModel.FiltersInfo()),

      returned: Joi.array().items(OrderModel.FiltersInfo()),

      unfulfilled: Joi.array().items(OrderModel.FiltersInfo()),

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
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static OmsReports() {
    return Joi.object({
      display_name: Joi.string().allow(""),

      report_name: Joi.string().allow(""),

      report_type: Joi.string().allow(""),

      report_created_at: Joi.string().allow("").allow(null),

      status: Joi.string().allow(""),

      s3_key: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),

      report_id: Joi.string().allow(""),

      request_details: Joi.any(),
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
      value: Joi.string().allow(""),

      type: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      success: Joi.boolean(),

      trace_id: Joi.string().allow(""),

      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

      data: Joi.array().items(Joi.any()),

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
      data: Joi.any(),

      store_code: Joi.string().allow(""),

      batch_id: Joi.string().allow("").required(),

      invoice_status: Joi.string().allow(""),

      store_id: Joi.string().allow(""),

      label: Joi.any(),

      invoice: Joi.any(),

      do_invoice_label_generated: Joi.boolean().required(),

      company_id: Joi.string().allow(""),

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
      namespace: Joi.string().allow(""),

      cdn: OrderModel.URL(),

      method: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      operation: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      upload: OrderModel.FileUploadResponse(),

      size: Joi.number(),

      tags: Joi.array().items(Joi.string().allow("")),

      content_type: Joi.string().allow(""),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      type: Joi.string().allow(""),

      has_next: Joi.boolean(),

      has_previous: Joi.boolean(),

      total: Joi.number(),

      current: Joi.number(),

      size: Joi.number(),
    });
  }

  static bulkListingData() {
    return Joi.object({
      failed_shipments: Joi.array().items(Joi.any()),

      user_id: Joi.string().allow(""),

      total: Joi.number(),

      store_code: Joi.string().allow(""),

      store_id: Joi.number(),

      failed: Joi.number(),

      status: Joi.string().allow(""),

      processing: Joi.number(),

      successful: Joi.number(),

      successful_shipments: Joi.array().items(Joi.any()),

      id: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      company_id: Joi.number(),

      file_name: Joi.string().allow(""),

      user_name: Joi.string().allow(""),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      excel_url: Joi.string().allow(""),

      batch_id: Joi.string().allow(""),

      store_name: Joi.string().allow(""),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      page: OrderModel.BulkListingPage(),

      data: Joi.array().items(OrderModel.bulkListingData()),

      error: Joi.string().allow(""),

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
      id: Joi.number(),

      question_set: Joi.array().items(OrderModel.QuestionSet()),

      display_name: Joi.string().allow(""),

      qc_type: Joi.array().items(Joi.string().allow("")),
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
      total_shipments_count: Joi.number(),

      processing_shipments_count: Joi.number(),

      batch_id: Joi.string().allow(""),

      successful_shipments_count: Joi.number(),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      failed_shipments_count: Joi.number(),

      company_id: Joi.string().allow(""),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      uploaded_by: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      success: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      status: Joi.boolean(),

      error: Joi.array().items(Joi.string().allow("")),

      uploaded_on: Joi.string().allow(""),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),
    });
  }

  static StoreAddress() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      state: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      longitude: Joi.number().required(),

      created_at: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      area: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      phone: Joi.string().allow("").allow(null).required(),

      country: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      address_category: Joi.string().allow("").required(),

      version: Joi.string().allow(""),

      address_type: Joi.string().allow("").required(),
    });
  }

  static Document() {
    return Joi.object({
      ds_type: Joi.string().allow("").required(),

      legal_name: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      verified: Joi.boolean().required(),
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

      enabled: Joi.boolean().required(),

      user: Joi.string().allow(""),

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

  static EInvoicePortalDetails() {
    return Joi.object({
      password: Joi.string().allow(""),

      user: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static StoreMeta() {
    return Joi.object({
      notification_emails: Joi.array().items(Joi.string().allow("")),

      additional_contact_details: Joi.any(),

      display_name: Joi.string().allow("").required(),

      gst_number: Joi.string().allow(""),

      documents: OrderModel.StoreDocuments(),

      product_return_config: Joi.any(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      timing: Joi.array().items(Joi.any()),

      ewaybill_portal_details: Joi.any(),

      stage: Joi.string().allow("").required(),
    });
  }

  static Store() {
    return Joi.object({
      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      is_archived: Joi.boolean(),

      login_username: Joi.string().allow("").required(),

      store_email: Joi.string().allow("").required(),

      parent_store_id: Joi.number(),

      city: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      state: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      longitude: Joi.number().required(),

      created_at: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      is_enabled_for_recon: Joi.boolean(),

      vat_no: Joi.string().allow("").allow(null),

      store_address_json: OrderModel.StoreAddress(),

      address1: Joi.string().allow("").required(),

      packaging_material_count: Joi.number(),

      fulfillment_channel: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      is_active: Joi.boolean(),

      store_active_from: Joi.string().allow("").allow(null),

      alohomora_user_id: Joi.number(),

      mall_area: Joi.string().allow("").allow(null),

      mall_name: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      country: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      location_type: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").allow(null),

      order_integration_id: Joi.string().allow(""),

      meta: OrderModel.StoreMeta().required(),

      s_id: Joi.string().allow("").required(),

      brand_id: Joi.any(),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      is_returnable: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),
    });
  }

  static Attributes() {
    return Joi.object({
      primary_material: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      essential: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      l1_category_id: Joi.number(),

      l3_category_name: Joi.string().allow(""),

      color: Joi.string().allow("").allow(null),

      can_cancel: Joi.boolean(),

      code: Joi.string().allow(""),

      gender: Joi.string().allow("").allow(null),

      l2_category: Joi.array().items(Joi.string().allow("")),

      last_updated_at: Joi.string().allow(""),

      attributes: OrderModel.Attributes().required(),

      slug_key: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      name: Joi.string().allow("").required(),

      l2_category_id: Joi.number(),

      size: Joi.string().allow("").required(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      can_return: Joi.boolean(),

      l3_category: Joi.number(),

      branch_url: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      webstore_product_url: Joi.string().allow("").allow(null),

      department_id: Joi.number(),

      brand_id: Joi.number().required(),

      image: Joi.array().items(Joi.string().allow("")).required(),

      brand: Joi.string().allow("").required(),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static Dates() {
    return Joi.object({
      order_created: Joi.string().allow(""),

      delivery_date: Joi.any(),
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
      shipping: Joi.number(),

      is_default: Joi.boolean(),

      unit: Joi.string().allow(""),
    });
  }

  static Article() {
    return Joi.object({
      dimensions: OrderModel.Dimensions(),

      identifiers: OrderModel.Identifier().required(),

      raw_meta: Joi.any(),

      code: Joi.string().allow(""),

      child_details: Joi.any().allow(null),

      _id: Joi.string().allow("").required(),

      esp_modified: Joi.any(),

      uid: Joi.string().allow("").required(),

      a_set: Joi.any().allow(null),

      size: Joi.string().allow("").required(),

      return_config: OrderModel.ReturnConfig(),

      weight: OrderModel.Weight(),

      seller_identifier: Joi.string().allow("").required(),

      is_set: Joi.boolean(),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      is_default_hsn_code: Joi.boolean(),

      gst_tax_percentage: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      cgst_tax_percentage: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      igst_gst_fee: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number().required(),

      igst_tax_percentage: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      gstin_code: Joi.string().allow("").allow(null),

      value_of_good: Joi.number().required(),

      sgst_tax_percentage: Joi.number().required(),

      gst_fee: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      sgst_gst_fee: Joi.string().allow("").required(),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_bag_id: Joi.string().allow("").required(),

      employee_discount: Joi.number(),

      loyalty_discount: Joi.number(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      total_gst_percentage: Joi.number(),

      po_tax_amount: Joi.number(),

      partial_can_ret: Joi.boolean(),

      po_line_amount: Joi.number(),

      docker_number: Joi.string().allow(""),

      item_base_price: Joi.number(),
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

      created_on: Joi.number(),

      credit_note_expiry_days: Joi.number().allow(null),

      credit_note_allowed: Joi.boolean(),

      start_date: Joi.string().allow("").allow(null),

      modified_on: Joi.number(),

      logo: Joi.string().allow(""),

      invoice_prefix: Joi.string().allow("").allow(null),

      script_last_ran: Joi.string().allow("").allow(null),

      company: Joi.string().allow("").required(),

      brand_id: Joi.number().required(),

      pickup_location: Joi.string().allow("").allow(null),

      brand_name: Joi.string().allow("").required(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      quantity: Joi.number(),

      reasons: Joi.array().items(Joi.any()),

      qc_required: Joi.any(),

      ordering_store: OrderModel.Store(),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      restore_promos: Joi.any(),

      item: OrderModel.Item().required(),

      article_details: OrderModel.ArticleDetails(),

      no_of_bags_order: Joi.number(),

      original_bag_list: Joi.array().items(Joi.number()),

      affiliate_details: OrderModel.AffiliateDetails(),

      entity_type: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      current_status: OrderModel.BagStatusHistory().required(),

      operational_status: Joi.string().allow(""),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      prices: OrderModel.Prices().required(),

      line_number: Joi.number(),

      journey_type: Joi.string().allow("").required(),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      applied_promos: Joi.array().items(Joi.any()),

      dates: OrderModel.Dates(),

      display_name: Joi.string().allow(""),

      bag_update_time: Joi.number(),

      article: OrderModel.Article().required(),

      b_type: Joi.string().allow(""),

      gst_details: OrderModel.BagGSTDetails().required(),

      bag_status_history: OrderModel.BagStatusHistory(),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      identifier: Joi.string().allow(""),

      b_id: Joi.number().required(),

      order_integration_id: Joi.string().allow("").allow(null),

      parent_promo_bags: Joi.any(),

      meta: OrderModel.BagMeta(),

      restore_coupon: Joi.boolean(),

      tags: Joi.array().items(Joi.string().allow("")),

      seller_identifier: Joi.string().allow(""),

      brand: OrderModel.Brand().required(),
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

      has_next: Joi.boolean().required(),

      current: Joi.number().required(),

      item_total: Joi.number().required(),

      size: Joi.number().required(),
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

      payment_receipt: Joi.string().allow(""),

      invoice_receipt: Joi.string().allow(""),

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
