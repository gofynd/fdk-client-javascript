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
      value: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.FilterInfoOption()),

      text: Joi.string().allow("").required(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      hex_code: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),
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

  static GSTDetailsData() {
    return Joi.object({
      tax_collected_at_source: Joi.number().required(),

      value_of_good: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),

      gst_fee: Joi.number().required(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      images: Joi.array().items(Joi.string().allow("")),

      l3_category_name: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      name: Joi.string().allow(""),

      can_return: Joi.boolean(),

      color: Joi.string().allow("").allow(null),

      l3_category: Joi.number(),

      code: Joi.string().allow(""),

      l1_category: Joi.array().items(Joi.string().allow("")),

      size: Joi.string().allow(""),

      id: Joi.number(),

      department_id: Joi.number(),

      image: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Prices() {
    return Joi.object({
      delivery_charge: Joi.number(),

      price_marked: Joi.number(),

      cod_charges: Joi.number(),

      amount_paid: Joi.number(),

      refund_credit: Joi.number(),

      transfer_price: Joi.number(),

      cashback: Joi.number(),

      tax_collected_at_source: Joi.number(),

      fynd_credits: Joi.number(),

      value_of_good: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      price_effective: Joi.number(),

      promotion_effective_discount: Joi.number(),

      discount: Joi.number(),

      refund_amount: Joi.number(),

      cashback_applied: Joi.number(),

      coupon_value: Joi.number(),
    });
  }

  static BagUnit() {
    return Joi.object({
      bag_id: Joi.number().required(),

      total_shipment_bags: Joi.number().required(),

      can_cancel: Joi.boolean(),

      shipment_id: Joi.string().allow("").required(),

      gst: OrderModel.GSTDetailsData(),

      item: OrderModel.PlatformItem(),

      can_return: Joi.boolean(),

      item_quantity: Joi.number().required(),

      status: Joi.any().required(),

      ordering_channel: Joi.string().allow("").required(),

      prices: OrderModel.Prices(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      last_name: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      name: Joi.string().allow(""),

      uid: Joi.number(),

      gender: Joi.string().allow(""),

      avis_user_id: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      email: Joi.string().allow(""),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      total_shipments_in_order: Joi.number().required(),

      fulfilling_centre: Joi.string().allow("").required(),

      shipment_status: OrderModel.ShipmentStatus(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      payment_methods: Joi.any(),

      shipment_created_at: Joi.string().allow("").required(),

      sla: Joi.any(),

      shipment_id: Joi.string().allow(""),

      channel: Joi.any(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      total_bags_count: Joi.number().required(),

      user: OrderModel.UserDataInfo(),

      created_at: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      application: Joi.any(),

      prices: OrderModel.Prices(),
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

  static PlatformDeliveryAddress() {
    return Joi.object({
      country: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      city: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      latitude: Joi.number(),

      address_type: Joi.string().allow(""),

      version: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      state: Joi.string().allow(""),

      longitude: Joi.number(),

      created_at: Joi.string().allow(""),

      email: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      area: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      return_config: Joi.any(),

      identifiers: Joi.any(),

      uid: Joi.string().allow(""),
    });
  }

  static BagConfigs() {
    return Joi.object({
      is_customer_return_allowed: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      brand_name: Joi.string().allow("").required(),

      company: Joi.string().allow("").allow(null).required(),

      modified_on: Joi.string().allow(""),

      logo: Joi.string().allow("").required(),

      id: Joi.number().required(),

      created_on: Joi.string().allow("").required(),
    });
  }

  static BagGST() {
    return Joi.object({
      gst_tag: Joi.string().allow(""),

      is_default_hsn_code: Joi.boolean(),

      value_of_good: Joi.number(),

      gst_tax_percentage: Joi.number(),

      gstin_code: Joi.string().allow(""),

      hsn_code: Joi.string().allow(""),

      brand_calculated_amount: Joi.number(),

      gst_fee: Joi.number(),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      bs_id: Joi.number().required(),

      journey_type: Joi.string().allow("").required(),

      notify_customer: Joi.boolean(),

      display_name: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      state_type: Joi.string().allow("").required(),

      app_facing: Joi.boolean(),

      app_display_name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      app_state_name: Joi.string().allow(""),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      current_status_id: Joi.number().required(),

      delivery_awb_number: Joi.string().allow(""),

      bag_id: Joi.number(),

      state_type: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      shipment_id: Joi.string().allow(""),

      state_id: Joi.number(),

      status: Joi.string().allow(""),

      delivery_partner_id: Joi.number(),

      created_at: Joi.string().allow("").allow(null),

      bag_state_mapper: OrderModel.BagStateMapper(),

      store_id: Joi.number(),

      updated_at: Joi.string().allow(""),
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

      amount: Joi.number(),

      promotion_name: Joi.string().allow(""),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      article_quantity: Joi.number(),

      promo_id: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),
    });
  }

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      gst_tag: Joi.string().allow("").required(),

      refund_credit: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      value_of_good: Joi.number().required(),

      identifiers: OrderModel.Identifier().required(),

      item_name: Joi.string().allow("").required(),

      total_units: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      price_marked: Joi.number().required(),

      amount_paid: Joi.number().required(),

      tax_collected_at_source: Joi.number(),

      fynd_credits: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      transfer_price: Joi.number().required(),

      cod_charges: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      price_effective: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      gst_fee: Joi.number().required(),

      coupon_value: Joi.number().required(),

      cashback: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),

      promotion_effective_discount: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      discount: Joi.number().required(),

      size: Joi.string().allow("").required(),
    });
  }

  static OrderBags() {
    return Joi.object({
      line_number: Joi.number(),

      item: OrderModel.PlatformItem(),

      can_cancel: Joi.boolean(),

      can_return: Joi.boolean(),

      parent_promo_bags: Joi.any(),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      prices: OrderModel.Prices(),

      article: OrderModel.OrderBagArticle(),

      quantity: Joi.number(),

      entity_type: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      bag_configs: OrderModel.BagConfigs(),

      bag_id: Joi.number().required(),

      brand: OrderModel.OrderBrandName(),

      gst_details: OrderModel.BagGST(),

      seller_identifier: Joi.string().allow(""),

      current_status: OrderModel.CurrentStatus(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      financial_breakup: OrderModel.FinancialBreakup(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      bag_id: Joi.number(),

      delivery_awb_number: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow(""),

      state_type: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      shipment_id: Joi.string().allow(""),

      bsh_id: Joi.number(),

      state_id: Joi.number(),

      reasons: Joi.array().items(Joi.any()),

      app_display_name: Joi.string().allow(""),

      status: Joi.string().allow("").required(),

      delivery_partner_id: Joi.number().allow(null),

      forward: Joi.boolean().allow(null),

      created_at: Joi.string().allow(""),

      bag_state_mapper: OrderModel.BagStateMapper(),

      store_id: Joi.number(),

      updated_at: Joi.string().allow(""),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      cod_charges: Joi.string().allow(""),

      tax_details: Joi.any(),

      order_date: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),

      affiliate_id: Joi.string().allow(""),

      source: Joi.string().allow(""),

      ordering_channel: Joi.string().allow(""),

      order_value: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow("").required(),
    });
  }

  static Dimensions() {
    return Joi.object({
      is_default: Joi.boolean(),

      length: Joi.number(),

      width: Joi.number(),

      height: Joi.number(),

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
      bag_list: Joi.array().items(Joi.string().allow("")),

      shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      created_at: Joi.string().allow("").allow(null),

      id: Joi.number(),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      address_type: Joi.string().allow(""),

      phone: Joi.string().allow("").required(),

      address1: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      area: Joi.string().allow(""),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      code: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      id: Joi.number().required(),

      store_name: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),
    });
  }

  static InvoiceInfo() {
    return Joi.object({
      label_url: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      credit_note_id: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),

      store_invoice_id: Joi.string().allow(""),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      code: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      ordering_store_id: Joi.number().required(),
    });
  }

  static PDFLinks() {
    return Joi.object({
      label_a6: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      label: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      delivery_challan_a4: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      label_a4: Joi.string().allow(""),

      b2b: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      is_priority: Joi.boolean(),

      box_type: Joi.string().allow("").allow(null),

      quantity: Joi.number(),

      employee_discount: Joi.number(),

      order_item_id: Joi.string().allow(""),

      coupon_code: Joi.string().allow("").allow(null),

      channel_shipment_id: Joi.string().allow("").allow(null),

      loyalty_discount: Joi.number(),

      due_date: Joi.string().allow("").allow(null),

      size_level_total_qty: Joi.number().allow(null),

      channel_order_id: Joi.string().allow("").allow(null),
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

  static ShipmentTimeStamp() {
    return Joi.object({
      t_max: Joi.string().allow(""),

      t_min: Joi.string().allow(""),
    });
  }

  static EinvoiceInfo() {
    return Joi.object({
      invoice: Joi.any(),

      credit_note: Joi.any(),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      pincode: Joi.number().required(),

      city: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      ajio_site_id: Joi.string().allow(""),

      address: Joi.string().allow("").allow(null).required(),

      state: Joi.string().allow("").required(),

      gstin: Joi.string().allow("").required(),
    });
  }

  static DebugInfo() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow(""),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      marketplace_store_id: Joi.string().allow(""),

      formatted: OrderModel.Formatted(),

      external: Joi.any(),

      awb_number: Joi.string().allow(""),

      return_details: Joi.any(),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      lock_data: OrderModel.LockData(),

      ewaybill_info: Joi.any().allow(null),

      box_type: Joi.string().allow("").allow(null),

      store_invoice_updated_date: Joi.string().allow(""),

      bag_weight: Joi.any(),

      timestamp: OrderModel.ShipmentTimeStamp(),

      return_affiliate_order_id: Joi.string().allow(""),

      shipment_weight: Joi.number(),

      po_number: Joi.string().allow(""),

      due_date: Joi.string().allow(""),

      einvoice_info: OrderModel.EinvoiceInfo(),

      dp_sort_key: Joi.string().allow(""),

      shipment_volumetric_weight: Joi.number(),

      return_store_node: Joi.number(),

      forward_affiliate_order_id: Joi.string().allow(""),

      assign_dp_from_sb: Joi.boolean(),

      same_store_available: Joi.boolean().required(),

      return_awb_number: Joi.string().allow(""),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      packaging_name: Joi.string().allow(""),

      order_type: Joi.string().allow("").allow(null),

      dp_id: Joi.string().allow("").allow(null),

      b2c_buyer_details: Joi.any().allow(null),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      return_affiliate_shipment_id: Joi.string().allow(""),

      dp_options: Joi.any(),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      dp_name: Joi.string().allow(""),

      weight: Joi.number().required(),

      debug_info: OrderModel.DebugInfo(),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      pdf_links: OrderModel.PDFLinks(),

      affiliate_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow("").required(),

      company_affiliate_tag: Joi.string().allow(""),

      ad_id: Joi.string().allow(""),

      affiliate_store_id: Joi.string().allow("").required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      shipment_meta: OrderModel.ShipmentMeta().required(),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      gst_tag: Joi.string().allow(""),

      country: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      name: Joi.string().allow(""),

      track_url: Joi.string().allow("").allow(null),

      eway_bill_id: Joi.string().allow("").allow(null),

      id: Joi.number(),
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

      address: Joi.any(),

      company_contact: OrderModel.ContactDetails(),

      company_name: Joi.string().allow(""),

      company_cin: Joi.string().allow(""),

      company_gst: Joi.string().allow(""),
    });
  }

  static TrackingList() {
    return Joi.object({
      time: Joi.string().allow(""),

      status: Joi.string().allow("").required(),

      is_passed: Joi.boolean(),

      is_current: Joi.boolean(),

      text: Joi.string().allow("").required(),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      logo: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      source: Joi.string().allow(""),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      total_bags: Joi.number(),

      shipment_status: Joi.string().allow(""),

      total_items: Joi.number(),

      journey_type: Joi.string().allow(""),

      picked_date: Joi.string().allow(""),

      invoice_id: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.OrderBags()),

      shipment_id: Joi.string().allow("").required(),

      user_agent: Joi.string().allow(""),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      enable_dp_tracking: Joi.boolean(),

      shipment_quantity: Joi.number(),

      payment_mode: Joi.string().allow(""),

      lock_status: Joi.boolean(),

      payment_methods: Joi.any(),

      custom_meta: Joi.array().items(Joi.any()),

      order: OrderModel.OrderDetailsData(),

      meta: OrderModel.Meta(),

      status: OrderModel.ShipmentStatusData(),

      user: OrderModel.UserDataInfo(),

      billing_details: OrderModel.UserDetailsData(),

      prices: OrderModel.Prices(),

      delivery_slot: Joi.any(),

      fulfilling_store: OrderModel.FulfillingStore(),

      platform_logo: Joi.string().allow(""),

      invoice: OrderModel.InvoiceInfo(),

      ordering_store: OrderModel.OrderingStoreDetails(),

      priority_text: Joi.string().allow("").allow(null),

      coupon: Joi.any(),

      packaging_type: Joi.string().allow(""),

      forward_shipment_id: Joi.string().allow(""),

      affiliate_details: OrderModel.AffiliateDetails(),

      vertical: Joi.string().allow("").allow(null),

      fulfilment_priority: Joi.number(),

      dp_details: OrderModel.DPDetailsData(),

      gst_details: OrderModel.GSTDetailsData(),

      delivery_details: OrderModel.UserDetailsData(),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      operational_status: Joi.string().allow(""),

      company_details: OrderModel.CompanyDetails(),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      payments: OrderModel.ShipmentPayments(),
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

  static PlatformUserDetails() {
    return Joi.object({
      platform_user_id: Joi.string().allow(""),

      platform_user_first_name: Joi.string().allow(""),

      platform_user_employee_code: Joi.string().allow(""),

      platform_user_last_name: Joi.string().allow(""),
    });
  }

  static BillingStaffDetails() {
    return Joi.object({
      last_name: Joi.string().allow(""),

      staff_id: Joi.number(),

      user: Joi.string().allow(""),

      employee_code: Joi.string().allow(""),

      first_name: Joi.string().allow(""),
    });
  }

  static TransactionData() {
    return Joi.object({
      currency: Joi.string().allow(""),

      entity: Joi.string().allow(""),

      payment_id: Joi.string().allow(""),

      amount_paid: Joi.string().allow(""),

      status: Joi.string().allow(""),

      terminal_id: Joi.string().allow(""),

      transaction_id: Joi.string().allow(""),

      unique_reference_number: Joi.string().allow(""),
    });
  }

  static OrderMeta() {
    return Joi.object({
      platform_user_details: OrderModel.PlatformUserDetails(),

      cart_id: Joi.number(),

      customer_note: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      company_logo: Joi.string().allow(""),

      billing_staff_details: OrderModel.BillingStaffDetails(),

      extra_meta: Joi.any(),

      order_platform: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      order_tags: Joi.array().items(Joi.any()),

      mongo_cart_id: Joi.number(),

      ordering_store: Joi.number(),

      order_type: Joi.string().allow(""),

      staff: Joi.any(),

      employee_id: Joi.number(),

      payment_type: Joi.string().allow(""),

      files: Joi.array().items(Joi.any()),

      transaction_data: OrderModel.TransactionData(),
    });
  }

  static OrderDict() {
    return Joi.object({
      payment_methods: Joi.any(),

      tax_details: OrderModel.TaxDetails(),

      order_date: Joi.string().allow("").required(),

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
      value: Joi.string().allow(""),

      total_items: Joi.number(),

      index: Joi.number(),

      actions: Joi.array().items(Joi.any()),

      text: Joi.string().allow(""),
    });
  }

  static SuperLane() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      total_items: Joi.number(),

      options: Joi.array().items(OrderModel.SubLane()),

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
      name: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static PlatformBreakupValues() {
    return Joi.object({
      name: Joi.string().allow(""),

      display: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static PlatformOrderItems() {
    return Joi.object({
      order_id: Joi.string().allow(""),

      channel: OrderModel.PlatformChannel(),

      total_order_value: Joi.number(),

      meta: Joi.any(),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      user_info: OrderModel.UserDataInfo(),

      order_created_time: Joi.string().allow(""),

      order_value: Joi.number(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      payment_mode: Joi.string().allow(""),
    });
  }

  static OrderListingResponse() {
    return Joi.object({
      page: OrderModel.Page(),

      items: Joi.array().items(OrderModel.PlatformOrderItems()),

      success: Joi.boolean(),

      message: Joi.string().allow(""),

      lane: Joi.string().allow(""),

      total_count: Joi.number(),
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
      text: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      value: Joi.number().required(),

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
      updated_time: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),
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
      s3_key: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      report_name: Joi.string().allow(""),

      report_id: Joi.string().allow(""),

      request_details: Joi.any(),

      status: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),

      report_type: Joi.string().allow(""),

      report_created_at: Joi.string().allow("").allow(null),
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
      value: Joi.string().allow(""),

      message: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()),

      identifier: Joi.string().allow(""),

      success: Joi.boolean(),

      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

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
      store_code: Joi.string().allow(""),

      data: Joi.any(),

      store_id: Joi.string().allow(""),

      label: Joi.any(),

      company_id: Joi.string().allow(""),

      invoice_status: Joi.string().allow(""),

      do_invoice_label_generated: Joi.boolean().required(),

      invoice: Joi.any(),

      batch_id: Joi.string().allow("").required(),

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
      cdn: OrderModel.URL(),

      tags: Joi.array().items(Joi.string().allow("")),

      upload: OrderModel.FileUploadResponse(),

      file_name: Joi.string().allow(""),

      method: Joi.string().allow(""),

      operation: Joi.string().allow(""),

      namespace: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      size: Joi.number(),

      content_type: Joi.string().allow(""),
    });
  }

  static bulkListingData() {
    return Joi.object({
      failed_shipments: Joi.array().items(Joi.any()),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      excel_url: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      processing: Joi.number(),

      successful_shipments: Joi.array().items(Joi.any()),

      total: Joi.number(),

      failed: Joi.number(),

      company_id: Joi.number(),

      status: Joi.string().allow(""),

      batch_id: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      user_name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      successful: Joi.number(),

      store_code: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      store_id: Joi.number(),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      current: Joi.number(),

      total: Joi.number(),

      has_previous: Joi.boolean(),

      has_next: Joi.boolean(),

      size: Joi.number(),

      type: Joi.string().allow(""),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      data: Joi.array().items(OrderModel.bulkListingData()),

      page: OrderModel.BulkListingPage(),

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
      status: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static BulkActionDetailsDataField() {
    return Joi.object({
      total_shipments_count: Joi.number(),

      successful_shipments_count: Joi.number(),

      company_id: Joi.string().allow(""),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      failed_shipments_count: Joi.number(),

      batch_id: Joi.string().allow(""),

      processing_shipments_count: Joi.number(),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      success: Joi.string().allow(""),

      error: Joi.array().items(Joi.string().allow("")),

      message: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uploaded_by: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      status: Joi.boolean(),

      failed_records: Joi.array().items(Joi.string().allow("")),
    });
  }

  static Dates() {
    return Joi.object({
      order_created: Joi.string().allow(""),

      delivery_date: Joi.any(),
    });
  }

  static Attributes() {
    return Joi.object({
      essential: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      primary_color: Joi.string().allow(""),

      primary_material: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      gender: Joi.string().allow("").allow(null),

      color: Joi.string().allow("").allow(null),

      brand_id: Joi.number().required(),

      can_cancel: Joi.boolean(),

      item_id: Joi.number().required(),

      can_return: Joi.boolean(),

      l2_category: Joi.array().items(Joi.string().allow("")),

      slug_key: Joi.string().allow("").required(),

      meta: Joi.any(),

      code: Joi.string().allow(""),

      l1_category_id: Joi.number(),

      last_updated_at: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")).required(),

      branch_url: Joi.string().allow("").allow(null),

      l3_category_name: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      l2_category_id: Joi.number(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      department_id: Joi.number(),

      brand: Joi.string().allow("").required(),

      webstore_product_url: Joi.string().allow("").allow(null),

      attributes: OrderModel.Attributes().required(),

      l3_category: Joi.number(),

      size: Joi.string().allow("").required(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      total_gst_percentage: Joi.number(),

      item_base_price: Joi.number(),

      po_line_amount: Joi.number(),

      partial_can_ret: Joi.boolean(),

      docker_number: Joi.string().allow(""),

      po_tax_amount: Joi.number(),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      employee_discount: Joi.number(),

      loyalty_discount: Joi.number(),

      affiliate_bag_id: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      is_customer_return_allowed: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),

      time: Joi.number(),
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
      raw_meta: Joi.any(),

      child_details: Joi.any().allow(null),

      dimensions: OrderModel.Dimensions(),

      a_set: Joi.any().allow(null),

      _id: Joi.string().allow("").required(),

      return_config: OrderModel.ReturnConfig(),

      uid: Joi.string().allow("").required(),

      is_set: Joi.boolean(),

      seller_identifier: Joi.string().allow("").required(),

      esp_modified: Joi.any(),

      identifiers: OrderModel.Identifier().required(),

      code: Joi.string().allow(""),

      size: Joi.string().allow("").required(),

      weight: OrderModel.Weight(),
    });
  }

  static StoreEinvoice() {
    return Joi.object({
      user: Joi.string().allow(""),

      password: Joi.string().allow(""),

      username: Joi.string().allow(""),

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
      user: Joi.string().allow(""),

      password: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      value: Joi.string().allow("").required(),

      verified: Joi.boolean().required(),

      url: Joi.string().allow(""),

      ds_type: Joi.string().allow("").required(),

      legal_name: Joi.string().allow("").required(),
    });
  }

  static StoreDocuments() {
    return Joi.object({
      gst: OrderModel.Document(),
    });
  }

  static StoreMeta() {
    return Joi.object({
      display_name: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      additional_contact_details: Joi.any(),

      ewaybill_portal_details: Joi.any(),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      gst_number: Joi.string().allow(""),

      product_return_config: Joi.any(),

      timing: Joi.array().items(Joi.any()),

      stage: Joi.string().allow("").required(),

      documents: OrderModel.StoreDocuments(),
    });
  }

  static StoreAddress() {
    return Joi.object({
      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow("").required(),

      version: Joi.string().allow(""),

      email: Joi.string().allow(""),

      updated_at: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      address2: Joi.string().allow(""),

      latitude: Joi.number().required(),

      area: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address_category: Joi.string().allow("").required(),

      phone: Joi.string().allow("").allow(null).required(),

      address1: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      state: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),
    });
  }

  static Store() {
    return Joi.object({
      store_active_from: Joi.string().allow("").allow(null),

      parent_store_id: Joi.number(),

      updated_at: Joi.string().allow("").allow(null),

      store_email: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      s_id: Joi.string().allow("").required(),

      brand_id: Joi.any(),

      pincode: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      company_id: Joi.number().required(),

      latitude: Joi.number().required(),

      meta: OrderModel.StoreMeta().required(),

      packaging_material_count: Joi.number(),

      code: Joi.string().allow(""),

      is_enabled_for_recon: Joi.boolean(),

      fulfillment_channel: Joi.string().allow("").required(),

      vat_no: Joi.string().allow("").allow(null),

      is_archived: Joi.boolean(),

      name: Joi.string().allow("").required(),

      alohomora_user_id: Joi.number(),

      mall_area: Joi.string().allow("").allow(null),

      order_integration_id: Joi.string().allow(""),

      mall_name: Joi.string().allow("").allow(null),

      store_address_json: OrderModel.StoreAddress(),

      city: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      address1: Joi.string().allow("").required(),

      longitude: Joi.number().required(),

      state: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      is_active: Joi.boolean(),

      contact_person: Joi.string().allow("").required(),

      location_type: Joi.string().allow("").required(),

      login_username: Joi.string().allow("").required(),
    });
  }

  static Brand() {
    return Joi.object({
      brand_name: Joi.string().allow("").required(),

      brand_id: Joi.number().required(),

      credit_note_expiry_days: Joi.number().allow(null),

      start_date: Joi.string().allow("").allow(null),

      company: Joi.string().allow("").required(),

      credit_note_allowed: Joi.boolean(),

      pickup_location: Joi.string().allow("").allow(null),

      is_virtual_invoice: Joi.boolean().allow(null),

      script_last_ran: Joi.string().allow("").allow(null),

      invoice_prefix: Joi.string().allow("").allow(null),

      modified_on: Joi.number(),

      logo: Joi.string().allow(""),

      created_on: Joi.number(),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      gst_tag: Joi.string().allow("").required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      is_default_hsn_code: Joi.boolean(),

      hsn_code_id: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number().required(),

      igst_gst_fee: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),

      sgst_tax_percentage: Joi.number().required(),

      cgst_tax_percentage: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      gstin_code: Joi.string().allow("").allow(null),

      hsn_code: Joi.string().allow("").required(),

      brand_calculated_amount: Joi.number().required(),

      gst_fee: Joi.number().required(),

      igst_tax_percentage: Joi.number().required(),

      sgst_gst_fee: Joi.string().allow("").required(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      journey_type: Joi.string().allow("").required(),

      line_number: Joi.number(),

      shipment_id: Joi.string().allow(""),

      dates: OrderModel.Dates(),

      item: OrderModel.Item().required(),

      bag_status_history: OrderModel.BagStatusHistory(),

      bag_update_time: Joi.number(),

      b_id: Joi.number().required(),

      tags: Joi.array().items(Joi.string().allow("")),

      b_type: Joi.string().allow(""),

      restore_coupon: Joi.boolean(),

      meta: OrderModel.BagMeta(),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      parent_promo_bags: Joi.any(),

      qc_required: Joi.any(),

      article_details: OrderModel.ArticleDetails(),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      prices: OrderModel.Prices().required(),

      article: OrderModel.Article().required(),

      no_of_bags_order: Joi.number(),

      original_bag_list: Joi.array().items(Joi.number()),

      quantity: Joi.number(),

      entity_type: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      restore_promos: Joi.any(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      ordering_store: OrderModel.Store(),

      order_integration_id: Joi.string().allow("").allow(null),

      affiliate_details: OrderModel.AffiliateDetails(),

      brand: OrderModel.Brand().required(),

      gst_details: OrderModel.BagGSTDetails().required(),

      reasons: Joi.array().items(Joi.any()),

      operational_status: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      current_status: OrderModel.BagStatusHistory().required(),

      applied_promos: Joi.array().items(Joi.any()),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),
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
      page_type: Joi.string().allow("").required(),

      current: Joi.number().required(),

      item_total: Joi.number().required(),

      has_next: Joi.boolean().required(),

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
      payment_receipt: Joi.string().allow(""),

      success: Joi.boolean(),

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
      error_trace: Joi.string().allow(""),

      status: Joi.number().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static StoreReassign() {
    return Joi.object({
      fynd_order_id: Joi.string().allow("").allow(null),

      item_id: Joi.string().allow("").allow(null),

      set_id: Joi.string().allow("").allow(null),

      affiliate_order_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      bag_id: Joi.number().allow(null),

      affiliate_id: Joi.string().allow("").allow(null),

      mongo_article_id: Joi.string().allow("").allow(null),

      reason_ids: Joi.array().items(Joi.number()),
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

      affiliate_order_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),

      affiliate_shipment_id: Joi.string().allow(""),
    });
  }

  static UpdateShipmentLockPayload() {
    return Joi.object({
      entity_type: Joi.string().allow("").required(),

      action_type: Joi.string().allow("").required(),

      entities: Joi.array().items(OrderModel.Entities()).required(),

      action: Joi.string().allow("").required(),
    });
  }

  static OriginalFilter() {
    return Joi.object({
      affiliate_shipment_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),
    });
  }

  static Bags() {
    return Joi.object({
      affiliate_order_id: Joi.string().allow(""),

      is_locked: Joi.boolean(),

      affiliate_bag_id: Joi.string().allow(""),

      bag_id: Joi.number(),
    });
  }

  static CheckResponse() {
    return Joi.object({
      original_filter: OrderModel.OriginalFilter(),

      status: Joi.string().allow(""),

      is_bag_locked: Joi.boolean(),

      affiliate_id: Joi.string().allow(""),

      is_shipment_locked: Joi.boolean(),

      lock_status: Joi.boolean().allow(null),

      bags: Joi.array().items(OrderModel.Bags()),

      affiliate_shipment_id: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),
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
      id: Joi.number().required(),

      created_at: Joi.string().allow(""),

      logo_url: Joi.string().allow(""),

      title: Joi.string().allow(""),

      company_id: Joi.number(),

      platform_name: Joi.string().allow(""),

      platform_id: Joi.string().allow(""),

      to_datetime: Joi.string().allow(""),

      from_datetime: Joi.string().allow(""),

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

  static DataUpdates() {
    return Joi.object({
      entities: Joi.array().items(OrderModel.EntitiesDataUpdates()),

      products: Joi.array().items(OrderModel.ProductsDataUpdates()),
    });
  }

  static Products() {
    return Joi.object({
      identifier: Joi.string().allow(""),

      line_number: Joi.number(),

      quantity: Joi.number(),
    });
  }

  static ShipmentsRequest() {
    return Joi.object({
      reasons: OrderModel.ReasonsData(),

      identifier: Joi.string().allow("").required(),

      data_updates: OrderModel.DataUpdates(),

      products: Joi.array().items(OrderModel.Products()),
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
      lock_after_transition: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),

      task: Joi.boolean(),

      force_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      final_state: Joi.any(),

      message: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      status: Joi.number(),

      meta: Joi.any(),

      code: Joi.string().allow(""),

      stack_trace: Joi.string().allow(""),

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
      mode_of_payment: Joi.string().allow(""),

      source: Joi.string().allow(""),
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
      name: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      owner: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),

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
      create_user: Joi.boolean(),

      store_lookup: Joi.string().allow(""),

      bag_end_state: Joi.string().allow(""),

      affiliate: OrderModel.Affiliate().required(),

      article_lookup: Joi.string().allow(""),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),
    });
  }

  static OrderUser() {
    return Joi.object({
      last_name: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      address2: Joi.string().allow("").allow(null),

      first_name: Joi.string().allow("").required(),

      address1: Joi.string().allow("").allow(null),

      country: Joi.string().allow("").required(),

      mobile: Joi.number().required(),
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
      dimension: Joi.any().required(),

      attributes: Joi.any().required(),

      brand_id: Joi.number().required(),

      weight: Joi.any().required(),

      _id: Joi.string().allow("").required(),

      category: Joi.any().required(),

      quantity: Joi.number().required(),
    });
  }

  static ShipmentDetails() {
    return Joi.object({
      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      dp_id: Joi.number().allow(null),

      affiliate_shipment_id: Joi.string().allow("").required(),

      box_type: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      shipments: Joi.number().required(),

      fulfillment_id: Joi.number().required(),
    });
  }

  static LocationDetails() {
    return Joi.object({
      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      fulfillment_id: Joi.number().required(),

      fulfillment_type: Joi.string().allow("").required(),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      source: Joi.string().allow("").required(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      identifier: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),

      location_details: OrderModel.LocationDetails(),

      action: Joi.string().allow("").required(),

      journey: Joi.string().allow("").required(),
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

  static MarketPlacePdf() {
    return Joi.object({
      label: Joi.string().allow("").allow(null),

      invoice: Joi.string().allow("").allow(null),
    });
  }

  static AffiliateBag() {
    return Joi.object({
      discount: Joi.number().required(),

      sku: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      unit_price: Joi.number().required(),

      affiliate_meta: Joi.any().required(),

      fynd_store_id: Joi.string().allow("").required(),

      transfer_price: Joi.number().required(),

      identifier: Joi.any().required(),

      store_id: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      modified_on: Joi.string().allow("").required(),

      item_size: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      hsn_code_id: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      item_id: Joi.number().required(),

      price_effective: Joi.number().required(),

      company_id: Joi.number().required(),

      avl_qty: Joi.number().required(),

      price_marked: Joi.number().required(),

      quantity: Joi.number().required(),
    });
  }

  static OrderInfo() {
    return Joi.object({
      coupon: Joi.string().allow("").allow(null),

      user: OrderModel.UserData().required(),

      discount: Joi.number().required(),

      shipment: OrderModel.ShipmentData(),

      billing_address: OrderModel.OrderUser().required(),

      affiliate_order_id: Joi.string().allow(""),

      items: Joi.any().required(),

      cod_charges: Joi.number().required(),

      order_priority: OrderModel.OrderPriority(),

      payment_mode: Joi.string().allow("").required(),

      order_value: Joi.number().required(),

      payment: Joi.any(),

      shipping_address: OrderModel.OrderUser().required(),

      delivery_charges: Joi.number().required(),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),
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
      slug: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

      id: Joi.number().required(),

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
      user: Joi.string().allow("").required(),

      l2_detail: Joi.string().allow(""),

      message: Joi.string().allow("").required(),

      ticket_id: Joi.string().allow(""),

      l1_detail: Joi.string().allow(""),

      l3_detail: Joi.string().allow(""),

      bag_id: Joi.number(),

      type: Joi.string().allow("").required(),

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
      success: Joi.boolean(),

      message: Joi.string().allow(""),
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

      customer_name: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      shipment_id: Joi.number().required(),

      country_code: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      phone_number: Joi.number().required(),

      amount_paid: Joi.number().required(),
    });
  }

  static SendSmsPayload() {
    return Joi.object({
      data: OrderModel.SmsDataPayload(),

      slug: Joi.string().allow("").required(),

      bag_id: Joi.number().required(),
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

      bag_list: Joi.array().items(Joi.number()),

      meta: OrderModel.Meta1().required(),

      status: Joi.string().allow(""),

      remarks: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),
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
      shipment_ids: Joi.array().items(Joi.string().allow("")),

      dp_id: Joi.number().required(),

      order_type: Joi.string().allow("").required(),

      qc_required: Joi.string().allow("").required(),
    });
  }

  static ManualAssignDPToShipmentResponse() {
    return Joi.object({
      errors: Joi.array().items(Joi.string().allow("")),

      success: Joi.string().allow("").required(),
    });
  }

  static BillingInfo() {
    return Joi.object({
      alternate_mobile_number: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      primary_email: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      alternate_mobile_number: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      geo_location: Joi.any(),

      last_name: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      shipping_type: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),

      slot: Joi.array().items(Joi.any()),

      external_customer_code: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      mode: Joi.string().allow("").required(),

      transaction_data: Joi.any(),

      amount: Joi.number().required(),

      meta: Joi.any(),

      refund_by: Joi.string().allow("").required(),

      collect_by: Joi.string().allow("").required(),
    });
  }

  static PaymentInfo() {
    return Joi.object({
      payment_methods: Joi.array().items(OrderModel.PaymentMethod()),

      primary_mode: Joi.string().allow("").required(),
    });
  }

  static TaxInfo() {
    return Joi.object({
      b2b_gstin_number: Joi.string().allow(""),

      gstin: Joi.string().allow(""),
    });
  }

  static Tax() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      rate: Joi.number().required(),

      amount: Joi.any().required(),

      breakup: Joi.array().items(Joi.any()),
    });
  }

  static Charge() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      tax: OrderModel.Tax(),

      amount: Joi.any().required(),

      code: Joi.string().allow(""),

      type: Joi.string().allow("").required(),
    });
  }

  static LineItem() {
    return Joi.object({
      custom_messasge: Joi.string().allow(""),

      meta: Joi.any(),

      seller_identifier: Joi.string().allow("").required(),

      charges: Joi.array().items(OrderModel.Charge()),

      external_line_id: Joi.string().allow(""),

      quantity: Joi.number(),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      confirm_by_date: Joi.string().allow(""),

      dispatch_by_date: Joi.string().allow(""),

      customer_pickup_slot: Joi.any(),

      dispatch_after_date: Joi.string().allow(""),

      pack_by_date: Joi.string().allow(""),

      dp_pickup_slot: Joi.any(),
    });
  }

  static Shipment() {
    return Joi.object({
      priority: Joi.number(),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),

      meta: Joi.any(),

      processing_dates: OrderModel.ProcessingDates(),

      external_shipment_id: Joi.string().allow(""),

      location_id: Joi.number().required(),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      external_creation_date: Joi.string().allow(""),

      billing_info: OrderModel.BillingInfo().required(),

      meta: Joi.any(),

      shipping_info: OrderModel.ShippingInfo().required(),

      currency_info: Joi.any(),

      payment_info: OrderModel.PaymentInfo().required(),

      tax_info: OrderModel.TaxInfo(),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      charges: Joi.array().items(OrderModel.Charge()),

      external_order_id: Joi.string().allow(""),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      request_id: Joi.string().allow("").allow(null),

      meta: Joi.string().allow("").allow(null),

      status: Joi.number().required(),

      code: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),

      info: Joi.any(),

      exception: Joi.string().allow("").allow(null),
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

      dp_configuration: OrderModel.DpConfiguration(),

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

      start_date: Joi.string().allow("").required(),

      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),

      mobile: Joi.number().required(),
    });
  }
}
module.exports = OrderModel;
