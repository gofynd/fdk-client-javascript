const Joi = require("joi");

class OrderModel {
  static Prices() {
    return Joi.object({
      value_of_good: Joi.number(),

      refund_amount: Joi.number(),

      cashback_applied: Joi.number(),

      discount: Joi.number(),

      tax_collected_at_source: Joi.number(),

      promotion_effective_discount: Joi.number(),

      coupon_value: Joi.number(),

      price_marked: Joi.number(),

      cashback: Joi.number(),

      fynd_credits: Joi.number(),

      delivery_charge: Joi.number(),

      cod_charges: Joi.number(),

      refund_credit: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      amount_paid: Joi.number(),

      price_effective: Joi.number(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      title: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      value_of_good: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),

      gst_fee: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      can_cancel: Joi.boolean(),

      l3_category: Joi.number(),

      can_return: Joi.boolean(),

      color: Joi.string().allow("").allow(null),

      l1_category: Joi.array().items(Joi.string().allow("")),

      id: Joi.number(),

      code: Joi.string().allow(""),

      l3_category_name: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      department_id: Joi.number(),

      size: Joi.string().allow(""),

      images: Joi.array().items(Joi.string().allow("")),
    });
  }

  static BagUnit() {
    return Joi.object({
      bag_id: Joi.number().required(),

      prices: OrderModel.Prices(),

      can_cancel: Joi.boolean(),

      can_return: Joi.boolean(),

      gst: OrderModel.GSTDetailsData(),

      ordering_channel: Joi.string().allow("").required(),

      total_shipment_bags: Joi.number().required(),

      shipment_id: Joi.string().allow("").required(),

      item: OrderModel.PlatformItem(),

      item_quantity: Joi.number().required(),

      status: Joi.any().required(),
    });
  }

  static ShipmentItemFulFillingStore() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),
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
      gender: Joi.string().allow(""),

      uid: Joi.number(),

      last_name: Joi.string().allow(""),

      mobile: Joi.string().allow(""),

      avis_user_id: Joi.string().allow(""),

      email: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),

      name: Joi.string().allow(""),

      first_name: Joi.string().allow(""),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      prices: OrderModel.Prices(),

      shipment_status: OrderModel.ShipmentStatus(),

      fulfilling_centre: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      payment_methods: Joi.any(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      company: Joi.any(),

      id: Joi.string().allow("").required(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      total_shipments_in_order: Joi.number().required(),

      channel: Joi.any(),

      total_bags_count: Joi.number().required(),

      shipment_created_at: Joi.number().required(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      sla: Joi.any(),

      user: OrderModel.UserDataInfo(),

      application: Joi.any(),
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
      type: Joi.string().allow("").required(),

      text: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.FilterInfoOption()),

      value: Joi.string().allow("").required(),
    });
  }

  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      items: Joi.array().items(OrderModel.ShipmentItem()),

      page: Joi.any(),

      applied_filters: Joi.any(),

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
      mode: Joi.string().allow(""),

      logo: Joi.string().allow(""),

      source: Joi.string().allow(""),
    });
  }

  static Dimensions() {
    return Joi.object({
      unit: Joi.string().allow(""),

      length: Joi.number(),

      height: Joi.number(),

      is_default: Joi.boolean(),

      width: Joi.number(),
    });
  }

  static Meta() {
    return Joi.object({
      dimension: OrderModel.Dimensions(),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      app_facing: Joi.boolean(),

      state_type: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      is_active: Joi.boolean(),

      app_state_name: Joi.string().allow(""),

      app_display_name: Joi.string().allow(""),

      bs_id: Joi.number().required(),

      name: Joi.string().allow("").required(),

      journey_type: Joi.string().allow("").required(),

      notify_customer: Joi.boolean(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      bag_id: Joi.number(),

      kafka_sync: Joi.boolean(),

      state_type: Joi.string().allow(""),

      bsh_id: Joi.number(),

      forward: Joi.boolean().allow(null),

      delivery_awb_number: Joi.string().allow("").allow(null),

      created_at: Joi.string().allow(""),

      bag_state_mapper: OrderModel.BagStateMapper(),

      reasons: Joi.array().items(Joi.any()),

      display_name: Joi.string().allow(""),

      delivery_partner_id: Joi.number().allow(null),

      shipment_id: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      app_display_name: Joi.string().allow(""),

      state_id: Joi.number(),

      store_id: Joi.number(),

      status: Joi.string().allow("").required(),
    });
  }

  static OrderingStoreDetails() {
    return Joi.object({
      store_name: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      ordering_store_id: Joi.number().required(),

      city: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      meta: Joi.any().required(),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      country: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),

      order_date: Joi.string().allow(""),

      ordering_channel: Joi.string().allow(""),

      source: Joi.string().allow(""),

      tax_details: Joi.any(),

      cod_charges: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),

      fynd_order_id: Joi.string().allow("").required(),

      order_value: Joi.string().allow(""),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      store_name: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),

      id: Joi.number().required(),

      code: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      meta: Joi.any().required(),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      created_on: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      company: Joi.string().allow("").allow(null).required(),

      modified_on: Joi.string().allow(""),

      id: Joi.number().required(),

      logo: Joi.string().allow("").required(),
    });
  }

  static BagGST() {
    return Joi.object({
      hsn_code: Joi.string().allow(""),

      gst_tax_percentage: Joi.number(),

      value_of_good: Joi.number(),

      gst_tag: Joi.string().allow(""),

      gstin_code: Joi.string().allow(""),

      is_default_hsn_code: Joi.boolean(),

      gst_fee: Joi.number(),

      brand_calculated_amount: Joi.number(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      bag_id: Joi.number(),

      state_type: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      current_status_id: Joi.number().required(),

      delivery_awb_number: Joi.string().allow(""),

      created_at: Joi.string().allow("").allow(null),

      bag_state_mapper: OrderModel.BagStateMapper(),

      delivery_partner_id: Joi.number(),

      shipment_id: Joi.string().allow(""),

      updated_at: Joi.number(),

      state_id: Joi.number(),

      store_id: Joi.number(),

      status: Joi.string().allow(""),
    });
  }

  static BagConfigs() {
    return Joi.object({
      can_be_cancelled: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),
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

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      amount: Joi.number(),

      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      mrp_promotion: Joi.boolean(),

      promotion_name: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),
    });
  }

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      value_of_good: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      promotion_effective_discount: Joi.number().required(),

      price_marked: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      cod_charges: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      size: Joi.string().allow("").required(),

      transfer_price: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      coupon_value: Joi.number().required(),

      gst_fee: Joi.number().required(),

      fynd_credits: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      amount_paid: Joi.number().required(),

      tax_collected_at_source: Joi.number(),

      refund_credit: Joi.number().required(),

      identifiers: OrderModel.Identifier().required(),

      item_name: Joi.string().allow("").required(),

      discount: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      cashback: Joi.number().required(),

      total_units: Joi.number().required(),

      amount_paid_roundoff: Joi.number(),

      price_effective: Joi.number().required(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      country: Joi.string().allow(""),

      area: Joi.string().allow(""),

      phone: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      email: Joi.string().allow(""),

      latitude: Joi.number(),

      version: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      city: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      state: Joi.string().allow(""),

      longitude: Joi.number(),

      address1: Joi.string().allow(""),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      return_config: Joi.any(),

      uid: Joi.string().allow(""),

      identifiers: Joi.any(),
    });
  }

  static OrderBags() {
    return Joi.object({
      bag_id: Joi.number().required(),

      prices: OrderModel.Prices(),

      brand: OrderModel.OrderBrandName(),

      gst_details: OrderModel.BagGST(),

      identifier: Joi.string().allow(""),

      current_status: OrderModel.CurrentStatus(),

      quantity: Joi.number(),

      entity_type: Joi.string().allow(""),

      seller_identifier: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      can_return: Joi.boolean(),

      bag_configs: OrderModel.BagConfigs(),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      financial_breakup: OrderModel.FinancialBreakup(),

      parent_promo_bags: Joi.any(),

      display_name: Joi.string().allow(""),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      article: OrderModel.OrderBagArticle(),

      item: OrderModel.PlatformItem(),

      line_number: Joi.number(),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      created_at: Joi.string().allow("").allow(null),

      bag_list: Joi.array().items(Joi.string().allow("")),

      id: Joi.number(),

      shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static CompanyDetails() {
    return Joi.object({
      company_id: Joi.number(),

      company_name: Joi.string().allow(""),

      address: Joi.any(),

      company_cin: Joi.string().allow(""),
    });
  }

  static TrackingList() {
    return Joi.object({
      text: Joi.string().allow("").required(),

      is_passed: Joi.boolean(),

      time: Joi.string().allow(""),

      is_current: Joi.boolean(),

      status: Joi.string().allow("").required(),
    });
  }

  static PDFLinks() {
    return Joi.object({
      invoice_a6: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      label: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      po_invoice: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      b2b: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),
    });
  }

  static LockData() {
    return Joi.object({
      locked: Joi.boolean(),

      lock_message: Joi.string().allow(""),

      mto: Joi.boolean(),
    });
  }

  static ShipmentTimeStamp() {
    return Joi.object({
      t_min: Joi.string().allow(""),

      t_max: Joi.string().allow(""),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      gstin: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address: Joi.string().allow("").allow(null).required(),

      pincode: Joi.number().required(),

      state: Joi.string().allow("").required(),

      ajio_site_id: Joi.string().allow(""),
    });
  }

  static EInvoice() {
    return Joi.object({
      irn: Joi.string().allow(""),

      signed_invoice: Joi.string().allow(""),

      signed_qr_code: Joi.string().allow(""),

      acknowledge_no: Joi.number(),

      error_code: Joi.string().allow(""),

      acknowledge_date: Joi.string().allow(""),

      error_message: Joi.string().allow(""),
    });
  }

  static EinvoiceInfo() {
    return Joi.object({
      invoice: OrderModel.EInvoice(),

      credit_note: OrderModel.EInvoice(),
    });
  }

  static DebugInfo() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow(""),
    });
  }

  static Formatted() {
    return Joi.object({
      f_min: Joi.string().allow(""),

      f_max: Joi.string().allow(""),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      dp_sort_key: Joi.string().allow(""),

      return_affiliate_shipment_id: Joi.string().allow(""),

      return_affiliate_order_id: Joi.string().allow(""),

      b2c_buyer_details: Joi.any().allow(null),

      dp_id: Joi.string().allow("").allow(null),

      lock_data: OrderModel.LockData(),

      assign_dp_from_sb: Joi.boolean(),

      timestamp: OrderModel.ShipmentTimeStamp(),

      po_number: Joi.string().allow(""),

      marketplace_store_id: Joi.string().allow(""),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      return_store_node: Joi.number(),

      box_type: Joi.string().allow("").allow(null),

      einvoice_info: OrderModel.EinvoiceInfo(),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      ewaybill_info: Joi.any().allow(null),

      due_date: Joi.string().allow(""),

      forward_affiliate_order_id: Joi.string().allow(""),

      order_type: Joi.string().allow("").allow(null),

      external: Joi.any(),

      return_awb_number: Joi.string().allow(""),

      packaging_name: Joi.string().allow(""),

      awb_number: Joi.string().allow(""),

      bag_weight: Joi.any(),

      debug_info: OrderModel.DebugInfo(),

      shipment_weight: Joi.number(),

      return_details: Joi.any(),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      dp_options: Joi.any(),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      formatted: OrderModel.Formatted(),

      weight: Joi.number().required(),

      same_store_available: Joi.boolean().required(),

      dp_name: Joi.string().allow(""),

      store_invoice_updated_date: Joi.string().allow(""),

      shipment_volumetric_weight: Joi.number(),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      is_priority: Joi.boolean(),

      loyalty_discount: Joi.number(),

      channel_order_id: Joi.string().allow("").allow(null),

      coupon_code: Joi.string().allow("").allow(null),

      order_item_id: Joi.string().allow(""),

      box_type: Joi.string().allow("").allow(null),

      employee_discount: Joi.number(),

      quantity: Joi.number(),

      size_level_total_qty: Joi.number().allow(null),

      channel_shipment_id: Joi.string().allow("").allow(null),

      due_date: Joi.string().allow("").allow(null),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      affiliate_shipment_id: Joi.string().allow("").required(),

      affiliate_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow("").required(),

      pdf_links: OrderModel.PDFLinks(),

      ad_id: Joi.string().allow(""),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      affiliate_store_id: Joi.string().allow("").required(),

      company_affiliate_tag: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_meta: OrderModel.AffiliateMeta().required(),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      country: Joi.string().allow(""),

      gst_tag: Joi.string().allow(""),

      eway_bill_id: Joi.string().allow("").allow(null),

      track_url: Joi.string().allow("").allow(null),

      awb_no: Joi.string().allow(""),

      id: Joi.number(),

      name: Joi.string().allow(""),

      pincode: Joi.string().allow(""),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      prices: OrderModel.Prices(),

      user_agent: Joi.string().allow(""),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      priority_text: Joi.string().allow("").allow(null),

      gst_details: OrderModel.GSTDetailsData(),

      shipment_id: Joi.string().allow("").required(),

      journey_type: Joi.string().allow(""),

      custom_meta: Joi.array().items(Joi.any()),

      picked_date: Joi.string().allow(""),

      payments: OrderModel.ShipmentPayments(),

      meta: OrderModel.Meta(),

      coupon: Joi.any(),

      platform_logo: Joi.string().allow(""),

      operational_status: Joi.string().allow(""),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      shipment_quantity: Joi.number(),

      total_items: Joi.number(),

      ordering_store: OrderModel.OrderingStoreDetails(),

      fulfilment_priority: Joi.number(),

      vertical: Joi.string().allow("").allow(null),

      user: OrderModel.UserDataInfo(),

      packaging_type: Joi.string().allow(""),

      delivery_details: OrderModel.UserDetailsData(),

      delivery_slot: Joi.any(),

      order: OrderModel.OrderDetailsData(),

      payment_mode: Joi.string().allow(""),

      fulfilling_store: OrderModel.FulfillingStore(),

      bags: Joi.array().items(OrderModel.OrderBags()),

      status: OrderModel.ShipmentStatusData(),

      shipment_status: Joi.string().allow(""),

      invoice_id: Joi.string().allow(""),

      total_bags: Joi.number(),

      company_details: OrderModel.CompanyDetails(),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      affiliate_details: OrderModel.AffiliateDetails(),

      billing_details: OrderModel.UserDetailsData(),

      invoice: OrderModel.EinvoiceInfo(),

      dp_details: OrderModel.DPDetailsData(),

      enable_dp_tracking: Joi.boolean(),
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
      gstin: Joi.string().allow(""),

      pan_no: Joi.string().allow(""),
    });
  }

  static PlatformUserDetails() {
    return Joi.object({
      platform_user_id: Joi.string().allow(""),

      platform_user_first_name: Joi.string().allow(""),

      platform_user_last_name: Joi.string().allow(""),
    });
  }

  static TransactionData() {
    return Joi.object({
      currency: Joi.string().allow(""),

      transaction_id: Joi.string().allow(""),

      entity: Joi.string().allow(""),

      terminal_id: Joi.string().allow(""),

      unique_reference_number: Joi.string().allow(""),

      payment_id: Joi.string().allow(""),

      amount_paid: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static BillingStaffDetails() {
    return Joi.object({
      last_name: Joi.string().allow(""),

      user: Joi.string().allow(""),

      staff_id: Joi.number(),

      first_name: Joi.string().allow(""),
    });
  }

  static OrderMeta() {
    return Joi.object({
      customer_note: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      employee_id: Joi.number(),

      order_tags: Joi.array().items(Joi.any()),

      order_platform: Joi.string().allow(""),

      ordering_store: Joi.number(),

      platform_user_details: OrderModel.PlatformUserDetails(),

      extra_meta: Joi.any(),

      order_type: Joi.string().allow(""),

      mongo_cart_id: Joi.number(),

      transaction_data: OrderModel.TransactionData(),

      comment: Joi.string().allow(""),

      company_logo: Joi.string().allow(""),

      staff: Joi.any(),

      payment_type: Joi.string().allow(""),

      cart_id: Joi.number(),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      billing_staff_details: OrderModel.BillingStaffDetails(),

      files: Joi.array().items(Joi.any()),
    });
  }

  static OrderDict() {
    return Joi.object({
      prices: OrderModel.Prices(),

      order_date: Joi.string().allow("").required(),

      payment_methods: Joi.any(),

      tax_details: OrderModel.TaxDetails(),

      meta: OrderModel.OrderMeta(),

      fynd_order_id: Joi.string().allow("").required(),
    });
  }

  static ShipmentDetailsResponse() {
    return Joi.object({
      order: OrderModel.OrderDict(),

      success: Joi.boolean().required(),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),
    });
  }

  static SubLane() {
    return Joi.object({
      index: Joi.number(),

      text: Joi.string().allow(""),

      total_items: Joi.number(),

      actions: Joi.array().items(Joi.any()),

      value: Joi.string().allow(""),
    });
  }

  static SuperLane() {
    return Joi.object({
      total_items: Joi.number(),

      text: Joi.string().allow("").required(),

      options: Joi.array().items(OrderModel.SubLane()),

      value: Joi.string().allow("").required(),
    });
  }

  static LaneConfigResponse() {
    return Joi.object({
      super_lanes: Joi.array().items(OrderModel.SuperLane()),
    });
  }

  static PlatformBreakupValues() {
    return Joi.object({
      display: Joi.string().allow(""),

      name: Joi.string().allow(""),

      value: Joi.string().allow(""),
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
      total_order_value: Joi.number(),

      order_id: Joi.string().allow(""),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      payment_mode: Joi.string().allow(""),

      channel: OrderModel.PlatformChannel(),

      user_info: OrderModel.UserDataInfo(),

      order_created_time: Joi.string().allow(""),

      meta: Joi.any(),

      order_value: Joi.number(),
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

      lane: Joi.string().allow(""),

      page: OrderModel.Page(),

      total_count: Joi.number(),

      success: Joi.boolean(),

      message: Joi.string().allow(""),
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

      options: Joi.array().items(OrderModel.Options()),

      key: Joi.string().allow("").required(),

      value: Joi.number().required(),
    });
  }

  static MetricCountResponse() {
    return Joi.object({
      items: Joi.array().items(OrderModel.MetricsCount()),
    });
  }

  static PlatformTrack() {
    return Joi.object({
      raw_status: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      shipment_type: Joi.string().allow(""),

      reason: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      last_location_recieved_at: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.string().allow(""),
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

      unfulfilled: Joi.array().items(OrderModel.FiltersInfo()),

      action_centre: Joi.array().items(OrderModel.FiltersInfo()),

      filters: Joi.array().items(OrderModel.FiltersInfo()),

      returned: Joi.array().items(OrderModel.FiltersInfo()),
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
      success: Joi.boolean(),

      message: Joi.string().allow(""),
    });
  }

  static OmsReports() {
    return Joi.object({
      report_name: Joi.string().allow(""),

      s3_key: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      report_created_at: Joi.string().allow("").allow(null),

      report_type: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),

      request_details: Joi.any(),

      report_id: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      company_id: Joi.string().allow(""),

      item_id: Joi.string().allow(""),

      article_id: Joi.string().allow(""),

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
      message: Joi.string().allow(""),

      type: Joi.string().allow(""),

      value: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertResponse() {
    return Joi.object({
      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

      trace_id: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      success: Joi.boolean(),

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
      company_id: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      label: Joi.any(),

      invoice_status: Joi.string().allow(""),

      do_invoice_label_generated: Joi.boolean().required(),

      invoice: Joi.any(),

      data: Joi.any(),

      batch_id: Joi.string().allow("").required(),

      store_id: Joi.string().allow(""),

      store_code: Joi.string().allow(""),
    });
  }

  static FileUploadResponse() {
    return Joi.object({
      url: Joi.string().allow(""),

      expiry: Joi.number(),
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

      content_type: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      operation: Joi.string().allow(""),

      upload: OrderModel.FileUploadResponse(),

      tags: Joi.array().items(Joi.string().allow("")),

      file_name: Joi.string().allow(""),

      method: Joi.string().allow(""),

      size: Joi.number(),

      cdn: OrderModel.URL(),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      has_next: Joi.boolean(),

      current: Joi.number(),

      type: Joi.string().allow(""),

      has_previous: Joi.boolean(),

      size: Joi.number(),

      total: Joi.number(),
    });
  }

  static bulkListingData() {
    return Joi.object({
      company_id: Joi.number(),

      failed_shipments: Joi.array().items(Joi.any()),

      user_id: Joi.string().allow(""),

      total: Joi.number(),

      store_code: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      uploaded_on: Joi.string().allow(""),

      successful_shipments: Joi.array().items(Joi.any()),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      user_name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      file_name: Joi.string().allow(""),

      batch_id: Joi.string().allow(""),

      store_id: Joi.number(),

      excel_url: Joi.string().allow(""),

      successful: Joi.number(),

      status: Joi.string().allow(""),

      processing: Joi.number(),

      failed: Joi.number(),
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
      display_name: Joi.string().allow(""),

      qc_type: Joi.array().items(Joi.string().allow("")),

      question_set: Joi.array().items(OrderModel.QuestionSet()),

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
      message: Joi.string().allow(""),

      status: Joi.boolean(),
    });
  }

  static BulkActionDetailsDataField() {
    return Joi.object({
      company_id: Joi.string().allow(""),

      total_shipments_count: Joi.number(),

      processing_shipments_count: Joi.number(),

      successful_shipments_count: Joi.number(),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      batch_id: Joi.string().allow(""),

      failed_shipments_count: Joi.number(),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      error: Joi.array().items(Joi.string().allow("")),

      uploaded_on: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      success: Joi.string().allow(""),

      message: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      uploaded_by: Joi.string().allow(""),

      status: Joi.boolean(),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),
    });
  }

  static Brand() {
    return Joi.object({
      is_virtual_invoice: Joi.boolean().allow(null),

      brand_id: Joi.number().required(),

      created_on: Joi.number(),

      credit_note_expiry_days: Joi.number().allow(null),

      brand_name: Joi.string().allow("").required(),

      credit_note_allowed: Joi.boolean(),

      company: Joi.string().allow("").required(),

      modified_on: Joi.number(),

      invoice_prefix: Joi.string().allow("").allow(null),

      pickup_location: Joi.string().allow("").allow(null),

      logo: Joi.string().allow(""),

      start_date: Joi.string().allow("").allow(null),

      script_last_ran: Joi.string().allow("").allow(null),
    });
  }

  static BagGSTDetails() {
    return Joi.object({
      hsn_code: Joi.string().allow("").required(),

      gst_tax_percentage: Joi.number().required(),

      value_of_good: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      igst_tax_percentage: Joi.number().required(),

      sgst_tax_percentage: Joi.number().required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      sgst_gst_fee: Joi.string().allow("").required(),

      gst_tag: Joi.string().allow("").required(),

      gstin_code: Joi.string().allow("").allow(null),

      cgst_tax_percentage: Joi.number().required(),

      igst_gst_fee: Joi.string().allow("").required(),

      is_default_hsn_code: Joi.boolean(),

      gst_fee: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      po_line_amount: Joi.number(),

      docker_number: Joi.string().allow(""),

      item_base_price: Joi.number(),

      partial_can_ret: Joi.boolean(),

      po_tax_amount: Joi.number(),

      total_gst_percentage: Joi.number(),
    });
  }

  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }

  static Dates() {
    return Joi.object({
      delivery_date: Joi.any(),

      order_created: Joi.string().allow(""),
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

      password: Joi.string().allow(""),

      user: Joi.string().allow(""),

      enabled: Joi.boolean().required(),
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
      username: Joi.string().allow(""),

      password: Joi.string().allow(""),

      user: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      url: Joi.string().allow(""),

      legal_name: Joi.string().allow("").required(),

      ds_type: Joi.string().allow("").required(),

      verified: Joi.boolean().required(),

      value: Joi.string().allow("").required(),
    });
  }

  static StoreDocuments() {
    return Joi.object({
      gst: OrderModel.Document(),
    });
  }

  static StoreMeta() {
    return Joi.object({
      stage: Joi.string().allow("").required(),

      ewaybill_portal_details: Joi.any(),

      display_name: Joi.string().allow("").required(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      gst_number: Joi.string().allow(""),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      additional_contact_details: Joi.any(),

      timing: Joi.array().items(Joi.any()),

      product_return_config: Joi.any(),

      documents: OrderModel.StoreDocuments(),
    });
  }

  static StoreAddress() {
    return Joi.object({
      landmark: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      area: Joi.string().allow(""),

      latitude: Joi.number().required(),

      contact_person: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      address_category: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      country_code: Joi.string().allow("").required(),

      version: Joi.string().allow(""),

      updated_at: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      address1: Joi.string().allow("").required(),

      phone: Joi.string().allow("").allow(null).required(),

      created_at: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      state: Joi.string().allow("").required(),

      longitude: Joi.number().required(),
    });
  }

  static Store() {
    return Joi.object({
      company_id: Joi.number().required(),

      fulfillment_channel: Joi.string().allow("").required(),

      store_active_from: Joi.string().allow("").allow(null),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      meta: OrderModel.StoreMeta().required(),

      mall_area: Joi.string().allow("").allow(null),

      store_address_json: OrderModel.StoreAddress(),

      latitude: Joi.number().required(),

      location_type: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      alohomora_user_id: Joi.number(),

      brand_id: Joi.any(),

      country: Joi.string().allow("").required(),

      is_archived: Joi.boolean(),

      is_active: Joi.boolean(),

      updated_at: Joi.string().allow("").allow(null),

      is_enabled_for_recon: Joi.boolean(),

      address1: Joi.string().allow("").required(),

      login_username: Joi.string().allow("").required(),

      store_email: Joi.string().allow("").required(),

      vat_no: Joi.string().allow("").allow(null),

      phone: Joi.number().required(),

      created_at: Joi.string().allow("").required(),

      order_integration_id: Joi.string().allow(""),

      parent_store_id: Joi.number(),

      s_id: Joi.string().allow("").required(),

      mall_name: Joi.string().allow("").allow(null),

      packaging_material_count: Joi.number(),

      city: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      longitude: Joi.number().required(),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      can_be_cancelled: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),
    });
  }

  static Weight() {
    return Joi.object({
      is_default: Joi.boolean(),

      shipping: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static ReturnConfig() {
    return Joi.object({
      returnable: Joi.boolean(),

      time: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static Article() {
    return Joi.object({
      seller_identifier: Joi.string().allow("").required(),

      uid: Joi.string().allow("").required(),

      raw_meta: Joi.any(),

      weight: OrderModel.Weight(),

      code: Joi.string().allow(""),

      is_set: Joi.boolean(),

      return_config: OrderModel.ReturnConfig(),

      _id: Joi.string().allow("").required(),

      child_details: Joi.any().allow(null),

      esp_modified: Joi.any(),

      a_set: Joi.any().allow(null),

      size: Joi.string().allow("").required(),

      identifiers: OrderModel.Identifier().required(),

      dimensions: OrderModel.Dimensions(),
    });
  }

  static Attributes() {
    return Joi.object({
      primary_material: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      essential: Joi.string().allow(""),

      brand_name: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),

      name: Joi.string().allow(""),

      primary_color: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      gender: Joi.string().allow("").allow(null),

      l2_category: Joi.array().items(Joi.string().allow("")),

      branch_url: Joi.string().allow("").allow(null),

      webstore_product_url: Joi.string().allow("").allow(null),

      brand: Joi.string().allow("").required(),

      attributes: OrderModel.Attributes().required(),

      code: Joi.string().allow(""),

      item_id: Joi.number().required(),

      size: Joi.string().allow("").required(),

      meta: Joi.any(),

      can_cancel: Joi.boolean(),

      can_return: Joi.boolean(),

      slug_key: Joi.string().allow("").required(),

      brand_id: Joi.number().required(),

      l2_category_id: Joi.number(),

      color: Joi.string().allow("").allow(null),

      l1_category: Joi.array().items(Joi.string().allow("")),

      l1_category_id: Joi.number(),

      l3_category_name: Joi.string().allow(""),

      department_id: Joi.number(),

      l3_category: Joi.number(),

      image: Joi.array().items(Joi.string().allow("")).required(),

      name: Joi.string().allow("").required(),

      last_updated_at: Joi.string().allow(""),
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

  static BagDetailsPlatformResponse() {
    return Joi.object({
      prices: OrderModel.Prices().required(),

      b_id: Joi.number().required(),

      brand: OrderModel.Brand().required(),

      gst_details: OrderModel.BagGSTDetails().required(),

      identifier: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      current_status: OrderModel.BagStatusHistory().required(),

      quantity: Joi.number(),

      b_type: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      journey_type: Joi.string().allow("").required(),

      meta: OrderModel.BagMeta(),

      dates: OrderModel.Dates(),

      entity_type: Joi.string().allow(""),

      original_bag_list: Joi.array().items(Joi.number()),

      seller_identifier: Joi.string().allow(""),

      bag_status_history: OrderModel.BagStatusHistory(),

      operational_status: Joi.string().allow(""),

      ordering_store: OrderModel.Store(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      bag_update_time: Joi.number(),

      article_details: OrderModel.ArticleDetails(),

      restore_coupon: Joi.boolean(),

      applied_promos: Joi.array().items(Joi.any()),

      no_of_bags_order: Joi.number(),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      parent_promo_bags: Joi.any(),

      restore_promos: Joi.any(),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      display_name: Joi.string().allow(""),

      order_integration_id: Joi.string().allow("").allow(null),

      reasons: Joi.array().items(Joi.any()),

      article: OrderModel.Article().required(),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      affiliate_details: OrderModel.AffiliateDetails(),

      item: OrderModel.Item().required(),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      qc_required: Joi.any(),

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
      has_next: Joi.boolean().required(),

      page_type: Joi.string().allow("").required(),

      current: Joi.number().required(),

      size: Joi.number().required(),

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
      order_id: Joi.string().allow(""),

      success: Joi.boolean(),

      payment_receipt: Joi.string().allow(""),

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
      status: Joi.number(),

      message: Joi.string().allow(""),

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
      status: Joi.number().required(),

      message: Joi.string().allow("").required(),

      error_trace: Joi.string().allow(""),
    });
  }

  static StoreReassign() {
    return Joi.object({
      set_id: Joi.string().allow("").allow(null),

      affiliate_id: Joi.string().allow("").allow(null),

      fynd_order_id: Joi.string().allow("").allow(null),

      reason_ids: Joi.array().items(Joi.number()),

      item_id: Joi.string().allow("").allow(null),

      mongo_article_id: Joi.string().allow("").allow(null),

      affiliate_order_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      bag_id: Joi.number().allow(null),

      affiliate_bag_id: Joi.string().allow("").allow(null),
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

      affiliate_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      reason_text: Joi.string().allow("").required(),

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

  static OriginalFilter() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),
    });
  }

  static Bags() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow(""),

      is_locked: Joi.boolean(),

      affiliate_order_id: Joi.string().allow(""),

      bag_id: Joi.number(),
    });
  }

  static CheckResponse() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),

      lock_status: Joi.boolean().allow(null),

      is_shipment_locked: Joi.boolean(),

      original_filter: OrderModel.OriginalFilter(),

      shipment_id: Joi.string().allow(""),

      is_bag_locked: Joi.boolean(),

      status: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.Bags()),

      affiliate_shipment_id: Joi.string().allow(""),
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
      from_datetime: Joi.string().allow(""),

      to_datetime: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      description: Joi.string().allow(""),

      platform_name: Joi.string().allow(""),

      title: Joi.string().allow(""),

      logo_url: Joi.string().allow(""),

      id: Joi.number().required(),

      platform_id: Joi.string().allow(""),

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
      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static Click2CallResponse() {
    return Joi.object({
      status: Joi.boolean().required(),

      call_id: Joi.string().allow("").required(),
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
      line_number: Joi.number(),

      quantity: Joi.number(),

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

  static Products() {
    return Joi.object({
      line_number: Joi.number(),

      quantity: Joi.number(),

      identifier: Joi.string().allow(""),
    });
  }

  static ShipmentsRequest() {
    return Joi.object({
      reasons: OrderModel.ReasonsData(),

      data_updates: OrderModel.DataUpdates(),

      identifier: Joi.string().allow("").required(),

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
      lock_after_transition: Joi.boolean(),

      unlock_before_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),

      task: Joi.boolean(),

      force_transition: Joi.boolean(),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      stack_trace: Joi.string().allow(""),

      exception: Joi.string().allow(""),

      message: Joi.string().allow(""),

      code: Joi.string().allow(""),

      meta: Joi.any(),

      identifier: Joi.string().allow(""),

      status: Joi.number(),

      final_state: Joi.any(),
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

  static OrderPriority() {
    return Joi.object({
      affiliate_priority_code: Joi.string().allow("").allow(null),

      fulfilment_priority: Joi.number().allow(null),

      fulfilment_priority_text: Joi.string().allow(""),
    });
  }

  static OrderUser() {
    return Joi.object({
      state: Joi.string().allow("").required(),

      phone: Joi.number().required(),

      pincode: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address2: Joi.string().allow("").allow(null),

      last_name: Joi.string().allow("").required(),

      address1: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      first_name: Joi.string().allow("").required(),
    });
  }

  static ArticleDetails1() {
    return Joi.object({
      _id: Joi.string().allow("").required(),

      brand_id: Joi.number().required(),

      category: Joi.any().required(),

      dimension: Joi.any().required(),

      weight: Joi.any().required(),

      quantity: Joi.number().required(),

      attributes: Joi.any().required(),
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
      dp_id: Joi.number().allow(null),

      box_type: Joi.string().allow("").allow(null),

      fulfillment_id: Joi.number().required(),

      meta: Joi.any(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      shipments: Joi.number().required(),
    });
  }

  static ShipmentConfig() {
    return Joi.object({
      source: Joi.string().allow("").required(),

      location_details: OrderModel.LocationDetails(),

      to_pincode: Joi.string().allow("").required(),

      journey: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

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

  static MarketPlacePdf() {
    return Joi.object({
      invoice: Joi.string().allow("").allow(null),

      label: Joi.string().allow("").allow(null),
    });
  }

  static AffiliateBag() {
    return Joi.object({
      discount: Joi.number().required(),

      modified_on: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      price_marked: Joi.number().required(),

      identifier: Joi.any().required(),

      seller_identifier: Joi.string().allow("").required(),

      company_id: Joi.number().required(),

      item_size: Joi.string().allow("").required(),

      _id: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      sku: Joi.string().allow("").required(),

      fynd_store_id: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow("").required(),

      price_effective: Joi.number().required(),

      avl_qty: Joi.number().required(),

      amount_paid: Joi.number().required(),

      store_id: Joi.number().required(),

      delivery_charge: Joi.number().required(),

      transfer_price: Joi.number().required(),

      quantity: Joi.number().required(),

      unit_price: Joi.number().required(),

      affiliate_meta: Joi.any().required(),

      pdf_links: OrderModel.MarketPlacePdf(),
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
      order_priority: OrderModel.OrderPriority(),

      order_value: Joi.number().required(),

      delivery_charges: Joi.number().required(),

      items: Joi.any().required(),

      discount: Joi.number().required(),

      payment: Joi.any(),

      cod_charges: Joi.number().required(),

      payment_mode: Joi.string().allow("").required(),

      affiliate_order_id: Joi.string().allow(""),

      shipping_address: OrderModel.OrderUser().required(),

      billing_address: OrderModel.OrderUser().required(),

      shipment: OrderModel.ShipmentData(),

      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      user: OrderModel.UserData().required(),

      coupon: Joi.string().allow("").allow(null),
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

  static AffiliateInventoryConfig() {
    return Joi.object({
      payment: OrderModel.AffiliateInventoryPaymentConfig(),

      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),

      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),

      inventory: OrderModel.AffiliateInventoryStoreConfig(),

      order: OrderModel.AffiliateInventoryOrderConfig(),
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

      created_at: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      owner: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      token: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

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

      config: OrderModel.AffiliateConfig(),

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

      article_lookup: Joi.string().allow(""),

      store_lookup: Joi.string().allow(""),

      bag_end_state: Joi.string().allow(""),

      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),

      create_user: Joi.boolean(),
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
      message: Joi.string().allow(""),

      success: Joi.boolean(),
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

      l2_detail: Joi.string().allow(""),

      createdat: Joi.string().allow("").required(),

      bag_id: Joi.number(),

      ticket_id: Joi.string().allow(""),

      l1_detail: Joi.string().allow(""),

      l3_detail: Joi.string().allow(""),

      ticket_url: Joi.string().allow(""),

      type: Joi.string().allow("").required(),

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

  static PostHistoryFilters() {
    return Joi.object({
      line_number: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

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
      customer_name: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      phone_number: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      shipment_id: Joi.number().required(),

      country_code: Joi.string().allow("").required(),
    });
  }

  static SendSmsPayload() {
    return Joi.object({
      data: OrderModel.SmsDataPayload(),

      slug: Joi.string().allow("").required(),

      bag_id: Joi.number().required(),
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

      remarks: Joi.string().allow(""),

      meta: OrderModel.Meta1().required(),

      bag_list: Joi.array().items(Joi.number()),

      shipment_id: Joi.string().allow(""),

      status: Joi.string().allow(""),
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

      errors: Joi.array().items(Joi.string().allow("")),

      order_details: OrderModel.OrderDetails().required(),
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
      qc_required: Joi.string().allow("").required(),

      order_type: Joi.string().allow("").required(),

      dp_id: Joi.number().required(),

      shipment_ids: Joi.array().items(Joi.string().allow("")),
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
      primary_mobile_number: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      alternate_mobile_number: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      title: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      slot: Joi.array().items(Joi.any()),

      external_customer_code: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      primary_email: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      geo_location: Joi.any(),

      address1: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),

      shipping_type: Joi.string().allow(""),
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
      tax: OrderModel.Tax(),

      code: Joi.string().allow(""),

      amount: Joi.any().required(),

      type: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static TaxInfo() {
    return Joi.object({
      b2b_gstin_number: Joi.string().allow(""),

      gstin: Joi.string().allow(""),
    });
  }

  static BillingInfo() {
    return Joi.object({
      primary_mobile_number: Joi.string().allow("").required(),

      alternate_email: Joi.string().allow(""),

      state_code: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      alternate_mobile_number: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      title: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      floor_no: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      external_customer_code: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      primary_email: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      middle_name: Joi.string().allow(""),

      house_no: Joi.string().allow(""),

      first_name: Joi.string().allow("").required(),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      mode: Joi.string().allow("").required(),

      transaction_data: Joi.any(),

      refund_by: Joi.string().allow("").required(),

      meta: Joi.any(),

      amount: Joi.number().required(),

      collect_by: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static PaymentInfo() {
    return Joi.object({
      payment_methods: Joi.array().items(OrderModel.PaymentMethod()),

      primary_mode: Joi.string().allow("").required(),
    });
  }

  static ProcessingDates() {
    return Joi.object({
      confirm_by_date: Joi.string().allow(""),

      pack_by_date: Joi.string().allow(""),

      dispatch_by_date: Joi.string().allow(""),

      customer_pickup_slot: Joi.any(),

      dp_pickup_slot: Joi.any(),

      dispatch_after_date: Joi.string().allow(""),
    });
  }

  static LineItem() {
    return Joi.object({
      charges: Joi.array().items(OrderModel.Charge()),

      meta: Joi.any(),

      custom_messasge: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),

      quantity: Joi.number(),

      external_line_id: Joi.string().allow(""),
    });
  }

  static Shipment() {
    return Joi.object({
      processing_dates: OrderModel.ProcessingDates(),

      external_shipment_id: Joi.string().allow(""),

      meta: Joi.any(),

      priority: Joi.number(),

      location_id: Joi.number().required(),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      currency_info: Joi.any(),

      shipping_info: OrderModel.ShippingInfo().required(),

      charges: Joi.array().items(OrderModel.Charge()),

      tax_info: OrderModel.TaxInfo(),

      meta: Joi.any(),

      billing_info: OrderModel.BillingInfo().required(),

      external_order_id: Joi.string().allow(""),

      payment_info: OrderModel.PaymentInfo().required(),

      external_creation_date: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      stack_trace: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      exception: Joi.string().allow("").allow(null),

      info: Joi.any(),

      code: Joi.string().allow("").allow(null),

      meta: Joi.string().allow("").allow(null),

      request_id: Joi.string().allow("").allow(null),

      status: Joi.number().required(),
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

      mode: Joi.string().allow(""),

      collect_by: Joi.string().allow(""),
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
      dp_configuration: OrderModel.DpConfiguration(),

      shipment_assignment: Joi.string().allow(""),

      location_reassignment: Joi.boolean(),

      logo_url: Joi.any(),

      payment_info: OrderModel.CreateChannelPaymentInfo(),

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
      mobile: Joi.number().required(),

      start_date: Joi.string().allow("").required(),

      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),

      end_date: Joi.string().allow("").required(),
    });
  }
}
module.exports = OrderModel;
