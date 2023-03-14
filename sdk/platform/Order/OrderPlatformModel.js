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

      options: Joi.array().items(OrderModel.FilterInfoOption()),

      type: Joi.string().allow("").required(),

      value: Joi.string().allow("").required(),
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
      uid: Joi.number(),

      mobile: Joi.string().allow(""),

      email: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      avis_user_id: Joi.string().allow(""),

      name: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      is_anonymous_user: Joi.boolean(),
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
      id: Joi.number(),

      color: Joi.string().allow("").allow(null),

      image: Joi.array().items(Joi.string().allow("")),

      code: Joi.string().allow(""),

      l3_category_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      can_cancel: Joi.boolean(),

      size: Joi.string().allow(""),

      can_return: Joi.boolean(),

      department_id: Joi.number(),

      images: Joi.array().items(Joi.string().allow("")),

      l1_category: Joi.array().items(Joi.string().allow("")),

      l3_category: Joi.number(),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      gst_fee: Joi.number().required(),

      value_of_good: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),
    });
  }

  static Prices() {
    return Joi.object({
      promotion_effective_discount: Joi.number(),

      value_of_good: Joi.number(),

      coupon_value: Joi.number(),

      tax_collected_at_source: Joi.number(),

      cod_charges: Joi.number(),

      price_marked: Joi.number(),

      refund_credit: Joi.number(),

      cashback_applied: Joi.number(),

      fynd_credits: Joi.number(),

      cashback: Joi.number(),

      amount_paid: Joi.number(),

      price_effective: Joi.number(),

      delivery_charge: Joi.number(),

      refund_amount: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      discount: Joi.number(),
    });
  }

  static BagUnit() {
    return Joi.object({
      item: OrderModel.PlatformItem(),

      ordering_channel: Joi.string().allow("").required(),

      total_shipment_bags: Joi.number().required(),

      can_cancel: Joi.boolean(),

      item_quantity: Joi.number().required(),

      can_return: Joi.boolean(),

      gst: OrderModel.GSTDetailsData(),

      shipment_id: Joi.string().allow("").required(),

      bag_id: Joi.number().required(),

      status: Joi.any().required(),

      prices: OrderModel.Prices(),
    });
  }

  static ShipmentStatus() {
    return Joi.object({
      title: Joi.string().allow("").required(),

      ops_status: Joi.string().allow("").required(),

      hex_code: Joi.string().allow("").required(),

      actual_status: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),
    });
  }

  static ShipmentItem() {
    return Joi.object({
      id: Joi.string().allow("").required(),

      total_shipments_in_order: Joi.number().required(),

      channel: Joi.any(),

      application: Joi.any(),

      sla: Joi.any(),

      payment_mode_info: OrderModel.PaymentModeInfo(),

      user: OrderModel.UserDataInfo(),

      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),

      bags: Joi.array().items(OrderModel.BagUnit()),

      created_at: Joi.string().allow("").required(),

      fulfilling_centre: Joi.string().allow("").required(),

      company: Joi.any(),

      shipment_created_at: Joi.number().required(),

      total_bags_count: Joi.number().required(),

      shipment_status: OrderModel.ShipmentStatus(),

      payment_methods: Joi.any(),

      prices: OrderModel.Prices(),
    });
  }

  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      page: Joi.any(),

      filters: Joi.array().items(OrderModel.FiltersInfo()),

      items: Joi.array().items(OrderModel.ShipmentItem()),

      applied_filters: Joi.any(),
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
      id: Joi.number().required(),

      phone: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      pincode: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      state_type: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      journey_type: Joi.string().allow("").required(),

      app_display_name: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      notify_customer: Joi.boolean(),

      is_active: Joi.boolean(),

      app_facing: Joi.boolean(),

      app_state_name: Joi.string().allow(""),

      bs_id: Joi.number().required(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      reasons: Joi.array().items(Joi.any()),

      state_type: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      store_id: Joi.number(),

      state_id: Joi.number(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      delivery_partner_id: Joi.number().allow(null),

      app_display_name: Joi.string().allow(""),

      bsh_id: Joi.number(),

      delivery_awb_number: Joi.string().allow("").allow(null),

      updated_at: Joi.string().allow(""),

      forward: Joi.boolean().allow(null),

      created_at: Joi.string().allow(""),

      kafka_sync: Joi.boolean(),

      shipment_id: Joi.string().allow(""),

      bag_id: Joi.number(),

      status: Joi.string().allow("").required(),
    });
  }

  static EInvoice() {
    return Joi.object({
      acknowledge_no: Joi.number(),

      acknowledge_date: Joi.string().allow(""),

      signed_qr_code: Joi.string().allow(""),

      error_code: Joi.string().allow(""),

      error_message: Joi.string().allow(""),

      irn: Joi.string().allow(""),

      signed_invoice: Joi.string().allow(""),
    });
  }

  static EinvoiceInfo() {
    return Joi.object({
      invoice: OrderModel.EInvoice(),

      credit_note: OrderModel.EInvoice(),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      source: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      id: Joi.number(),

      country: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      awb_no: Joi.string().allow(""),

      name: Joi.string().allow(""),

      eway_bill_id: Joi.string().allow("").allow(null),

      track_url: Joi.string().allow("").allow(null),

      gst_tag: Joi.string().allow(""),
    });
  }

  static TrackingList() {
    return Joi.object({
      is_current: Joi.boolean(),

      text: Joi.string().allow("").required(),

      is_passed: Joi.boolean(),

      status: Joi.string().allow("").required(),

      time: Joi.string().allow(""),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      id: Joi.number(),

      created_at: Joi.string().allow("").allow(null),

      shipment_id: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.string().allow("")),

      status: Joi.string().allow(""),
    });
  }

  static Dimensions() {
    return Joi.object({
      width: Joi.number(),

      height: Joi.number(),

      is_default: Joi.boolean(),

      length: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static Meta() {
    return Joi.object({
      dimension: OrderModel.Dimensions(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      phone: Joi.string().allow(""),

      state: Joi.string().allow(""),

      longitude: Joi.number(),

      country: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      email: Joi.string().allow(""),

      version: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      address_category: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      latitude: Joi.number(),

      area: Joi.string().allow(""),

      city: Joi.string().allow(""),
    });
  }

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      transfer_price: Joi.number().required(),

      fynd_credits: Joi.number().required(),

      cashback_applied: Joi.number().required(),

      amount_paid: Joi.number().required(),

      gst_tax_percentage: Joi.number().required(),

      added_to_fynd_cash: Joi.boolean().required(),

      promotion_effective_discount: Joi.number().required(),

      total_units: Joi.number().required(),

      coupon_effective_discount: Joi.number().required(),

      cod_charges: Joi.number().required(),

      size: Joi.string().allow("").required(),

      amount_paid_roundoff: Joi.number(),

      delivery_charge: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      discount: Joi.number().required(),

      item_name: Joi.string().allow("").required(),

      hsn_code: Joi.string().allow("").required(),

      gst_fee: Joi.number().required(),

      tax_collected_at_source: Joi.number(),

      brand_calculated_amount: Joi.number().required(),

      cashback: Joi.number().required(),

      price_effective: Joi.number().required(),

      identifiers: OrderModel.Identifier().required(),

      value_of_good: Joi.number().required(),

      coupon_value: Joi.number().required(),

      refund_credit: Joi.number().required(),

      price_marked: Joi.number().required(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      current_status_id: Joi.number().required(),

      store_id: Joi.number(),

      bag_state_mapper: OrderModel.BagStateMapper(),

      delivery_partner_id: Joi.number(),

      delivery_awb_number: Joi.string().allow(""),

      updated_at: Joi.number(),

      shipment_id: Joi.string().allow(""),

      created_at: Joi.string().allow("").allow(null),

      kafka_sync: Joi.boolean(),

      status: Joi.string().allow(""),

      state_id: Joi.number(),

      bag_id: Joi.number(),

      state_type: Joi.string().allow(""),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      id: Joi.number().required(),

      brand_name: Joi.string().allow("").required(),

      modified_on: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      logo: Joi.string().allow("").required(),

      company: Joi.string().allow("").allow(null).required(),
    });
  }

  static DiscountRules() {
    return Joi.object({
      type: Joi.string().allow(""),

      value: Joi.number(),
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

  static AppliedPromos() {
    return Joi.object({
      discount_rules: Joi.array().items(OrderModel.DiscountRules()),

      buy_rules: Joi.array().items(OrderModel.BuyRules()),

      promotion_name: Joi.string().allow(""),

      amount: Joi.number(),

      article_quantity: Joi.number(),

      promotion_type: Joi.string().allow(""),

      promo_id: Joi.string().allow(""),

      mrp_promotion: Joi.boolean(),
    });
  }

  static BagConfigs() {
    return Joi.object({
      is_customer_return_allowed: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),
    });
  }

  static BagGST() {
    return Joi.object({
      hsn_code: Joi.string().allow(""),

      gst_fee: Joi.number(),

      value_of_good: Joi.number(),

      brand_calculated_amount: Joi.number(),

      gstin_code: Joi.string().allow(""),

      is_default_hsn_code: Joi.boolean(),

      gst_tax_percentage: Joi.number(),

      gst_tag: Joi.string().allow(""),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      return_config: Joi.any(),

      identifiers: Joi.any(),

      uid: Joi.string().allow(""),
    });
  }

  static OrderBags() {
    return Joi.object({
      item: OrderModel.PlatformItem(),

      delivery_address: OrderModel.PlatformDeliveryAddress(),

      identifier: Joi.string().allow(""),

      can_return: Joi.boolean(),

      financial_breakup: OrderModel.FinancialBreakup(),

      current_status: OrderModel.CurrentStatus(),

      brand: OrderModel.OrderBrandName(),

      seller_identifier: Joi.string().allow(""),

      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),

      display_name: Joi.string().allow(""),

      line_number: Joi.number(),

      can_cancel: Joi.boolean(),

      bag_configs: OrderModel.BagConfigs(),

      quantity: Joi.number(),

      bag_id: Joi.number().required(),

      prices: OrderModel.Prices(),

      parent_promo_bags: Joi.any(),

      gst_details: OrderModel.BagGST(),

      article: OrderModel.OrderBagArticle(),

      entity_type: Joi.string().allow(""),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      phone: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      address: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      ordering_channel: Joi.string().allow(""),

      order_date: Joi.string().allow(""),

      cod_charges: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),

      affiliate_id: Joi.string().allow(""),

      order_value: Joi.string().allow(""),

      tax_details: Joi.any(),

      source: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow("").required(),
    });
  }

  static ShipmentTimeStamp() {
    return Joi.object({
      t_max: Joi.string().allow(""),

      t_min: Joi.string().allow(""),
    });
  }

  static BuyerDetails() {
    return Joi.object({
      state: Joi.string().allow("").required(),

      gstin: Joi.string().allow("").required(),

      pincode: Joi.number().required(),

      ajio_site_id: Joi.string().allow(""),

      address: Joi.string().allow("").allow(null).required(),

      name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),
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
      f_max: Joi.string().allow(""),

      f_min: Joi.string().allow(""),
    });
  }

  static DebugInfo() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow(""),
    });
  }

  static ShipmentMeta() {
    return Joi.object({
      awb_number: Joi.string().allow(""),

      forward_affiliate_order_id: Joi.string().allow(""),

      bag_weight: Joi.any(),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      store_invoice_updated_date: Joi.string().allow(""),

      packaging_name: Joi.string().allow(""),

      timestamp: OrderModel.ShipmentTimeStamp(),

      b2c_buyer_details: Joi.any().allow(null),

      same_store_available: Joi.boolean().required(),

      dp_name: Joi.string().allow(""),

      due_date: Joi.string().allow(""),

      einvoice_info: OrderModel.EinvoiceInfo(),

      return_details: Joi.any(),

      dp_options: Joi.any(),

      b2b_buyer_details: OrderModel.BuyerDetails(),

      shipment_weight: Joi.number(),

      lock_data: OrderModel.LockData(),

      shipment_volumetric_weight: Joi.number(),

      return_affiliate_shipment_id: Joi.string().allow(""),

      marketplace_store_id: Joi.string().allow(""),

      return_awb_number: Joi.string().allow(""),

      external: Joi.any(),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      ewaybill_info: Joi.any().allow(null),

      formatted: OrderModel.Formatted(),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      po_number: Joi.string().allow(""),

      dp_sort_key: Joi.string().allow(""),

      weight: Joi.number().required(),

      box_type: Joi.string().allow("").allow(null),

      dp_id: Joi.string().allow("").allow(null),

      return_store_node: Joi.number(),

      assign_dp_from_sb: Joi.boolean(),

      order_type: Joi.string().allow("").allow(null),

      return_affiliate_order_id: Joi.string().allow(""),

      debug_info: OrderModel.DebugInfo(),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      employee_discount: Joi.number(),

      channel_shipment_id: Joi.string().allow("").allow(null),

      due_date: Joi.string().allow("").allow(null),

      is_priority: Joi.boolean(),

      order_item_id: Joi.string().allow(""),

      size_level_total_qty: Joi.number().allow(null),

      channel_order_id: Joi.string().allow("").allow(null),

      coupon_code: Joi.string().allow("").allow(null),

      box_type: Joi.string().allow("").allow(null),

      quantity: Joi.number(),

      loyalty_discount: Joi.number(),
    });
  }

  static PDFLinks() {
    return Joi.object({
      invoice_a4: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      label_type: Joi.string().allow("").required(),

      invoice_pos: Joi.string().allow(""),

      b2b: Joi.string().allow(""),

      credit_note_url: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      label_a6: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      po_invoice: Joi.string().allow(""),

      label: Joi.string().allow(""),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      company_affiliate_tag: Joi.string().allow(""),

      shipment_meta: OrderModel.ShipmentMeta().required(),

      affiliate_shipment_id: Joi.string().allow("").required(),

      ad_id: Joi.string().allow(""),

      affiliate_meta: OrderModel.AffiliateMeta().required(),

      affiliate_bag_id: Joi.string().allow("").required(),

      pdf_links: OrderModel.PDFLinks(),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_id: Joi.string().allow(""),

      affiliate_store_id: Joi.string().allow("").required(),
    });
  }

  static CompanyDetails() {
    return Joi.object({
      company_name: Joi.string().allow(""),

      company_cin: Joi.string().allow(""),

      company_id: Joi.number(),

      address: Joi.any(),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      id: Joi.number().required(),

      phone: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      meta: Joi.any().required(),

      pincode: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      fulfillment_channel: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      coupon: Joi.any(),

      ordering_store: OrderModel.OrderingStoreDetails(),

      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),

      invoice: OrderModel.EinvoiceInfo(),

      packaging_type: Joi.string().allow(""),

      picked_date: Joi.string().allow(""),

      invoice_id: Joi.string().allow(""),

      payment_mode: Joi.string().allow(""),

      payments: OrderModel.ShipmentPayments(),

      fulfilment_priority: Joi.number(),

      custom_meta: Joi.array().items(Joi.any()),

      user: OrderModel.UserDataInfo(),

      dp_details: OrderModel.DPDetailsData(),

      operational_status: Joi.string().allow(""),

      tracking_list: Joi.array().items(OrderModel.TrackingList()),

      shipment_quantity: Joi.number(),

      prices: OrderModel.Prices(),

      status: OrderModel.ShipmentStatusData(),

      total_bags: Joi.number(),

      meta: OrderModel.Meta(),

      user_agent: Joi.string().allow(""),

      vertical: Joi.string().allow("").allow(null),

      delivery_slot: Joi.any(),

      bags: Joi.array().items(OrderModel.OrderBags()),

      delivery_details: OrderModel.UserDetailsData(),

      total_items: Joi.number(),

      order: OrderModel.OrderDetailsData(),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      shipment_id: Joi.string().allow("").required(),

      gst_details: OrderModel.GSTDetailsData(),

      affiliate_details: OrderModel.AffiliateDetails(),

      shipment_status: Joi.string().allow(""),

      company_details: OrderModel.CompanyDetails(),

      journey_type: Joi.string().allow(""),

      fulfilling_store: OrderModel.FulfillingStore(),

      priority_text: Joi.string().allow("").allow(null),

      platform_logo: Joi.string().allow(""),

      enable_dp_tracking: Joi.boolean(),

      billing_details: OrderModel.UserDetailsData(),
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
      terminal_id: Joi.string().allow(""),

      entity: Joi.string().allow(""),

      transaction_id: Joi.string().allow(""),

      amount_paid: Joi.string().allow(""),

      payment_id: Joi.string().allow(""),

      unique_reference_number: Joi.string().allow(""),

      currency: Joi.string().allow(""),

      status: Joi.string().allow(""),
    });
  }

  static PlatformUserDetails() {
    return Joi.object({
      platform_user_id: Joi.string().allow(""),

      platform_user_last_name: Joi.string().allow(""),

      platform_user_first_name: Joi.string().allow(""),
    });
  }

  static BillingStaffDetails() {
    return Joi.object({
      user: Joi.string().allow(""),

      last_name: Joi.string().allow(""),

      first_name: Joi.string().allow(""),

      staff_id: Joi.number(),
    });
  }

  static OrderMeta() {
    return Joi.object({
      staff: Joi.any(),

      order_platform: Joi.string().allow(""),

      ordering_store: Joi.number(),

      order_tags: Joi.array().items(Joi.any()),

      customer_note: Joi.string().allow(""),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      transaction_data: OrderModel.TransactionData(),

      comment: Joi.string().allow(""),

      extra_meta: Joi.any(),

      payment_type: Joi.string().allow(""),

      company_logo: Joi.string().allow(""),

      mongo_cart_id: Joi.number(),

      platform_user_details: OrderModel.PlatformUserDetails(),

      billing_staff_details: OrderModel.BillingStaffDetails(),

      files: Joi.array().items(Joi.any()),

      cart_id: Joi.number(),

      order_type: Joi.string().allow(""),

      currency_symbol: Joi.string().allow(""),

      employee_id: Joi.number(),
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

      order_date: Joi.string().allow("").required(),

      tax_details: OrderModel.TaxDetails(),

      fynd_order_id: Joi.string().allow("").required(),

      payment_methods: Joi.any(),

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

      index: Joi.number(),

      actions: Joi.array().items(Joi.any()),

      text: Joi.string().allow(""),

      total_items: Joi.number(),
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
      channel: OrderModel.PlatformChannel(),

      order_created_time: Joi.string().allow(""),

      total_order_value: Joi.number(),

      meta: Joi.any(),

      order_id: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.PlatformShipment()),

      order_value: Joi.number(),

      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),

      payment_mode: Joi.string().allow(""),

      user_info: OrderModel.UserDataInfo(),
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

      items: Joi.array().items(OrderModel.PlatformOrderItems()),

      lane: Joi.string().allow(""),

      page: OrderModel.Page(),

      total_count: Joi.number(),

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

      text: Joi.string().allow("").required(),

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
      shipment_type: Joi.string().allow(""),

      updated_time: Joi.string().allow(""),

      meta: Joi.any(),

      last_location_recieved_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      account_name: Joi.string().allow(""),

      raw_status: Joi.string().allow(""),

      awb: Joi.string().allow(""),

      status: Joi.string().allow(""),

      reason: Joi.string().allow(""),
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
      unfulfilled: Joi.array().items(OrderModel.FiltersInfo()),

      filters: Joi.array().items(OrderModel.FiltersInfo()),

      returned: Joi.array().items(OrderModel.FiltersInfo()),

      processed: Joi.array().items(OrderModel.FiltersInfo()),

      action_centre: Joi.array().items(OrderModel.FiltersInfo()),
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
      report_name: Joi.string().allow(""),

      report_type: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      report_requested_at: Joi.string().allow("").allow(null),

      report_created_at: Joi.string().allow("").allow(null),

      request_details: Joi.any(),

      report_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      s3_key: Joi.string().allow(""),
    });
  }

  static JioCodeUpsertDataSet() {
    return Joi.object({
      article_id: Joi.string().allow(""),

      company_id: Joi.string().allow(""),

      item_id: Joi.string().allow(""),

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
      trace_id: Joi.string().allow(""),

      identifier: Joi.string().allow(""),

      data: Joi.array().items(Joi.any()),

      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),

      success: Joi.boolean(),
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
      batch_id: Joi.string().allow("").required(),

      store_code: Joi.string().allow(""),

      invoice_status: Joi.string().allow(""),

      store_id: Joi.string().allow(""),

      invoice: Joi.any(),

      data: Joi.any(),

      do_invoice_label_generated: Joi.boolean().required(),

      label: Joi.any(),

      store_name: Joi.string().allow(""),

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
      namespace: Joi.string().allow(""),

      file_path: Joi.string().allow(""),

      upload: OrderModel.FileUploadResponse(),

      cdn: OrderModel.URL(),

      size: Joi.number(),

      file_name: Joi.string().allow(""),

      content_type: Joi.string().allow(""),

      operation: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      method: Joi.string().allow(""),
    });
  }

  static BulkListingPage() {
    return Joi.object({
      current: Joi.number(),

      total: Joi.number(),

      size: Joi.number(),

      has_previous: Joi.boolean(),

      type: Joi.string().allow(""),

      has_next: Joi.boolean(),
    });
  }

  static bulkListingData() {
    return Joi.object({
      failed: Joi.number(),

      batch_id: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      excel_url: Joi.string().allow(""),

      store_name: Joi.string().allow(""),

      status: Joi.string().allow(""),

      failed_shipments: Joi.array().items(Joi.any()),

      total: Joi.number(),

      successful: Joi.number(),

      processing: Joi.number(),

      uploaded_on: Joi.string().allow(""),

      user_name: Joi.string().allow(""),

      id: Joi.string().allow(""),

      store_code: Joi.string().allow(""),

      processing_shipments: Joi.array().items(Joi.string().allow("")),

      store_id: Joi.number(),

      file_name: Joi.string().allow(""),

      successful_shipments: Joi.array().items(Joi.any()),

      company_id: Joi.number(),
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
      message: Joi.string().allow(""),

      status: Joi.boolean(),
    });
  }

  static BulkActionDetailsDataField() {
    return Joi.object({
      batch_id: Joi.string().allow(""),

      processing_shipments_count: Joi.number(),

      failed_shipments_count: Joi.number(),

      successful_shipments_count: Joi.number(),

      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),

      total_shipments_count: Joi.number(),

      company_id: Joi.string().allow(""),
    });
  }

  static BulkActionDetailsResponse() {
    return Joi.object({
      message: Joi.string().allow(""),

      failed_records: Joi.array().items(Joi.string().allow("")),

      uploaded_by: Joi.string().allow(""),

      user_id: Joi.string().allow(""),

      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),

      status: Joi.boolean(),

      uploaded_on: Joi.string().allow(""),

      error: Joi.array().items(Joi.string().allow("")),

      success: Joi.string().allow(""),
    });
  }

  static Attributes() {
    return Joi.object({
      primary_color: Joi.string().allow(""),

      gender: Joi.array().items(Joi.string().allow("")),

      brand_name: Joi.string().allow(""),

      name: Joi.string().allow(""),

      marketer_address: Joi.string().allow(""),

      essential: Joi.string().allow(""),

      primary_color_hex: Joi.string().allow(""),

      marketer_name: Joi.string().allow(""),

      primary_material: Joi.string().allow(""),
    });
  }

  static Item() {
    return Joi.object({
      brand_id: Joi.number().required(),

      attributes: OrderModel.Attributes().required(),

      can_return: Joi.boolean(),

      l1_category: Joi.array().items(Joi.string().allow("")),

      brand: Joi.string().allow("").required(),

      branch_url: Joi.string().allow("").allow(null),

      image: Joi.array().items(Joi.string().allow("")).required(),

      can_cancel: Joi.boolean(),

      slug_key: Joi.string().allow("").required(),

      size: Joi.string().allow("").required(),

      item_id: Joi.number().required(),

      meta: Joi.any(),

      l3_category_name: Joi.string().allow(""),

      l1_category_id: Joi.number(),

      code: Joi.string().allow(""),

      l3_category: Joi.number(),

      last_updated_at: Joi.string().allow(""),

      l2_category_id: Joi.number(),

      color: Joi.string().allow("").allow(null),

      gender: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").required(),

      department_id: Joi.number(),

      l2_category: Joi.array().items(Joi.string().allow("")),

      webstore_product_url: Joi.string().allow("").allow(null),
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

      username: Joi.string().allow(""),

      password: Joi.string().allow(""),
    });
  }

  static Document() {
    return Joi.object({
      url: Joi.string().allow(""),

      value: Joi.string().allow("").required(),

      verified: Joi.boolean().required(),

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
      timing: Joi.array().items(Joi.any()),

      gst_number: Joi.string().allow(""),

      display_name: Joi.string().allow("").required(),

      stage: Joi.string().allow("").required(),

      gst_credentials: OrderModel.StoreGstCredentials().required(),

      additional_contact_details: Joi.any(),

      ewaybill_portal_details: Joi.any(),

      product_return_config: Joi.any(),

      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),

      notification_emails: Joi.array().items(Joi.string().allow("")),

      documents: OrderModel.StoreDocuments(),
    });
  }

  static StoreAddress() {
    return Joi.object({
      address2: Joi.string().allow(""),

      address_category: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      state: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      version: Joi.string().allow(""),

      created_at: Joi.string().allow("").required(),

      phone: Joi.string().allow("").allow(null).required(),

      longitude: Joi.number().required(),

      pincode: Joi.number().required(),

      email: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      contact_person: Joi.string().allow("").required(),

      area: Joi.string().allow(""),

      address1: Joi.string().allow("").required(),

      address_type: Joi.string().allow("").required(),

      country_code: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),
    });
  }

  static Store() {
    return Joi.object({
      is_enabled_for_recon: Joi.boolean(),

      address2: Joi.string().allow(""),

      mall_area: Joi.string().allow("").allow(null),

      brand_id: Joi.any(),

      store_email: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").allow(null),

      is_active: Joi.boolean(),

      fulfillment_channel: Joi.string().allow("").required(),

      latitude: Joi.number().required(),

      login_username: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      location_type: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      created_at: Joi.string().allow("").required(),

      packaging_material_count: Joi.number(),

      mall_name: Joi.string().allow("").allow(null),

      store_active_from: Joi.string().allow("").allow(null),

      phone: Joi.number().required(),

      longitude: Joi.number().required(),

      meta: OrderModel.StoreMeta().required(),

      s_id: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      brand_store_tags: Joi.array().items(Joi.string().allow("")),

      vat_no: Joi.string().allow("").allow(null),

      contact_person: Joi.string().allow("").required(),

      order_integration_id: Joi.string().allow(""),

      code: Joi.string().allow(""),

      store_address_json: OrderModel.StoreAddress(),

      parent_store_id: Joi.number(),

      alohomora_user_id: Joi.number(),

      address1: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      is_archived: Joi.boolean(),

      company_id: Joi.number().required(),

      city: Joi.string().allow("").required(),
    });
  }

  static Brand() {
    return Joi.object({
      invoice_prefix: Joi.string().allow("").allow(null),

      script_last_ran: Joi.string().allow("").allow(null),

      is_virtual_invoice: Joi.boolean().allow(null),

      start_date: Joi.string().allow("").allow(null),

      logo: Joi.string().allow(""),

      credit_note_allowed: Joi.boolean(),

      brand_id: Joi.number().required(),

      pickup_location: Joi.string().allow("").allow(null),

      brand_name: Joi.string().allow("").required(),

      credit_note_expiry_days: Joi.number().allow(null),

      modified_on: Joi.number(),

      created_on: Joi.number(),

      company: Joi.string().allow("").required(),
    });
  }

  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }

  static BagReturnableCancelableStatus() {
    return Joi.object({
      is_customer_return_allowed: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      enable_tracking: Joi.boolean().required(),
    });
  }

  static B2BPODetails() {
    return Joi.object({
      po_tax_amount: Joi.number(),

      total_gst_percentage: Joi.number(),

      docker_number: Joi.string().allow(""),

      item_base_price: Joi.number(),

      partial_can_ret: Joi.boolean(),

      po_line_amount: Joi.number(),
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

  static BagGSTDetails() {
    return Joi.object({
      hsn_code: Joi.string().allow("").required(),

      hsn_code_id: Joi.string().allow("").required(),

      gst_fee: Joi.number().required(),

      value_of_good: Joi.number().required(),

      igst_tax_percentage: Joi.number().required(),

      cgst_tax_percentage: Joi.number().required(),

      tax_collected_at_source: Joi.number().required(),

      cgst_gst_fee: Joi.string().allow("").required(),

      brand_calculated_amount: Joi.number().required(),

      gstin_code: Joi.string().allow("").allow(null),

      sgst_tax_percentage: Joi.number().required(),

      is_default_hsn_code: Joi.boolean(),

      gst_tax_percentage: Joi.number().required(),

      igst_gst_fee: Joi.string().allow("").required(),

      gst_tag: Joi.string().allow("").required(),

      sgst_gst_fee: Joi.string().allow("").required(),
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

      shipping: Joi.number(),

      unit: Joi.string().allow(""),
    });
  }

  static Article() {
    return Joi.object({
      _id: Joi.string().allow("").required(),

      return_config: OrderModel.ReturnConfig(),

      uid: Joi.string().allow("").required(),

      code: Joi.string().allow(""),

      is_set: Joi.boolean(),

      raw_meta: Joi.any(),

      size: Joi.string().allow("").required(),

      dimensions: OrderModel.Dimensions(),

      identifiers: OrderModel.Identifier().required(),

      a_set: Joi.any().allow(null),

      esp_modified: Joi.any(),

      child_details: Joi.any().allow(null),

      seller_identifier: Joi.string().allow("").required(),

      weight: OrderModel.Weight(),
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

  static BagDetailsPlatformResponse() {
    return Joi.object({
      item: OrderModel.Item().required(),

      ordering_store: OrderModel.Store(),

      bag_status_history: OrderModel.BagStatusHistory(),

      identifier: Joi.string().allow(""),

      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),

      current_status: OrderModel.BagStatusHistory().required(),

      brand: OrderModel.Brand().required(),

      seller_identifier: Joi.string().allow(""),

      applied_promos: Joi.array().items(Joi.any()),

      display_name: Joi.string().allow(""),

      qc_required: Joi.any(),

      no_of_bags_order: Joi.number(),

      article_details: OrderModel.ArticleDetails(),

      line_number: Joi.number(),

      operational_status: Joi.string().allow(""),

      tags: Joi.array().items(Joi.string().allow("")),

      quantity: Joi.number(),

      status: OrderModel.BagReturnableCancelableStatus().required(),

      prices: OrderModel.Prices().required(),

      original_bag_list: Joi.array().items(Joi.number()),

      meta: OrderModel.BagMeta(),

      b_id: Joi.number().required(),

      parent_promo_bags: Joi.any(),

      current_operational_status: OrderModel.BagStatusHistory().required(),

      restore_promos: Joi.any(),

      restore_coupon: Joi.boolean(),

      order_integration_id: Joi.string().allow("").allow(null),

      shipment_id: Joi.string().allow(""),

      dates: OrderModel.Dates(),

      gst_details: OrderModel.BagGSTDetails().required(),

      affiliate_details: OrderModel.AffiliateDetails(),

      article: OrderModel.Article().required(),

      reasons: Joi.array().items(Joi.any()),

      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),

      journey_type: Joi.string().allow("").required(),

      entity_type: Joi.string().allow(""),

      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),

      b_type: Joi.string().allow(""),

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
      page_type: Joi.string().allow("").required(),

      current: Joi.number().required(),

      size: Joi.number().required(),

      item_total: Joi.number().required(),

      has_next: Joi.boolean().required(),
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
      message: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),

      error: Joi.string().allow(""),

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
      affiliate_id: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      reason_ids: Joi.array().items(Joi.number()),

      affiliate_bag_id: Joi.string().allow("").allow(null),

      set_id: Joi.string().allow("").allow(null),

      bag_id: Joi.number().allow(null),

      affiliate_order_id: Joi.string().allow("").allow(null),

      mongo_article_id: Joi.string().allow("").allow(null),

      item_id: Joi.string().allow("").allow(null),

      fynd_order_id: Joi.string().allow("").allow(null),
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
      reason_text: Joi.string().allow("").required(),

      affiliate_id: Joi.string().allow(""),

      id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow(""),

      affiliate_order_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow(""),
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
      is_locked: Joi.boolean(),

      bag_id: Joi.number(),

      affiliate_order_id: Joi.string().allow(""),

      affiliate_bag_id: Joi.string().allow(""),
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
      lock_status: Joi.boolean().allow(null),

      shipment_id: Joi.string().allow(""),

      affiliate_id: Joi.string().allow(""),

      bags: Joi.array().items(OrderModel.Bags()),

      original_filter: OrderModel.OriginalFilter(),

      status: Joi.string().allow(""),

      is_shipment_locked: Joi.boolean(),

      is_bag_locked: Joi.boolean(),

      affiliate_shipment_id: Joi.string().allow(""),
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
      platform_name: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      logo_url: Joi.string().allow(""),

      from_datetime: Joi.string().allow(""),

      company_id: Joi.number(),

      description: Joi.string().allow(""),

      id: Joi.number().required(),

      platform_id: Joi.string().allow(""),

      title: Joi.string().allow(""),

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

  static Products() {
    return Joi.object({
      line_number: Joi.number(),

      identifier: Joi.string().allow(""),

      quantity: Joi.number(),
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
      line_number: Joi.number(),

      identifier: Joi.string().allow(""),

      quantity: Joi.number(),
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

  static ShipmentsRequest() {
    return Joi.object({
      products: Joi.array().items(OrderModel.Products()),

      identifier: Joi.string().allow("").required(),

      data_updates: OrderModel.DataUpdates(),

      reasons: OrderModel.ReasonsData(),
    });
  }

  static StatuesRequest() {
    return Joi.object({
      shipments: Joi.array().items(OrderModel.ShipmentsRequest()),

      status: Joi.string().allow(""),

      exclude_bags_next_state: Joi.string().allow(""),
    });
  }

  static UpdateShipmentStatusRequest() {
    return Joi.object({
      unlock_before_transition: Joi.boolean(),

      task: Joi.boolean(),

      force_transition: Joi.boolean(),

      lock_after_transition: Joi.boolean(),

      statuses: Joi.array().items(OrderModel.StatuesRequest()),
    });
  }

  static ShipmentsResponse() {
    return Joi.object({
      stack_trace: Joi.string().allow(""),

      message: Joi.string().allow(""),

      final_state: Joi.any(),

      exception: Joi.string().allow(""),

      meta: Joi.any(),

      status: Joi.number(),

      code: Joi.string().allow(""),

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

  static MarketPlacePdf() {
    return Joi.object({
      invoice: Joi.string().allow("").allow(null),

      label: Joi.string().allow("").allow(null),
    });
  }

  static AffiliateBag() {
    return Joi.object({
      amount_paid: Joi.number().required(),

      item_size: Joi.string().allow("").required(),

      affiliate_store_id: Joi.string().allow("").required(),

      price_marked: Joi.number().required(),

      hsn_code_id: Joi.string().allow("").required(),

      quantity: Joi.number().required(),

      store_id: Joi.number().required(),

      sku: Joi.string().allow("").required(),

      discount: Joi.number().required(),

      _id: Joi.string().allow("").required(),

      unit_price: Joi.number().required(),

      transfer_price: Joi.number().required(),

      modified_on: Joi.string().allow("").required(),

      pdf_links: OrderModel.MarketPlacePdf(),

      fynd_store_id: Joi.string().allow("").required(),

      identifier: Joi.any().required(),

      item_id: Joi.number().required(),

      company_id: Joi.number().required(),

      price_effective: Joi.number().required(),

      avl_qty: Joi.number().required(),

      affiliate_meta: Joi.any().required(),

      seller_identifier: Joi.string().allow("").required(),

      delivery_charge: Joi.number().required(),
    });
  }

  static OrderUser() {
    return Joi.object({
      address1: Joi.string().allow("").allow(null),

      pincode: Joi.string().allow("").required(),

      last_name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      address2: Joi.string().allow("").allow(null),

      phone: Joi.number().required(),

      country: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      email: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),
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

  static ArticleDetails1() {
    return Joi.object({
      weight: Joi.any().required(),

      category: Joi.any().required(),

      dimension: Joi.any().required(),

      _id: Joi.string().allow("").required(),

      brand_id: Joi.number().required(),

      attributes: Joi.any().required(),

      quantity: Joi.number().required(),
    });
  }

  static ShipmentDetails() {
    return Joi.object({
      dp_id: Joi.number().allow(null),

      shipments: Joi.number().required(),

      meta: Joi.any(),

      box_type: Joi.string().allow("").allow(null),

      affiliate_shipment_id: Joi.string().allow("").required(),

      fulfillment_id: Joi.number().required(),

      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),
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
      action: Joi.string().allow("").required(),

      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),

      location_details: OrderModel.LocationDetails(),

      source: Joi.string().allow("").required(),

      journey: Joi.string().allow("").required(),

      to_pincode: Joi.string().allow("").required(),

      identifier: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),
    });
  }

  static ShipmentData() {
    return Joi.object({
      shipment_data: OrderModel.ShipmentConfig().required(),
    });
  }

  static OrderInfo() {
    return Joi.object({
      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),

      discount: Joi.number().required(),

      items: Joi.any().required(),

      shipping_address: OrderModel.OrderUser().required(),

      order_priority: OrderModel.OrderPriority(),

      billing_address: OrderModel.OrderUser().required(),

      user: OrderModel.UserData().required(),

      shipment: OrderModel.ShipmentData(),

      order_value: Joi.number().required(),

      affiliate_order_id: Joi.string().allow(""),

      payment: Joi.any(),

      delivery_charges: Joi.number().required(),

      coupon: Joi.string().allow("").allow(null),

      cod_charges: Joi.number().required(),

      payment_mode: Joi.string().allow("").required(),
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

  static AffiliateInventoryLogisticsConfig() {
    return Joi.object({
      dp_assignment: Joi.boolean(),
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

  static AffiliateInventoryConfig() {
    return Joi.object({
      inventory: OrderModel.AffiliateInventoryStoreConfig(),

      order: OrderModel.AffiliateInventoryOrderConfig(),

      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),

      payment: OrderModel.AffiliateInventoryPaymentConfig(),

      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),
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
      created_at: Joi.string().allow("").required(),

      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),

      owner: Joi.string().allow("").required(),

      description: Joi.string().allow(""),

      id: Joi.string().allow("").required(),

      updated_at: Joi.string().allow("").required(),

      token: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
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
      store_lookup: Joi.string().allow(""),

      create_user: Joi.boolean(),

      bag_end_state: Joi.string().allow(""),

      affiliate: OrderModel.Affiliate().required(),

      article_lookup: Joi.string().allow(""),

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
      message: Joi.string().allow(""),

      success: Joi.boolean(),
    });
  }

  static ActionInfo() {
    return Joi.object({
      description: Joi.string().allow("").required(),

      id: Joi.number().required(),

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

  static HistoryDict() {
    return Joi.object({
      l3_detail: Joi.string().allow(""),

      message: Joi.string().allow("").required(),

      l2_detail: Joi.string().allow(""),

      ticket_url: Joi.string().allow(""),

      user: Joi.string().allow("").required(),

      type: Joi.string().allow("").required(),

      bag_id: Joi.number(),

      l1_detail: Joi.string().allow(""),

      ticket_id: Joi.string().allow(""),

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

  static SmsDataPayload() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      amount_paid: Joi.number().required(),

      shipment_id: Joi.number().required(),

      phone_number: Joi.number().required(),

      country_code: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      customer_name: Joi.string().allow("").required(),

      payment_mode: Joi.string().allow("").required(),

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

      meta: OrderModel.Meta1().required(),

      remarks: Joi.string().allow(""),

      id: Joi.number().required(),

      status: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.number()),
    });
  }

  static OrderStatusData() {
    return Joi.object({
      order_details: OrderModel.OrderDetails().required(),

      shipment_details: Joi.array().items(OrderModel.ShipmentDetail()),

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

      dp_id: Joi.number().required(),

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

  static ProcessingDates() {
    return Joi.object({
      confirm_by_date: Joi.string().allow(""),

      customer_pickup_slot: Joi.any(),

      dp_pickup_slot: Joi.any(),

      dispatch_by_date: Joi.string().allow(""),

      pack_by_date: Joi.string().allow(""),

      dispatch_after_date: Joi.string().allow(""),
    });
  }

  static Tax() {
    return Joi.object({
      amount: Joi.any().required(),

      name: Joi.string().allow("").required(),

      rate: Joi.number().required(),

      breakup: Joi.array().items(Joi.any()),
    });
  }

  static Charge() {
    return Joi.object({
      tax: OrderModel.Tax(),

      type: Joi.string().allow("").required(),

      amount: Joi.any().required(),

      code: Joi.string().allow(""),

      name: Joi.string().allow("").required(),
    });
  }

  static LineItem() {
    return Joi.object({
      meta: Joi.any(),

      external_line_id: Joi.string().allow(""),

      charges: Joi.array().items(OrderModel.Charge()),

      custom_messasge: Joi.string().allow(""),

      seller_identifier: Joi.string().allow("").required(),

      quantity: Joi.number(),
    });
  }

  static Shipment() {
    return Joi.object({
      processing_dates: OrderModel.ProcessingDates(),

      meta: Joi.any(),

      external_shipment_id: Joi.string().allow(""),

      priority: Joi.number(),

      line_items: Joi.array().items(OrderModel.LineItem()).required(),

      location_id: Joi.number().required(),
    });
  }

  static BillingInfo() {
    return Joi.object({
      address1: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      floor_no: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      house_no: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      state_code: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),
    });
  }

  static ShippingInfo() {
    return Joi.object({
      address1: Joi.string().allow("").required(),

      last_name: Joi.string().allow(""),

      country: Joi.string().allow("").required(),

      floor_no: Joi.string().allow(""),

      state: Joi.string().allow("").required(),

      geo_location: Joi.any(),

      house_no: Joi.string().allow(""),

      customer_code: Joi.string().allow(""),

      external_customer_code: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      country_code: Joi.string().allow(""),

      alternate_mobile_number: Joi.string().allow(""),

      shipping_type: Joi.string().allow(""),

      primary_email: Joi.string().allow("").required(),

      first_name: Joi.string().allow("").required(),

      slot: Joi.array().items(Joi.any()),

      state_code: Joi.string().allow(""),

      middle_name: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      gender: Joi.string().allow(""),

      alternate_email: Joi.string().allow(""),

      city: Joi.string().allow("").required(),

      title: Joi.string().allow(""),

      primary_mobile_number: Joi.string().allow("").required(),

      address2: Joi.string().allow(""),
    });
  }

  static TaxInfo() {
    return Joi.object({
      gstin: Joi.string().allow(""),

      b2b_gstin_number: Joi.string().allow(""),
    });
  }

  static PaymentMethod() {
    return Joi.object({
      meta: Joi.any(),

      collect_by: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      mode: Joi.string().allow("").required(),

      transaction_data: Joi.any(),

      refund_by: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static PaymentInfo() {
    return Joi.object({
      primary_mode: Joi.string().allow("").required(),

      payment_methods: Joi.array().items(OrderModel.PaymentMethod()),
    });
  }

  static CreateOrderAPI() {
    return Joi.object({
      external_creation_date: Joi.string().allow(""),

      shipments: Joi.array().items(OrderModel.Shipment()).required(),

      meta: Joi.any(),

      billing_info: OrderModel.BillingInfo().required(),

      currency_info: Joi.any(),

      shipping_info: OrderModel.ShippingInfo().required(),

      tax_info: OrderModel.TaxInfo(),

      charges: Joi.array().items(OrderModel.Charge()),

      payment_info: OrderModel.PaymentInfo().required(),

      external_order_id: Joi.string().allow(""),
    });
  }

  static CreateOrderErrorReponse() {
    return Joi.object({
      stack_trace: Joi.string().allow("").allow(null),

      message: Joi.string().allow("").required(),

      exception: Joi.string().allow("").allow(null),

      meta: Joi.string().allow("").allow(null),

      status: Joi.number().required(),

      request_id: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      info: Joi.any(),
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
      shipment_assignment: Joi.string().allow(""),

      logo_url: Joi.any(),

      lock_states: Joi.array().items(Joi.string().allow("")),

      payment_info: OrderModel.CreateChannelPaymentInfo(),

      dp_configuration: OrderModel.DpConfiguration(),

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
      is_inserted: Joi.boolean(),

      is_upserted: Joi.boolean(),

      acknowledged: Joi.boolean(),
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
      order_details: Joi.array().items(OrderModel.FyndOrderIdList()),

      end_date: Joi.string().allow("").required(),

      mobile: Joi.number().required(),

      start_date: Joi.string().allow("").required(),
    });
  }
}
module.exports = OrderModel;
