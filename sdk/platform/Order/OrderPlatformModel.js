const Joi = require("joi");

class OrderModel {
  static ActionInfo() {
    return Joi.object({
      description: Joi.string().allow("").required(),
      display_text: Joi.string().allow("").required(),
      id: Joi.number().required(),
      slug: Joi.string().allow("").required(),
    });
  }
  static Affiliate() {
    return Joi.object({
      config: OrderModel.AffiliateConfig(),
      id: Joi.string().allow("").required(),
      token: Joi.string().allow("").required(),
    });
  }
  static AffiliateAppConfig() {
    return Joi.object({
      created_at: Joi.string().allow("").required(),
      description: Joi.string().allow(""),
      id: Joi.string().allow("").required(),
      meta: Joi.array().items(OrderModel.AffiliateAppConfigMeta()),
      name: Joi.string().allow("").required(),
      owner: Joi.string().allow("").required(),
      secret: Joi.string().allow("").required(),
      token: Joi.string().allow("").required(),
      updated_at: Joi.string().allow("").required(),
    });
  }
  static AffiliateAppConfigMeta() {
    return Joi.object({
      name: Joi.string().allow("").required(),
      value: Joi.string().allow("").required(),
    });
  }
  static AffiliateBag() {
    return Joi.object({
      _id: Joi.string().allow("").required(),
      affiliate_meta: Joi.any().required(),
      affiliate_store_id: Joi.string().allow("").required(),
      amount_paid: Joi.number().required(),
      avl_qty: Joi.number().required(),
      company_id: Joi.number().required(),
      delivery_charge: Joi.number().required(),
      discount: Joi.number().required(),
      fynd_store_id: Joi.string().allow("").required(),
      hsn_code_id: Joi.string().allow("").required(),
      identifier: Joi.any().required(),
      item_id: Joi.number().required(),
      item_size: Joi.string().allow("").required(),
      modified_on: Joi.string().allow("").required(),
      pdf_links: OrderModel.MarketPlacePdf(),
      price_effective: Joi.number().required(),
      price_marked: Joi.number().required(),
      quantity: Joi.number().required(),
      seller_identifier: Joi.string().allow("").required(),
      sku: Joi.string().allow("").required(),
      store_id: Joi.number().required(),
      transfer_price: Joi.number().required(),
      unit_price: Joi.number().required(),
    });
  }
  static AffiliateBagDetails() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow("").required(),
      affiliate_meta: OrderModel.AffiliateMeta().required(),
      affiliate_order_id: Joi.string().allow("").required(),
      employee_discount: Joi.number(),
      loyalty_discount: Joi.number(),
    });
  }
  static AffiliateConfig() {
    return Joi.object({
      app: OrderModel.AffiliateAppConfig(),
      inventory: OrderModel.AffiliateInventoryConfig(),
    });
  }
  static AffiliateDetails() {
    return Joi.object({
      ad_id: Joi.string().allow(""),
      affiliate_bag_id: Joi.string().allow("").required(),
      affiliate_id: Joi.string().allow(""),
      affiliate_meta: OrderModel.AffiliateMeta().required(),
      affiliate_order_id: Joi.string().allow("").required(),
      affiliate_shipment_id: Joi.string().allow("").required(),
      affiliate_store_id: Joi.string().allow("").required(),
      company_affiliate_tag: Joi.string().allow(""),
      pdf_links: OrderModel.PDFLinks(),
      shipment_meta: OrderModel.ShipmentMeta().required(),
    });
  }
  static AffiliateInventoryArticleAssignmentConfig() {
    return Joi.object({
      post_order_reassignment: Joi.boolean(),
    });
  }
  static AffiliateInventoryConfig() {
    return Joi.object({
      article_assignment: OrderModel.AffiliateInventoryArticleAssignmentConfig(),
      inventory: OrderModel.AffiliateInventoryStoreConfig(),
      logistics: OrderModel.AffiliateInventoryLogisticsConfig(),
      order: OrderModel.AffiliateInventoryOrderConfig(),
      payment: OrderModel.AffiliateInventoryPaymentConfig(),
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
  static AffiliateInventoryStoreConfig() {
    return Joi.object({
      store: Joi.any(),
    });
  }
  static AffiliateMeta() {
    return Joi.object({
      box_type: Joi.string().allow("").allow(null),
      channel_order_id: Joi.string().allow("").allow(null),
      channel_shipment_id: Joi.string().allow("").allow(null),
      coupon_code: Joi.string().allow("").allow(null),
      due_date: Joi.string().allow("").allow(null),
      employee_discount: Joi.number(),
      is_priority: Joi.boolean(),
      loyalty_discount: Joi.number(),
      order_item_id: Joi.string().allow(""),
      quantity: Joi.number(),
      size_level_total_qty: Joi.number().allow(null),
    });
  }
  static AffiliateStoreIdMapping() {
    return Joi.object({
      marketplace_store_id: Joi.string().allow("").required(),
      store_id: Joi.number().required(),
    });
  }
  static AnnouncementResponse() {
    return Joi.object({
      company_id: Joi.number(),
      created_at: Joi.string().allow(""),
      description: Joi.string().allow(""),
      from_datetime: Joi.string().allow(""),
      id: Joi.number().required(),
      logo_url: Joi.string().allow(""),
      platform_id: Joi.string().allow(""),
      platform_name: Joi.string().allow(""),
      title: Joi.string().allow(""),
      to_datetime: Joi.string().allow(""),
    });
  }
  static AnnouncementsResponse() {
    return Joi.object({
      announcements: Joi.array().items(OrderModel.AnnouncementResponse()),
    });
  }
  static AppliedPromos() {
    return Joi.object({
      amount: Joi.number(),
      article_quantity: Joi.number(),
      buy_rules: Joi.array().items(OrderModel.BuyRules()),
      discount_rules: Joi.array().items(OrderModel.DiscountRules()),
      mrp_promotion: Joi.boolean(),
      promo_id: Joi.string().allow(""),
      promotion_name: Joi.string().allow(""),
      promotion_type: Joi.string().allow(""),
    });
  }
  static Article() {
    return Joi.object({
      _id: Joi.string().allow("").required(),
      a_set: Joi.any().allow(null),
      child_details: Joi.any().allow(null),
      code: Joi.string().allow(""),
      dimensions: OrderModel.Dimensions(),
      esp_modified: Joi.any(),
      identifiers: OrderModel.Identifier().required(),
      is_set: Joi.boolean(),
      raw_meta: Joi.any(),
      return_config: OrderModel.ReturnConfig(),
      seller_identifier: Joi.string().allow("").required(),
      size: Joi.string().allow("").required(),
      uid: Joi.string().allow("").required(),
      weight: OrderModel.Weight(),
    });
  }
  static ArticleDetails() {
    return Joi.object({
      status: Joi.any(),
    });
  }
  static ArticleDetails1() {
    return Joi.object({
      _id: Joi.string().allow("").required(),
      attributes: Joi.any().required(),
      brand_id: Joi.number().required(),
      category: Joi.any().required(),
      dimension: Joi.any().required(),
      quantity: Joi.number().required(),
      weight: Joi.any().required(),
    });
  }
  static Attributes() {
    return Joi.object({
      brand_name: Joi.string().allow(""),
      essential: Joi.string().allow(""),
      gender: Joi.array().items(Joi.string().allow("")),
      marketer_address: Joi.string().allow(""),
      marketer_name: Joi.string().allow(""),
      name: Joi.string().allow(""),
      primary_color: Joi.string().allow(""),
      primary_color_hex: Joi.string().allow(""),
      primary_material: Joi.string().allow(""),
    });
  }
  static B2BPODetails() {
    return Joi.object({
      docker_number: Joi.string().allow(""),
      item_base_price: Joi.number(),
      partial_can_ret: Joi.boolean(),
      po_line_amount: Joi.number(),
      po_tax_amount: Joi.number(),
      total_gst_percentage: Joi.number(),
    });
  }
  static BagConfigs() {
    return Joi.object({
      allow_force_return: Joi.boolean().required(),
      can_be_cancelled: Joi.boolean().required(),
      enable_tracking: Joi.boolean().required(),
      is_active: Joi.boolean().required(),
      is_customer_return_allowed: Joi.boolean().required(),
      is_returnable: Joi.boolean().required(),
    });
  }
  static BagDetailsPlatformResponse() {
    return Joi.object({
      affiliate_bag_details: OrderModel.AffiliateBagDetails().required(),
      affiliate_details: OrderModel.AffiliateDetails(),
      applied_promos: Joi.array().items(Joi.any()),
      article: OrderModel.Article().required(),
      article_details: OrderModel.ArticleDetails(),
      b_id: Joi.number().required(),
      b_type: Joi.string().allow(""),
      bag_status: Joi.array().items(OrderModel.BagStatusHistory()).required(),
      bag_status_history: OrderModel.BagStatusHistory(),
      bag_update_time: Joi.number(),
      brand: OrderModel.Brand().required(),
      current_operational_status: OrderModel.BagStatusHistory().required(),
      current_status: OrderModel.BagStatusHistory().required(),
      dates: OrderModel.Dates(),
      display_name: Joi.string().allow(""),
      entity_type: Joi.string().allow(""),
      financial_breakup: Joi.array()
        .items(OrderModel.FinancialBreakup())
        .required(),
      gst_details: OrderModel.BagGSTDetails().required(),
      identifier: Joi.string().allow(""),
      item: OrderModel.Item().required(),
      journey_type: Joi.string().allow("").required(),
      line_number: Joi.number(),
      meta: OrderModel.BagMeta(),
      no_of_bags_order: Joi.number(),
      operational_status: Joi.string().allow(""),
      order_integration_id: Joi.string().allow("").allow(null),
      ordering_store: OrderModel.Store(),
      original_bag_list: Joi.array().items(Joi.number()),
      parent_promo_bags: Joi.any(),
      prices: OrderModel.Prices().required(),
      qc_required: Joi.any(),
      quantity: Joi.number(),
      reasons: Joi.array().items(Joi.any()),
      restore_coupon: Joi.boolean(),
      restore_promos: Joi.any(),
      seller_identifier: Joi.string().allow(""),
      shipment_id: Joi.string().allow(""),
      status: OrderModel.BagReturnableCancelableStatus().required(),
      tags: Joi.array().items(Joi.string().allow("")),
    });
  }
  static BagGST() {
    return Joi.object({
      brand_calculated_amount: Joi.number(),
      gst_fee: Joi.number(),
      gst_tag: Joi.string().allow(""),
      gst_tax_percentage: Joi.number(),
      gstin_code: Joi.string().allow(""),
      hsn_code: Joi.string().allow(""),
      is_default_hsn_code: Joi.boolean(),
      value_of_good: Joi.number(),
    });
  }
  static BagGSTDetails() {
    return Joi.object({
      brand_calculated_amount: Joi.number().required(),
      cgst_gst_fee: Joi.string().allow("").required(),
      cgst_tax_percentage: Joi.number().required(),
      gst_fee: Joi.number().required(),
      gst_tag: Joi.string().allow("").required(),
      gst_tax_percentage: Joi.number().required(),
      gstin_code: Joi.string().allow("").allow(null),
      hsn_code: Joi.string().allow("").required(),
      hsn_code_id: Joi.string().allow("").required(),
      igst_gst_fee: Joi.string().allow("").required(),
      igst_tax_percentage: Joi.number().required(),
      is_default_hsn_code: Joi.boolean(),
      sgst_gst_fee: Joi.string().allow("").required(),
      sgst_tax_percentage: Joi.number().required(),
      tax_collected_at_source: Joi.number().required(),
      value_of_good: Joi.number().required(),
    });
  }
  static BagMeta() {
    return Joi.object({
      b2b_po_details: OrderModel.B2BPODetails(),
    });
  }
  static BagReturnableCancelableStatus() {
    return Joi.object({
      can_be_cancelled: Joi.boolean().required(),
      enable_tracking: Joi.boolean().required(),
      is_active: Joi.boolean().required(),
      is_customer_return_allowed: Joi.boolean().required(),
      is_returnable: Joi.boolean().required(),
    });
  }
  static Bags() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow(""),
      affiliate_order_id: Joi.string().allow(""),
      bag_id: Joi.number(),
      is_locked: Joi.boolean(),
    });
  }
  static BagStateMapper() {
    return Joi.object({
      app_display_name: Joi.string().allow(""),
      app_facing: Joi.boolean(),
      app_state_name: Joi.string().allow(""),
      bs_id: Joi.number().required(),
      display_name: Joi.string().allow("").required(),
      is_active: Joi.boolean(),
      journey_type: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      notify_customer: Joi.boolean(),
      state_type: Joi.string().allow("").required(),
    });
  }
  static BagStatusHistory() {
    return Joi.object({
      app_display_name: Joi.string().allow(""),
      bag_id: Joi.number(),
      bag_state_mapper: OrderModel.BagStateMapper(),
      bsh_id: Joi.number(),
      created_at: Joi.string().allow(""),
      delivery_awb_number: Joi.string().allow("").allow(null),
      delivery_partner_id: Joi.number().allow(null),
      display_name: Joi.string().allow(""),
      forward: Joi.boolean().allow(null),
      kafka_sync: Joi.boolean(),
      reasons: Joi.array().items(Joi.any()),
      shipment_id: Joi.string().allow(""),
      state_id: Joi.number(),
      state_type: Joi.string().allow(""),
      status: Joi.string().allow("").required(),
      store_id: Joi.number(),
      updated_at: Joi.string().allow(""),
    });
  }
  static BagUnit() {
    return Joi.object({
      bag_id: Joi.number().required(),
      can_cancel: Joi.boolean(),
      can_return: Joi.boolean(),
      gst: OrderModel.GSTDetailsData(),
      item: OrderModel.PlatformItem(),
      item_quantity: Joi.number().required(),
      ordering_channel: Joi.string().allow("").required(),
      prices: OrderModel.Prices(),
      shipment_id: Joi.string().allow("").required(),
      status: Joi.any().required(),
      total_shipment_bags: Joi.number().required(),
    });
  }
  static BaseResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }
  static BillingInfo() {
    return Joi.object({
      address1: Joi.string().allow("").required(),
      address2: Joi.string().allow(""),
      alternate_email: Joi.string().allow(""),
      alternate_mobile_number: Joi.string().allow(""),
      city: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      country_code: Joi.string().allow(""),
      customer_code: Joi.string().allow(""),
      external_customer_code: Joi.string().allow(""),
      first_name: Joi.string().allow("").required(),
      floor_no: Joi.string().allow(""),
      gender: Joi.string().allow(""),
      house_no: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      middle_name: Joi.string().allow(""),
      pincode: Joi.string().allow("").required(),
      primary_email: Joi.string().allow("").required(),
      primary_mobile_number: Joi.string().allow("").required(),
      state: Joi.string().allow("").required(),
      state_code: Joi.string().allow(""),
      title: Joi.string().allow(""),
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
  static Brand() {
    return Joi.object({
      brand_id: Joi.number().required(),
      brand_name: Joi.string().allow("").required(),
      company: Joi.string().allow("").required(),
      created_on: Joi.number(),
      credit_note_allowed: Joi.boolean(),
      credit_note_expiry_days: Joi.number().allow(null),
      invoice_prefix: Joi.string().allow("").allow(null),
      is_virtual_invoice: Joi.boolean().allow(null),
      logo: Joi.string().allow(""),
      modified_on: Joi.number(),
      pickup_location: Joi.string().allow("").allow(null),
      script_last_ran: Joi.string().allow("").allow(null),
      start_date: Joi.string().allow("").allow(null),
    });
  }
  static BulkActionDetailsDataField() {
    return Joi.object({
      batch_id: Joi.string().allow(""),
      company_id: Joi.string().allow(""),
      failed_shipments_count: Joi.number(),
      processing_shipments_count: Joi.number(),
      successful_shipment_ids: Joi.array().items(Joi.string().allow("")),
      successful_shipments_count: Joi.number(),
      total_shipments_count: Joi.number(),
    });
  }
  static BulkActionDetailsResponse() {
    return Joi.object({
      data: Joi.array().items(OrderModel.BulkActionDetailsDataField()),
      error: Joi.array().items(Joi.string().allow("")),
      failed_records: Joi.array().items(Joi.string().allow("")),
      message: Joi.string().allow(""),
      status: Joi.boolean(),
      success: Joi.string().allow(""),
      uploaded_by: Joi.string().allow(""),
      uploaded_on: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
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
  static BulkInvoiceLabelResponse() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),
      company_id: Joi.string().allow(""),
      data: Joi.any(),
      do_invoice_label_generated: Joi.boolean().required(),
      invoice: Joi.any(),
      invoice_status: Joi.string().allow(""),
      label: Joi.any(),
      store_code: Joi.string().allow(""),
      store_id: Joi.string().allow(""),
      store_name: Joi.string().allow(""),
    });
  }
  static BulkInvoicingResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean().required(),
    });
  }
  static bulkListingData() {
    return Joi.object({
      batch_id: Joi.string().allow(""),
      company_id: Joi.number(),
      excel_url: Joi.string().allow(""),
      failed: Joi.number(),
      failed_shipments: Joi.array().items(Joi.any()),
      file_name: Joi.string().allow(""),
      id: Joi.string().allow(""),
      processing: Joi.number(),
      processing_shipments: Joi.array().items(Joi.string().allow("")),
      status: Joi.string().allow(""),
      store_code: Joi.string().allow(""),
      store_id: Joi.number(),
      store_name: Joi.string().allow(""),
      successful: Joi.number(),
      successful_shipments: Joi.array().items(Joi.any()),
      total: Joi.number(),
      uploaded_on: Joi.string().allow(""),
      user_id: Joi.string().allow(""),
      user_name: Joi.string().allow(""),
    });
  }
  static BulkListingPage() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      has_previous: Joi.boolean(),
      size: Joi.number(),
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
  static BuyerDetails() {
    return Joi.object({
      address: Joi.string().allow("").allow(null).required(),
      ajio_site_id: Joi.string().allow(""),
      city: Joi.string().allow("").required(),
      gstin: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      pincode: Joi.number().required(),
      state: Joi.string().allow("").required(),
    });
  }
  static BuyRules() {
    return Joi.object({
      cart_conditions: Joi.any(),
      item_criteria: OrderModel.ItemCriterias(),
    });
  }
  static Charge() {
    return Joi.object({
      amount: Joi.any().required(),
      code: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      tax: OrderModel.Tax(),
      type: Joi.string().allow("").required(),
    });
  }
  static CheckResponse() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),
      affiliate_shipment_id: Joi.string().allow(""),
      bags: Joi.array().items(OrderModel.Bags()),
      is_bag_locked: Joi.boolean(),
      is_shipment_locked: Joi.boolean(),
      lock_status: Joi.boolean().allow(null),
      original_filter: OrderModel.OriginalFilter(),
      shipment_id: Joi.string().allow(""),
      status: Joi.string().allow(""),
    });
  }
  static Click2CallResponse() {
    return Joi.object({
      call_id: Joi.string().allow("").required(),
      status: Joi.boolean().required(),
    });
  }
  static CompanyDetails() {
    return Joi.object({
      address: Joi.any(),
      company_cin: Joi.string().allow(""),
      company_contact: OrderModel.ContactDetails(),
      company_gst: Joi.string().allow(""),
      company_id: Joi.number(),
      company_name: Joi.string().allow(""),
    });
  }
  static ContactDetails() {
    return Joi.object({
      emails: Joi.array().items(Joi.string().allow("")),
      phone: Joi.array().items(OrderModel.PhoneDetails()),
    });
  }
  static CreateChannelConfig() {
    return Joi.object({
      dp_configuration: OrderModel.DpConfiguration(),
      location_reassignment: Joi.boolean(),
      lock_states: Joi.array().items(Joi.string().allow("")),
      logo_url: Joi.any(),
      payment_info: OrderModel.CreateChannelPaymentInfo(),
      shipment_assignment: Joi.string().allow(""),
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
  static CreateChannelPaymentInfo() {
    return Joi.object({
      mode_of_payment: Joi.string().allow(""),
      payment_methods: Joi.array().items(OrderModel.PaymentMethods()),
      source: Joi.string().allow(""),
    });
  }
  static CreateOrderAPI() {
    return Joi.object({
      billing_info: OrderModel.BillingInfo().required(),
      charges: Joi.array().items(OrderModel.Charge()),
      config: Joi.any(),
      currency_info: Joi.any(),
      external_creation_date: Joi.string().allow(""),
      external_order_id: Joi.string().allow(""),
      meta: Joi.any(),
      payment_info: OrderModel.PaymentInfo().required(),
      shipments: Joi.array().items(OrderModel.Shipment()).required(),
      shipping_info: OrderModel.ShippingInfo().required(),
      tax_info: OrderModel.TaxInfo(),
    });
  }
  static CreateOrderErrorReponse() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),
      exception: Joi.string().allow("").allow(null),
      info: Joi.any(),
      message: Joi.string().allow("").required(),
      meta: Joi.string().allow("").allow(null),
      request_id: Joi.string().allow("").allow(null),
      stack_trace: Joi.string().allow("").allow(null),
      status: Joi.number().required(),
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
  static CurrentStatus() {
    return Joi.object({
      bag_id: Joi.number(),
      bag_state_mapper: OrderModel.BagStateMapper(),
      created_at: Joi.string().allow("").allow(null),
      current_status_id: Joi.number().required(),
      delivery_awb_number: Joi.string().allow(""),
      delivery_partner_id: Joi.number(),
      kafka_sync: Joi.boolean(),
      shipment_id: Joi.string().allow(""),
      state_id: Joi.number(),
      state_type: Joi.string().allow(""),
      status: Joi.string().allow(""),
      store_id: Joi.number(),
      updated_at: Joi.string().allow(""),
    });
  }
  static DataUpdates() {
    return Joi.object({
      entities: Joi.array().items(OrderModel.EntitiesDataUpdates()),
      products: Joi.array().items(OrderModel.ProductsDataUpdates()),
    });
  }
  static Dates() {
    return Joi.object({
      delivery_date: Joi.any(),
      order_created: Joi.string().allow(""),
    });
  }
  static DebugInfo() {
    return Joi.object({
      stormbreaker_uuid: Joi.string().allow(""),
    });
  }
  static Dimensions() {
    return Joi.object({
      height: Joi.number(),
      is_default: Joi.boolean(),
      length: Joi.number(),
      unit: Joi.string().allow(""),
      width: Joi.number(),
    });
  }
  static DiscountRules() {
    return Joi.object({
      type: Joi.string().allow(""),
      value: Joi.number(),
    });
  }
  static DispatchManifest() {
    return Joi.object({
      manifest_id: Joi.string().allow("").required(),
    });
  }
  static Document() {
    return Joi.object({
      ds_type: Joi.string().allow("").required(),
      legal_name: Joi.string().allow("").required(),
      url: Joi.string().allow(""),
      value: Joi.string().allow("").required(),
      verified: Joi.boolean().required(),
    });
  }
  static DpConfiguration() {
    return Joi.object({
      shipping_by: Joi.string().allow(""),
    });
  }
  static DPDetailsData() {
    return Joi.object({
      awb_no: Joi.string().allow(""),
      country: Joi.string().allow(""),
      eway_bill_id: Joi.string().allow("").allow(null),
      gst_tag: Joi.string().allow(""),
      id: Joi.number(),
      name: Joi.string().allow(""),
      pincode: Joi.string().allow(""),
      track_url: Joi.string().allow("").allow(null),
    });
  }
  static EinvoiceInfo() {
    return Joi.object({
      credit_note: Joi.any(),
      invoice: Joi.any(),
    });
  }
  static EInvoicePortalDetails() {
    return Joi.object({
      password: Joi.string().allow(""),
      user: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }
  static Entities() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow(""),
      affiliate_id: Joi.string().allow(""),
      affiliate_order_id: Joi.string().allow(""),
      affiliate_shipment_id: Joi.string().allow(""),
      id: Joi.string().allow(""),
      reason_text: Joi.string().allow("").required(),
    });
  }
  static EntitiesDataUpdates() {
    return Joi.object({
      data: Joi.any(),
      filters: Joi.array().items(Joi.any()),
    });
  }
  static EntitiesReasons() {
    return Joi.object({
      data: OrderModel.EntityReasonData(),
      filters: Joi.array().items(Joi.any()),
    });
  }
  static EntityReasonData() {
    return Joi.object({
      reason_id: Joi.number(),
      reason_text: Joi.string().allow(""),
    });
  }
  static Error() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
  static ErrorDetail() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
  static ErrorResponse() {
    return Joi.object({
      error: Joi.string().allow("").required(),
      message: Joi.string().allow("").required(),
    });
  }
  static ErrorResponse1() {
    return Joi.object({
      error_trace: Joi.string().allow(""),
      message: Joi.string().allow("").required(),
      status: Joi.number().required(),
    });
  }
  static FileResponse() {
    return Joi.object({
      cdn: OrderModel.URL(),
      content_type: Joi.string().allow(""),
      file_name: Joi.string().allow(""),
      file_path: Joi.string().allow(""),
      method: Joi.string().allow(""),
      namespace: Joi.string().allow(""),
      operation: Joi.string().allow(""),
      size: Joi.number(),
      tags: Joi.array().items(Joi.string().allow("")),
      upload: OrderModel.FileUploadResponse(),
    });
  }
  static FileUploadResponse() {
    return Joi.object({
      expiry: Joi.number(),
      url: Joi.string().allow(""),
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
      options: Joi.array().items(OrderModel.FilterInfoOption()),
      text: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
      value: Joi.string().allow("").required(),
    });
  }
  static FiltersResponse() {
    return Joi.object({
      advance: Joi.array().items(Joi.any()),
    });
  }
  static FinancialBreakup() {
    return Joi.object({
      added_to_fynd_cash: Joi.boolean().required(),
      amount_paid: Joi.number().required(),
      amount_paid_roundoff: Joi.number(),
      brand_calculated_amount: Joi.number().required(),
      cashback: Joi.number().required(),
      cashback_applied: Joi.number().required(),
      cod_charges: Joi.number().required(),
      coupon_effective_discount: Joi.number().required(),
      coupon_value: Joi.number().required(),
      delivery_charge: Joi.number().required(),
      discount: Joi.number().required(),
      fynd_credits: Joi.number().required(),
      gst_fee: Joi.number().required(),
      gst_tag: Joi.string().allow("").required(),
      gst_tax_percentage: Joi.number().required(),
      hsn_code: Joi.string().allow("").required(),
      identifiers: OrderModel.Identifier().required(),
      item_name: Joi.string().allow("").required(),
      price_effective: Joi.number().required(),
      price_marked: Joi.number().required(),
      promotion_effective_discount: Joi.number().required(),
      refund_credit: Joi.number().required(),
      size: Joi.string().allow("").required(),
      tax_collected_at_source: Joi.number(),
      total_units: Joi.number().required(),
      transfer_price: Joi.number().required(),
      value_of_good: Joi.number().required(),
    });
  }
  static Formatted() {
    return Joi.object({
      f_max: Joi.string().allow(""),
      f_min: Joi.string().allow(""),
    });
  }
  static FulfillingStore() {
    return Joi.object({
      address: Joi.string().allow("").required(),
      city: Joi.string().allow("").required(),
      code: Joi.string().allow("").required(),
      contact_person: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      fulfillment_channel: Joi.string().allow("").required(),
      id: Joi.number().required(),
      meta: Joi.any().required(),
      phone: Joi.string().allow("").required(),
      pincode: Joi.string().allow("").required(),
      state: Joi.string().allow("").required(),
      store_name: Joi.string().allow("").required(),
    });
  }
  static FyndOrderIdList() {
    return Joi.object({
      fynd_order_id: Joi.array().items(Joi.string().allow("")),
    });
  }
  static GetActionsResponse() {
    return Joi.object({
      permissions: OrderModel.ActionInfo().required(),
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
  static GSTDetailsData() {
    return Joi.object({
      brand_calculated_amount: Joi.number().required(),
      gst_fee: Joi.number().required(),
      gstin_code: Joi.string().allow("").required(),
      tax_collected_at_source: Joi.number().required(),
      value_of_good: Joi.number().required(),
    });
  }
  static HistoryDict() {
    return Joi.object({
      bag_id: Joi.number(),
      createdat: Joi.string().allow("").required(),
      l1_detail: Joi.string().allow(""),
      l2_detail: Joi.string().allow(""),
      l3_detail: Joi.string().allow(""),
      message: Joi.string().allow("").required(),
      ticket_id: Joi.string().allow(""),
      ticket_url: Joi.string().allow(""),
      type: Joi.string().allow("").required(),
      user: Joi.string().allow("").required(),
    });
  }
  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }
  static InvalidateShipmentCacheNestedResponse() {
    return Joi.object({
      error: Joi.string().allow(""),
      message: Joi.string().allow(""),
      shipment_id: Joi.string().allow(""),
      status: Joi.number(),
    });
  }
  static InvalidateShipmentCachePayload() {
    return Joi.object({
      shipment_ids: Joi.array().items(Joi.string().allow("")).required(),
    });
  }
  static InvalidateShipmentCacheResponse() {
    return Joi.object({
      response: Joi.array().items(
        OrderModel.InvalidateShipmentCacheNestedResponse()
      ),
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
  static Item() {
    return Joi.object({
      attributes: OrderModel.Attributes().required(),
      branch_url: Joi.string().allow("").allow(null),
      brand: Joi.string().allow("").required(),
      brand_id: Joi.number().required(),
      can_cancel: Joi.boolean(),
      can_return: Joi.boolean(),
      code: Joi.string().allow(""),
      color: Joi.string().allow("").allow(null),
      department_id: Joi.number(),
      gender: Joi.string().allow("").allow(null),
      image: Joi.array().items(Joi.string().allow("")).required(),
      item_id: Joi.number().required(),
      l1_category: Joi.array().items(Joi.string().allow("")),
      l1_category_id: Joi.number(),
      l2_category: Joi.array().items(Joi.string().allow("")),
      l2_category_id: Joi.number(),
      l3_category: Joi.number(),
      l3_category_name: Joi.string().allow(""),
      last_updated_at: Joi.string().allow(""),
      meta: Joi.any(),
      name: Joi.string().allow("").required(),
      size: Joi.string().allow("").required(),
      slug_key: Joi.string().allow("").required(),
      webstore_product_url: Joi.string().allow("").allow(null),
    });
  }
  static ItemCriterias() {
    return Joi.object({
      item_brand: Joi.array().items(Joi.number()),
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
  static JioCodeUpsertResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()),
      error: Joi.array().items(OrderModel.NestedErrorSchemaDataSet()),
      identifier: Joi.string().allow(""),
      success: Joi.boolean(),
      trace_id: Joi.string().allow(""),
    });
  }
  static LaneConfigResponse() {
    return Joi.object({
      super_lanes: Joi.array().items(OrderModel.SuperLane()),
    });
  }
  static LineItem() {
    return Joi.object({
      charges: Joi.array().items(OrderModel.Charge()),
      custom_messasge: Joi.string().allow(""),
      external_line_id: Joi.string().allow(""),
      meta: Joi.any(),
      quantity: Joi.number(),
      seller_identifier: Joi.string().allow("").required(),
    });
  }
  static LocationDetails() {
    return Joi.object({
      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),
      fulfillment_id: Joi.number().required(),
      fulfillment_type: Joi.string().allow("").required(),
    });
  }
  static LockData() {
    return Joi.object({
      lock_message: Joi.string().allow(""),
      locked: Joi.boolean(),
      mto: Joi.boolean(),
    });
  }
  static ManualAssignDPToShipment() {
    return Joi.object({
      dp_id: Joi.number().required(),
      order_type: Joi.string().allow("").required(),
      qc_required: Joi.string().allow("").required(),
      shipment_ids: Joi.array().items(Joi.string().allow("")),
    });
  }
  static ManualAssignDPToShipmentResponse() {
    return Joi.object({
      errors: Joi.array().items(Joi.string().allow("")),
      success: Joi.string().allow("").required(),
    });
  }
  static MarketPlacePdf() {
    return Joi.object({
      invoice: Joi.string().allow("").allow(null),
      label: Joi.string().allow("").allow(null),
    });
  }
  static Meta() {
    return Joi.object({
      dimension: OrderModel.Dimensions(),
    });
  }
  static Meta1() {
    return Joi.object({
      kafka_emission_status: Joi.number(),
      state_manager_used: Joi.string().allow(""),
    });
  }
  static MetricCountResponse() {
    return Joi.object({
      items: Joi.array().items(OrderModel.MetricsCount()),
    });
  }
  static MetricsCount() {
    return Joi.object({
      key: Joi.string().allow("").required(),
      options: Joi.array().items(OrderModel.Options()),
      text: Joi.string().allow("").required(),
      value: Joi.number().required(),
    });
  }
  static NestedErrorSchemaDataSet() {
    return Joi.object({
      message: Joi.string().allow(""),
      type: Joi.string().allow(""),
      value: Joi.string().allow(""),
    });
  }
  static OmsReports() {
    return Joi.object({
      display_name: Joi.string().allow(""),
      report_created_at: Joi.string().allow("").allow(null),
      report_id: Joi.string().allow(""),
      report_name: Joi.string().allow(""),
      report_requested_at: Joi.string().allow("").allow(null),
      report_type: Joi.string().allow(""),
      request_details: Joi.any(),
      s3_key: Joi.string().allow(""),
      status: Joi.string().allow(""),
    });
  }
  static Options() {
    return Joi.object({
      text: Joi.string().allow(""),
      value: Joi.number(),
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
      applied_promos: Joi.array().items(OrderModel.AppliedPromos()),
      article: OrderModel.OrderBagArticle(),
      bag_configs: OrderModel.BagConfigs(),
      bag_id: Joi.number().required(),
      brand: OrderModel.OrderBrandName(),
      can_cancel: Joi.boolean(),
      can_return: Joi.boolean(),
      current_status: OrderModel.CurrentStatus(),
      delivery_address: OrderModel.PlatformDeliveryAddress(),
      display_name: Joi.string().allow(""),
      entity_type: Joi.string().allow(""),
      financial_breakup: OrderModel.FinancialBreakup(),
      gst_details: OrderModel.BagGST(),
      identifier: Joi.string().allow(""),
      item: OrderModel.PlatformItem(),
      line_number: Joi.number(),
      parent_promo_bags: Joi.any(),
      prices: OrderModel.Prices(),
      quantity: Joi.number(),
      seller_identifier: Joi.string().allow(""),
    });
  }
  static OrderBrandName() {
    return Joi.object({
      brand_name: Joi.string().allow("").required(),
      company: Joi.string().allow("").allow(null).required(),
      created_on: Joi.string().allow("").required(),
      id: Joi.number().required(),
      logo: Joi.string().allow("").required(),
      modified_on: Joi.string().allow(""),
    });
  }
  static OrderConfig() {
    return Joi.object({
      affiliate: OrderModel.Affiliate().required(),
      affiliate_store_id_mapping: Joi.array()
        .items(OrderModel.AffiliateStoreIdMapping())
        .required(),
      article_lookup: Joi.string().allow(""),
      bag_end_state: Joi.string().allow(""),
      create_user: Joi.boolean(),
      store_lookup: Joi.string().allow(""),
    });
  }
  static OrderDetails() {
    return Joi.object({
      created_at: Joi.string().allow(""),
      fynd_order_id: Joi.string().allow(""),
    });
  }
  static OrderDetailsData() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),
      cod_charges: Joi.string().allow(""),
      fynd_order_id: Joi.string().allow("").required(),
      order_date: Joi.string().allow(""),
      order_value: Joi.string().allow(""),
      ordering_channel: Joi.string().allow(""),
      ordering_channel_logo: Joi.any(),
      source: Joi.string().allow(""),
      tax_details: Joi.any(),
    });
  }
  static OrderDict() {
    return Joi.object({
      fynd_order_id: Joi.string().allow("").required(),
      meta: OrderModel.OrderMeta(),
      order_date: Joi.string().allow("").required(),
      payment_methods: Joi.any(),
      prices: OrderModel.Prices(),
      tax_details: OrderModel.TaxDetails(),
    });
  }
  static OrderInfo() {
    return Joi.object({
      affiliate_order_id: Joi.string().allow(""),
      bags: Joi.array().items(OrderModel.AffiliateBag()).required(),
      billing_address: OrderModel.OrderUser().required(),
      cod_charges: Joi.number().required(),
      coupon: Joi.string().allow("").allow(null),
      delivery_charges: Joi.number().required(),
      discount: Joi.number().required(),
      items: Joi.any().required(),
      order_priority: OrderModel.OrderPriority(),
      order_value: Joi.number().required(),
      payment: Joi.any(),
      payment_mode: Joi.string().allow("").required(),
      shipment: OrderModel.ShipmentData(),
      shipping_address: OrderModel.OrderUser().required(),
      user: OrderModel.UserData().required(),
    });
  }
  static OrderingStoreDetails() {
    return Joi.object({
      address: Joi.string().allow("").required(),
      city: Joi.string().allow("").required(),
      code: Joi.string().allow("").required(),
      contact_person: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      meta: Joi.any().required(),
      ordering_store_id: Joi.number().required(),
      phone: Joi.string().allow("").required(),
      pincode: Joi.string().allow("").required(),
      state: Joi.string().allow("").required(),
      store_name: Joi.string().allow("").required(),
    });
  }
  static OrderListingResponse() {
    return Joi.object({
      items: Joi.array().items(OrderModel.PlatformOrderItems()),
      lane: Joi.string().allow(""),
      message: Joi.string().allow(""),
      page: OrderModel.Page(),
      success: Joi.boolean(),
      total_count: Joi.number(),
    });
  }
  static OrderMeta() {
    return Joi.object({
      billing_staff_details: OrderModel.BillingStaffDetails(),
      cart_id: Joi.number(),
      comment: Joi.string().allow(""),
      company_logo: Joi.string().allow(""),
      currency_symbol: Joi.string().allow(""),
      customer_note: Joi.string().allow(""),
      employee_id: Joi.number(),
      extra_meta: Joi.any(),
      files: Joi.array().items(Joi.any()),
      mongo_cart_id: Joi.number(),
      order_child_entities: Joi.array().items(Joi.string().allow("")),
      order_platform: Joi.string().allow(""),
      order_tags: Joi.array().items(Joi.any()),
      order_type: Joi.string().allow(""),
      ordering_store: Joi.number(),
      payment_type: Joi.string().allow(""),
      platform_user_details: OrderModel.PlatformUserDetails(),
      staff: Joi.any(),
      transaction_data: OrderModel.TransactionData(),
    });
  }
  static OrderPriority() {
    return Joi.object({
      affiliate_priority_code: Joi.string().allow("").allow(null),
      fulfilment_priority: Joi.number().allow(null),
      fulfilment_priority_text: Joi.string().allow(""),
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
  static OrderUser() {
    return Joi.object({
      address1: Joi.string().allow("").allow(null),
      address2: Joi.string().allow("").allow(null),
      city: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      email: Joi.string().allow("").required(),
      first_name: Joi.string().allow("").required(),
      last_name: Joi.string().allow("").required(),
      mobile: Joi.number().required(),
      phone: Joi.number().required(),
      pincode: Joi.string().allow("").required(),
      state: Joi.string().allow("").required(),
    });
  }
  static OriginalFilter() {
    return Joi.object({
      affiliate_id: Joi.string().allow(""),
      affiliate_shipment_id: Joi.string().allow(""),
    });
  }
  static Page() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      has_previous: Joi.boolean(),
      item_total: Joi.number(),
      next_id: Joi.string().allow(""),
      size: Joi.number(),
      type: Joi.string().allow("").required(),
    });
  }
  static Page1() {
    return Joi.object({
      current: Joi.number().required(),
      has_next: Joi.boolean().required(),
      item_total: Joi.number().required(),
      page_type: Joi.string().allow("").required(),
      size: Joi.number().required(),
    });
  }
  static PaymentInfo() {
    return Joi.object({
      payment_methods: Joi.array().items(OrderModel.PaymentMethod()),
      primary_mode: Joi.string().allow("").required(),
    });
  }
  static PaymentMethod() {
    return Joi.object({
      amount: Joi.number().required(),
      collect_by: Joi.string().allow("").required(),
      meta: Joi.any(),
      mode: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      refund_by: Joi.string().allow("").required(),
      transaction_data: Joi.any(),
    });
  }
  static PaymentMethods() {
    return Joi.object({
      collect_by: Joi.string().allow(""),
      mode: Joi.string().allow(""),
      refund_by: Joi.string().allow(""),
    });
  }
  static PaymentModeInfo() {
    return Joi.object({
      logo: Joi.string().allow("").required(),
      type: Joi.string().allow("").required(),
    });
  }
  static PDFLinks() {
    return Joi.object({
      b2b: Joi.string().allow(""),
      credit_note_url: Joi.string().allow(""),
      delivery_challan_a4: Joi.string().allow(""),
      invoice: Joi.string().allow(""),
      invoice_a4: Joi.string().allow(""),
      invoice_a6: Joi.string().allow(""),
      invoice_pos: Joi.string().allow(""),
      invoice_type: Joi.string().allow("").required(),
      label: Joi.string().allow(""),
      label_a4: Joi.string().allow(""),
      label_a6: Joi.string().allow(""),
      label_pos: Joi.string().allow(""),
      label_type: Joi.string().allow("").required(),
      po_invoice: Joi.string().allow(""),
    });
  }
  static PhoneDetails() {
    return Joi.object({
      country_code: Joi.number(),
      mobile_number: Joi.string().allow(""),
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
  static PlatformDeliveryAddress() {
    return Joi.object({
      address1: Joi.string().allow(""),
      address2: Joi.string().allow(""),
      address_category: Joi.string().allow(""),
      address_type: Joi.string().allow(""),
      area: Joi.string().allow(""),
      city: Joi.string().allow(""),
      contact_person: Joi.string().allow(""),
      country: Joi.string().allow(""),
      created_at: Joi.string().allow(""),
      email: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      latitude: Joi.number(),
      longitude: Joi.number(),
      phone: Joi.string().allow(""),
      pincode: Joi.string().allow(""),
      state: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      version: Joi.string().allow(""),
    });
  }
  static PlatformItem() {
    return Joi.object({
      can_cancel: Joi.boolean(),
      can_return: Joi.boolean(),
      code: Joi.string().allow(""),
      color: Joi.string().allow("").allow(null),
      department_id: Joi.number(),
      id: Joi.number(),
      image: Joi.array().items(Joi.string().allow("")),
      images: Joi.array().items(Joi.string().allow("")),
      l1_category: Joi.array().items(Joi.string().allow("")),
      l3_category: Joi.number(),
      l3_category_name: Joi.string().allow(""),
      name: Joi.string().allow(""),
      size: Joi.string().allow(""),
    });
  }
  static PlatformOrderItems() {
    return Joi.object({
      breakup_values: Joi.array().items(OrderModel.PlatformBreakupValues()),
      channel: OrderModel.PlatformChannel(),
      meta: Joi.any(),
      order_created_time: Joi.string().allow(""),
      order_id: Joi.string().allow(""),
      order_value: Joi.number(),
      payment_mode: Joi.string().allow(""),
      shipments: Joi.array().items(OrderModel.PlatformShipment()),
      total_order_value: Joi.number(),
      user_info: OrderModel.UserDataInfo(),
    });
  }
  static PlatformOrderUpdate() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),
    });
  }
  static PlatformShipment() {
    return Joi.object({
      affiliate_details: OrderModel.AffiliateDetails(),
      bag_status_history: Joi.array().items(OrderModel.BagStatusHistory()),
      bags: Joi.array().items(OrderModel.OrderBags()),
      billing_details: OrderModel.UserDetailsData(),
      company_details: OrderModel.CompanyDetails(),
      coupon: Joi.any(),
      custom_meta: Joi.array().items(Joi.any()),
      delivery_details: OrderModel.UserDetailsData(),
      delivery_slot: Joi.any(),
      dp_details: OrderModel.DPDetailsData(),
      enable_dp_tracking: Joi.boolean(),
      forward_shipment_id: Joi.string().allow(""),
      fulfilling_store: OrderModel.FulfillingStore(),
      fulfilment_priority: Joi.number(),
      gst_details: OrderModel.GSTDetailsData(),
      invoice: OrderModel.InvoiceInfo(),
      invoice_id: Joi.string().allow(""),
      journey_type: Joi.string().allow(""),
      lock_status: Joi.boolean(),
      meta: OrderModel.Meta(),
      operational_status: Joi.string().allow(""),
      order: OrderModel.OrderDetailsData(),
      ordering_store: OrderModel.OrderingStoreDetails(),
      packaging_type: Joi.string().allow(""),
      payment_methods: Joi.any(),
      payment_mode: Joi.string().allow(""),
      payments: OrderModel.ShipmentPayments(),
      picked_date: Joi.string().allow(""),
      platform_logo: Joi.string().allow(""),
      prices: OrderModel.Prices(),
      priority_text: Joi.string().allow("").allow(null),
      shipment_id: Joi.string().allow("").required(),
      shipment_images: Joi.array().items(Joi.string().allow("")),
      shipment_quantity: Joi.number(),
      shipment_status: Joi.string().allow(""),
      status: OrderModel.ShipmentStatusData(),
      total_bags: Joi.number(),
      total_items: Joi.number(),
      tracking_list: Joi.array().items(OrderModel.TrackingList()),
      user: OrderModel.UserDataInfo(),
      user_agent: Joi.string().allow(""),
      vertical: Joi.string().allow("").allow(null),
    });
  }
  static PlatformShipmentReasonsResponse() {
    return Joi.object({
      reasons: Joi.array().items(OrderModel.Reason()),
      success: Joi.boolean(),
    });
  }
  static PlatformShipmentTrack() {
    return Joi.object({
      meta: Joi.any(),
      results: Joi.array().items(OrderModel.PlatformTrack()),
    });
  }
  static PlatformTrack() {
    return Joi.object({
      account_name: Joi.string().allow(""),
      awb: Joi.string().allow(""),
      last_location_recieved_at: Joi.string().allow(""),
      meta: Joi.any(),
      raw_status: Joi.string().allow(""),
      reason: Joi.string().allow(""),
      shipment_type: Joi.string().allow(""),
      status: Joi.string().allow(""),
      updated_at: Joi.string().allow(""),
      updated_time: Joi.string().allow(""),
    });
  }
  static PlatformUserDetails() {
    return Joi.object({
      platform_user_employee_code: Joi.string().allow(""),
      platform_user_first_name: Joi.string().allow(""),
      platform_user_id: Joi.string().allow(""),
      platform_user_last_name: Joi.string().allow(""),
    });
  }
  static PostActivityHistory() {
    return Joi.object({
      data: OrderModel.PostHistoryData().required(),
      filters: Joi.array().items(OrderModel.PostHistoryFilters()).required(),
    });
  }
  static PostHistoryData() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      user_name: Joi.string().allow("").required(),
    });
  }
  static PostHistoryDict() {
    return Joi.object({
      activity_history: OrderModel.PostActivityHistory().required(),
    });
  }
  static PostHistoryFilters() {
    return Joi.object({
      identifier: Joi.string().allow(""),
      line_number: Joi.string().allow(""),
      shipment_id: Joi.string().allow("").required(),
    });
  }
  static PostShipmentHistory() {
    return Joi.object({
      activity_history: Joi.array().items(OrderModel.PostHistoryDict()),
    });
  }
  static Prices() {
    return Joi.object({
      amount_paid: Joi.number(),
      amount_paid_roundoff: Joi.number(),
      cashback: Joi.number(),
      cashback_applied: Joi.number(),
      cod_charges: Joi.number(),
      coupon_value: Joi.number(),
      delivery_charge: Joi.number(),
      discount: Joi.number(),
      fynd_credits: Joi.number(),
      price_effective: Joi.number(),
      price_marked: Joi.number(),
      promotion_effective_discount: Joi.number(),
      refund_amount: Joi.number(),
      refund_credit: Joi.number(),
      tax_collected_at_source: Joi.number(),
      transfer_price: Joi.number(),
      value_of_good: Joi.number(),
    });
  }
  static ProcessingDates() {
    return Joi.object({
      confirm_by_date: Joi.string().allow(""),
      customer_pickup_slot: Joi.any(),
      dispatch_after_date: Joi.string().allow(""),
      dispatch_by_date: Joi.string().allow(""),
      dp_pickup_slot: Joi.any(),
      pack_by_date: Joi.string().allow(""),
    });
  }
  static Products() {
    return Joi.object({
      identifier: Joi.string().allow(""),
      line_number: Joi.number(),
      quantity: Joi.number(),
    });
  }
  static ProductsDataUpdates() {
    return Joi.object({
      data: Joi.any(),
      filters: Joi.array().items(OrderModel.ProductsDataUpdatesFilters()),
    });
  }
  static ProductsDataUpdatesFilters() {
    return Joi.object({
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
  static ProductsReasonsData() {
    return Joi.object({
      reason_id: Joi.number(),
      reason_text: Joi.string().allow(""),
    });
  }
  static ProductsReasonsFilters() {
    return Joi.object({
      identifier: Joi.string().allow(""),
      line_number: Joi.number(),
      quantity: Joi.number(),
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
      id: Joi.number(),
      qc_type: Joi.array().items(Joi.string().allow("")),
      question_set: Joi.array().items(OrderModel.QuestionSet()),
    });
  }
  static ReasonsData() {
    return Joi.object({
      entities: Joi.array().items(OrderModel.EntitiesReasons()),
      products: Joi.array().items(OrderModel.ProductsReasons()),
    });
  }
  static ResponseDetail() {
    return Joi.object({
      message: Joi.array().items(Joi.string().allow("")),
      success: Joi.boolean(),
    });
  }
  static ReturnConfig() {
    return Joi.object({
      returnable: Joi.boolean(),
      time: Joi.number(),
      unit: Joi.string().allow(""),
    });
  }
  static SendSmsPayload() {
    return Joi.object({
      bag_id: Joi.number().required(),
      data: OrderModel.SmsDataPayload(),
      slug: Joi.string().allow("").required(),
    });
  }
  static Shipment() {
    return Joi.object({
      external_shipment_id: Joi.string().allow(""),
      line_items: Joi.array().items(OrderModel.LineItem()).required(),
      location_id: Joi.number().required(),
      meta: Joi.any(),
      priority: Joi.number(),
      processing_dates: OrderModel.ProcessingDates(),
    });
  }
  static ShipmentConfig() {
    return Joi.object({
      action: Joi.string().allow("").required(),
      identifier: Joi.string().allow("").required(),
      journey: Joi.string().allow("").required(),
      location_details: OrderModel.LocationDetails(),
      payment_mode: Joi.string().allow("").required(),
      shipment: Joi.array().items(OrderModel.ShipmentDetails()).required(),
      source: Joi.string().allow("").required(),
      to_pincode: Joi.string().allow("").required(),
    });
  }
  static ShipmentData() {
    return Joi.object({
      shipment_data: OrderModel.ShipmentConfig().required(),
    });
  }
  static ShipmentDetail() {
    return Joi.object({
      bag_list: Joi.array().items(Joi.number()),
      id: Joi.number().required(),
      meta: OrderModel.Meta1().required(),
      remarks: Joi.string().allow(""),
      shipment_id: Joi.string().allow(""),
      status: Joi.string().allow(""),
    });
  }
  static ShipmentDetails() {
    return Joi.object({
      affiliate_shipment_id: Joi.string().allow("").required(),
      articles: Joi.array().items(OrderModel.ArticleDetails1()).required(),
      box_type: Joi.string().allow("").allow(null),
      dp_id: Joi.number().allow(null),
      fulfillment_id: Joi.number().required(),
      meta: Joi.any(),
      shipments: Joi.number().required(),
    });
  }
  static ShipmentDetailsResponse() {
    return Joi.object({
      order: OrderModel.OrderDict(),
      shipments: Joi.array().items(OrderModel.PlatformShipment()),
      success: Joi.boolean().required(),
    });
  }
  static ShipmentHistoryResponse() {
    return Joi.object({
      activity_history: Joi.array().items(OrderModel.HistoryDict()).required(),
    });
  }
  static ShipmentInfoResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      shipments: Joi.array().items(OrderModel.PlatformShipment()),
      success: Joi.boolean().required(),
    });
  }
  static ShipmentInternalPlatformViewResponse() {
    return Joi.object({
      applied_filters: Joi.any(),
      filters: Joi.array().items(OrderModel.FiltersInfo()),
      items: Joi.array().items(OrderModel.ShipmentItem()),
      page: Joi.any(),
    });
  }
  static ShipmentItem() {
    return Joi.object({
      application: Joi.any(),
      bags: Joi.array().items(OrderModel.BagUnit()),
      channel: Joi.any(),
      created_at: Joi.string().allow("").required(),
      fulfilling_centre: Joi.string().allow("").required(),
      fulfilling_store: OrderModel.ShipmentItemFulFillingStore(),
      id: Joi.string().allow("").required(),
      payment_methods: Joi.any(),
      payment_mode_info: OrderModel.PaymentModeInfo(),
      prices: OrderModel.Prices(),
      shipment_created_at: Joi.string().allow("").required(),
      shipment_id: Joi.string().allow(""),
      shipment_status: OrderModel.ShipmentStatus(),
      sla: Joi.any(),
      total_bags_count: Joi.number().required(),
      total_shipments_in_order: Joi.number().required(),
      user: OrderModel.UserDataInfo(),
    });
  }
  static ShipmentItemFulFillingStore() {
    return Joi.object({
      code: Joi.string().allow("").required(),
      id: Joi.string().allow("").required(),
    });
  }
  static ShipmentMeta() {
    return Joi.object({
      assign_dp_from_sb: Joi.boolean(),
      auto_trigger_dp_assignment_acf: Joi.boolean().required(),
      awb_number: Joi.string().allow(""),
      b2b_buyer_details: OrderModel.BuyerDetails(),
      b2c_buyer_details: Joi.any().allow(null),
      bag_weight: Joi.any(),
      box_type: Joi.string().allow("").allow(null),
      debug_info: OrderModel.DebugInfo(),
      dp_id: Joi.string().allow("").allow(null),
      dp_name: Joi.string().allow(""),
      dp_options: Joi.any(),
      dp_sort_key: Joi.string().allow(""),
      due_date: Joi.string().allow(""),
      einvoice_info: OrderModel.EinvoiceInfo(),
      ewaybill_info: Joi.any().allow(null),
      external: Joi.any(),
      formatted: OrderModel.Formatted(),
      forward_affiliate_order_id: Joi.string().allow(""),
      forward_affiliate_shipment_id: Joi.string().allow(""),
      fulfilment_priority_text: Joi.string().allow("").allow(null),
      lock_data: OrderModel.LockData(),
      marketplace_store_id: Joi.string().allow(""),
      order_type: Joi.string().allow("").allow(null),
      packaging_name: Joi.string().allow(""),
      po_number: Joi.string().allow(""),
      return_affiliate_order_id: Joi.string().allow(""),
      return_affiliate_shipment_id: Joi.string().allow(""),
      return_awb_number: Joi.string().allow(""),
      return_details: Joi.any(),
      return_store_node: Joi.number(),
      same_store_available: Joi.boolean().required(),
      shipment_volumetric_weight: Joi.number(),
      shipment_weight: Joi.number(),
      store_invoice_updated_date: Joi.string().allow(""),
      timestamp: OrderModel.ShipmentTimeStamp(),
      weight: Joi.number().required(),
    });
  }
  static ShipmentPayments() {
    return Joi.object({
      logo: Joi.string().allow(""),
      mode: Joi.string().allow(""),
      source: Joi.string().allow(""),
    });
  }
  static ShipmentsRequest() {
    return Joi.object({
      data_updates: OrderModel.DataUpdates(),
      identifier: Joi.string().allow("").required(),
      products: Joi.array().items(OrderModel.Products()),
      reasons: OrderModel.ReasonsData(),
    });
  }
  static ShipmentsResponse() {
    return Joi.object({
      code: Joi.string().allow(""),
      exception: Joi.string().allow(""),
      final_state: Joi.any(),
      identifier: Joi.string().allow(""),
      message: Joi.string().allow(""),
      meta: Joi.any(),
      stack_trace: Joi.string().allow(""),
      status: Joi.number(),
    });
  }
  static ShipmentStatus() {
    return Joi.object({
      actual_status: Joi.string().allow("").required(),
      hex_code: Joi.string().allow("").required(),
      ops_status: Joi.string().allow("").required(),
      status: Joi.string().allow("").required(),
      title: Joi.string().allow("").required(),
    });
  }
  static ShipmentStatusData() {
    return Joi.object({
      bag_list: Joi.array().items(Joi.string().allow("")),
      created_at: Joi.string().allow("").allow(null),
      id: Joi.number(),
      shipment_id: Joi.string().allow(""),
      status: Joi.string().allow(""),
    });
  }
  static ShipmentTimeStamp() {
    return Joi.object({
      t_max: Joi.string().allow(""),
      t_min: Joi.string().allow(""),
    });
  }
  static ShippingInfo() {
    return Joi.object({
      address1: Joi.string().allow("").required(),
      address2: Joi.string().allow(""),
      address_type: Joi.string().allow(""),
      alternate_email: Joi.string().allow(""),
      alternate_mobile_number: Joi.string().allow(""),
      city: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      country_code: Joi.string().allow(""),
      customer_code: Joi.string().allow(""),
      external_customer_code: Joi.string().allow(""),
      first_name: Joi.string().allow("").required(),
      floor_no: Joi.string().allow(""),
      gender: Joi.string().allow(""),
      geo_location: Joi.any(),
      house_no: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      last_name: Joi.string().allow(""),
      middle_name: Joi.string().allow(""),
      pincode: Joi.string().allow("").required(),
      primary_email: Joi.string().allow("").required(),
      primary_mobile_number: Joi.string().allow("").required(),
      shipping_type: Joi.string().allow(""),
      slot: Joi.array().items(Joi.any()),
      state: Joi.string().allow("").required(),
      state_code: Joi.string().allow(""),
      title: Joi.string().allow(""),
    });
  }
  static SmsDataPayload() {
    return Joi.object({
      amount_paid: Joi.number().required(),
      brand_name: Joi.string().allow("").required(),
      country_code: Joi.string().allow("").required(),
      customer_name: Joi.string().allow("").required(),
      message: Joi.string().allow("").required(),
      order_id: Joi.string().allow("").required(),
      payment_mode: Joi.string().allow("").required(),
      phone_number: Joi.number().required(),
      shipment_id: Joi.number().required(),
    });
  }
  static StatuesRequest() {
    return Joi.object({
      exclude_bags_next_state: Joi.string().allow(""),
      shipments: Joi.array().items(OrderModel.ShipmentsRequest()),
      status: Joi.string().allow(""),
    });
  }
  static StatuesResponse() {
    return Joi.object({
      shipments: Joi.array().items(OrderModel.ShipmentsResponse()),
    });
  }
  static Store() {
    return Joi.object({
      address1: Joi.string().allow("").required(),
      address2: Joi.string().allow(""),
      alohomora_user_id: Joi.number(),
      brand_id: Joi.any(),
      brand_store_tags: Joi.array().items(Joi.string().allow("")),
      city: Joi.string().allow("").required(),
      code: Joi.string().allow(""),
      company_id: Joi.number().required(),
      contact_person: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      created_at: Joi.string().allow("").required(),
      fulfillment_channel: Joi.string().allow("").required(),
      is_active: Joi.boolean(),
      is_archived: Joi.boolean(),
      is_enabled_for_recon: Joi.boolean(),
      latitude: Joi.number().required(),
      location_type: Joi.string().allow("").required(),
      login_username: Joi.string().allow("").required(),
      longitude: Joi.number().required(),
      mall_area: Joi.string().allow("").allow(null),
      mall_name: Joi.string().allow("").allow(null),
      meta: OrderModel.StoreMeta().required(),
      name: Joi.string().allow("").required(),
      order_integration_id: Joi.string().allow(""),
      packaging_material_count: Joi.number(),
      parent_store_id: Joi.number(),
      phone: Joi.number().required(),
      pincode: Joi.string().allow("").required(),
      s_id: Joi.string().allow("").required(),
      state: Joi.string().allow("").required(),
      store_active_from: Joi.string().allow("").allow(null),
      store_address_json: OrderModel.StoreAddress(),
      store_email: Joi.string().allow("").required(),
      updated_at: Joi.string().allow("").allow(null),
      vat_no: Joi.string().allow("").allow(null),
    });
  }
  static StoreAddress() {
    return Joi.object({
      address1: Joi.string().allow("").required(),
      address2: Joi.string().allow(""),
      address_category: Joi.string().allow("").required(),
      address_type: Joi.string().allow("").required(),
      area: Joi.string().allow(""),
      city: Joi.string().allow("").required(),
      contact_person: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      country_code: Joi.string().allow("").required(),
      created_at: Joi.string().allow("").required(),
      email: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      phone: Joi.string().allow("").allow(null).required(),
      pincode: Joi.number().required(),
      state: Joi.string().allow("").required(),
      updated_at: Joi.string().allow("").required(),
      version: Joi.string().allow(""),
    });
  }
  static StoreDocuments() {
    return Joi.object({
      gst: OrderModel.Document(),
    });
  }
  static StoreEinvoice() {
    return Joi.object({
      enabled: Joi.boolean().required(),
      password: Joi.string().allow(""),
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
  static StoreMeta() {
    return Joi.object({
      additional_contact_details: Joi.any(),
      display_name: Joi.string().allow("").required(),
      documents: OrderModel.StoreDocuments(),
      einvoice_portal_details: OrderModel.EInvoicePortalDetails(),
      ewaybill_portal_details: Joi.any(),
      gst_credentials: OrderModel.StoreGstCredentials().required(),
      gst_number: Joi.string().allow(""),
      notification_emails: Joi.array().items(Joi.string().allow("")),
      product_return_config: Joi.any(),
      stage: Joi.string().allow("").required(),
      timing: Joi.array().items(Joi.any()),
    });
  }
  static StoreReassign() {
    return Joi.object({
      affiliate_bag_id: Joi.string().allow("").allow(null),
      affiliate_id: Joi.string().allow("").allow(null),
      affiliate_order_id: Joi.string().allow("").allow(null),
      bag_id: Joi.number().allow(null),
      fynd_order_id: Joi.string().allow("").allow(null),
      item_id: Joi.string().allow("").allow(null),
      mongo_article_id: Joi.string().allow("").allow(null),
      reason_ids: Joi.array().items(Joi.number()),
      set_id: Joi.string().allow("").allow(null),
      store_id: Joi.number().required(),
    });
  }
  static StoreReassignResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
  static SubLane() {
    return Joi.object({
      actions: Joi.array().items(Joi.any()),
      index: Joi.number(),
      text: Joi.string().allow(""),
      total_items: Joi.number(),
      value: Joi.string().allow(""),
    });
  }
  static Success() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
  static SuccessResponse() {
    return Joi.object({
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
  static SuperLane() {
    return Joi.object({
      options: Joi.array().items(OrderModel.SubLane()),
      text: Joi.string().allow("").required(),
      total_items: Joi.number(),
      value: Joi.string().allow("").required(),
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
  static TaxDetails() {
    return Joi.object({
      gstin: Joi.string().allow(""),
      pan_no: Joi.string().allow(""),
    });
  }
  static TaxInfo() {
    return Joi.object({
      b2b_gstin_number: Joi.string().allow(""),
      gstin: Joi.string().allow(""),
    });
  }
  static TrackingList() {
    return Joi.object({
      is_current: Joi.boolean(),
      is_passed: Joi.boolean(),
      status: Joi.string().allow("").required(),
      text: Joi.string().allow("").required(),
      time: Joi.string().allow(""),
    });
  }
  static TransactionData() {
    return Joi.object({
      amount_paid: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      entity: Joi.string().allow(""),
      payment_id: Joi.string().allow(""),
      status: Joi.string().allow(""),
      terminal_id: Joi.string().allow(""),
      transaction_id: Joi.string().allow(""),
      unique_reference_number: Joi.string().allow(""),
    });
  }
  static UpdateShipmentLockPayload() {
    return Joi.object({
      action: Joi.string().allow("").required(),
      action_type: Joi.string().allow("").required(),
      entities: Joi.array().items(OrderModel.Entities()).required(),
      entity_type: Joi.string().allow("").required(),
    });
  }
  static UpdateShipmentLockResponse() {
    return Joi.object({
      check_response: Joi.array().items(OrderModel.CheckResponse()),
      message: Joi.string().allow(""),
      success: Joi.boolean(),
    });
  }
  static UpdateShipmentStatusRequest() {
    return Joi.object({
      force_transition: Joi.boolean(),
      lock_after_transition: Joi.boolean(),
      statuses: Joi.array().items(OrderModel.StatuesRequest()),
      task: Joi.boolean(),
      unlock_before_transition: Joi.boolean(),
    });
  }
  static UpdateShipmentStatusResponseBody() {
    return Joi.object({
      statuses: Joi.array().items(OrderModel.StatuesResponse()),
    });
  }
  static UploadConsent() {
    return Joi.object({
      consent_url: Joi.string().allow("").required(),
      manifest_id: Joi.string().allow("").required(),
    });
  }
  static URL() {
    return Joi.object({
      url: Joi.string().allow(""),
    });
  }
  static UserData() {
    return Joi.object({
      billing_user: OrderModel.OrderUser(),
      shipping_user: OrderModel.OrderUser(),
    });
  }
  static UserDataInfo() {
    return Joi.object({
      avis_user_id: Joi.string().allow(""),
      email: Joi.string().allow(""),
      first_name: Joi.string().allow(""),
      gender: Joi.string().allow(""),
      is_anonymous_user: Joi.boolean(),
      last_name: Joi.string().allow(""),
      mobile: Joi.string().allow(""),
      name: Joi.string().allow(""),
      uid: Joi.number(),
    });
  }
  static UserDetailsData() {
    return Joi.object({
      address: Joi.string().allow("").required(),
      address1: Joi.string().allow(""),
      address_type: Joi.string().allow(""),
      area: Joi.string().allow(""),
      city: Joi.string().allow("").required(),
      country: Joi.string().allow("").required(),
      email: Joi.string().allow(""),
      landmark: Joi.string().allow(""),
      name: Joi.string().allow("").required(),
      phone: Joi.string().allow("").required(),
      pincode: Joi.string().allow("").required(),
      state: Joi.string().allow("").required(),
    });
  }
  static Weight() {
    return Joi.object({
      is_default: Joi.boolean(),
      shipping: Joi.number(),
      unit: Joi.string().allow(""),
    });
  }
}
module.exports = OrderModel;
