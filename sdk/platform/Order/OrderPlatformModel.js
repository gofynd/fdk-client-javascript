const Joi = require("joi");

class OrderModel {
  static PaymentModeInfo() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      status: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),
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
      image: Joi.array().items(Joi.string().allow("")),

      can_return: Joi.boolean(),

      department_id: Joi.number(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      l3_category: Joi.number(),

      l3_category_name: Joi.string().allow(""),

      color: Joi.string().allow("").allow(null),

      size: Joi.string().allow(""),

      id: Joi.number(),

      name: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      code: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      value_of_good: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),

      brand_calculated_amount: Joi.number().required(),

      gst_fee: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),
    });
  }

  static Prices() {
    return Joi.object({
      fynd_credits: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      price_marked: Joi.number(),

      transfer_price: Joi.number(),

      cod_charges: Joi.number(),

      cashback: Joi.number(),

      refund_credit: Joi.number(),

      value_of_good: Joi.number(),

      refund_amount: Joi.number(),

      price_effective: Joi.number(),

      coupon_value: Joi.number(),

      delivery_charge: Joi.number(),

      cashback_applied: Joi.number(),

      discount: Joi.number(),

      promotion_effective_discount: Joi.number(),

      amount_paid: Joi.number(),

      tax_collected_at_source: Joi.number(),
    });
  }

  static BagUnit() {
    return Joi.object({
      can_return: Joi.boolean(),

      item_quantity: Joi.number().required(),

      status: Joi.any().required(),

      bag_id: Joi.number().required(),

      total_shipment_bags: Joi.number().required(),

      item: OrderModel.PlatformItem(),

      shipment_id: Joi.string().allow("").required(),

      can_cancel: Joi.boolean(),

      gst: OrderModel.GSTDetailsData(),

      prices: OrderModel.Prices(),

      ordering_channel: Joi.string().allow("").required(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      last_name: Joi.string().allow(""),

      avis_user_id: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      first_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      mobile: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      total_bags_count: Joi.number().required(),

      channel: Joi.any(),

      shipment_created_at: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      total_shipments_in_order: Joi.number().required(),

      fulfilling_centre: Joi.string().allow("").required(),

      payment_methods: Joi.any(),

      id: Joi.string().allow("").required(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      sla: Joi.any(),

      shipment_id: Joi.string().allow(""),

      shipment_status: OrderModel.ShipmentStatus(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      prices: OrderModel.Prices(),

      application: Joi.any(),

      user: OrderModel.UserDataInfo(),
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
      applied_filters: Joi.any(),

      items: Joi.array().items(OrderModel.ShipmentItem()),

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

  static ShipmentPayments() {
    return Joi.object({
      source: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      mode: Joi.string().allow(""),
    });
  }

  static InvoiceInfo() {
    return Joi.object({
      updated_date: Joi.string().allow(""),

      store_invoice_id: Joi.string().allow(""),

      label_url: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      credit_note_id: Joi.string().allow(""),
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

      company_cin: Joi.string().allow(""),

      company_id: Joi.number(),

      address: Joi.any(),

      company_gst: Joi.string().allow(""),

      company_contact: OrderModel.ContactDetails(),
    });
  }

  static Formatted() {
    return Joi.object({
      f_max: Joi.string().allow(""),

      f_min: Joi.string().allow(""),
    });
  }

  static LockData() {
    return Joi.object({
      locked: Joi.boolean(),

      mto: Joi.boolean(),

      lock_message: Joi.string().allow(""),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      gstin: Joi.string().allow("").required(),

      ajio_site_id: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      address: Joi.string().allow("").allow(null).required(),

      pincode: Joi.number().required(),
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

  static EinvoiceInfo() {
    return Joi.object({
      invoice: Joi.any(),

      credit_note: Joi.any(),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      dp_sort_key: Joi.string().allow(""),

      packaging_name: Joi.string().allow(""),

      forward_affiliate_order_id: Joi.string().allow(""),

      shipment_volumetric_weight: Joi.number(),

      dp_name: Joi.string().allow(""),

      marketplace_store_id: Joi.string().allow(""),

      dp_options: Joi.any(),

      shipment_weight: Joi.number(),

      order_type: Joi.string().allow("").allow(null),

      return_affiliate_shipment_id: Joi.string().allow(""),

      ewaybill_info: Joi.any().allow(null),

      formatted: OrderModel.Formatted(),

      store_invoice_updated_date: Joi.string().allow(""),

      return_details: Joi.any(),

      return_store_node: Joi.number(),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      lock_data: OrderModel.LockData(),

      dp_id: Joi.string().allow("").allow(null),

      same_store_available: Joi.boolean().required(),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      b2c_buyer_details: Joi.any().allow(null),

      awb_number: Joi.string().allow(""),

      weight: Joi.number().required(),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      timestamp: OrderModel.ShipmentTimeStamp(),

      debug_info: OrderModel.DebugInfo(),

      due_date: Joi.string().allow(""),

      return_awb_number: Joi.string().allow(""),

      return_affiliate_order_id: Joi.string().allow(""),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      assign_dp_from_sb: Joi.boolean(),

      bag_weight: Joi.any(),

      po_number: Joi.string().allow(""),

      einvoice_info: OrderModel.EinvoiceInfo(),

      external: Joi.any(),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      due_date: Joi.string().allow("").allow(null),

      loyalty_discount: Joi.number(),

      channel_shipment_id: Joi.string().allow("").allow(null),

      order_item_id: Joi.string().allow(""),

      quantity: Joi.number(),

      box_type: Joi.string().allow("").allow(null),

      channel_order_id: Joi.string().allow("").allow(null),

      size_level_total_qty: Joi.number().allow(null),

      is_priority: Joi.boolean(),

      employee_discount: Joi.number(),

      coupon_code: Joi.string().allow("").allow(null),
    });
  }

  static PDFLinks() {
    return Joi.object({
      invoice_pos: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      b2b: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      label_a6: Joi.string().allow(""),

      label: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      credit_note_url: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      delivery_challan_a4: Joi.string().allow(""),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      shipment_meta: OrderModel.ShipmentMeta().required(),

      affiliate_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow("").required(),

      ad_id: Joi.string().allow(""),

      company_affiliate_tag: Joi.string().allow(""),

      affiliate_store_id: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      pdf_links: OrderModel.PDFLinks(),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      cod_charges: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      tax_details: Joi.any(),

      source: Joi.string().allow(""),

      order_value: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),

      fynd_order_id: Joi.string().allow("").required(),

      order_date: Joi.string().allow(""),

      ordering_channel: Joi.string().allow(""),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      id: Joi.number().required(),

      phone: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      code: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      area: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      address1: Joi.string().allow(""),

      email: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow(""),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      app_facing: Joi.boolean(),

      display_name: Joi.string().allow("").required(),

      journey_type: Joi.string().allow("").required(),

      state_type: Joi.string().allow("").required(),

      app_display_name: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      app_state_name: Joi.string().allow(""),

      bs_id: Joi.number().required(),

      notify_customer: Joi.boolean(),

      is_active: Joi.boolean(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      state_id: Joi.number(),

      created_at: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      store_id: Joi.number(),

      state_type: Joi.string().allow(""),

      status: Joi.string().allow("").required(),

      bag_id: Joi.number(),

      delivery_awb_number: Joi.string().allow("").allow(null),

      delivery_partner_id: Joi.number().allow(null),

      bag_state_mapper: OrderModel.BagStateMapper(),

      app_display_name: Joi.string().allow(""),

      forward: Joi.boolean().allow(null),

      updated_at: Joi.string().allow(""),

      reasons: Joi.array().items(Joi.any()),

      shipment_id: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      bsh_id: Joi.number(),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      company: Joi.string().allow("").allow(null).required(),

      modified_on: Joi.string().allow(""),

      brand_name: Joi.string().allow("").required(),

      id: Joi.number().required(),

      logo: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),
    });
  }

  static BagGST() {
    return Joi.object({
      gst_fee: Joi.number(),

      gst_tag: Joi.string().allow(""),

      value_of_good: Joi.number(),

      gstin_code: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      brand_calculated_amount: Joi.number(),

      is_default_hsn_code: Joi.boolean(),

      gst_tax_percentage: Joi.number(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      created_at: Joi.string().allow(""),

      city: Joi.string().allow(""),

      area: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      state: Joi.string().allow(""),

      version: Joi.string().allow(""),

      country: Joi.string().allow(""),

      longitude: Joi.number(),

      updated_at: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      email: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      latitude: Joi.number(),
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
      amount: Joi.number(),

      mrp_promotion: Joi.boolean(),

      promo_id: Joi.string().allow(""),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      article_quantity: Joi.number(),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      promotion_name: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      state_id: Joi.number(),

      created_at: Joi.string().allow("").allow(null),

      store_id: Joi.number(),

      state_type: Joi.string().allow(""),

      status: Joi.string().allow(""),

      bag_id: Joi.number(),

      delivery_awb_number: Joi.string().allow(""),

      current_status_id: Joi.number().required(),

      delivery_partner_id: Joi.number(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      updated_at: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),
    });
  }

  static BagConfigs() {
    return Joi.object({
      allow_force_return: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
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
      cashback: Joi.number().required(),

      value_of_good: Joi.number().required(),

      promotion_effective_discount: Joi.number().required(),

      gst_fee: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      total_units: Joi.number().required(),

      price_effective: Joi.number().required(),

      coupon_value: Joi.number().required(),

      identifiers: OrderModel.Identifier().required(),

      cashback_applied: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),

      discount: Joi.number().required(),

      amount_paid: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      fynd_credits: Joi.number().required(),

      price_marked: Joi.number().required(),

      refund_credit: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      delivery_charge: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      transfer_price: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      cod_charges: Joi.number().required(),

      size: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

      brand_calculated_amount: Joi.number().required(),

      tax_collected_at_source: Joi.number(),
    });
  }

  static OrderBags() {
    return Joi.object({
      brand: OrderModel.OrderBrandName(),

      quantity: Joi.number(),

      identifier: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      gst_details: OrderModel.BagGST(),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      line_number: Joi.number(),

      entity_type: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      current_status: OrderModel.CurrentStatus(),

      bag_configs: OrderModel.BagConfigs(),

      parent_promo_bags: Joi.any(),

      prices: OrderModel.Prices(),

      can_return: Joi.boolean(),

      display_name: Joi.string().allow(""),

      article: OrderModel.OrderBagArticle(),

      bag_id: Joi.number().required(),

      financial_breakup: OrderModel.FinancialBreakup(),

      item: OrderModel.PlatformItem(),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      created_at: Joi.string().allow("").allow(null),

      bag_list: Joi.array().items(Joi.string().allow("")),

      status: Joi.string().allow(""),

      id: Joi.number(),

      shipment_id: Joi.string().allow(""),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      awb_no: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      eway_bill_id: Joi.string().allow("").allow(null),

      country: Joi.string().allow(""),

      id: Joi.number(),

      name: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      track_url: Joi.string().allow("").allow(null),
    });
  }

  static Dimensions() {
    return Joi.object({
      is_default: Joi.boolean(),

      unit: Joi.string().allow(""),

      width: Joi.number(),

      height: Joi.number(),

      length: Joi.number(),
    });
  }

  static Meta() {
    return Joi.object({
      dimension: OrderModel.Dimensions(),
    });
  }

  static TrackingList() {
    return Joi.object({
      is_current: Joi.boolean(),

      status: Joi.string().allow("").required(),

      is_passed: Joi.boolean(),

      text: Joi.string().allow("").required(),

      time: Joi.string().allow(""),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      ordering_store_id: Joi.number().required(),

      city: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      code: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      payments: OrderModel.ShipmentPayments(),

      invoice: OrderModel.InvoiceInfo(),

      enable_dp_tracking: Joi.boolean(),

      payment_mode: Joi.string().allow(""),

      shipment_quantity: Joi.number(),

      company_details: OrderModel.CompanyDetails(),

      affiliate_details: OrderModel.AffiliateDetails(),

      order: OrderModel.OrderDetailsData(),

      shipment_id: Joi.string().allow("").required(),

      shipment_status: Joi.string().allow(""),

      fulfilling_store: OrderModel.FulfillingStore(),

      coupon: Joi.any(),

      gst_details: OrderModel.GSTDetailsData(),

      packaging_type: Joi.string().allow(""),

      custom_meta: Joi.array().items(Joi.any()),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      invoice_id: Joi.string().allow(""),

      billing_details: OrderModel.UserDetailsData(),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      vertical: Joi.string().allow("").allow(null),

      fulfilment_priority: Joi.number(),

      platform_logo: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.OrderBags()),

      user: OrderModel.UserDataInfo(),

      total_bags: Joi.number(),

      journey_type: Joi.string().allow(""),

      user_agent: Joi.string().allow(""),

      status: OrderModel.ShipmentStatusData(),

      priority_text: Joi.string().allow("").allow(null),

      dp_details: OrderModel.DPDetailsData(),

      delivery_slot: Joi.any(),

      meta: OrderModel.Meta(),

      prices: OrderModel.Prices(),

      lock_status: Joi.boolean(),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      picked_date: Joi.string().allow(""),

      payment_methods: Joi.any(),

      delivery_details: OrderModel.UserDetailsData(),

      total_items: Joi.number(),

      operational_status: Joi.string().allow(""),

      forward_shipment_id: Joi.string().allow(""),

      ordering_store: OrderModel.OrderingStoreDetails(),
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
      pan_no: Joi.string().allow(""),

      gstin: Joi.string().allow(""),
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
      last_name: Joi.string().allow(""),

      staff_id: Joi.number(),

      first_name: Joi.string().allow(""),

      employee_code: Joi.string().allow(""),

      user: Joi.string().allow(""),
    });
  }

  static TransactionData() {
    return Joi.object({
      entity: Joi.string().allow(""),

      status: Joi.string().allow(""),

      terminal_id: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      transaction_id: Joi.string().allow(""),

      payment_id: Joi.string().allow(""),

      amount_paid: Joi.string().allow(""),

      unique_reference_number: Joi.string().allow(""),
    });
  }

  static OrderMeta() {
    return Joi.object({
      customer_note: Joi.string().allow(""),

      order_platform: Joi.string().allow(""),

      payment_type: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      cart_id: Joi.number(),

      platform_user_details: OrderModel.PlatformUserDetails(),

      comment: Joi.string().allow(""),

      staff: Joi.any(),

      employee_id: Joi.number(),

      files: Joi.array().items(Joi.any()),

      billing_staff_details: OrderModel.BillingStaffDetails(),

      extra_meta: Joi.any(),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      transaction_data: OrderModel.TransactionData(),

      currency_symbol: Joi.string().allow(""),

      order_tags: Joi.array().items(Joi.any()),

      company_logo: Joi.string().allow(""),

      mongo_cart_id: Joi.number(),

      ordering_store: Joi.number(),
    });
  }

  static OrderDict() {
    return Joi.object({
      payment_methods: Joi.any(),

      order_date: Joi.string().allow("").required(),

      tax_details: OrderModel.TaxDetails(),

      meta: OrderModel.OrderMeta(),

      fynd_order_id: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),
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
      index: Joi.number(),

      value: Joi.string().allow(""),

      total_items: Joi.number(),

      text: Joi.string().allow(""),

      actions: Joi.array().items(Joi.any()),
    });
  }

  static SuperLane() {
    return Joi.object({
      text: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.SubLane()),

      total_items: Joi.number(),

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
      value: Joi.string().allow(""),

      name: Joi.string().allow(""),

      display: Joi.string().allow(""),
    });
  }

  static PlatformOrderItems() {
    return Joi.object({
      channel: OrderModel.PlatformChannel(),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      user_info: OrderModel.UserDataInfo(),

      order_created_time: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      meta: Joi.any(),

      total_order_value: Joi.number(),

      order_value: Joi.number(),
    });
  }

  static OrderListingResponse() {
    return Joi.object({
      lane: Joi.string().allow(""),

      success: Joi.boolean(),

      message: Joi.string().allow(""),

      total_count: Joi.number(),

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
      awb: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      status: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      meta: Joi.any(),

      account_name: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),
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
      display_name: Joi.string().allow(""),

      report_created_at: Joi.string().allow("").allow(null),

      report_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      report_type: Joi.string().allow(""),

      report_name: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),

      s3_key: Joi.string().allow(""),

      request_details: Joi.any(),
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
      value: Joi.string().allow(""),

      type: Joi.string().allow(""),

      message: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      success: Joi.boolean(),

      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

      trace_id: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      data: Joi.array().items(Joi.any()),
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

      do_invoice_label_generated: Joi.boolean().required(),

      store_id: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      batch_id: Joi.string().allow("").required(),

      label: Joi.any(),

      company_id: Joi.string().allow(""),

      data: Joi.any(),

      invoice_status: Joi.string().allow(""),
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

      file_name: Joi.string().allow(""),

      upload: OrderModel.FileUploadResponse(),

      size: Joi.number(),

      method: Joi.string().allow(""),

      content_type: Joi.string().allow(""),

      operation: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      file_path: Joi.string().allow(""),

      cdn: OrderModel.URL(),
    });
  }

  static bulkListingData() {
    return Joi.object({
      processing: Joi.number(),

      store_name: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      total: Joi.number(),

      batch_id: Joi.string().allow(""),

      company_id: Joi.number(),

      user_name: Joi.string().allow(""),

      successful_shipments: Joi.array().items(Joi.any()),

      successful: Joi.number(),

      status: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      failed: Joi.number(),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      store_id: Joi.number(),

      id: Joi.string().allow(""),

      excel_url: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      failed_shipments: Joi.array().items(Joi.any()),

      uploaded_on: Joi.string().allow(""),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      size: Joi.number(),

      type: Joi.string().allow(""),

      total: Joi.number(),

      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

      current: Joi.number(),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      data: Joi.array().items(OrderModel.bulkListingData()),

      success: Joi.boolean(),

      page: OrderModel.BulkListingPage(),

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
      status: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static BulkActionDetailsDataField() {
    return Joi.object({
      failed_shipments_count: Joi.number(),

      batch_id: Joi.string().allow(""),

      processing_shipments_count: Joi.number(),

      successful_shipments_count: Joi.number(),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      company_id: Joi.string().allow(""),

      total_shipments_count: Joi.number(),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      success: Joi.string().allow(""),

      error: Joi.array().items(Joi.string().allow("")),

      status: Joi.boolean(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      message: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uploaded_by: Joi.string().allow(""),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      uploaded_on: Joi.string().allow(""),
    });
  }

  static Brand() {
    return Joi.object({
      credit_note_allowed: Joi.boolean(),

      brand_id: Joi.number().required(),

      company: Joi.string().allow("").required(),

      invoice_prefix: Joi.string().allow("").allow(null),

      script_last_ran: Joi.string().allow("").allow(null),

      modified_on: Joi.number(),

      pickup_location: Joi.string().allow("").allow(null),

      brand_name: Joi.string().allow("").required(),

      start_date: Joi.string().allow("").allow(null),

      is_virtual_invoice: Joi.boolean().allow(null),

      logo: Joi.string().allow(""),

      created_on: Joi.number(),

      credit_note_expiry_days: Joi.number().allow(null),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      gst_fee: Joi.number().required(),

      cgst_tax_percentage: Joi.number().required(),

      sgst_tax_percentage: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),

      igst_gst_fee: Joi.string().allow("").required(),

      gstin_code: Joi.string().allow("").allow(null),

      hsn_code: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow("").required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      igst_tax_percentage: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      is_default_hsn_code: Joi.boolean(),

      gst_tax_percentage: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      is_returnable: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      po_line_amount: Joi.number(),

      total_gst_percentage: Joi.number(),

      docker_number: Joi.string().allow(""),

      item_base_price: Joi.number(),

      partial_can_ret: Joi.boolean(),

      po_tax_amount: Joi.number(),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }

  static Weight() {
    return Joi.object({
      shipping: Joi.number(),

      unit: Joi.string().allow(""),

      is_default: Joi.boolean(),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      returnable: Joi.boolean(),

      unit: Joi.string().allow(""),

      time: Joi.number(),
    });
  }

  static Article() {
    return Joi.object({
      is_set: Joi.boolean(),

      raw_meta: Joi.any(),

      weight: OrderModel.Weight(),

      dimensions: OrderModel.Dimensions(),

      seller_identifier: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      size: Joi.string().allow("").required(),

      return_config: OrderModel.ReturnConfig(),

      child_details: Joi.any().allow(null),

      identifiers: OrderModel.Identifier().required(),

      a_set: Joi.any().allow(null),

      esp_modified: Joi.any(),

      code: Joi.string().allow(""),

      uid: Joi.string().allow("").required(),
    });
  }

  static Dates() {
    return Joi.object({
      delivery_date: Joi.any(),

      order_created: Joi.string().allow(""),
    });
  }

  static Attributes() {
    return Joi.object({
      primary_color_hex: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      primary_color: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      essential: Joi.string().allow(""),

      primary_material: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      department_id: Joi.number(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      l3_category: Joi.number(),

      brand: Joi.string().allow("").required(),

      color: Joi.string().allow("").allow(null),

      branch_url: Joi.string().allow("").allow(null),

      can_cancel: Joi.boolean(),

      brand_id: Joi.number().required(),

      attributes: OrderModel.Attributes().required(),

      webstore_product_url: Joi.string().allow("").allow(null),

      item_id: Joi.number().required(),

      gender: Joi.string().allow("").allow(null),

      l2_category: Joi.array().items(Joi.string().allow("")),

      last_updated_at: Joi.string().allow(""),

      l2_category_id: Joi.number(),

      meta: Joi.any(),

      code: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")).required(),

      can_return: Joi.boolean(),

      size: Joi.string().allow("").required(),

      slug_key: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      l3_category_name: Joi.string().allow(""),

      l1_category_id: Joi.number(),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      loyalty_discount: Joi.number(),

      affiliate_bag_id: Joi.string().allow("").required(),

      employee_discount: Joi.number(),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),
    });
  }

  static StoreAddress() {
    return Joi.object({
      state: Joi.string().allow("").required(),

      version: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      area: Joi.string().allow(""),

      contact_person: Joi.string().allow("").required(),

      address_category: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      phone: Joi.string().allow("").allow(null).required(),

      latitude: Joi.number().required(),

      created_at: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      updated_at: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      address1: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow("").required(),
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

      verified: Joi.boolean().required(),

      url: Joi.string().allow(""),

      ds_type: Joi.string().allow("").required(),
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
      gst_number: Joi.string().allow(""),

      display_name: Joi.string().allow("").required(),

      ewaybill_portal_details: Joi.any(),

      product_return_config: Joi.any(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      timing: Joi.array().items(Joi.any()),

      documents: OrderModel.StoreDocuments(),

      additional_contact_details: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      stage: Joi.string().allow("").required(),
    });
  }

  static Store() {
    return Joi.object({
      order_integration_id: Joi.string().allow(""),

      parent_store_id: Joi.number(),

      alohomora_user_id: Joi.number(),

      packaging_material_count: Joi.number(),

      state: Joi.string().allow("").required(),

      is_archived: Joi.boolean(),

      store_active_from: Joi.string().allow("").allow(null),

      address1: Joi.string().allow("").required(),

      brand_id: Joi.any(),

      contact_person: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      is_enabled_for_recon: Joi.boolean(),

      fulfillment_channel: Joi.string().allow("").required(),

      store_address_json: OrderModel.StoreAddress(),

      store_email: Joi.string().allow("").required(),

      vat_no: Joi.string().allow("").allow(null),

      address2: Joi.string().allow(""),

      meta: OrderModel.StoreMeta().required(),

      code: Joi.string().allow(""),

      phone: Joi.number().required(),

      is_active: Joi.boolean(),

      s_id: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      created_at: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      mall_area: Joi.string().allow("").allow(null),

      country: Joi.string().allow("").required(),

      login_username: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      mall_name: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").allow(null),

      pincode: Joi.string().allow("").required(),

      location_type: Joi.string().allow("").required(),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      order_integration_id: Joi.string().allow("").allow(null),

      brand: OrderModel.Brand().required(),

      quantity: Joi.number(),

      identifier: Joi.string().allow(""),

      affiliate_details: OrderModel.AffiliateDetails(),

      qc_required: Joi.any(),

      shipment_id: Joi.string().allow(""),

      b_type: Joi.string().allow(""),

      gst_details: OrderModel.BagGSTDetails().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      applied_promos: Joi.array().items(Joi.any()),

      line_number: Joi.number(),

      entity_type: Joi.string().allow(""),

      restore_coupon: Joi.boolean(),

      seller_identifier: Joi.string().allow(""),

      current_status: OrderModel.BagStatusHistory().required(),

      bag_status_history: OrderModel.BagStatusHistory(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      no_of_bags_order: Joi.number(),

      reasons: Joi.array().items(Joi.any()),

      b_id: Joi.number().required(),

      restore_promos: Joi.any(),

      journey_type: Joi.string().allow("").required(),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      article_details: OrderModel.ArticleDetails(),

      parent_promo_bags: Joi.any(),

      original_bag_list: Joi.array().items(Joi.number()),

      meta: OrderModel.BagMeta(),

      prices: OrderModel.Prices().required(),

      display_name: Joi.string().allow(""),

      article: OrderModel.Article().required(),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      dates: OrderModel.Dates(),

      item: OrderModel.Item().required(),

      operational_status: Joi.string().allow(""),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      bag_update_time: Joi.number(),

      ordering_store: OrderModel.Store(),
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

      size: Joi.number().required(),

      has_next: Joi.boolean().required(),

      current: Joi.number().required(),

      page_type: Joi.string().allow("").required(),
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

      order_id: Joi.string().allow(""),

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
      error: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

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
      affiliate_bag_id: Joi.string().allow("").allow(null),

      item_id: Joi.string().allow("").allow(null),

      bag_id: Joi.number().allow(null),

      reason_ids: Joi.array().items(Joi.number()),

      affiliate_order_id: Joi.string().allow("").allow(null),

      mongo_article_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      set_id: Joi.string().allow("").allow(null),

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
      id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),

      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),
    });
  }

  static UpdateShipmentLockPayload() {
    return Joi.object({
      action_type: Joi.string().allow("").required(),

      entities: Joi.array().items(OrderModel.Entities()).required(),

      action: Joi.string().allow("").required(),

      entity_type: Joi.string().allow("").required(),
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

  static OriginalFilter() {
    return Joi.object({
      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),
    });
  }

  static CheckResponse() {
    return Joi.object({
      status: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.Bags()),

      lock_status: Joi.boolean().allow(null),

      is_bag_locked: Joi.boolean(),

      is_shipment_locked: Joi.boolean(),

      affiliate_shipment_id: Joi.string().allow(""),

      original_filter: OrderModel.OriginalFilter(),

      affiliate_id: Joi.string().allow(""),
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
      id: Joi.number().required(),

      platform_name: Joi.string().allow(""),

      platform_id: Joi.string().allow(""),

      title: Joi.string().allow(""),

      company_id: Joi.number(),

      created_at: Joi.string().allow(""),

      from_datetime: Joi.string().allow(""),

      logo_url: Joi.string().allow(""),

      to_datetime: Joi.string().allow(""),

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
      quantity: Joi.number(),

      line_number: Joi.number(),

      identifier: Joi.string().allow(""),
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

  static Products() {
    return Joi.object({
      quantity: Joi.number(),

      line_number: Joi.number(),

      identifier: Joi.string().allow(""),
    });
  }

  static ShipmentsRequest() {
    return Joi.object({
      reasons: OrderModel.ReasonsData(),

      data_updates: OrderModel.DataUpdates(),

      products: Joi.array().items(OrderModel.Products()),

      identifier: Joi.string().allow("").required(),
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

      task: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      force_transition: Joi.boolean(),

      lock_after_transition: Joi.boolean(),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      status: Joi.number(),

      message: Joi.string().allow(""),

      stack_trace: Joi.string().allow(""),

      meta: Joi.any(),

      code: Joi.string().allow(""),

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
      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

      order: OrderModel.AffiliateInventoryOrderConfig(),

      payment: OrderModel.AffiliateInventoryPaymentConfig(),

      inventory: OrderModel.AffiliateInventoryStoreConfig(),

      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),
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
      id: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),

      owner: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

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
      id: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),

      config: OrderModel.AffiliateConfig(),
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

      article_lookup: Joi.string().allow(""),

      create_user: Joi.boolean(),

      bag_end_state: Joi.string().allow(""),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      store_lookup: Joi.string().allow(""),
    });
  }

  static OrderUser() {
    return Joi.object({
      last_name: Joi.string().allow("").required(),

      address1: Joi.string().allow("").allow(null),

      mobile: Joi.number().required(),

      first_name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address2: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      phone: Joi.number().required(),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      quantity: Joi.number().required(),

      _id: Joi.string().allow("").required(),

      weight: Joi.any().required(),

      attributes: Joi.any().required(),

      category: Joi.any().required(),

      dimension: Joi.any().required(),

      brand_id: Joi.number().required(),
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
      shipments: Joi.number().required(),

      dp_id: Joi.number().allow(null),

      meta: Joi.any(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      fulfillment_id: Joi.number().required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      box_type: Joi.string().allow("").allow(null),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      payment_mode: Joi.string().allow("").required(),

      identifier: Joi.string().allow("").required(),

      location_details: OrderModel.LocationDetails(),

      source: Joi.string().allow("").required(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      to_pincode: Joi.string().allow("").required(),

      journey: Joi.string().allow("").required(),

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
      invoice: Joi.string().allow("").allow(null),

      label: Joi.string().allow("").allow(null),
    });
  }

  static AffiliateBag() {
    return Joi.object({
      affiliate_meta: Joi.any().required(),

      modified_on: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      seller_identifier: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      price_marked: Joi.number().required(),

      company_id: Joi.number().required(),

      store_id: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      identifier: Joi.any().required(),

      sku: Joi.string().allow("").required(),

      quantity: Joi.number().required(),

      item_size: Joi.string().allow("").required(),

      avl_qty: Joi.number().required(),

      amount_paid: Joi.number().required(),

      discount: Joi.number().required(),

      fynd_store_id: Joi.string().allow("").required(),

      unit_price: Joi.number().required(),

      transfer_price: Joi.number().required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      price_effective: Joi.number().required(),

      affiliate_store_id: Joi.string().allow("").required(),
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
      fulfilment_priority: Joi.number().allow(null),

      fulfilment_priority_text: Joi.string().allow(""),

      affiliate_priority_code: Joi.string().allow("").allow(null),
    });
  }

  static OrderInfo() {
    return Joi.object({
      payment_mode: Joi.string().allow("").required(),

      discount: Joi.number().required(),

      payment: Joi.any(),

      coupon: Joi.string().allow("").allow(null),

      delivery_charges: Joi.number().required(),

      billing_address: OrderModel.OrderUser().required(),

      order_value: Joi.number().required(),

      shipment: OrderModel.ShipmentData(),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      affiliate_order_id: Joi.string().allow(""),

      cod_charges: Joi.number().required(),

      user: OrderModel.UserData().required(),

      order_priority: OrderModel.OrderPriority(),

      items: Joi.any().required(),

      shipping_address: OrderModel.OrderUser().required(),
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
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static ActionInfo() {
    return Joi.object({
      id: Joi.number().required(),

      slug: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

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
      l2_detail: Joi.string().allow(""),

      l1_detail: Joi.string().allow(""),

      bag_id: Joi.number(),

      message: Joi.string().allow("").required(),

      ticket_id: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

      l3_detail: Joi.string().allow(""),

      user: Joi.string().allow("").required(),

      ticket_url: Joi.string().allow(""),

      createdat: Joi.string().allow("").required(),
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
      user_name: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),
    });
  }

  static PostHistoryFilters() {
    return Joi.object({
      shipment_id: Joi.string().allow("").required(),

      line_number: Joi.string().allow(""),

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

  static SmsDataPayload() {
    return Joi.object({
      payment_mode: Joi.string().allow("").required(),

      phone_number: Joi.number().required(),

      shipment_id: Joi.number().required(),

      message: Joi.string().allow("").required(),

      customer_name: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      order_id: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),
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
      id: Joi.number().required(),

      status: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      remarks: Joi.string().allow(""),

      meta: OrderModel.Meta1().required(),

      bag_list: Joi.array().items(Joi.number()),
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
      result: Joi.array().items(OrderModel.OrderStatusData()),

      success: Joi.string().allow("").required(),
    });
  }

  static ManualAssignDPToShipment() {
    return Joi.object({
      order_type: Joi.string().allow("").required(),

      dp_id: Joi.number().required(),

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

  static ShippingInfo() {
    return Joi.object({
      last_name: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      primary_mobile_number: Joi.string().allow("").required(),

      state_code: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      alternate_mobile_number: Joi.string().allow(""),

      shipping_type: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      title: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      geo_location: Joi.any(),

      middle_name: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      slot: Joi.array().items(Joi.any()),

      customer_code: Joi.string().allow(""),

      country: Joi.string().allow("").required(),
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
      pack_by_date: Joi.string().allow(""),

      dispatch_by_date: Joi.string().allow(""),

      dp_pickup_slot: Joi.any(),

      customer_pickup_slot: Joi.any(),

      confirm_by_date: Joi.string().allow(""),

      dispatch_after_date: Joi.string().allow(""),
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
      name: Joi.string().allow("").required(),

      amount: Joi.any().required(),

      type: Joi.string().allow("").required(),

      tax: OrderModel.Tax(),

      code: Joi.string().allow(""),
    });
  }

  static LineItem() {
    return Joi.object({
      quantity: Joi.number(),

      seller_identifier: Joi.string().allow("").required(),

      charges: Joi.array().items(OrderModel.Charge()),

      meta: Joi.any(),

      custom_messasge: Joi.string().allow(""),

      external_line_id: Joi.string().allow(""),
    });
  }

  static Shipment() {
    return Joi.object({
      location_id: Joi.number().required(),

      external_shipment_id: Joi.string().allow(""),

      priority: Joi.number(),

      meta: Joi.any(),

      processing_dates: OrderModel.ProcessingDates(),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),
    });
  }

  static BillingInfo() {
    return Joi.object({
      last_name: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      primary_mobile_number: Joi.string().allow("").required(),

      state_code: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      alternate_mobile_number: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      title: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      customer_code: Joi.string().allow(""),

      country: Joi.string().allow("").required(),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      refund_by: Joi.string().allow("").required(),

      mode: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      transaction_data: Joi.any(),

      meta: Joi.any(),

      collect_by: Joi.string().allow("").required(),
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
      shipping_info: OrderModel.ShippingInfo().required(),

      tax_info: OrderModel.TaxInfo(),

      external_creation_date: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      charges: Joi.array().items(OrderModel.Charge()),

      currency_info: Joi.any(),

      meta: Joi.any(),

      billing_info: OrderModel.BillingInfo().required(),

      payment_info: OrderModel.PaymentInfo().required(),

      external_order_id: Joi.string().allow(""),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      status: Joi.number().required(),

      message: Joi.string().allow("").required(),

      info: Joi.any(),

      stack_trace: Joi.string().allow("").allow(null),

      meta: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      request_id: Joi.string().allow("").allow(null),

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
      refund_by: Joi.string().allow(""),

      collect_by: Joi.string().allow(""),

      mode: Joi.string().allow(""),
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

      dp_configuration: OrderModel.DpConfiguration(),

      payment_info: OrderModel.CreateChannelPaymentInfo(),

      logo_url: Joi.any(),

      lock_states: Joi.array().items(Joi.string().allow("")),

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
      is_upserted: Joi.boolean(),

      acknowledged: Joi.boolean(),

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
      end_date: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),

      start_date: Joi.string().allow("").required(),
    });
  }
}
module.exports = OrderModel;
