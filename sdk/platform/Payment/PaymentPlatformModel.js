const Joi = require("joi");

class PaymentModel {
  static AddBeneficiaryDetailsOTPRequest() {
    return Joi.object({
      details: PaymentModel.BankDetailsForOTP().required(),
      order_id: Joi.string().allow("").required(),
    });
  }
  static BankDetailsForOTP() {
    return Joi.object({
      account_holder: Joi.string().allow("").required(),
      account_no: Joi.string().allow("").required(),
      bank_name: Joi.string().allow("").required(),
      branch_name: Joi.string().allow("").required(),
      ifsc_code: Joi.string().allow("").required(),
    });
  }
  static CancelOrResendPaymentLinkRequest() {
    return Joi.object({
      payment_link_id: Joi.string().allow("").required(),
    });
  }
  static CancelPaymentLinkResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      status_code: Joi.number().required(),
      success: Joi.boolean().required(),
    });
  }
  static CODdata() {
    return Joi.object({
      is_active: Joi.boolean().required(),
      limit: Joi.number().required(),
      remaining_limit: Joi.number().required(),
      usages: Joi.number().required(),
      user_id: Joi.string().allow("").required(),
    });
  }
  static CreatePaymentLinkMeta() {
    return Joi.object({
      amount: Joi.string().allow("").required(),
      assign_card_id: Joi.string().allow("").allow(null),
      cart_id: Joi.string().allow("").required(),
      checkout_mode: Joi.string().allow("").required(),
      pincode: Joi.string().allow("").required(),
    });
  }
  static CreatePaymentLinkRequest() {
    return Joi.object({
      amount: Joi.number().required(),
      description: Joi.string().allow("").allow(null),
      email: Joi.string().allow("").required(),
      external_order_id: Joi.string().allow("").required(),
      meta: PaymentModel.CreatePaymentLinkMeta().required(),
      mobile_number: Joi.string().allow("").required(),
    });
  }
  static CreatePaymentLinkResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      payment_link_id: Joi.string().allow("").allow(null),
      payment_link_url: Joi.string().allow("").allow(null),
      polling_timeout: Joi.number().allow(null),
      status_code: Joi.number().required(),
      success: Joi.boolean().required(),
    });
  }
  static DeletePayoutResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }
  static DeleteSubscriptionPaymentMethodResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }
  static EdcAddRequest() {
    return Joi.object({
      aggregator_id: Joi.number().required(),
      device_tag: Joi.string().allow("").allow(null),
      edc_device_serial_no: Joi.string().allow("").required(),
      edc_model: Joi.string().allow("").required(),
      store_id: Joi.number().required(),
      terminal_serial_no: Joi.string().allow("").required(),
    });
  }
  static EdcAggregatorAndModelListResponse() {
    return Joi.object({
      data: Joi.array().items(PaymentModel.EdcModelData()).required(),
      success: Joi.boolean().required(),
    });
  }
  static EdcDevice() {
    return Joi.object({
      aggregator_id: Joi.number().required(),
      aggregator_name: Joi.string().allow(""),
      application_id: Joi.string().allow("").required(),
      device_tag: Joi.string().allow("").required(),
      edc_device_serial_no: Joi.string().allow("").required(),
      edc_model: Joi.string().allow(""),
      is_active: Joi.boolean().required(),
      merchant_store_pos_code: Joi.string().allow("").allow(null),
      store_id: Joi.number().required(),
      terminal_serial_no: Joi.string().allow("").required(),
      terminal_unique_identifier: Joi.string().allow("").required(),
    });
  }
  static EdcDeviceAddResponse() {
    return Joi.object({
      data: PaymentModel.EdcDevice().required(),
      success: Joi.boolean().required(),
    });
  }
  static EdcDeviceDetailsResponse() {
    return Joi.object({
      data: PaymentModel.EdcDevice().required(),
      success: Joi.boolean().required(),
    });
  }
  static EdcDeviceListResponse() {
    return Joi.object({
      items: Joi.array().items(PaymentModel.EdcDevice()).required(),
      page: PaymentModel.Page().required(),
      success: Joi.boolean().required(),
    });
  }
  static EdcDeviceStatsResponse() {
    return Joi.object({
      statistics: PaymentModel.StatisticsData().required(),
      success: Joi.boolean().required(),
    });
  }
  static EdcDeviceUpdateResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }
  static EdcModelData() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      aggregator_id: Joi.number().required(),
      models: Joi.array().items(Joi.string().allow("")).required(),
    });
  }
  static EdcUpdateRequest() {
    return Joi.object({
      aggregator_id: Joi.number(),
      device_tag: Joi.string().allow("").allow(null),
      edc_device_serial_no: Joi.string().allow(""),
      edc_model: Joi.string().allow(""),
      is_active: Joi.boolean(),
      merchant_store_pos_code: Joi.string().allow(""),
      store_id: Joi.number(),
    });
  }
  static ErrorCodeAndDescription() {
    return Joi.object({
      code: Joi.string().allow("").required(),
      description: Joi.string().allow("").required(),
    });
  }
  static ErrorCodeDescription() {
    return Joi.object({
      code: Joi.string().allow("").required(),
      description: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }
  static ErrorDescription() {
    return Joi.object({
      amount: Joi.number().allow(null),
      cancelled: Joi.boolean().allow(null),
      expired: Joi.boolean().allow(null),
      invalid_id: Joi.boolean().allow(null),
      merchant_name: Joi.string().allow("").allow(null),
      merchant_order_id: Joi.string().allow("").allow(null),
      msg: Joi.string().allow("").allow(null),
      payment_transaction_id: Joi.string().allow("").allow(null),
    });
  }
  static ErrorResponse() {
    return Joi.object({
      error: PaymentModel.ErrorDescription(),
      message: Joi.string().allow("").required(),
      status_code: Joi.number().required(),
      success: Joi.boolean().required(),
    });
  }
  static GetOauthUrlResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
      url: Joi.string().allow("").required(),
    });
  }
  static GetPaymentLinkResponse() {
    return Joi.object({
      amount: Joi.number().allow(null),
      external_order_id: Joi.string().allow("").allow(null),
      merchant_name: Joi.string().allow("").allow(null),
      message: Joi.string().allow("").required(),
      payment_link_current_status: Joi.string().allow("").allow(null),
      payment_link_url: Joi.string().allow("").allow(null),
      polling_timeout: Joi.number().allow(null),
      status_code: Joi.number().required(),
      success: Joi.boolean().required(),
    });
  }
  static GetUserCODLimitResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
      user_cod_data: PaymentModel.CODdata().required(),
    });
  }
  static HttpErrorCodeAndResponse() {
    return Joi.object({
      error: PaymentModel.ErrorCodeAndDescription().required(),
      success: Joi.boolean().required(),
    });
  }
  static IfscCodeResponse() {
    return Joi.object({
      bank_name: Joi.string().allow("").required(),
      branch_name: Joi.string().allow("").required(),
      success: Joi.boolean(),
    });
  }
  static IntentApp() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),
      display_name: Joi.string().allow("").allow(null),
      logos: PaymentModel.PaymentModeLogo(),
      package_name: Joi.string().allow("").allow(null),
    });
  }
  static IntentAppErrorList() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),
      package_name: Joi.string().allow("").allow(null),
    });
  }
  static LinkStatus() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      status: Joi.boolean().required(),
    });
  }
  static MultiTenderPaymentMeta() {
    return Joi.object({
      current_status: Joi.string().allow(""),
      extra_meta: Joi.any().allow(null),
      order_id: Joi.string().allow(""),
      payment_gateway: Joi.string().allow(""),
      payment_id: Joi.string().allow(""),
    });
  }
  static MultiTenderPaymentMethod() {
    return Joi.object({
      amount: Joi.number().required(),
      meta: PaymentModel.MultiTenderPaymentMeta(),
      mode: Joi.string().allow("").required(),
      name: Joi.string().allow(""),
    });
  }
  static NotFoundResourceError() {
    return Joi.object({
      code: Joi.string().allow("").required(),
      description: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }
  static OrderBeneficiaryDetails() {
    return Joi.object({
      account_holder: Joi.string().allow("").required(),
      account_no: Joi.string().allow("").required(),
      address: Joi.string().allow("").required(),
      bank_name: Joi.string().allow("").required(),
      beneficiary_id: Joi.string().allow("").required(),
      branch_name: Joi.string().allow(""),
      comment: Joi.string().allow(""),
      created_on: Joi.string().allow("").required(),
      delights_user_name: Joi.string().allow("").allow(null),
      display_name: Joi.string().allow("").required(),
      email: Joi.string().allow("").required(),
      id: Joi.number().required(),
      ifsc_code: Joi.string().allow("").required(),
      is_active: Joi.boolean().required(),
      mobile: Joi.string().allow(""),
      modified_on: Joi.string().allow("").required(),
      subtitle: Joi.string().allow("").required(),
      title: Joi.string().allow("").required(),
      transfer_mode: Joi.string().allow("").required(),
    });
  }
  static OrderBeneficiaryResponse() {
    return Joi.object({
      beneficiaries: Joi.array().items(PaymentModel.OrderBeneficiaryDetails()),
      show_beneficiary_details: Joi.boolean(),
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
  static PaymentConfirmationRequest() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),
      payment_methods: Joi.array()
        .items(PaymentModel.MultiTenderPaymentMethod())
        .required(),
    });
  }
  static PaymentConfirmationResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      order_id: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }
  static PaymentGatewayConfig() {
    return Joi.object({
      config_type: Joi.string().allow("").required(),
      is_active: Joi.boolean().allow(null),
      key: Joi.string().allow("").required(),
      merchant_salt: Joi.string().allow("").required(),
      secret: Joi.string().allow("").required(),
    });
  }
  static PaymentGatewayConfigRequest() {
    return Joi.object({
      aggregator_name: PaymentModel.PaymentGatewayConfig(),
      app_id: Joi.string().allow("").required(),
      is_active: Joi.boolean().allow(null),
    });
  }
  static PaymentGatewayConfigResponse() {
    return Joi.object({
      aggregators: Joi.array().items(Joi.any()),
      app_id: Joi.string().allow("").required(),
      created: Joi.boolean().required(),
      display_fields: Joi.array().items(Joi.string().allow("")).required(),
      excluded_fields: Joi.array().items(Joi.string().allow("")).required(),
      success: Joi.boolean().required(),
    });
  }
  static PaymentGatewayToBeReviewed() {
    return Joi.object({
      aggregator: Joi.array().items(Joi.string().allow("")).required(),
      success: Joi.boolean().required(),
    });
  }
  static PaymentInitializationRequest() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      amount: Joi.number().allow(null).required(),
      contact: Joi.string().allow("").required(),
      currency: Joi.string().allow("").required(),
      customer_id: Joi.string().allow("").required(),
      device_id: Joi.string().allow("").allow(null),
      email: Joi.string().allow("").required(),
      merchant_order_id: Joi.string().allow("").required(),
      method: Joi.string().allow("").required(),
      order_id: Joi.string().allow("").required(),
      razorpay_payment_id: Joi.string().allow("").allow(null),
      timeout: Joi.number().allow(null),
      vpa: Joi.string().allow("").allow(null),
    });
  }
  static PaymentInitializationResponse() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      aggregator_order_id: Joi.string().allow("").allow(null),
      amount: Joi.number().allow(null),
      bqr_image: Joi.string().allow("").allow(null),
      contact: Joi.string().allow(""),
      currency: Joi.string().allow("").allow(null),
      customer_id: Joi.string().allow("").allow(null),
      device_id: Joi.string().allow("").allow(null),
      email: Joi.string().allow(""),
      merchant_order_id: Joi.string().allow("").required(),
      method: Joi.string().allow("").required(),
      order_id: Joi.string().allow(""),
      payment_id: Joi.string().allow("").allow(null),
      polling_url: Joi.string().allow("").required(),
      razorpay_payment_id: Joi.string().allow("").allow(null),
      status: Joi.string().allow(""),
      success: Joi.boolean().required(),
      timeout: Joi.number().allow(null),
      upi_poll_url: Joi.string().allow("").allow(null),
      virtual_id: Joi.string().allow("").allow(null),
      vpa: Joi.string().allow("").allow(null),
    });
  }
  static PaymentModeList() {
    return Joi.object({
      aggregator_name: Joi.string().allow("").required(),
      card_brand: Joi.string().allow("").allow(null),
      card_brand_image: Joi.string().allow("").allow(null),
      card_fingerprint: Joi.string().allow("").allow(null),
      card_id: Joi.string().allow("").allow(null),
      card_isin: Joi.string().allow("").allow(null),
      card_issuer: Joi.string().allow("").allow(null),
      card_name: Joi.string().allow("").allow(null),
      card_number: Joi.string().allow("").allow(null),
      card_reference: Joi.string().allow("").allow(null),
      card_token: Joi.string().allow("").allow(null),
      card_type: Joi.string().allow("").allow(null),
      cod_limit: Joi.number().allow(null),
      cod_limit_per_order: Joi.number().allow(null),
      code: Joi.string().allow("").allow(null),
      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),
      display_name: Joi.string().allow("").allow(null),
      display_priority: Joi.number().allow(null),
      exp_month: Joi.number().allow(null),
      exp_year: Joi.number().allow(null),
      expired: Joi.boolean().allow(null),
      fynd_vpa: Joi.string().allow("").allow(null),
      intent_app: Joi.array().items(PaymentModel.IntentApp()),
      intent_app_error_dict_list: Joi.array().items(
        PaymentModel.IntentAppErrorList()
      ),
      intent_app_error_list: Joi.array().items(Joi.string().allow("")),
      intent_flow: Joi.boolean().allow(null),
      logo_url: PaymentModel.PaymentModeLogo(),
      merchant_code: Joi.string().allow("").allow(null),
      name: Joi.string().allow("").allow(null),
      nickname: Joi.string().allow("").allow(null),
      remaining_limit: Joi.number().allow(null),
      retry_count: Joi.number().allow(null),
      timeout: Joi.number().allow(null),
    });
  }
  static PaymentModeLogo() {
    return Joi.object({
      large: Joi.string().allow("").required(),
      small: Joi.string().allow("").required(),
    });
  }
  static PaymentObjectListSerializer() {
    return Joi.object({
      aggregator_payment_object: Joi.any().allow(null),
      all_status: Joi.array().items(Joi.string().allow("")).required(),
      amount_in_paisa: Joi.string().allow("").required(),
      application_id: Joi.string().allow("").required(),
      collected_by: Joi.string().allow("").required(),
      company_id: Joi.string().allow("").required(),
      created_on: Joi.string().allow("").required(),
      currency: Joi.string().allow("").required(),
      current_status: Joi.string().allow("").required(),
      id: Joi.string().allow("").required(),
      modified_on: Joi.string().allow("").required(),
      payment_gateway: Joi.string().allow("").required(),
      payment_id: Joi.string().allow("").allow(null),
      payment_mode: Joi.string().allow("").required(),
      payment_mode_identifier: Joi.string().allow("").required(),
      refund_object: Joi.any().allow(null),
      refunded_by: Joi.string().allow("").required(),
      user_object: Joi.any().required(),
    });
  }
  static PaymentOptions() {
    return Joi.object({
      payment_option: Joi.array()
        .items(PaymentModel.RootPaymentMode())
        .required(),
    });
  }
  static PaymentOptionsResponse() {
    return Joi.object({
      payment_options: PaymentModel.PaymentOptions().required(),
      success: Joi.boolean().required(),
    });
  }
  static PaymentStatusBulkHandlerRequest() {
    return Joi.object({
      merchant_order_id: Joi.array().items(Joi.string().allow("")).required(),
    });
  }
  static PaymentStatusBulkHandlerResponse() {
    return Joi.object({
      count: Joi.number(),
      data: Joi.array().items(PaymentModel.PaymentStatusObject()),
      error: Joi.string().allow(""),
      status: Joi.number().required(),
      success: Joi.string().allow("").required(),
    });
  }
  static PaymentStatusObject() {
    return Joi.object({
      merchant_order_id: Joi.string().allow("").required(),
      payment_object_list: Joi.array().items(
        PaymentModel.PaymentObjectListSerializer()
      ),
    });
  }
  static PaymentStatusUpdateRequest() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      amount: Joi.number().allow(null).required(),
      contact: Joi.string().allow(""),
      currency: Joi.string().allow(""),
      customer_id: Joi.string().allow("").required(),
      device_id: Joi.string().allow("").allow(null),
      email: Joi.string().allow(""),
      merchant_order_id: Joi.string().allow("").required(),
      merchant_transaction_id: Joi.string().allow("").required(),
      method: Joi.string().allow("").required(),
      order_id: Joi.string().allow(""),
      payment_id: Joi.string().allow("").allow(null),
      razorpay_payment_id: Joi.string().allow("").allow(null),
      status: Joi.string().allow("").required(),
      vpa: Joi.string().allow(""),
    });
  }
  static PaymentStatusUpdateResponse() {
    return Joi.object({
      aggregator_name: Joi.string().allow("").required(),
      redirect_url: Joi.string().allow("").allow(null),
      retry: Joi.boolean().required(),
      status: Joi.string().allow("").required(),
      success: Joi.boolean().allow(null),
    });
  }
  static Payout() {
    return Joi.object({
      customers: PaymentModel.PayoutCustomer().required(),
      is_active: Joi.boolean().required(),
      is_default: Joi.boolean().required(),
      more_attributes: PaymentModel.PayoutMoreAttributes().required(),
      payouts_aggregators: Joi.array().items(PaymentModel.PayoutAggregator()),
      transfer_type: Joi.string().allow("").required(),
      unique_transfer_no: Joi.string().allow("").required(),
    });
  }
  static PayoutAggregator() {
    return Joi.object({
      aggregator_fund_id: Joi.number().allow(null),
      aggregator_id: Joi.number().allow(null),
      payout_details_id: Joi.number().allow(null),
    });
  }
  static PayoutBankDetails() {
    return Joi.object({
      account_holder: Joi.string().allow(""),
      account_no: Joi.string().allow(""),
      account_type: Joi.string().allow("").required(),
      bank_name: Joi.string().allow(""),
      branch_name: Joi.string().allow(""),
      city: Joi.string().allow(""),
      country: Joi.string().allow(""),
      ifsc_code: Joi.string().allow("").required(),
      pincode: Joi.number(),
      state: Joi.string().allow(""),
    });
  }
  static PayoutCustomer() {
    return Joi.object({
      id: Joi.number().allow(null),
      mobile: Joi.string().allow("").allow(null),
      name: Joi.string().allow("").allow(null),
      unique_external_id: Joi.string().allow("").allow(null),
    });
  }
  static PayoutMoreAttributes() {
    return Joi.object({
      account_holder: Joi.string().allow("").allow(null),
      account_no: Joi.string().allow("").allow(null),
      account_type: Joi.string().allow("").allow(null),
      bank_name: Joi.string().allow("").allow(null),
      branch_name: Joi.string().allow("").allow(null),
      city: Joi.string().allow("").allow(null),
      country: Joi.string().allow("").allow(null),
      ifsc_code: Joi.string().allow("").allow(null),
      state: Joi.string().allow("").allow(null),
    });
  }
  static PayoutRequest() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      bank_details: PaymentModel.PayoutBankDetails().required(),
      is_active: Joi.boolean().required(),
      transfer_type: Joi.string().allow("").required(),
      unique_external_id: Joi.string().allow("").required(),
      users: Joi.any().required(),
    });
  }
  static PayoutResponse() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      bank_details: Joi.any().required(),
      created: Joi.boolean().required(),
      is_active: Joi.boolean().required(),
      payment_status: Joi.string().allow("").required(),
      payouts: Joi.any().required(),
      success: Joi.boolean().required(),
      transfer_type: Joi.string().allow("").required(),
      unique_transfer_no: Joi.string().allow("").required(),
      users: Joi.any().required(),
    });
  }
  static PayoutsResponse() {
    return Joi.object({
      items: Joi.array().items(PaymentModel.Payout()).required(),
      success: Joi.boolean().required(),
    });
  }
  static PlatformPaymentOptions() {
    return Joi.object({
      anonymous_cod: Joi.boolean(),
      callback_url: Joi.any(),
      cod_amount_limit: Joi.number(),
      cod_charges: Joi.number(),
      enabled: Joi.boolean().allow(null).required(),
      methods: Joi.any().allow(null).required(),
      mode_of_payment: Joi.string().allow("").required(),
      payment_selection_lock: Joi.any(),
      source: Joi.string().allow("").allow(null).required(),
    });
  }
  static PlatfromPaymentConfig() {
    return Joi.object({
      data: PaymentModel.PlatformPaymentOptions().required(),
      message: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }
  static PollingPaymentLinkResponse() {
    return Joi.object({
      aggregator_name: Joi.string().allow("").allow(null),
      amount: Joi.number().allow(null),
      http_status: Joi.number().allow(null),
      message: Joi.string().allow("").allow(null),
      order_id: Joi.string().allow("").allow(null),
      payment_link_id: Joi.string().allow("").allow(null),
      redirect_url: Joi.string().allow("").allow(null),
      status: Joi.string().allow("").allow(null),
      status_code: Joi.number().allow(null),
      success: Joi.boolean().allow(null),
    });
  }
  static RefundAccountResponse() {
    return Joi.object({
      data: Joi.any(),
      is_verified_flag: Joi.boolean(),
      message: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }
  static ResendOrCancelPaymentRequest() {
    return Joi.object({
      device_id: Joi.string().allow("").allow(null),
      order_id: Joi.string().allow("").required(),
      request_type: Joi.string().allow("").required(),
    });
  }
  static ResendOrCancelPaymentResponse() {
    return Joi.object({
      data: PaymentModel.LinkStatus().required(),
      success: Joi.boolean().required(),
    });
  }
  static ResendPaymentLinkResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      polling_timeout: Joi.number().allow(null),
      status_code: Joi.number().required(),
      success: Joi.boolean().required(),
    });
  }
  static RevokeOAuthToken() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }
  static RootPaymentMode() {
    return Joi.object({
      add_card_enabled: Joi.boolean().allow(null),
      aggregator_name: Joi.string().allow("").allow(null),
      anonymous_enable: Joi.boolean().allow(null),
      display_name: Joi.string().allow("").required(),
      display_priority: Joi.number().required(),
      is_pay_by_card_pl: Joi.boolean().allow(null),
      list: Joi.array().items(PaymentModel.PaymentModeList()),
      name: Joi.string().allow("").required(),
      save_card: Joi.boolean().allow(null),
    });
  }
  static SaveSubscriptionSetupIntentRequest() {
    return Joi.object({
      unique_external_id: Joi.string().allow("").required(),
    });
  }
  static SaveSubscriptionSetupIntentResponse() {
    return Joi.object({
      data: Joi.any().required(),
      success: Joi.boolean().required(),
    });
  }
  static SetCODForUserRequest() {
    return Joi.object({
      is_active: Joi.boolean().required(),
      merchant_user_id: Joi.string().allow("").required(),
      mobileno: Joi.string().allow("").required(),
    });
  }
  static SetCODOptionResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }
  static StatisticsData() {
    return Joi.object({
      active_device_count: Joi.number().required(),
      inactive_device_count: Joi.number().required(),
    });
  }
  static SubscriptionConfigResponse() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      config: Joi.any().required(),
      success: Joi.boolean().required(),
    });
  }
  static SubscriptionPaymentMethodResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()).required(),
      success: Joi.boolean().required(),
    });
  }
  static UpdatePayoutRequest() {
    return Joi.object({
      is_active: Joi.boolean().required(),
      is_default: Joi.boolean().required(),
      unique_external_id: Joi.string().allow("").required(),
    });
  }
  static UpdatePayoutResponse() {
    return Joi.object({
      is_active: Joi.boolean().required(),
      is_default: Joi.boolean().required(),
      success: Joi.boolean().required(),
    });
  }
  static UpdatePlatformPaymentConfig() {
    return Joi.object({
      anonymous_cod: Joi.boolean(),
      cod_amount_limit: Joi.number(),
      cod_charges: Joi.number(),
      methods: Joi.any().allow(null).required(),
      payment_selection_lock: Joi.any(),
    });
  }
  static ValidateCustomerRequest() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),
      billing_address: Joi.any(),
      delivery_address: Joi.any(),
      merchant_params: Joi.any(),
      order_items: Joi.array().items(Joi.any()),
      payload: Joi.string().allow("").allow(null),
      phone_number: Joi.string().allow("").required(),
      transaction_amount_in_paise: Joi.number().required(),
    });
  }
  static ValidateCustomerResponse() {
    return Joi.object({
      data: Joi.any().allow(null),
      error: Joi.any().allow(null),
      message: Joi.string().allow("").required(),
      success: Joi.boolean().required(),
    });
  }
}
module.exports = PaymentModel;
