const Joi = require("joi");

class DocumentEngineModel {
  static GenerateBulkInvoiceLabelShipment() {
    return Joi.object({
      store_id: Joi.number().required(),

      from_date: Joi.string().allow("").required(),

      to_date: Joi.string().allow("").required(),

      document_type: Joi.string().allow("").required(),

      shipment_ids: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GenerateBulkInvoiceOrLabelUrl() {
    return Joi.object({
      uid: Joi.string().allow("").required(),

      document_type: Joi.string().allow("").required(),

      batch_id: Joi.number().required(),
    });
  }

  static DocumentType() {
    return Joi.object({
      invoice: Joi.string().allow("").required(),

      label: Joi.string().allow("").required(),
    });
  }

  static BulkListBadRequestResponse() {
    return Joi.object({
      success: Joi.boolean(),

      error: Joi.string().allow(""),
    });
  }

  static BulkListFailedResponse() {
    return Joi.object({
      success: Joi.boolean(),

      error: Joi.string().allow(""),
    });
  }

  static SuccessResponseGenerateBulkShipment() {
    return Joi.object({
      success: Joi.boolean().required(),

      job_id: Joi.number().required(),

      trace_id: Joi.string().allow(""),
    });
  }

  static SuccessResponseBulkStatus() {
    return Joi.object({
      success: Joi.boolean().required(),

      status: Joi.string().allow("").required(),

      trace_id: Joi.string().allow(""),
    });
  }

  static GenerateBulkUrlSuccessResponse() {
    return Joi.object({
      url: Joi.string().allow("").required(),

      uid: Joi.string().allow("").required(),

      expires_in: Joi.number().required(),

      presigned_type: Joi.string().allow("").required(),
    });
  }

  static InternalErrorResponseGenerateBulkShipment() {
    return Joi.object({
      success: Joi.boolean().required(),

      error: Joi.string().allow("").required(),
    });
  }

  static BadRequestResponseGenerateBulkUrl() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),

      request_id: Joi.string().allow(""),

      exception: Joi.string().allow(""),

      stack_trace: Joi.string().allow(""),

      meta: Joi.any(),
    });
  }

  static InternalErrorResponseGenerateBulkUrl() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static GenerateBulkShipment() {
    return Joi.object({
      uid: Joi.string().allow("").required(),

      store_code: Joi.string().allow("").required(),

      batch_id: Joi.string().allow("").required(),

      document_type: Joi.string().allow("").required(),
    });
  }

  static GenerateBulkUrl() {
    return Joi.object({
      expires_in: Joi.number(),

      document_type: Joi.string().allow("").required(),

      batch_id: Joi.string().allow("").required(),
    });
  }

  static GetBulkStatusRequest() {
    return Joi.object({
      batch_id: Joi.string().allow("").required(),
    });
  }

  static BadRequestResponseGenerateBulkItemParameters() {
    return Joi.object({
      missing_property: Joi.string().allow(""),

      type: Joi.string().allow(""),
    });
  }

  static BadRequestResponseGenerateBulkItem() {
    return Joi.object({
      keyword: Joi.string().allow(""),

      data_path: Joi.string().allow(""),

      schema_path: Joi.string().allow(""),

      parameters: DocumentEngineModel.BadRequestResponseGenerateBulkItemParameters(),

      message: Joi.string().allow(""),
    });
  }

  static SuccessResponseGenerateBulk() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }

  static BadRequestResponseGenerateBulk() {
    return Joi.object({
      success: Joi.boolean().required(),

      error_message: Joi.array()
        .items(DocumentEngineModel.BadRequestResponseGenerateBulkItem())
        .required(),
    });
  }

  static InternalErrorResponseGenerateBulk() {
    return Joi.object({
      success: Joi.boolean().required(),

      error_message: Joi.string().allow(""),
    });
  }

  static ShippingToAddress() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),
    });
  }

  static SellerAddress() {
    return Joi.object({
      address: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),
    });
  }

  static BoxDetails() {
    return Joi.object({
      box_id: Joi.string().allow("").required(),

      total_quantity: Joi.string().allow("").required(),

      package_count: Joi.string().allow("").required(),

      dimension: Joi.string().allow("").required(),

      weight: Joi.string().allow("").required(),
    });
  }

  static ShipmentDetails() {
    return Joi.object({
      shipment_no: Joi.string().allow("").required(),

      appointment_no: Joi.string().allow("").required(),

      total_sku: Joi.string().allow("").required(),

      item_qty: Joi.string().allow("").required(),

      no_of_boxes: Joi.string().allow("").required(),

      shipping_to: Joi.string().allow("").required(),

      seller_name: Joi.string().allow("").required(),

      gstin_number: Joi.string().allow("").required(),

      shipping_address: DocumentEngineModel.ShippingToAddress().required(),

      seller_address: DocumentEngineModel.SellerAddress().required(),
    });
  }

  static GenerateBulkBoxLabel() {
    return Joi.object({
      stock_transfer_id: Joi.string().allow("").required(),

      label_type: Joi.string().allow("").required(),

      uid: Joi.string().allow("").required(),

      seller_name: Joi.string().allow("").required(),

      template_id: Joi.number().required(),

      box_details: Joi.array()
        .items(DocumentEngineModel.BoxDetails())
        .required(),
    });
  }

  static GenerateBulkShipmentLabel() {
    return Joi.object({
      label_type: Joi.string().allow("").required(),

      uid: Joi.string().allow("").required(),

      template_id: Joi.number().required(),

      shipments: Joi.array()
        .items(DocumentEngineModel.ShipmentDetails())
        .required(),
    });
  }

  static GenerateNoc() {
    return Joi.object({
      uid: Joi.string().allow("").required(),

      seller_name: Joi.string().allow("").required(),

      seller_gstin: Joi.string().allow("").required(),

      fc_gstin: Joi.string().allow("").required(),

      template_id: Joi.number().required(),

      fc_address: DocumentEngineModel.SellerAddress().required(),

      seller_address: DocumentEngineModel.SellerAddress().required(),
    });
  }

  static PackageDetails() {
    return Joi.object({
      package_id: Joi.string().allow("").required(),

      item_quantity: Joi.string().allow("").required(),

      package_type: Joi.string().allow("").required(),

      packaging_type: Joi.string().allow("").required(),

      dimension: Joi.string().allow("").required(),

      weight: Joi.string().allow("").required(),
    });
  }

  static PackageItemDetails() {
    return Joi.object({
      jio_code: Joi.string().allow("").required(),

      item_name: Joi.string().allow("").required(),

      mrp: Joi.string().allow("").required(),

      country_of_origin: Joi.string().allow("").required(),

      best_before_date: Joi.string().allow("").required(),

      ean: Joi.string().allow("").required(),

      package_details: Joi.array()
        .items(DocumentEngineModel.PackageDetails())
        .required(),
    });
  }

  static GenerateBulkPackageLabel() {
    return Joi.object({
      stock_transfer_id: Joi.string().allow("").required(),

      label_type: Joi.string().allow("").required(),

      uid: Joi.string().allow("").required(),

      seller_name: Joi.string().allow("").required(),

      template_id: Joi.number().required(),

      item_details: Joi.array()
        .items(DocumentEngineModel.PackageItemDetails())
        .required(),
    });
  }

  static SignedSuccessResponse() {
    return Joi.object({
      uid: Joi.string().allow(""),

      url: Joi.string().allow(""),

      expires_in: Joi.number(),
    });
  }

  static BulkPresignedSuccessResponse() {
    return Joi.object({
      success: Joi.string().allow("").required(),

      batch_id: Joi.string().allow(""),

      presigned_type: Joi.string().allow(""),

      presigned_url: Joi.string().allow("").required(),

      expires_in: Joi.number(),
    });
  }

  static SignedBadRequestResponse() {
    return Joi.object({
      success: Joi.boolean(),

      error_message: Joi.string().allow(""),
    });
  }

  static SignedFailedResponse() {
    return Joi.object({
      success: Joi.boolean(),

      error_message: Joi.string().allow(""),
    });
  }

  static StatusSuccessResponse() {
    return Joi.object({
      success: Joi.boolean(),

      status: Joi.string().allow(""),
    });
  }

  static StatusBadRequestResponse() {
    return Joi.object({
      success: Joi.boolean(),

      error_message: Joi.string().allow(""),
    });
  }

  static StatusFailedResponse() {
    return Joi.object({
      success: Joi.boolean(),

      error_message: Joi.string().allow(""),
    });
  }

  static GenerateManifest() {
    return Joi.object({
      store_id: Joi.number().required(),

      from_date: Joi.string().allow("").required(),

      to_date: Joi.string().allow("").required(),

      shipment_ids: Joi.array().items(Joi.string().allow("")),
    });
  }

  static GeneratePresignedManifestUrl() {
    return Joi.object({
      manifest_id: Joi.string().allow("").required(),

      uid: Joi.string().allow("").required(),
    });
  }

  static ManifestLink() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      manifest_id: Joi.string().allow("").required(),
    });
  }

  static GenerateManifestUrlSuccessResponse() {
    return Joi.object({
      url: Joi.string().allow("").required(),

      uid: Joi.string().allow("").required(),

      manifest_id: Joi.string().allow("").required(),

      expires_in: Joi.number().required(),

      presigned_type: Joi.string().allow("").required(),
    });
  }

  static ManifestListFailedResponse() {
    return Joi.object({
      success: Joi.boolean(),

      error: Joi.string().allow(""),
    });
  }

  static InvoiceLabelPresignedRequestBody() {
    return Joi.object({
      document_type: Joi.string().allow("").required(),

      entity_id: Joi.string().allow("").required(),

      expires_in: Joi.number(),
    });
  }

  static GeneratePOSReceipts() {
    return Joi.object({
      order: DocumentEngineModel.OrderDict().required(),

      shipments: Joi.array()
        .items(DocumentEngineModel.PlatformShipment())
        .required(),
    });
  }

  static SuccessResponseGeneratePOSReceipts() {
    return Joi.object({
      success: Joi.boolean().required(),

      order_id: Joi.string().allow("").required(),

      invoice_receipt: Joi.string().allow("").required(),

      payment_receipt: Joi.string().allow("").required(),
    });
  }

  static BadRequestResponseGeneratePOSReceipts() {
    return Joi.object({
      success: Joi.boolean().required(),

      error: Joi.array().items(Joi.any()).required(),
    });
  }

  static InternalErrorResponseGeneratePOSReceipts() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),

      error: Joi.string().allow("").required(),
    });
  }

  static UserDetailsData() {
    return Joi.object({
      city: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      email: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),
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

  static BuyerDetails() {
    return Joi.object({
      ajio_site_id: Joi.string().allow(""),

      name: Joi.string().allow("").required(),

      city: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      gstin: Joi.string().allow("").required(),

      address: Joi.string().allow("").allow(null).required(),

      pincode: Joi.number().required(),
    });
  }

  static EInvoice() {
    return Joi.object({
      signed_qr_code: Joi.string().allow(""),

      signed_invoice: Joi.string().allow(""),

      error_code: Joi.string().allow(""),

      acknowledge_no: Joi.number(),

      error_message: Joi.string().allow(""),

      irn: Joi.string().allow(""),

      acknowledge_date: Joi.string().allow(""),
    });
  }

  static EinvoiceInfo() {
    return Joi.object({
      credit_note: DocumentEngineModel.EInvoice(),

      invoice: DocumentEngineModel.EInvoice(),
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

  static ShipmentMeta() {
    return Joi.object({
      assign_dp_from_sb: Joi.boolean(),

      shipment_volumetric_weight: Joi.number(),

      lock_data: DocumentEngineModel.LockData(),

      shipment_weight: Joi.number(),

      auto_trigger_dp_assignment_acf: Joi.boolean().required(),

      dp_id: Joi.string().allow("").allow(null),

      timestamp: DocumentEngineModel.ShipmentTimeStamp(),

      return_affiliate_shipment_id: Joi.string().allow(""),

      store_invoice_updated_date: Joi.string().allow(""),

      bag_weight: Joi.any(),

      forward_affiliate_order_id: Joi.string().allow(""),

      b2b_buyer_details: DocumentEngineModel.BuyerDetails(),

      external: Joi.any(),

      dp_sort_key: Joi.string().allow(""),

      ewaybill_info: Joi.any().allow(null),

      dp_options: Joi.any(),

      return_awb_number: Joi.string().allow(""),

      dp_name: Joi.string().allow(""),

      po_number: Joi.string().allow(""),

      weight: Joi.number().required(),

      due_date: Joi.string().allow(""),

      same_store_available: Joi.boolean().required(),

      packaging_name: Joi.string().allow(""),

      fulfilment_priority_text: Joi.string().allow("").allow(null),

      einvoice_info: DocumentEngineModel.EinvoiceInfo(),

      forward_affiliate_shipment_id: Joi.string().allow(""),

      marketplace_store_id: Joi.string().allow(""),

      return_affiliate_order_id: Joi.string().allow(""),

      debug_info: DocumentEngineModel.DebugInfo(),

      awb_number: Joi.string().allow(""),

      b2c_buyer_details: Joi.any().allow(null),

      order_type: Joi.string().allow("").allow(null),

      formatted: DocumentEngineModel.Formatted(),

      return_details: Joi.any(),

      return_store_node: Joi.number(),

      box_type: Joi.string().allow("").allow(null),
    });
  }

  static PDFLinks() {
    return Joi.object({
      credit_note_url: Joi.string().allow(""),

      b2b: Joi.string().allow(""),

      invoice_a4: Joi.string().allow(""),

      invoice: Joi.string().allow(""),

      invoice_type: Joi.string().allow("").required(),

      label_type: Joi.string().allow("").required(),

      po_invoice: Joi.string().allow(""),

      label: Joi.string().allow(""),

      label_a6: Joi.string().allow(""),

      label_pos: Joi.string().allow(""),

      label_a4: Joi.string().allow(""),

      invoice_pos: Joi.string().allow(""),

      invoice_a6: Joi.string().allow(""),
    });
  }

  static AffiliateMeta() {
    return Joi.object({
      coupon_code: Joi.string().allow("").allow(null),

      loyalty_discount: Joi.number(),

      size_level_total_qty: Joi.number().allow(null),

      due_date: Joi.string().allow("").allow(null),

      employee_discount: Joi.number(),

      channel_shipment_id: Joi.string().allow("").allow(null),

      is_priority: Joi.boolean(),

      quantity: Joi.number(),

      box_type: Joi.string().allow("").allow(null),

      channel_order_id: Joi.string().allow("").allow(null),

      order_item_id: Joi.string().allow(""),
    });
  }

  static AffiliateDetails() {
    return Joi.object({
      ad_id: Joi.string().allow(""),

      affiliate_shipment_id: Joi.string().allow("").required(),

      shipment_meta: DocumentEngineModel.ShipmentMeta().required(),

      pdf_links: DocumentEngineModel.PDFLinks(),

      affiliate_order_id: Joi.string().allow("").required(),

      affiliate_id: Joi.string().allow(""),

      company_affiliate_tag: Joi.string().allow(""),

      affiliate_store_id: Joi.string().allow("").required(),

      affiliate_meta: DocumentEngineModel.AffiliateMeta().required(),

      affiliate_bag_id: Joi.string().allow("").required(),
    });
  }

  static PlatformItem() {
    return Joi.object({
      size: Joi.string().allow(""),

      color: Joi.string().allow("").allow(null),

      l1_category: Joi.array().items(Joi.string().allow("")),

      name: Joi.string().allow(""),

      l3_category_name: Joi.string().allow(""),

      image: Joi.array().items(Joi.string().allow("")),

      id: Joi.number(),

      l3_category: Joi.number(),

      department_id: Joi.number(),

      can_return: Joi.boolean(),

      images: Joi.array().items(Joi.string().allow("")),

      can_cancel: Joi.boolean(),

      code: Joi.string().allow(""),
    });
  }

  static GSTDetailsData() {
    return Joi.object({
      brand_calculated_amount: Joi.number().required(),

      value_of_good: Joi.number().required(),

      gstin_code: Joi.string().allow("").required(),

      tax_collected_at_source: Joi.number().required(),

      gst_fee: Joi.number().required(),
    });
  }

  static Prices() {
    return Joi.object({
      cod_charges: Joi.number(),

      fynd_credits: Joi.number(),

      refund_credit: Joi.number(),

      discount: Joi.number(),

      delivery_charge: Joi.number(),

      value_of_good: Joi.number(),

      amount_paid: Joi.number(),

      cashback_applied: Joi.number(),

      cashback: Joi.number(),

      amount_paid_roundoff: Joi.number(),

      promotion_effective_discount: Joi.number(),

      price_effective: Joi.number(),

      price_marked: Joi.number(),

      tax_collected_at_source: Joi.number(),

      refund_amount: Joi.number(),

      coupon_value: Joi.number(),
    });
  }

  static BagStateMapper() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      notify_customer: Joi.boolean(),

      state_type: Joi.string().allow("").required(),

      app_display_name: Joi.string().allow(""),

      journey_type: Joi.string().allow("").required(),

      app_state_name: Joi.string().allow(""),

      app_facing: Joi.boolean(),

      is_active: Joi.boolean(),

      bs_id: Joi.number().required(),
    });
  }

  static DPDetailsData() {
    return Joi.object({
      awb_no: Joi.string().allow(""),

      name: Joi.string().allow(""),

      country: Joi.string().allow(""),

      amount_handling_charges: Joi.number(),

      id: Joi.number(),

      dp_charges: Joi.number(),

      dp_return_charges: Joi.number(),

      gst_tag: Joi.string().allow(""),

      track_url: Joi.string().allow("").allow(null),

      eway_bill_number: Joi.number().allow(null),

      pincode: Joi.string().allow(""),

      eway_bill_id: Joi.string().allow("").allow(null),
    });
  }

  static Dimensions() {
    return Joi.object({
      is_default: Joi.boolean(),

      length: Joi.number(),

      unit: Joi.string().allow(""),

      height: Joi.number(),

      width: Joi.number(),
    });
  }

  static Meta() {
    return Joi.object({
      dimension: DocumentEngineModel.Dimensions(),
    });
  }

  static OrderingStore() {
    return Joi.object({
      meta: Joi.any().required(),

      city: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      id: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      pincode: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),
    });
  }

  static FulfillingStore() {
    return Joi.object({
      meta: Joi.any().required(),

      city: Joi.string().allow("").required(),

      country: Joi.string().allow("").required(),

      id: Joi.number().required(),

      fulfillment_channel: Joi.string().allow("").required(),

      state: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      contact_person: Joi.string().allow("").required(),

      fulfillment_type: Joi.string().allow(""),

      pincode: Joi.string().allow("").required(),

      store_name: Joi.string().allow("").required(),

      phone: Joi.string().allow("").required(),
    });
  }

  static OrderBagArticle() {
    return Joi.object({
      identifiers: Joi.any(),

      uid: Joi.string().allow(""),

      return_config: Joi.any(),
    });
  }

  static CurrentStatus() {
    return Joi.object({
      kafka_sync: Joi.boolean(),

      store_id: Joi.number(),

      state_id: Joi.number(),

      delivery_awb_number: Joi.string().allow(""),

      delivery_partner_id: Joi.number(),

      bag_state_mapper: DocumentEngineModel.BagStateMapper(),

      bag_id: Joi.number(),

      created_at: Joi.string().allow("").allow(null),

      status: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      current_status_id: Joi.number().required(),

      state_type: Joi.string().allow(""),

      shipment_id: Joi.string().allow(""),
    });
  }

  static BagGST() {
    return Joi.object({
      hsn_code: Joi.string().allow(""),

      gst_tax_percentage: Joi.number(),

      brand_calculated_amount: Joi.number(),

      value_of_good: Joi.number(),

      gst_tag: Joi.string().allow(""),

      gstin_code: Joi.string().allow(""),

      gst_fee: Joi.number(),

      is_default_hsn_code: Joi.boolean(),
    });
  }

  static PlatformDeliveryAddress() {
    return Joi.object({
      longitude: Joi.number(),

      address_category: Joi.string().allow(""),

      latitude: Joi.number(),

      city: Joi.string().allow(""),

      address_type: Joi.string().allow(""),

      country: Joi.string().allow(""),

      area: Joi.string().allow(""),

      address2: Joi.string().allow(""),

      landmark: Joi.string().allow(""),

      contact_person: Joi.string().allow(""),

      state: Joi.string().allow(""),

      created_at: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      version: Joi.string().allow(""),

      email: Joi.string().allow(""),

      pincode: Joi.string().allow(""),

      address1: Joi.string().allow(""),

      phone: Joi.string().allow(""),
    });
  }

  static Identifier() {
    return Joi.object({
      ean: Joi.string().allow(""),
    });
  }

  static FinancialBreakup() {
    return Joi.object({
      item_name: Joi.string().allow("").required(),

      added_to_fynd_cash: Joi.boolean().required(),

      coupon_effective_discount: Joi.number().required(),

      value_of_good: Joi.number().required(),

      promotion_effective_discount: Joi.number().required(),

      price_effective: Joi.number().required(),

      price_marked: Joi.number().required(),

      fynd_credits: Joi.number().required(),

      hsn_code: Joi.string().allow("").required(),

      refund_credit: Joi.number().required(),

      amount_paid: Joi.number().required(),

      cashback: Joi.number().required(),

      tax_collected_at_source: Joi.number(),

      cashback_applied: Joi.number().required(),

      discount: Joi.number().required(),

      gst_tag: Joi.string().allow("").required(),

      amount_paid_roundoff: Joi.number(),

      total_units: Joi.number().required(),

      coupon_value: Joi.number().required(),

      gst_fee: Joi.number().required(),

      cod_charges: Joi.number().required(),

      size: Joi.string().allow("").required(),

      identifiers: DocumentEngineModel.Identifier().required(),

      gst_tax_percentage: Joi.number().required(),

      brand_calculated_amount: Joi.number().required(),

      transfer_price: Joi.number().required(),

      delivery_charge: Joi.number().required(),
    });
  }

  static BagConfigs() {
    return Joi.object({
      enable_tracking: Joi.boolean().required(),

      can_be_cancelled: Joi.boolean().required(),

      allow_force_return: Joi.boolean().required(),

      is_returnable: Joi.boolean().required(),

      is_customer_return_allowed: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
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
      item_criteria: DocumentEngineModel.ItemCriterias(),

      cart_conditions: Joi.any(),
    });
  }

  static AppliedPromos() {
    return Joi.object({
      promotion_name: Joi.string().allow(""),

      promotion_type: Joi.string().allow(""),

      discount_rules: Joi.array().items(DocumentEngineModel.DiscountRules()),

      promo_id: Joi.string().allow(""),

      amount: Joi.number(),

      buy_rules: Joi.array().items(DocumentEngineModel.BuyRules()),

      mrp_promotion: Joi.boolean(),

      article_quantity: Joi.number(),
    });
  }

  static OrderBrandName() {
    return Joi.object({
      modified_on: Joi.string().allow(""),

      company: Joi.string().allow("").allow(null).required(),

      id: Joi.number().required(),

      logo: Joi.string().allow("").required(),

      brand_name: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),
    });
  }

  static OrderBags() {
    return Joi.object({
      bag_id: Joi.number().required(),

      article: DocumentEngineModel.OrderBagArticle(),

      current_status: DocumentEngineModel.CurrentStatus(),

      line_number: Joi.number(),

      gst_details: DocumentEngineModel.BagGST(),

      entity_type: Joi.string().allow(""),

      display_name: Joi.string().allow(""),

      prices: DocumentEngineModel.Prices(),

      quantity: Joi.number(),

      delivery_address: DocumentEngineModel.PlatformDeliveryAddress(),

      parent_promo_bags: Joi.any(),

      financial_breakup: DocumentEngineModel.FinancialBreakup(),

      seller_identifier: Joi.string().allow(""),

      item: DocumentEngineModel.PlatformItem(),

      bag_configs: DocumentEngineModel.BagConfigs(),

      identifier: Joi.string().allow(""),

      applied_promos: Joi.array().items(DocumentEngineModel.AppliedPromos()),

      can_return: Joi.boolean(),

      can_cancel: Joi.boolean(),

      brand: DocumentEngineModel.OrderBrandName(),
    });
  }

  static BagStatusHistory() {
    return Joi.object({
      kafka_sync: Joi.boolean(),

      store_id: Joi.number(),

      state_id: Joi.number(),

      delivery_awb_number: Joi.string().allow("").allow(null),

      delivery_partner_id: Joi.number().allow(null),

      bag_state_mapper: DocumentEngineModel.BagStateMapper(),

      bag_id: Joi.number(),

      display_name: Joi.string().allow(""),

      updated_at: Joi.string().allow(""),

      status: Joi.string().allow("").required(),

      created_at: Joi.string().allow(""),

      reasons: Joi.array().items(Joi.any()),

      app_display_name: Joi.string().allow(""),

      state_type: Joi.string().allow(""),

      bsh_id: Joi.number(),

      forward: Joi.boolean().allow(null),

      shipment_id: Joi.string().allow(""),
    });
  }

  static InvoiceInfo() {
    return Joi.object({
      store_invoice_id: Joi.string().allow(""),

      credit_note_id: Joi.string().allow(""),

      updated_date: Joi.string().allow(""),

      label_url: Joi.string().allow(""),

      invoice_url: Joi.string().allow(""),
    });
  }

  static TrackingList() {
    return Joi.object({
      time: Joi.string().allow(""),

      is_passed: Joi.boolean(),

      text: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      is_current: Joi.boolean(),
    });
  }

  static ShipmentPayments() {
    return Joi.object({
      source: Joi.string().allow(""),

      mode: Joi.string().allow(""),

      logo: Joi.string().allow(""),
    });
  }

  static OrderDetailsData() {
    return Joi.object({
      cod_charges: Joi.string().allow(""),

      order_value: Joi.string().allow(""),

      tax_details: Joi.any(),

      order_date: Joi.string().allow(""),

      source: Joi.string().allow(""),

      fynd_order_id: Joi.string().allow("").required(),

      affiliate_id: Joi.string().allow(""),

      ordering_channel_logo: Joi.any(),

      ordering_channel: Joi.string().allow(""),
    });
  }

  static ShipmentStatusData() {
    return Joi.object({
      id: Joi.number(),

      created_at: Joi.string().allow("").allow(null),

      status: Joi.string().allow(""),

      bag_list: Joi.array().items(Joi.string().allow("")),

      shipment_id: Joi.string().allow(""),
    });
  }

  static PlatformShipment() {
    return Joi.object({
      shipment_status: Joi.string().allow(""),

      platform_logo: Joi.string().allow(""),

      operational_status: Joi.string().allow(""),

      ordering_store: DocumentEngineModel.OrderingStore(),

      billing_details: DocumentEngineModel.UserDetailsData(),

      delivery_slot: Joi.any(),

      affiliate_details: DocumentEngineModel.AffiliateDetails(),

      invoice_id: Joi.string().allow(""),

      fulfilling_store: DocumentEngineModel.FulfillingStore(),

      delivery_details: DocumentEngineModel.UserDetailsData(),

      bags: Joi.array().items(DocumentEngineModel.OrderBags()),

      gst_details: DocumentEngineModel.GSTDetailsData(),

      bag_status_history: Joi.array().items(
        DocumentEngineModel.BagStatusHistory()
      ),

      packaging_type: Joi.string().allow(""),

      shipment_quantity: Joi.number(),

      invoice: DocumentEngineModel.InvoiceInfo(),

      dp_details: DocumentEngineModel.DPDetailsData(),

      lock_status: Joi.boolean(),

      enable_dp_tracking: Joi.boolean(),

      total_items: Joi.number(),

      prices: DocumentEngineModel.Prices(),

      custom_meta: Joi.array().items(Joi.any()),

      user_agent: Joi.string().allow(""),

      vertical: Joi.string().allow("").allow(null),

      journey_type: Joi.string().allow(""),

      priority_text: Joi.string().allow("").allow(null),

      shipment_images: Joi.array().items(Joi.string().allow("")),

      tracking_list: Joi.array().items(DocumentEngineModel.TrackingList()),

      payments: DocumentEngineModel.ShipmentPayments(),

      fulfilment_priority: Joi.number(),

      coupon: Joi.any(),

      meta: DocumentEngineModel.Meta(),

      picked_date: Joi.string().allow(""),

      total_bags: Joi.number(),

      order: DocumentEngineModel.OrderDetailsData(),

      status: DocumentEngineModel.ShipmentStatusData(),

      payment_mode: Joi.string().allow(""),

      shipment_id: Joi.string().allow("").required(),
    });
  }

  static OrderMeta() {
    return Joi.object({
      cart_id: Joi.number(),

      order_platform: Joi.string().allow(""),

      mongo_cart_id: Joi.number(),

      ordering_store: Joi.number(),

      payment_type: Joi.string().allow(""),

      order_child_entities: Joi.array().items(Joi.string().allow("")),

      order_tags: Joi.array().items(Joi.any()),

      files: Joi.array().items(Joi.any()),

      order_type: Joi.string().allow(""),

      employee_id: Joi.number(),

      currency_symbol: Joi.string().allow(""),

      extra_meta: Joi.any(),

      customer_note: Joi.string().allow(""),

      comment: Joi.string().allow(""),

      staff: Joi.any(),
    });
  }

  static OrderDict() {
    return Joi.object({
      meta: DocumentEngineModel.OrderMeta(),

      payment_methods: Joi.any(),

      tax_details: Joi.any(),

      order_date: Joi.string().allow("").required(),

      prices: DocumentEngineModel.Prices(),

      fynd_order_id: Joi.string().allow("").required(),
    });
  }
}
module.exports = DocumentEngineModel;
