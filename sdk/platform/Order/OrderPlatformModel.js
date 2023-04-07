const Joi = require("joi");

class OrderModel {
  static FilterInfoOption() {
    return Joi.object({
      value: Joi.string().allow(""),

      text: Joi.string().allow("").required(),

      name: Joi.string().allow(""),
    });
  }

  static FiltersInfo() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.FilterInfoOption()),
    });
  }

  static Prices() {
    return Joi.object({
      coupon_value: Joi.number(),

      fynd_credits: Joi.number(),

      price_effective: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      cod_charges: Joi.number(),

      price_marked: Joi.number(),

      transfer_price: Joi.number(),

      cashback: Joi.number(),

      discount: Joi.number(),

      refund_amount: Joi.number(),

      value_of_good: Joi.number(),

      tax_collected_at_source: Joi.number(),

      amount_paid: Joi.number(),

      promotion_effective_discount: Joi.number(),

      refund_credit: Joi.number(),

      cashback_applied: Joi.number(),

      delivery_charge: Joi.number(),
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
      color: Joi.string().allow("").allow(null),

      code: Joi.string().allow(""),

      department_id: Joi.number(),

      l3_category_name: Joi.string().allow(""),

      id: Joi.number(),

      images: Joi.array().items(Joi.string().allow("")),

      l1_category: Joi.array().items(Joi.string().allow("")),

      l3_category: Joi.number(),

      size: Joi.string().allow(""),

      name: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")),

      can_return: Joi.boolean(),

      can_cancel: Joi.boolean(),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      gst_fee: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),
    });
  }

  static BagUnit() {
    return Joi.object({
      item_quantity: Joi.number().required(),

      item: OrderModel.PlatformItem(),

      prices: OrderModel.Prices(),

      ordering_channel: Joi.string().allow("").required(),

      gst: OrderModel.GSTDetailsData(),

      shipment_id: Joi.string().allow("").required(),

      status: Joi.any().required(),

      total_shipment_bags: Joi.number().required(),

      bag_id: Joi.number().required(),

      can_return: Joi.boolean(),

      can_cancel: Joi.boolean(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      ops_status: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),
    });
  }

  static PaymentModeInfo() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),
    });
  }

  static UserDataInfo() {
    return Joi.object({
      is_anonymous_user: Joi.boolean(),

      avis_user_id: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      uid: Joi.number(),

      gender: Joi.string().allow(""),

      email: Joi.string().allow(""),

      name: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      application: Joi.any(),

      prices: OrderModel.Prices(),

      total_shipments_in_order: Joi.number().required(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      company: Joi.any(),

      shipment_created_at: Joi.string().allow("").required(),

      total_bags_count: Joi.number().required(),

      created_at: Joi.string().allow("").required(),

      shipment_id: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.BagUnit()),

      id: Joi.string().allow("").required(),

      payment_methods: Joi.any(),

      shipment_status: OrderModel.ShipmentStatus(),

      channel: Joi.any(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      user: OrderModel.UserDataInfo(),

      sla: Joi.any(),

      fulfilling_centre: Joi.string().allow("").required(),
    });
  }

  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      filters: Joi.array().items(OrderModel.FiltersInfo()),

      applied_filters: Joi.any(),

      items: Joi.array().items(OrderModel.ShipmentItem()),

      page: Joi.any(),
    });
  }

  static Error() {
    return Joi.object({
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      ordering_channel_logo: Joi.any(),

      cod_charges: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow("").required(),

      ordering_channel: Joi.string().allow(""),

      tax_details: Joi.any(),

      source: Joi.string().allow(""),

      order_value: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      order_date: Joi.string().allow(""),
    });
  }

  static Dimensions() {
    return Joi.object({
      height: Joi.number(),

      unit: Joi.string().allow(""),

      width: Joi.number(),

      length: Joi.number(),

      is_default: Joi.boolean(),
    });
  }

  static Meta() {
    return Joi.object({
      dimension: OrderModel.Dimensions(),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      uid: Joi.string().allow(""),

      identifiers: Joi.any(),

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
      fynd_credits: Joi.number().required(),

      transfer_price: Joi.number().required(),

      value_of_good: Joi.number().required(),

      tax_collected_at_source: Joi.number(),

      refund_credit: Joi.number().required(),

      total_units: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      amount_paid_roundoff: Joi.number(),

      cod_charges: Joi.number().required(),

      price_marked: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      added_to_fynd_cash: Joi.boolean().required(),

      amount_paid: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      gst_fee: Joi.number().required(),

      cashback: Joi.number().required(),

      discount: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      promotion_effective_discount: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      coupon_value: Joi.number().required(),

      price_effective: Joi.number().required(),

      size: Joi.string().allow("").required(),

      identifiers: OrderModel.Identifier().required(),

      coupon_effective_discount: Joi.number().required(),

      cashback_applied: Joi.number().required(),
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

      promo_id: Joi.string().allow(""),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      article_quantity: Joi.number(),

      promotion_type: Joi.string().allow(""),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      mrp_promotion: Joi.boolean(),

      promotion_name: Joi.string().allow(""),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      notify_customer: Joi.boolean(),

      bs_id: Joi.number().required(),

      app_display_name: Joi.string().allow(""),

      is_active: Joi.boolean(),

      display_name: Joi.string().allow("").required(),

      journey_type: Joi.string().allow("").required(),

      state_type: Joi.string().allow("").required(),

      app_facing: Joi.boolean(),

      name: Joi.string().allow("").required(),

      app_state_name: Joi.string().allow(""),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      current_status_id: Joi.number().required(),

      updated_at: Joi.string().allow(""),

      bag_state_mapper: OrderModel.BagStateMapper(),

      kafka_sync: Joi.boolean(),

      created_at: Joi.string().allow("").allow(null),

      store_id: Joi.number(),

      status: Joi.string().allow(""),

      delivery_partner_id: Joi.number(),

      state_id: Joi.number(),

      shipment_id: Joi.string().allow(""),

      state_type: Joi.string().allow(""),

      bag_id: Joi.number(),

      delivery_awb_number: Joi.string().allow(""),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      created_on: Joi.string().allow("").required(),

      company: Joi.string().allow("").allow(null).required(),

      id: Joi.number().required(),

      logo: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),
    });
  }

  static BagGST() {
    return Joi.object({
      brand_calculated_amount: Joi.number(),

      gst_fee: Joi.number(),

      hsn_code: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      gstin_code: Joi.string().allow(""),

      value_of_good: Joi.number(),

      is_default_hsn_code: Joi.boolean(),

      gst_tax_percentage: Joi.number(),
    });
  }

  static BagConfigs() {
    return Joi.object({
      enable_tracking: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      phone: Joi.string().allow(""),

      state: Joi.string().allow(""),

      city: Joi.string().allow(""),

      country: Joi.string().allow(""),

      latitude: Joi.number(),

      contact_person: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      email: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      longitude: Joi.number(),

      version: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      area: Joi.string().allow(""),
    });
  }

  static OrderBags() {
    return Joi.object({
      seller_identifier: Joi.string().allow(""),

      article: OrderModel.OrderBagArticle(),

      item: OrderModel.PlatformItem(),

      display_name: Joi.string().allow(""),

      financial_breakup: OrderModel.FinancialBreakup(),

      quantity: Joi.number(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      can_return: Joi.boolean(),

      current_status: OrderModel.CurrentStatus(),

      line_number: Joi.number(),

      identifier: Joi.string().allow(""),

      prices: OrderModel.Prices(),

      entity_type: Joi.string().allow(""),

      brand: OrderModel.OrderBrandName(),

      gst_details: OrderModel.BagGST(),

      bag_configs: OrderModel.BagConfigs(),

      bag_id: Joi.number().required(),

      parent_promo_bags: Joi.any(),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      can_cancel: Joi.boolean(),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      phone: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      ordering_store_id: Joi.number().required(),

      address: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      store_name: Joi.string().allow("").required(),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      bag_list: Joi.array().items(Joi.string().allow("")),

      created_at: Joi.string().allow("").allow(null),

      shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      id: Joi.number(),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      phone: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      address1: Joi.string().allow(""),

      email: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      address_type: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      area: Joi.string().allow(""),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      phone: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      id: Joi.number().required(),

      store_name: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),
    });
  }

  static EinvoiceInfo() {
    return Joi.object({
      credit_note: Joi.any(),

      invoice: Joi.any(),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      state: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address: Joi.string().allow("").allow(null).required(),

      pincode: Joi.number().required(),

      gstin: Joi.string().allow("").required(),

      ajio_site_id: Joi.string().allow(""),

      name: Joi.string().allow("").required(),
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

  static LockData() {
    return Joi.object({
      mto: Joi.boolean(),

      locked: Joi.boolean(),

      lock_message: Joi.string().allow(""),
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
      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      einvoice_info: OrderModel.EinvoiceInfo(),

      bag_weight: Joi.any(),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      weight: Joi.number().required(),

      debug_info: OrderModel.DebugInfo(),

      due_date: Joi.string().allow(""),

      ewaybill_info: Joi.any().allow(null),

      b2c_buyer_details: Joi.any().allow(null),

      same_store_available: Joi.boolean().required(),

      shipment_weight: Joi.number(),

      store_invoice_updated_date: Joi.string().allow(""),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      return_affiliate_shipment_id: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      formatted: OrderModel.Formatted(),

      packaging_name: Joi.string().allow(""),

      marketplace_store_id: Joi.string().allow(""),

      shipment_volumetric_weight: Joi.number(),

      dp_sort_key: Joi.string().allow(""),

      po_number: Joi.string().allow(""),

      dp_id: Joi.string().allow("").allow(null),

      awb_number: Joi.string().allow(""),

      return_affiliate_order_id: Joi.string().allow(""),

      return_awb_number: Joi.string().allow(""),

      return_store_node: Joi.number(),

      assign_dp_from_sb: Joi.boolean(),

      order_type: Joi.string().allow("").allow(null),

      dp_name: Joi.string().allow(""),

      return_details: Joi.any(),

      external: Joi.any(),

      dp_options: Joi.any(),

      lock_data: OrderModel.LockData(),

      forward_affiliate_order_id: Joi.string().allow(""),

      timestamp: OrderModel.ShipmentTimeStamp(),

      forward_affiliate_shipment_id: Joi.string().allow(""),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      box_type: Joi.string().allow("").allow(null),

      employee_discount: Joi.number(),

      coupon_code: Joi.string().allow("").allow(null),

      is_priority: Joi.boolean(),

      channel_order_id: Joi.string().allow("").allow(null),

      channel_shipment_id: Joi.string().allow("").allow(null),

      quantity: Joi.number(),

      loyalty_discount: Joi.number(),

      size_level_total_qty: Joi.number().allow(null),

      order_item_id: Joi.string().allow(""),

      due_date: Joi.string().allow("").allow(null),
    });
  }

  static PDFLinks() {
    return Joi.object({
      b2b: Joi.string().allow(""),

      delivery_challan_a4: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      po_invoice: Joi.string().allow(""),

      label: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      label_pos: Joi.string().allow(""),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow("").required(),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      ad_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      pdf_links: OrderModel.PDFLinks(),

      affiliate_id: Joi.string().allow(""),

      company_affiliate_tag: Joi.string().allow(""),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      app_display_name: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      bsh_id: Joi.number(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      kafka_sync: Joi.boolean(),

      created_at: Joi.string().allow(""),

      store_id: Joi.number(),

      shipment_id: Joi.string().allow(""),

      delivery_partner_id: Joi.number().allow(null),

      status: Joi.string().allow("").required(),

      state_id: Joi.number(),

      reasons: Joi.array().items(Joi.any()),

      state_type: Joi.string().allow(""),

      bag_id: Joi.number(),

      updated_at: Joi.string().allow(""),

      delivery_awb_number: Joi.string().allow("").allow(null),

      forward: Joi.boolean().allow(null),
    });
  }

  static InvoiceInfo() {
    return Joi.object({
      credit_note_id: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),

      label_url: Joi.string().allow(""),

      store_invoice_id: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      awb_no: Joi.string().allow(""),

      eway_bill_id: Joi.string().allow("").allow(null),

      country: Joi.string().allow(""),

      track_url: Joi.string().allow("").allow(null),

      gst_tag: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      id: Joi.number(),

      name: Joi.string().allow(""),
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

      address: Joi.any(),

      company_cin: Joi.string().allow(""),

      company_name: Joi.string().allow(""),

      company_gst: Joi.string().allow(""),

      company_contact: OrderModel.ContactDetails(),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      total_bags: Joi.number(),

      order: OrderModel.OrderDetailsData(),

      picked_date: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),

      meta: OrderModel.Meta(),

      invoice_id: Joi.string().allow(""),

      priority_text: Joi.string().allow("").allow(null),

      vertical: Joi.string().allow("").allow(null),

      delivery_slot: Joi.any(),

      forward_shipment_id: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.OrderBags()),

      ordering_store: OrderModel.OrderingStoreDetails(),

      user_agent: Joi.string().allow(""),

      status: OrderModel.ShipmentStatusData(),

      enable_dp_tracking: Joi.boolean(),

      shipment_status: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      custom_meta: Joi.array().items(Joi.any()),

      total_items: Joi.number(),

      billing_details: OrderModel.UserDetailsData(),

      prices: OrderModel.Prices(),

      operational_status: Joi.string().allow(""),

      fulfilling_store: OrderModel.FulfillingStore(),

      coupon: Joi.any(),

      delivery_details: OrderModel.UserDetailsData(),

      packaging_type: Joi.string().allow(""),

      affiliate_details: OrderModel.AffiliateDetails(),

      fulfilment_priority: Joi.number(),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      invoice: OrderModel.InvoiceInfo(),

      dp_details: OrderModel.DPDetailsData(),

      user: OrderModel.UserDataInfo(),

      shipment_quantity: Joi.number(),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      journey_type: Joi.string().allow(""),

      gst_details: OrderModel.GSTDetailsData(),

      lock_status: Joi.boolean(),

      payment_methods: Joi.any(),

      payments: OrderModel.ShipmentPayments(),

      company_details: OrderModel.CompanyDetails(),

      platform_logo: Joi.string().allow(""),

      shipment_images: Joi.array().items(Joi.string().allow("")),
    });
  }

  static ShipmentInfoResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

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
      platform_user_first_name: Joi.string().allow(""),

      platform_user_employee_code: Joi.string().allow(""),

      platform_user_id: Joi.string().allow(""),

      platform_user_last_name: Joi.string().allow(""),
    });
  }

  static TransactionData() {
    return Joi.object({
      transaction_id: Joi.string().allow(""),

      payment_id: Joi.string().allow(""),

      terminal_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      amount_paid: Joi.string().allow(""),

      entity: Joi.string().allow(""),

      unique_reference_number: Joi.string().allow(""),

      currency: Joi.string().allow(""),
    });
  }

  static BillingStaffDetails() {
    return Joi.object({
      first_name: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      staff_id: Joi.number(),

      employee_code: Joi.string().allow(""),

      user: Joi.string().allow(""),
    });
  }

  static OrderMeta() {
    return Joi.object({
      comment: Joi.string().allow(""),

      mongo_cart_id: Joi.number(),

      employee_id: Joi.number(),

      company_logo: Joi.string().allow(""),

      order_platform: Joi.string().allow(""),

      cart_id: Joi.number(),

      staff: Joi.any(),

      platform_user_details: OrderModel.PlatformUserDetails(),

      order_tags: Joi.array().items(Joi.any()),

      ordering_store: Joi.number(),

      extra_meta: Joi.any(),

      customer_note: Joi.string().allow(""),

      files: Joi.array().items(Joi.any()),

      transaction_data: OrderModel.TransactionData(),

      billing_staff_details: OrderModel.BillingStaffDetails(),

      currency_symbol: Joi.string().allow(""),

      order_type: Joi.string().allow(""),

      payment_type: Joi.string().allow(""),

      order_child_entities: Joi.array().items(Joi.string().allow("")),
    });
  }

  static OrderDict() {
    return Joi.object({
      prices: OrderModel.Prices(),

      fynd_order_id: Joi.string().allow("").required(),

      tax_details: OrderModel.TaxDetails(),

      meta: OrderModel.OrderMeta(),

      payment_methods: Joi.any(),

      order_date: Joi.string().allow("").required(),
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
      total_items: Joi.number(),

      actions: Joi.array().items(Joi.any()),

      value: Joi.string().allow(""),

      text: Joi.string().allow(""),

      index: Joi.number(),
    });
  }

  static SuperLane() {
    return Joi.object({
      total_items: Joi.number(),

      value: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.SubLane()),
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

      display: Joi.string().allow(""),

      name: Joi.string().allow(""),
    });
  }

  static PlatformOrderItems() {
    return Joi.object({
      order_id: Joi.string().allow(""),

      total_order_value: Joi.number(),

      order_value: Joi.number(),

      meta: Joi.any(),

      order_created_time: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      channel: OrderModel.PlatformChannel(),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      user_info: OrderModel.UserDataInfo(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),
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

      message: Joi.string().allow(""),

      success: Joi.boolean(),

      lane: Joi.string().allow(""),

      items: Joi.array().items(OrderModel.PlatformOrderItems()),

      page: OrderModel.Page(),
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

      key: Joi.string().allow("").required(),

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
      account_name: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      awb: Joi.string().allow(""),
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
      filters: Joi.array().items(OrderModel.FiltersInfo()),

      action_centre: Joi.array().items(OrderModel.FiltersInfo()),

      returned: Joi.array().items(OrderModel.FiltersInfo()),

      unfulfilled: Joi.array().items(OrderModel.FiltersInfo()),

      processed: Joi.array().items(OrderModel.FiltersInfo()),
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
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static OmsReports() {
    return Joi.object({
      display_name: Joi.string().allow(""),

      report_type: Joi.string().allow(""),

      status: Joi.string().allow(""),

      s3_key: Joi.string().allow(""),

      report_created_at: Joi.string().allow("").allow(null),

      report_requested_at: Joi.string().allow("").allow(null),

      request_details: Joi.any(),

      report_id: Joi.string().allow(""),

      report_name: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      company_id: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

      jio_code: Joi.string().allow(""),

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
      identifier: Joi.string().allow(""),

      data: Joi.array().items(Joi.any()),

      trace_id: Joi.string().allow(""),

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
      do_invoice_label_generated: Joi.boolean().required(),

      company_id: Joi.string().allow(""),

      data: Joi.any(),

      store_code: Joi.string().allow(""),

      store_id: Joi.string().allow(""),

      batch_id: Joi.string().allow("").required(),

      store_name: Joi.string().allow(""),

      label: Joi.any(),

      invoice_status: Joi.string().allow(""),

      invoice: Joi.any(),
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
      method: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      operation: Joi.string().allow(""),

      content_type: Joi.string().allow(""),

      upload: OrderModel.FileUploadResponse(),

      size: Joi.number(),

      file_path: Joi.string().allow(""),

      cdn: OrderModel.URL(),

      namespace: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  static bulkListingData() {
    return Joi.object({
      batch_id: Joi.string().allow(""),

      successful: Joi.number(),

      user_id: Joi.string().allow(""),

      successful_shipments: Joi.array().items(Joi.any()),

      failed_shipments: Joi.array().items(Joi.any()),

      store_id: Joi.number(),

      status: Joi.string().allow(""),

      id: Joi.string().allow(""),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      processing: Joi.number(),

      file_name: Joi.string().allow(""),

      user_name: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      failed: Joi.number(),

      store_name: Joi.string().allow(""),

      total: Joi.number(),

      company_id: Joi.number(),

      excel_url: Joi.string().allow(""),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      current: Joi.number(),

      has_next: Joi.boolean(),

      size: Joi.number(),

      has_previous: Joi.boolean(),

      total: Joi.number(),

      type: Joi.string().allow(""),
    });
  }

  static BulkListingResponse() {
    return Joi.object({
      data: Joi.array().items(OrderModel.bulkListingData()),

      error: Joi.string().allow(""),

      page: OrderModel.BulkListingPage(),

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

      id: Joi.number(),

      question_set: Joi.array().items(OrderModel.QuestionSet()),

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
      processing_shipments_count: Joi.number(),

      company_id: Joi.string().allow(""),

      successful_shipments_count: Joi.number(),

      total_shipments_count: Joi.number(),

      batch_id: Joi.string().allow(""),

      failed_shipments_count: Joi.number(),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      uploaded_by: Joi.string().allow(""),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      uploaded_on: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      message: Joi.string().allow(""),

      success: Joi.string().allow(""),

      status: Joi.boolean(),

      failed_records: Joi.array().items(Joi.string().allow("")),

      error: Joi.array().items(Joi.string().allow("")),
    });
  }

  static AffiliateBagDetails() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow("").required(),

      employee_discount: Joi.number(),

      affiliate_order_id: Joi.string().allow("").required(),

      loyalty_discount: Joi.number(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
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
      unit: Joi.string().allow(""),

      returnable: Joi.boolean(),

      time: Joi.number(),
    });
  }

  static Article() {
    return Joi.object({
      esp_modified: Joi.any(),

      _id: Joi.string().allow("").required(),

      a_set: Joi.any().allow(null),

      uid: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      size: Joi.string().allow("").required(),

      raw_meta: Joi.any(),

      identifiers: OrderModel.Identifier().required(),

      child_details: Joi.any().allow(null),

      dimensions: OrderModel.Dimensions(),

      weight: OrderModel.Weight(),

      return_config: OrderModel.ReturnConfig(),

      is_set: Joi.boolean(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      total_gst_percentage: Joi.number(),

      docker_number: Joi.string().allow(""),

      po_tax_amount: Joi.number(),

      partial_can_ret: Joi.boolean(),

      po_line_amount: Joi.number(),

      item_base_price: Joi.number(),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }

  static Attributes() {
    return Joi.object({
      primary_color: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      essential: Joi.string().allow(""),

      name: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      primary_material: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      l1_category_id: Joi.number(),

      meta: Joi.any(),

      department_id: Joi.number(),

      name: Joi.string().allow("").required(),

      branch_url: Joi.string().allow("").allow(null),

      l2_category: Joi.array().items(Joi.string().allow("")),

      l2_category_id: Joi.number(),

      attributes: OrderModel.Attributes().required(),

      code: Joi.string().allow(""),

      webstore_product_url: Joi.string().allow("").allow(null),

      item_id: Joi.number().required(),

      last_updated_at: Joi.string().allow(""),

      can_return: Joi.boolean(),

      gender: Joi.string().allow("").allow(null),

      brand_id: Joi.number().required(),

      l3_category: Joi.number(),

      slug_key: Joi.string().allow("").required(),

      brand: Joi.string().allow("").required(),

      l3_category_name: Joi.string().allow(""),

      l1_category: Joi.array().items(Joi.string().allow("")),

      size: Joi.string().allow("").required(),

      image: Joi.array().items(Joi.string().allow("")).required(),

      color: Joi.string().allow("").allow(null),

      can_cancel: Joi.boolean(),
    });
  }

  static Dates() {
    return Joi.object({
      order_created: Joi.string().allow(""),

      delivery_date: Joi.any(),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      enable_tracking: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),
    });
  }

  static EInvoicePortalDetails() {
    return Joi.object({
      password: Joi.string().allow(""),

      user: Joi.string().allow(""),

      username: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      verified: Joi.boolean().required(),

      url: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      legal_name: Joi.string().allow("").required(),

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

  static StoreMeta() {
    return Joi.object({
      timing: Joi.array().items(Joi.any()),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      ewaybill_portal_details: Joi.any(),

      display_name: Joi.string().allow("").required(),

      documents: OrderModel.StoreDocuments(),

      additional_contact_details: Joi.any(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      stage: Joi.string().allow("").required(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      product_return_config: Joi.any(),

      gst_number: Joi.string().allow(""),
    });
  }

  static StoreAddress() {
    return Joi.object({
      longitude: Joi.number().required(),

      landmark: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      contact_person: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      address_category: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),

      version: Joi.string().allow(""),

      updated_at: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      phone: Joi.string().allow("").allow(null).required(),

      city: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      address1: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      area: Joi.string().allow(""),
    });
  }

  static Store() {
    return Joi.object({
      alohomora_user_id: Joi.number(),

      packaging_material_count: Joi.number(),

      location_type: Joi.string().allow("").required(),

      meta: OrderModel.StoreMeta().required(),

      store_active_from: Joi.string().allow("").allow(null),

      mall_name: Joi.string().allow("").allow(null),

      longitude: Joi.number().required(),

      name: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      order_integration_id: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      login_username: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      created_at: Joi.string().allow("").required(),

      is_enabled_for_recon: Joi.boolean(),

      is_active: Joi.boolean(),

      store_address_json: OrderModel.StoreAddress(),

      brand_id: Joi.any(),

      address2: Joi.string().allow(""),

      updated_at: Joi.string().allow("").allow(null),

      vat_no: Joi.string().allow("").allow(null),

      is_archived: Joi.boolean(),

      company_id: Joi.number().required(),

      city: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      state: Joi.string().allow("").required(),

      store_email: Joi.string().allow("").required(),

      s_id: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      mall_area: Joi.string().allow("").allow(null),

      address1: Joi.string().allow("").required(),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      parent_store_id: Joi.number(),
    });
  }

  static Brand() {
    return Joi.object({
      credit_note_allowed: Joi.boolean(),

      pickup_location: Joi.string().allow("").allow(null),

      is_virtual_invoice: Joi.boolean().allow(null),

      company: Joi.string().allow("").required(),

      created_on: Joi.number(),

      invoice_prefix: Joi.string().allow("").allow(null),

      brand_id: Joi.number().required(),

      credit_note_expiry_days: Joi.number().allow(null),

      start_date: Joi.string().allow("").allow(null),

      logo: Joi.string().allow(""),

      brand_name: Joi.string().allow("").required(),

      script_last_ran: Joi.string().allow("").allow(null),

      modified_on: Joi.number(),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      brand_calculated_amount: Joi.number().required(),

      gst_fee: Joi.number().required(),

      igst_gst_fee: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

      sgst_tax_percentage: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow("").required(),

      gstin_code: Joi.string().allow("").allow(null),

      cgst_gst_fee: Joi.string().allow("").required(),

      value_of_good: Joi.number().required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      is_default_hsn_code: Joi.boolean(),

      tax_collected_at_source: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      cgst_tax_percentage: Joi.number().required(),

      igst_tax_percentage: Joi.number().required(),
    });
  }

  static BagDetailsPlatformResponse() {
    return Joi.object({
      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      seller_identifier: Joi.string().allow(""),

      article_details: OrderModel.ArticleDetails(),

      article: OrderModel.Article().required(),

      meta: OrderModel.BagMeta(),

      shipment_id: Joi.string().allow(""),

      restore_promos: Joi.any(),

      b_id: Joi.number().required(),

      order_integration_id: Joi.string().allow("").allow(null),

      item: OrderModel.Item().required(),

      display_name: Joi.string().allow(""),

      dates: OrderModel.Dates(),

      qc_required: Joi.any(),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      applied_promos: Joi.array().items(Joi.any()),

      quantity: Joi.number(),

      b_type: Joi.string().allow(""),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      ordering_store: OrderModel.Store(),

      current_status: OrderModel.BagStatusHistory().required(),

      line_number: Joi.number(),

      identifier: Joi.string().allow(""),

      bag_update_time: Joi.number(),

      prices: OrderModel.Prices().required(),

      operational_status: Joi.string().allow(""),

      affiliate_details: OrderModel.AffiliateDetails(),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      entity_type: Joi.string().allow(""),

      no_of_bags_order: Joi.number(),

      original_bag_list: Joi.array().items(Joi.number()),

      bag_status_history: OrderModel.BagStatusHistory(),

      brand: OrderModel.Brand().required(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      journey_type: Joi.string().allow("").required(),

      restore_coupon: Joi.boolean(),

      gst_details: OrderModel.BagGSTDetails().required(),

      reasons: Joi.array().items(Joi.any()),

      parent_promo_bags: Joi.any(),

      tags: Joi.array().items(Joi.string().allow("")),
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

      item_total: Joi.number().required(),

      has_next: Joi.boolean().required(),

      page_type: Joi.string().allow("").required(),

      size: Joi.number().required(),
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
      store_id: Joi.number().required(),

      mongo_article_id: Joi.string().allow("").allow(null),

      affiliate_order_id: Joi.string().allow("").allow(null),

      item_id: Joi.string().allow("").allow(null),

      set_id: Joi.string().allow("").allow(null),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      affiliate_id: Joi.string().allow("").allow(null),

      fynd_order_id: Joi.string().allow("").allow(null),

      reason_ids: Joi.array().items(Joi.number()),

      bag_id: Joi.number().allow(null),
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
      affiliate_shipment_id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),

      id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow(""),
    });
  }

  static UpdateShipmentLockPayload() {
    return Joi.object({
      action_type: Joi.string().allow("").required(),

      action: Joi.string().allow("").required(),

      entities: Joi.array().items(OrderModel.Entities()).required(),

      entity_type: Joi.string().allow("").required(),
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

      bag_id: Joi.number(),

      affiliate_bag_id: Joi.string().allow(""),

      is_locked: Joi.boolean(),
    });
  }

  static CheckResponse() {
    return Joi.object({
      affiliate_shipment_id: Joi.string().allow(""),

      is_shipment_locked: Joi.boolean(),

      original_filter: OrderModel.OriginalFilter(),

      lock_status: Joi.boolean().allow(null),

      status: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.Bags()),

      is_bag_locked: Joi.boolean(),

      affiliate_id: Joi.string().allow(""),
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
      created_at: Joi.string().allow(""),

      id: Joi.number().required(),

      company_id: Joi.number(),

      description: Joi.string().allow(""),

      logo_url: Joi.string().allow(""),

      to_datetime: Joi.string().allow(""),

      title: Joi.string().allow(""),

      from_datetime: Joi.string().allow(""),

      platform_id: Joi.string().allow(""),

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
      identifier: Joi.string().allow(""),

      line_number: Joi.number(),

      quantity: Joi.number(),
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

  static EntitiesDataUpdates() {
    return Joi.object({
      filters: Joi.array().items(Joi.any()),

      data: Joi.any(),
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
      status: Joi.string().allow(""),

      exclude_bags_next_state: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.ShipmentsRequest()),
    });
  }

  static UpdateShipmentStatusRequest() {
    return Joi.object({
      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      force_transition: Joi.boolean(),

      task: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      code: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      stack_trace: Joi.string().allow(""),

      status: Joi.number(),

      exception: Joi.string().allow(""),

      meta: Joi.any(),

      final_state: Joi.any(),

      message: Joi.string().allow(""),
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
      created_at: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      updated_at: Joi.string().allow("").required(),

      owner: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),
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

  static AffiliateInventoryConfig() {
    return Joi.object({
      inventory: OrderModel.AffiliateInventoryStoreConfig(),

      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),

      order: OrderModel.AffiliateInventoryOrderConfig(),

      payment: OrderModel.AffiliateInventoryPaymentConfig(),
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
      token: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

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
      store_lookup: Joi.string().allow(""),

      create_user: Joi.boolean(),

      affiliate: OrderModel.Affiliate().required(),

      bag_end_state: Joi.string().allow(""),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      article_lookup: Joi.string().allow(""),
    });
  }

  static OrderUser() {
    return Joi.object({
      state: Joi.string().allow("").required(),

      address2: Joi.string().allow("").allow(null),

      first_name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      pincode: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      address1: Joi.string().allow("").allow(null),

      phone: Joi.number().required(),

      last_name: Joi.string().allow("").required(),
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

      affiliate_priority_code: Joi.string().allow("").allow(null),

      fulfilment_priority: Joi.number().allow(null),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      dimension: Joi.any().required(),

      category: Joi.any().required(),

      weight: Joi.any().required(),

      attributes: Joi.any().required(),

      _id: Joi.string().allow("").required(),

      quantity: Joi.number().required(),

      brand_id: Joi.number().required(),
    });
  }

  static ShipmentDetails() {
    return Joi.object({
      affiliate_shipment_id: Joi.string().allow("").required(),

      fulfillment_id: Joi.number().required(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      shipments: Joi.number().required(),

      box_type: Joi.string().allow("").allow(null),

      meta: Joi.any(),

      dp_id: Joi.number().allow(null),
    });
  }

  static LocationDetails() {
    return Joi.object({
      fulfillment_id: Joi.number().required(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      fulfillment_type: Joi.string().allow("").required(),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      payment_mode: Joi.string().allow("").required(),

      journey: Joi.string().allow("").required(),

      identifier: Joi.string().allow("").required(),

      source: Joi.string().allow("").required(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      location_details: OrderModel.LocationDetails(),

      action: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),
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
      amount_paid: Joi.number().required(),

      company_id: Joi.number().required(),

      modified_on: Joi.string().allow("").required(),

      identifier: Joi.any().required(),

      affiliate_meta: Joi.any().required(),

      transfer_price: Joi.number().required(),

      sku: Joi.string().allow("").required(),

      price_marked: Joi.number().required(),

      unit_price: Joi.number().required(),

      affiliate_store_id: Joi.string().allow("").required(),

      discount: Joi.number().required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      fynd_store_id: Joi.string().allow("").required(),

      seller_identifier: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow("").required(),

      delivery_charge: Joi.number().required(),

      _id: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      price_effective: Joi.number().required(),

      quantity: Joi.number().required(),

      store_id: Joi.number().required(),

      item_size: Joi.string().allow("").required(),

      avl_qty: Joi.number().required(),
    });
  }

  static OrderInfo() {
    return Joi.object({
      cod_charges: Joi.number().required(),

      delivery_charges: Joi.number().required(),

      discount: Joi.number().required(),

      order_value: Joi.number().required(),

      user: OrderModel.UserData().required(),

      payment_mode: Joi.string().allow("").required(),

      billing_address: OrderModel.OrderUser().required(),

      shipping_address: OrderModel.OrderUser().required(),

      order_priority: OrderModel.OrderPriority(),

      shipment: OrderModel.ShipmentData(),

      affiliate_order_id: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      coupon: Joi.string().allow("").allow(null),

      items: Joi.any().required(),

      payment: Joi.any(),
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
      display_text: Joi.string().allow("").required(),

      slug: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),

      id: Joi.number().required(),
    });
  }

  static GetActionsResponse() {
    return Joi.object({
      permissions: OrderModel.ActionInfo().required(),
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

  static HistoryDict() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      l2_detail: Joi.string().allow(""),

      l1_detail: Joi.string().allow(""),

      user: Joi.string().allow("").required(),

      bag_id: Joi.number(),

      l3_detail: Joi.string().allow(""),

      ticket_id: Joi.string().allow(""),

      ticket_url: Joi.string().allow(""),

      createdat: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),
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
      amount_paid: Joi.number().required(),

      payment_mode: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      phone_number: Joi.number().required(),

      shipment_id: Joi.number().required(),

      customer_name: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),
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
      bag_list: Joi.array().items(Joi.number()),

      id: Joi.number().required(),

      status: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      meta: OrderModel.Meta1().required(),

      remarks: Joi.string().allow(""),
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

      shipment_ids: Joi.array().items(Joi.string().allow("")),

      qc_required: Joi.string().allow("").required(),

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

  static ProcessingDates() {
    return Joi.object({
      pack_by_date: Joi.string().allow(""),

      confirm_by_date: Joi.string().allow(""),

      dispatch_by_date: Joi.string().allow(""),

      dp_pickup_slot: Joi.any(),

      dispatch_after_date: Joi.string().allow(""),

      customer_pickup_slot: Joi.any(),
    });
  }

  static Tax() {
    return Joi.object({
      amount: Joi.any().required(),

      breakup: Joi.array().items(Joi.any()),

      name: Joi.string().allow("").required(),

      rate: Joi.number().required(),
    });
  }

  static Charge() {
    return Joi.object({
      type: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      tax: OrderModel.Tax(),

      name: Joi.string().allow("").required(),

      amount: Joi.any().required(),
    });
  }

  static LineItem() {
    return Joi.object({
      seller_identifier: Joi.string().allow("").required(),

      external_line_id: Joi.string().allow(""),

      custom_messasge: Joi.string().allow(""),

      charges: Joi.array().items(OrderModel.Charge()),

      meta: Joi.any(),

      quantity: Joi.number(),
    });
  }

  static Shipment() {
    return Joi.object({
      location_id: Joi.number().required(),

      priority: Joi.number(),

      processing_dates: OrderModel.ProcessingDates(),

      meta: Joi.any(),

      external_shipment_id: Joi.string().allow(""),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      refund_by: Joi.string().allow("").required(),

      collect_by: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      mode: Joi.string().allow("").required(),

      transaction_data: Joi.any(),

      meta: Joi.any(),

      amount: Joi.number().required(),
    });
  }

  static PaymentInfo() {
    return Joi.object({
      primary_mode: Joi.string().allow("").required(),

      payment_methods: Joi.array().items(OrderModel.PaymentMethod()),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      state: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      state_code: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      geo_location: Joi.any(),

      external_customer_code: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      customer_code: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      slot: Joi.array().items(Joi.any()),

      alternate_mobile_number: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      shipping_type: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),
    });
  }

  static BillingInfo() {
    return Joi.object({
      state: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      state_code: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      customer_code: Joi.string().allow(""),

      country_code: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      gender: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      currency_info: Joi.any(),

      external_creation_date: Joi.string().allow(""),

      tax_info: OrderModel.TaxInfo(),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      external_order_id: Joi.string().allow(""),

      payment_info: OrderModel.PaymentInfo().required(),

      charges: Joi.array().items(OrderModel.Charge()),

      shipping_info: OrderModel.ShippingInfo().required(),

      meta: Joi.any(),

      billing_info: OrderModel.BillingInfo().required(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      info: Joi.any(),

      code: Joi.string().allow("").allow(null),

      request_id: Joi.string().allow("").allow(null),

      stack_trace: Joi.string().allow("").allow(null),

      status: Joi.number().required(),

      exception: Joi.string().allow("").allow(null),

      meta: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),
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

      logo_url: Joi.any(),

      dp_configuration: OrderModel.DpConfiguration(),

      shipment_assignment: Joi.string().allow(""),

      location_reassignment: Joi.boolean(),

      payment_info: OrderModel.CreateChannelPaymentInfo(),
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
      start_date: Joi.string().allow("").required(),

      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),

      mobile: Joi.number().required(),

      end_date: Joi.string().allow("").required(),
    });
  }
}
module.exports = OrderModel;
