const Joi = require("joi");

class OrderModel {
  static Prices() {
    return Joi.object({
      cashback_applied: Joi.number(),

      fynd_credits: Joi.number(),

      discount: Joi.number(),

      cod_charges: Joi.number(),

      refund_credit: Joi.number(),

      value_of_good: Joi.number(),

      coupon_value: Joi.number(),

      tax_collected_at_source: Joi.number(),

      transfer_price: Joi.number(),

      price_marked: Joi.number(),

      price_effective: Joi.number(),

      cashback: Joi.number(),

      delivery_charge: Joi.number(),

      amount_paid: Joi.number(),

      refund_amount: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      promotion_effective_discount: Joi.number(),
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
      department_id: Joi.number(),

      size: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),

      image: Joi.array().items(Joi.string().allow("")),

      l3_category_name: Joi.string().allow(""),

      id: Joi.number(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow(""),

      color: Joi.string().allow("").allow(null),

      can_return: Joi.boolean(),

      can_cancel: Joi.boolean(),

      l3_category: Joi.number(),

      name: Joi.string().allow(""),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      value_of_good: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),

      gst_fee: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),
    });
  }

  static BagUnit() {
    return Joi.object({
      ordering_channel: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),

      total_shipment_bags: Joi.number().required(),

      shipment_id: Joi.string().allow("").required(),

      item_quantity: Joi.number().required(),

      item: OrderModel.PlatformItem(),

      can_return: Joi.boolean(),

      can_cancel: Joi.boolean(),

      status: Joi.any().required(),

      gst: OrderModel.GSTDetailsData(),

      bag_id: Joi.number().required(),
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

      gender: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      uid: Joi.number(),

      email: Joi.string().allow(""),

      name: Joi.string().allow(""),

      avis_user_id: Joi.string().allow(""),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      ops_status: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      prices: OrderModel.Prices(),

      shipment_created_at: Joi.string().allow("").required(),

      sla: Joi.any(),

      payment_methods: Joi.any(),

      channel: Joi.any(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      shipment_id: Joi.string().allow(""),

      id: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      fulfilling_centre: Joi.string().allow("").required(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      total_shipments_in_order: Joi.number().required(),

      user: OrderModel.UserDataInfo(),

      total_bags_count: Joi.number().required(),

      application: Joi.any(),

      shipment_status: OrderModel.ShipmentStatus(),

      company: Joi.any(),
    });
  }

  static FilterInfoOption() {
    return Joi.object({
      value: Joi.string().allow(""),

      text: Joi.string().allow("").required(),

      name: Joi.string().allow(""),
    });
  }

  static FiltersInfo() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.FilterInfoOption()),

      type: Joi.string().allow("").required(),
    });
  }

  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      page: Joi.any(),

      applied_filters: Joi.any(),

      items: Joi.array().items(OrderModel.ShipmentItem()),

      filters: Joi.array().items(OrderModel.FiltersInfo()),
    });
  }

  static Error() {
    return Joi.object({
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      id: Joi.number().required(),

      code: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      meta: Joi.any().required(),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      app_facing: Joi.boolean(),

      is_active: Joi.boolean(),

      notify_customer: Joi.boolean(),

      bs_id: Joi.number().required(),

      app_state_name: Joi.string().allow(""),

      journey_type: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      state_type: Joi.string().allow("").required(),

      app_display_name: Joi.string().allow(""),

      name: Joi.string().allow("").required(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      bag_state_mapper: OrderModel.BagStateMapper(),

      store_id: Joi.number(),

      app_display_name: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      delivery_partner_id: Joi.number().allow(null),

      updated_at: Joi.string().allow(""),

      forward: Joi.boolean().allow(null),

      bsh_id: Joi.number(),

      shipment_id: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      state_type: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      delivery_awb_number: Joi.string().allow("").allow(null),

      state_id: Joi.number(),

      status: Joi.string().allow("").required(),

      reasons: Joi.array().items(Joi.any()),

      bag_id: Joi.number(),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      fynd_order_id: Joi.string().allow("").required(),

      ordering_channel: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      cod_charges: Joi.string().allow(""),

      tax_details: Joi.any(),

      ordering_channel_logo: Joi.any(),

      source: Joi.string().allow(""),

      order_value: Joi.string().allow(""),

      order_date: Joi.string().allow(""),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      area: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      address_type: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      address1: Joi.string().allow(""),

      address: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      name: Joi.string().allow("").required(),
    });
  }

  static Dimensions() {
    return Joi.object({
      height: Joi.number(),

      width: Joi.number(),

      length: Joi.number(),

      unit: Joi.string().allow(""),

      is_default: Joi.boolean(),
    });
  }

  static Meta() {
    return Joi.object({
      dimension: OrderModel.Dimensions(),
    });
  }

  static TrackingList() {
    return Joi.object({
      is_passed: Joi.boolean(),

      time: Joi.string().allow(""),

      is_current: Joi.boolean(),

      text: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      logo: Joi.string().allow(""),

      source: Joi.string().allow(""),

      mode: Joi.string().allow(""),
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
      company_id: Joi.number(),

      company_gst: Joi.string().allow(""),

      company_contact: OrderModel.ContactDetails(),

      company_name: Joi.string().allow(""),

      address: Joi.any(),

      company_cin: Joi.string().allow(""),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      ordering_store_id: Joi.number().required(),

      city: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      meta: Joi.any().required(),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      id: Joi.number(),

      shipment_id: Joi.string().allow(""),

      created_at: Joi.string().allow("").allow(null),

      bag_list: Joi.array().items(Joi.string().allow("")),

      status: Joi.string().allow(""),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      gst_tag: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      track_url: Joi.string().allow("").allow(null),

      id: Joi.number(),

      eway_bill_id: Joi.string().allow("").allow(null),

      awb_no: Joi.string().allow(""),

      country: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static InvoiceInfo() {
    return Joi.object({
      store_invoice_id: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      label_url: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),

      credit_note_id: Joi.string().allow(""),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      loyalty_discount: Joi.number(),

      order_item_id: Joi.string().allow(""),

      channel_shipment_id: Joi.string().allow("").allow(null),

      quantity: Joi.number(),

      employee_discount: Joi.number(),

      coupon_code: Joi.string().allow("").allow(null),

      due_date: Joi.string().allow("").allow(null),

      size_level_total_qty: Joi.number().allow(null),

      is_priority: Joi.boolean(),

      box_type: Joi.string().allow("").allow(null),

      channel_order_id: Joi.string().allow("").allow(null),
    });
  }

  static EinvoiceInfo() {
    return Joi.object({
      invoice: Joi.any(),

      credit_note: Joi.any(),
    });
  }

  static DebugInfo() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow(""),
    });
  }

  static Formatted() {
    return Joi.object({
      f_max: Joi.string().allow(""),

      f_min: Joi.string().allow(""),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      ajio_site_id: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      gstin: Joi.string().allow("").required(),

      address: Joi.string().allow("").allow(null).required(),

      state: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static ShipmentTimeStamp() {
    return Joi.object({
      t_max: Joi.string().allow(""),

      t_min: Joi.string().allow(""),
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
      dp_sort_key: Joi.string().allow(""),

      packaging_name: Joi.string().allow(""),

      einvoice_info: OrderModel.EinvoiceInfo(),

      external: Joi.any(),

      forward_affiliate_order_id: Joi.string().allow(""),

      dp_options: Joi.any(),

      assign_dp_from_sb: Joi.boolean(),

      awb_number: Joi.string().allow(""),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      weight: Joi.number().required(),

      dp_name: Joi.string().allow(""),

      return_awb_number: Joi.string().allow(""),

      store_invoice_updated_date: Joi.string().allow(""),

      return_store_node: Joi.number(),

      box_type: Joi.string().allow("").allow(null),

      return_affiliate_shipment_id: Joi.string().allow(""),

      return_affiliate_order_id: Joi.string().allow(""),

      shipment_volumetric_weight: Joi.number(),

      b2c_buyer_details: Joi.any().allow(null),

      ewaybill_info: Joi.any().allow(null),

      marketplace_store_id: Joi.string().allow(""),

      bag_weight: Joi.any(),

      po_number: Joi.string().allow(""),

      shipment_weight: Joi.number(),

      debug_info: OrderModel.DebugInfo(),

      return_details: Joi.any(),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      order_type: Joi.string().allow("").allow(null),

      formatted: OrderModel.Formatted(),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      dp_id: Joi.string().allow("").allow(null),

      timestamp: OrderModel.ShipmentTimeStamp(),

      due_date: Joi.string().allow(""),

      lock_data: OrderModel.LockData(),

      same_store_available: Joi.boolean().required(),
    });
  }

  static PDFLinks() {
    return Joi.object({
      invoice_type: Joi.string().allow("").required(),

      delivery_challan_a4: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      po_invoice: Joi.string().allow(""),

      b2b: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      label: Joi.string().allow(""),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      affiliate_id: Joi.string().allow(""),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      company_affiliate_tag: Joi.string().allow(""),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      affiliate_bag_id: Joi.string().allow("").required(),

      ad_id: Joi.string().allow(""),

      pdf_links: OrderModel.PDFLinks(),
    });
  }

  static BagConfigs() {
    return Joi.object({
      can_be_cancelled: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      brand_name: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      id: Joi.number().required(),

      modified_on: Joi.string().allow(""),

      company: Joi.string().allow("").allow(null).required(),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      identifiers: Joi.any(),

      return_config: Joi.any(),

      uid: Joi.string().allow(""),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      longitude: Joi.number(),

      address_category: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      area: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      city: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      version: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      latitude: Joi.number(),

      address_type: Joi.string().allow(""),

      country: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      state: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      discount: Joi.number().required(),

      price_marked: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      coupon_value: Joi.number().required(),

      gst_fee: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      cod_charges: Joi.number().required(),

      refund_credit: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      amount_paid: Joi.number().required(),

      tax_collected_at_source: Joi.number(),

      item_name: Joi.string().allow("").required(),

      cashback: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      identifiers: OrderModel.Identifier().required(),

      brand_calculated_amount: Joi.number().required(),

      promotion_effective_discount: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),

      hsn_code: Joi.string().allow("").required(),

      fynd_credits: Joi.number().required(),

      size: Joi.string().allow("").required(),

      transfer_price: Joi.number().required(),

      value_of_good: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      price_effective: Joi.number().required(),

      total_units: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),
    });
  }

  static BagGST() {
    return Joi.object({
      is_default_hsn_code: Joi.boolean(),

      hsn_code: Joi.string().allow(""),

      value_of_good: Joi.number(),

      gstin_code: Joi.string().allow(""),

      brand_calculated_amount: Joi.number(),

      gst_tax_percentage: Joi.number(),

      gst_fee: Joi.number(),

      gst_tag: Joi.string().allow(""),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      bag_state_mapper: OrderModel.BagStateMapper(),

      store_id: Joi.number(),

      kafka_sync: Joi.boolean(),

      delivery_partner_id: Joi.number(),

      updated_at: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      created_at: Joi.string().allow("").allow(null),

      state_type: Joi.string().allow(""),

      delivery_awb_number: Joi.string().allow(""),

      state_id: Joi.number(),

      status: Joi.string().allow(""),

      current_status_id: Joi.number().required(),

      bag_id: Joi.number(),
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
      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      promotion_type: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      article_quantity: Joi.number(),

      mrp_promotion: Joi.boolean(),

      amount: Joi.number(),

      promotion_name: Joi.string().allow(""),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),
    });
  }

  static OrderBags() {
    return Joi.object({
      parent_promo_bags: Joi.any(),

      bag_configs: OrderModel.BagConfigs(),

      brand: OrderModel.OrderBrandName(),

      article: OrderModel.OrderBagArticle(),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      can_cancel: Joi.boolean(),

      identifier: Joi.string().allow(""),

      financial_breakup: OrderModel.FinancialBreakup(),

      gst_details: OrderModel.BagGST(),

      entity_type: Joi.string().allow(""),

      current_status: OrderModel.CurrentStatus(),

      line_number: Joi.number(),

      quantity: Joi.number(),

      item: OrderModel.PlatformItem(),

      seller_identifier: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      can_return: Joi.boolean(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      prices: OrderModel.Prices(),

      bag_id: Joi.number().required(),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      shipment_quantity: Joi.number(),

      packaging_type: Joi.string().allow(""),

      fulfilling_store: OrderModel.FulfillingStore(),

      payment_mode: Joi.string().allow(""),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      delivery_slot: Joi.any(),

      operational_status: Joi.string().allow(""),

      order: OrderModel.OrderDetailsData(),

      vertical: Joi.string().allow("").allow(null),

      user: OrderModel.UserDataInfo(),

      invoice_id: Joi.string().allow(""),

      delivery_details: OrderModel.UserDetailsData(),

      meta: OrderModel.Meta(),

      forward_shipment_id: Joi.string().allow(""),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      total_items: Joi.number(),

      picked_date: Joi.string().allow(""),

      payments: OrderModel.ShipmentPayments(),

      custom_meta: Joi.array().items(Joi.any()),

      company_details: OrderModel.CompanyDetails(),

      shipment_id: Joi.string().allow("").required(),

      ordering_store: OrderModel.OrderingStoreDetails(),

      total_bags: Joi.number(),

      status: OrderModel.ShipmentStatusData(),

      coupon: Joi.any(),

      shipment_status: Joi.string().allow(""),

      user_agent: Joi.string().allow(""),

      fulfilment_priority: Joi.number(),

      billing_details: OrderModel.UserDetailsData(),

      gst_details: OrderModel.GSTDetailsData(),

      enable_dp_tracking: Joi.boolean(),

      dp_details: OrderModel.DPDetailsData(),

      payment_methods: Joi.any(),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      journey_type: Joi.string().allow(""),

      invoice: OrderModel.InvoiceInfo(),

      lock_status: Joi.boolean(),

      affiliate_details: OrderModel.AffiliateDetails(),

      bags: Joi.array().items(OrderModel.OrderBags()),

      priority_text: Joi.string().allow("").allow(null),

      platform_logo: Joi.string().allow(""),

      prices: OrderModel.Prices(),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),
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
      transaction_id: Joi.string().allow(""),

      entity: Joi.string().allow(""),

      payment_id: Joi.string().allow(""),

      terminal_id: Joi.string().allow(""),

      unique_reference_number: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      amount_paid: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static BillingStaffDetails() {
    return Joi.object({
      first_name: Joi.string().allow(""),

      user: Joi.string().allow(""),

      staff_id: Joi.number(),

      employee_code: Joi.string().allow(""),

      last_name: Joi.string().allow(""),
    });
  }

  static PlatformUserDetails() {
    return Joi.object({
      platform_user_first_name: Joi.string().allow(""),

      platform_user_last_name: Joi.string().allow(""),

      platform_user_id: Joi.string().allow(""),

      platform_user_employee_code: Joi.string().allow(""),
    });
  }

  static OrderMeta() {
    return Joi.object({
      mongo_cart_id: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      customer_note: Joi.string().allow(""),

      files: Joi.array().items(Joi.any()),

      transaction_data: OrderModel.TransactionData(),

      order_platform: Joi.string().allow(""),

      ordering_store: Joi.number(),

      staff: Joi.any(),

      order_tags: Joi.array().items(Joi.any()),

      company_logo: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      billing_staff_details: OrderModel.BillingStaffDetails(),

      platform_user_details: OrderModel.PlatformUserDetails(),

      order_type: Joi.string().allow(""),

      extra_meta: Joi.any(),

      payment_type: Joi.string().allow(""),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      employee_id: Joi.number(),

      cart_id: Joi.number(),
    });
  }

  static OrderDict() {
    return Joi.object({
      fynd_order_id: Joi.string().allow("").required(),

      payment_methods: Joi.any(),

      tax_details: OrderModel.TaxDetails(),

      prices: OrderModel.Prices(),

      meta: OrderModel.OrderMeta(),

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

      actions: Joi.array().items(Joi.any()),

      value: Joi.string().allow(""),

      text: Joi.string().allow(""),

      index: Joi.number(),
    });
  }

  static SuperLane() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      total_items: Joi.number(),

      text: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.SubLane()),
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

      display: Joi.string().allow(""),

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

      order_id: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      channel: OrderModel.PlatformChannel(),

      total_order_value: Joi.number(),

      payment_mode: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      order_created_time: Joi.string().allow(""),

      order_value: Joi.number(),

      meta: Joi.any(),
    });
  }

  static OrderListingResponse() {
    return Joi.object({
      success: Joi.boolean(),

      page: OrderModel.Page(),

      total_count: Joi.number(),

      message: Joi.string().allow(""),

      lane: Joi.string().allow(""),

      items: Joi.array().items(OrderModel.PlatformOrderItems()),
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
      value: Joi.number().required(),

      text: Joi.string().allow("").required(),

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
      account_name: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      status: Joi.string().allow(""),

      meta: Joi.any(),

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
      processed: Joi.array().items(OrderModel.FiltersInfo()),

      returned: Joi.array().items(OrderModel.FiltersInfo()),

      unfulfilled: Joi.array().items(OrderModel.FiltersInfo()),

      action_centre: Joi.array().items(OrderModel.FiltersInfo()),

      filters: Joi.array().items(OrderModel.FiltersInfo()),
    });
  }

  static FiltersResponse() {
    return Joi.object({
      global_filter: Joi.array().items(OrderModel.FiltersInfo()),

      advance_filter: OrderModel.AdvanceFilterInfo(),
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
      report_name: Joi.string().allow(""),

      report_type: Joi.string().allow(""),

      report_id: Joi.string().allow(""),

      report_created_at: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow(""),

      s3_key: Joi.string().allow(""),

      request_details: Joi.any(),

      report_requested_at: Joi.string().allow("").allow(null),

      status: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      item_id: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

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
      value: Joi.string().allow(""),

      message: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      success: Joi.boolean(),

      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

      trace_id: Joi.string().allow(""),

      data: Joi.array().items(Joi.any()),

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
      store_id: Joi.string().allow(""),

      do_invoice_label_generated: Joi.boolean().required(),

      batch_id: Joi.string().allow("").required(),

      invoice_status: Joi.string().allow(""),

      company_id: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      invoice: Joi.any(),

      store_code: Joi.string().allow(""),

      data: Joi.any(),

      label: Joi.any(),
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
      file_name: Joi.string().allow(""),

      size: Joi.number(),

      file_path: Joi.string().allow(""),

      method: Joi.string().allow(""),

      content_type: Joi.string().allow(""),

      namespace: Joi.string().allow(""),

      cdn: OrderModel.URL(),

      upload: OrderModel.FileUploadResponse(),

      tags: Joi.array().items(Joi.string().allow("")),

      operation: Joi.string().allow(""),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      has_previous: Joi.boolean(),

      type: Joi.string().allow(""),

      size: Joi.number(),

      has_next: Joi.boolean(),

      total: Joi.number(),

      current: Joi.number(),
    });
  }

  static bulkListingData() {
    return Joi.object({
      processing: Joi.number(),

      id: Joi.string().allow(""),

      user_name: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      batch_id: Joi.string().allow(""),

      failed: Joi.number(),

      store_code: Joi.string().allow(""),

      successful_shipments: Joi.array().items(Joi.any()),

      status: Joi.string().allow(""),

      store_id: Joi.number(),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      user_id: Joi.string().allow(""),

      failed_shipments: Joi.array().items(Joi.any()),

      file_name: Joi.string().allow(""),

      company_id: Joi.number(),

      store_name: Joi.string().allow(""),

      successful: Joi.number(),

      total: Joi.number(),

      excel_url: Joi.string().allow(""),
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
      status: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static BulkActionDetailsDataField() {
    return Joi.object({
      successful_shipments_count: Joi.number(),

      processing_shipments_count: Joi.number(),

      batch_id: Joi.string().allow(""),

      company_id: Joi.string().allow(""),

      failed_shipments_count: Joi.number(),

      total_shipments_count: Joi.number(),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      success: Joi.string().allow(""),

      uploaded_by: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      error: Joi.array().items(Joi.string().allow("")),

      failed_records: Joi.array().items(Joi.string().allow("")),

      message: Joi.string().allow(""),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      status: Joi.boolean(),
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
      is_virtual_invoice: Joi.boolean().allow(null),

      script_last_ran: Joi.string().allow("").allow(null),

      credit_note_expiry_days: Joi.number().allow(null),

      brand_name: Joi.string().allow("").required(),

      credit_note_allowed: Joi.boolean(),

      created_on: Joi.number(),

      modified_on: Joi.number(),

      logo: Joi.string().allow(""),

      pickup_location: Joi.string().allow("").allow(null),

      invoice_prefix: Joi.string().allow("").allow(null),

      start_date: Joi.string().allow("").allow(null),

      brand_id: Joi.number().required(),

      company: Joi.string().allow("").required(),
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

      is_default: Joi.boolean(),

      shipping: Joi.number(),
    });
  }

  static Article() {
    return Joi.object({
      is_set: Joi.boolean(),

      a_set: Joi.any().allow(null),

      return_config: OrderModel.ReturnConfig(),

      size: Joi.string().allow("").required(),

      dimensions: OrderModel.Dimensions(),

      weight: OrderModel.Weight(),

      code: Joi.string().allow(""),

      child_details: Joi.any().allow(null),

      seller_identifier: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      identifiers: OrderModel.Identifier().required(),

      raw_meta: Joi.any(),

      esp_modified: Joi.any(),

      uid: Joi.string().allow("").required(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      po_line_amount: Joi.number(),

      po_tax_amount: Joi.number(),

      total_gst_percentage: Joi.number(),

      docker_number: Joi.string().allow(""),

      item_base_price: Joi.number(),

      partial_can_ret: Joi.boolean(),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
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

      user: Joi.string().allow(""),

      enabled: Joi.boolean().required(),

      username: Joi.string().allow(""),
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
      ds_type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      url: Joi.string().allow(""),

      verified: Joi.boolean().required(),

      legal_name: Joi.string().allow("").required(),
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

      product_return_config: Joi.any(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      documents: OrderModel.StoreDocuments(),

      stage: Joi.string().allow("").required(),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      display_name: Joi.string().allow("").required(),

      additional_contact_details: Joi.any(),

      ewaybill_portal_details: Joi.any(),

      timing: Joi.array().items(Joi.any()),
    });
  }

  static StoreAddress() {
    return Joi.object({
      longitude: Joi.number().required(),

      area: Joi.string().allow(""),

      pincode: Joi.number().required(),

      created_at: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      city: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      address_category: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      version: Joi.string().allow(""),

      phone: Joi.string().allow("").allow(null).required(),

      address1: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),
    });
  }

  static Store() {
    return Joi.object({
      store_active_from: Joi.string().allow("").allow(null),

      longitude: Joi.number().required(),

      parent_store_id: Joi.number(),

      pincode: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      alohomora_user_id: Joi.number(),

      code: Joi.string().allow(""),

      fulfillment_channel: Joi.string().allow("").required(),

      location_type: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      mall_area: Joi.string().allow("").allow(null),

      state: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      meta: OrderModel.StoreMeta().required(),

      store_address_json: OrderModel.StoreAddress(),

      is_active: Joi.boolean(),

      city: Joi.string().allow("").required(),

      mall_name: Joi.string().allow("").allow(null),

      login_username: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      phone: Joi.number().required(),

      brand_id: Joi.any(),

      store_email: Joi.string().allow("").required(),

      is_archived: Joi.boolean(),

      is_enabled_for_recon: Joi.boolean(),

      address1: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      packaging_material_count: Joi.number(),

      updated_at: Joi.string().allow("").allow(null),

      company_id: Joi.number().required(),

      vat_no: Joi.string().allow("").allow(null),

      s_id: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      order_integration_id: Joi.string().allow(""),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      affiliate_order_id: Joi.string().allow("").required(),

      loyalty_discount: Joi.number(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      employee_discount: Joi.number(),

      affiliate_bag_id: Joi.string().allow("").required(),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      can_be_cancelled: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      is_default_hsn_code: Joi.boolean(),

      hsn_code: Joi.string().allow("").required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      cgst_tax_percentage: Joi.number().required(),

      igst_tax_percentage: Joi.number().required(),

      value_of_good: Joi.number().required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      gstin_code: Joi.string().allow("").allow(null),

      brand_calculated_amount: Joi.number().required(),

      igst_gst_fee: Joi.string().allow("").required(),

      sgst_tax_percentage: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      gst_tax_percentage: Joi.number().required(),

      gst_fee: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static Attributes() {
    return Joi.object({
      essential: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      primary_color: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      primary_material: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      l2_category: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow(""),

      brand: Joi.string().allow("").required(),

      meta: Joi.any(),

      department_id: Joi.number(),

      branch_url: Joi.string().allow("").allow(null),

      l3_category_name: Joi.string().allow(""),

      l1_category: Joi.array().items(Joi.string().allow("")),

      can_cancel: Joi.boolean(),

      last_updated_at: Joi.string().allow(""),

      color: Joi.string().allow("").allow(null),

      l2_category_id: Joi.number(),

      brand_id: Joi.number().required(),

      slug_key: Joi.string().allow("").required(),

      l3_category: Joi.number(),

      item_id: Joi.number().required(),

      name: Joi.string().allow("").required(),

      webstore_product_url: Joi.string().allow("").allow(null),

      l1_category_id: Joi.number(),

      size: Joi.string().allow("").required(),

      image: Joi.array().items(Joi.string().allow("")).required(),

      attributes: OrderModel.Attributes().required(),

      gender: Joi.string().allow("").allow(null),

      can_return: Joi.boolean(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      parent_promo_bags: Joi.any(),

      b_id: Joi.number().required(),

      bag_status_history: OrderModel.BagStatusHistory(),

      dates: OrderModel.Dates(),

      operational_status: Joi.string().allow(""),

      brand: OrderModel.Brand().required(),

      article: OrderModel.Article().required(),

      restore_coupon: Joi.boolean(),

      meta: OrderModel.BagMeta(),

      original_bag_list: Joi.array().items(Joi.number()),

      shipment_id: Joi.string().allow(""),

      no_of_bags_order: Joi.number(),

      ordering_store: OrderModel.Store(),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      identifier: Joi.string().allow(""),

      b_type: Joi.string().allow(""),

      restore_promos: Joi.any(),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      qc_required: Joi.any(),

      gst_details: OrderModel.BagGSTDetails().required(),

      entity_type: Joi.string().allow(""),

      journey_type: Joi.string().allow("").required(),

      bag_update_time: Joi.number(),

      article_details: OrderModel.ArticleDetails(),

      current_status: OrderModel.BagStatusHistory().required(),

      reasons: Joi.array().items(Joi.any()),

      line_number: Joi.number(),

      affiliate_details: OrderModel.AffiliateDetails(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      quantity: Joi.number(),

      item: OrderModel.Item().required(),

      seller_identifier: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      applied_promos: Joi.array().items(Joi.any()),

      prices: OrderModel.Prices().required(),

      order_integration_id: Joi.string().allow("").allow(null),
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

      size: Joi.number().required(),

      has_next: Joi.boolean().required(),

      item_total: Joi.number().required(),

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

      payment_receipt: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      invoice_receipt: Joi.string().allow(""),
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
