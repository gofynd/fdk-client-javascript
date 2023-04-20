const Joi = require("joi");

class PaymentModel {
  static PaymentGatewayConfigResponse() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),

      display_fields: Joi.array().items(Joi.string().allow("")).required(),

      created: Joi.boolean().required(),

      excluded_fields: Joi.array().items(Joi.string().allow("")).required(),

      success: Joi.boolean().required(),

      aggregators: Joi.array().items(Joi.any()),
    });
  }

  static ErrorCodeDescription() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      description: Joi.string().allow("").required(),
    });
  }

  static PaymentGatewayConfig() {
    return Joi.object({
      secret: Joi.string().allow("").required(),

      merchant_salt: Joi.string().allow("").required(),

      is_active: Joi.boolean().allow(null),

      key: Joi.string().allow("").required(),

      config_type: Joi.string().allow("").required(),
    });
  }

  static PaymentGatewayConfigRequest() {
    return Joi.object({
      app_id: Joi.string().allow("").required(),

      is_active: Joi.boolean().allow(null),

      aggregator_name: PaymentModel.PaymentGatewayConfig(),
    });
  }

  static PaymentGatewayToBeReviewed() {
    return Joi.object({
      aggregator: Joi.array().items(Joi.string().allow("")).required(),

      success: Joi.boolean().required(),
    });
  }

  static ErrorCodeAndDescription() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),
    });
  }

  static HttpErrorCodeAndResponse() {
    return Joi.object({
      error: PaymentModel.ErrorCodeAndDescription().required(),

      success: Joi.boolean().required(),
    });
  }

  static IntentAppErrorList() {
    return Joi.object({
      code: Joi.string().allow("").allow(null),

      package_name: Joi.string().allow("").allow(null),
    });
  }

  static PaymentModeLogo() {
    return Joi.object({
      large: Joi.string().allow("").required(),

      small: Joi.string().allow("").required(),
    });
  }

  static IntentApp() {
    return Joi.object({
      logos: PaymentModel.PaymentModeLogo(),

      code: Joi.string().allow("").allow(null),

      package_name: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").allow(null),
    });
  }

  static PaymentModeList() {
    return Joi.object({
      card_brand_image: Joi.string().allow("").allow(null),

      expired: Joi.boolean().allow(null),

      card_token: Joi.string().allow("").allow(null),

      card_brand: Joi.string().allow("").allow(null),

      card_type: Joi.string().allow("").allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      retry_count: Joi.number().allow(null),

      card_issuer: Joi.string().allow("").allow(null),

      display_priority: Joi.number().allow(null),

      card_reference: Joi.string().allow("").allow(null),

      card_id: Joi.string().allow("").allow(null),

      exp_year: Joi.number().allow(null),

      intent_app_error_dict_list: Joi.array().items(
        PaymentModel.IntentAppErrorList()
      ),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      cod_limit_per_order: Joi.number().allow(null),

      timeout: Joi.number().allow(null),

      card_number: Joi.string().allow("").allow(null),

      remaining_limit: Joi.number().allow(null),

      intent_flow: Joi.boolean().allow(null),

      code: Joi.string().allow("").allow(null),

      intent_app: Joi.array().items(PaymentModel.IntentApp()),

      name: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").allow(null),

      card_name: Joi.string().allow("").allow(null),

      exp_month: Joi.number().allow(null),

      cod_limit: Joi.number().allow(null),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      merchant_code: Joi.string().allow("").allow(null),

      card_isin: Joi.string().allow("").allow(null),

      fynd_vpa: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),

      nickname: Joi.string().allow("").allow(null),

      logo_url: PaymentModel.PaymentModeLogo(),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      anonymous_enable: Joi.boolean().allow(null),

      add_card_enabled: Joi.boolean().allow(null),

      save_card: Joi.boolean().allow(null),

      name: Joi.string().allow("").required(),

      aggregator_name: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").required(),

      list: Joi.array().items(PaymentModel.PaymentModeList()),

      display_priority: Joi.number().required(),

      is_pay_by_card_pl: Joi.boolean().allow(null),
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

  static PayoutsResponse() {
    return Joi.object({
      transfer_type: Joi.string().allow("").required(),

      customers: Joi.any().required(),

      is_active: Joi.boolean().required(),

      payouts_aggregators: Joi.array().items(Joi.any()).required(),

      unique_transfer_no: Joi.any().required(),

      more_attributes: Joi.any().required(),

      is_default: Joi.boolean().required(),
    });
  }

  static PayoutBankDetails() {
    return Joi.object({
      bank_name: Joi.string().allow(""),

      city: Joi.string().allow(""),

      account_type: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      country: Joi.string().allow(""),

      account_holder: Joi.string().allow(""),

      pincode: Joi.number(),

      branch_name: Joi.string().allow(""),

      account_no: Joi.string().allow(""),

      state: Joi.string().allow(""),
    });
  }

  static PayoutRequest() {
    return Joi.object({
      transfer_type: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      unique_external_id: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      bank_details: PaymentModel.PayoutBankDetails().required(),

      users: Joi.any().required(),
    });
  }

  static PayoutResponse() {
    return Joi.object({
      transfer_type: Joi.string().allow("").required(),

      payment_status: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      created: Joi.boolean().required(),

      aggregator: Joi.string().allow("").required(),

      payouts: Joi.any().required(),

      success: Joi.boolean().required(),

      bank_details: Joi.any().required(),

      unique_transfer_no: Joi.string().allow("").required(),

      users: Joi.any().required(),
    });
  }

  static UpdatePayoutResponse() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      success: Joi.boolean().required(),

      is_default: Joi.boolean().required(),
    });
  }

  static UpdatePayoutRequest() {
    return Joi.object({
      unique_external_id: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      is_default: Joi.boolean().required(),
    });
  }

  static DeletePayoutResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }

  static SubscriptionPaymentMethodResponse() {
    return Joi.object({
      data: Joi.array().items(Joi.any()).required(),

      success: Joi.boolean().required(),
    });
  }

  static DeleteSubscriptionPaymentMethodResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }

  static SubscriptionConfigResponse() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      config: Joi.any().required(),
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

  static RefundAccountResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      data: Joi.any(),

      success: Joi.boolean().required(),

      is_verified_flag: Joi.boolean(),
    });
  }

  static NotFoundResourceError() {
    return Joi.object({
      code: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      description: Joi.string().allow("").required(),
    });
  }

  static BankDetailsForOTP() {
    return Joi.object({
      bank_name: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),
    });
  }

  static AddBeneficiaryDetailsOTPRequest() {
    return Joi.object({
      details: PaymentModel.BankDetailsForOTP().required(),

      order_id: Joi.string().allow("").required(),
    });
  }

  static IfscCodeResponse() {
    return Joi.object({
      bank_name: Joi.string().allow("").required(),

      success: Joi.boolean(),

      branch_name: Joi.string().allow("").required(),
    });
  }

  static OrderBeneficiaryDetails() {
    return Joi.object({
      beneficiary_id: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      delights_user_name: Joi.string().allow("").allow(null),

      transfer_mode: Joi.string().allow("").required(),

      mobile: Joi.string().allow(""),

      email: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      created_on: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      branch_name: Joi.string().allow(""),

      address: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      modified_on: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      id: Joi.number().required(),

      subtitle: Joi.string().allow("").required(),
    });
  }

  static OrderBeneficiaryResponse() {
    return Joi.object({
      beneficiaries: Joi.array().items(PaymentModel.OrderBeneficiaryDetails()),

      show_beneficiary_details: Joi.boolean(),
    });
  }

  static MultiTenderPaymentMeta() {
    return Joi.object({
      payment_gateway: Joi.string().allow(""),

      payment_id: Joi.string().allow(""),

      current_status: Joi.string().allow(""),

      extra_meta: Joi.any().allow(null),

      order_id: Joi.string().allow(""),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      name: Joi.string().allow(""),

      meta: PaymentModel.MultiTenderPaymentMeta(),

      mode: Joi.string().allow("").required(),

      amount: Joi.number().required(),
    });
  }

  static PaymentConfirmationRequest() {
    return Joi.object({
      payment_methods: Joi.array()
        .items(PaymentModel.MultiTenderPaymentMethod())
        .required(),

      order_id: Joi.string().allow("").required(),
    });
  }

  static PaymentConfirmationResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      order_id: Joi.string().allow("").required(),
    });
  }

  static CODdata() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      usages: Joi.number().required(),

      limit: Joi.number().required(),

      remaining_limit: Joi.number().required(),

      user_id: Joi.string().allow("").required(),
    });
  }

  static GetUserCODLimitResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      user_cod_data: PaymentModel.CODdata().required(),
    });
  }

  static SetCODForUserRequest() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      mobileno: Joi.string().allow("").required(),

      merchant_user_id: Joi.string().allow("").required(),
    });
  }

  static SetCODOptionResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static EdcModelData() {
    return Joi.object({
      models: Joi.array().items(Joi.string().allow("")).required(),

      aggregator: Joi.string().allow("").required(),

      aggregator_id: Joi.number().required(),
    });
  }

  static EdcAggregatorAndModelListResponse() {
    return Joi.object({
      data: Joi.array().items(PaymentModel.EdcModelData()).required(),

      success: Joi.boolean().required(),
    });
  }

  static StatisticsData() {
    return Joi.object({
      active_device_count: Joi.number().required(),

      inactive_device_count: Joi.number().required(),
    });
  }

  static EdcDeviceStatsResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      statistics: PaymentModel.StatisticsData().required(),
    });
  }

  static EdcAddRequest() {
    return Joi.object({
      device_tag: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      edc_model: Joi.string().allow("").required(),

      aggregator_id: Joi.number().required(),

      edc_device_serial_no: Joi.string().allow("").required(),

      terminal_serial_no: Joi.string().allow("").required(),
    });
  }

  static EdcDevice() {
    return Joi.object({
      application_id: Joi.string().allow("").required(),

      device_tag: Joi.string().allow("").required(),

      terminal_unique_identifier: Joi.string().allow("").required(),

      store_id: Joi.number().required(),

      edc_model: Joi.string().allow(""),

      merchant_store_pos_code: Joi.string().allow("").allow(null),

      is_active: Joi.boolean().required(),

      aggregator_id: Joi.number().required(),

      edc_device_serial_no: Joi.string().allow("").required(),

      aggregator_name: Joi.string().allow(""),

      terminal_serial_no: Joi.string().allow("").required(),
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

  static EdcUpdateRequest() {
    return Joi.object({
      device_tag: Joi.string().allow("").allow(null),

      store_id: Joi.number(),

      edc_model: Joi.string().allow(""),

      merchant_store_pos_code: Joi.string().allow(""),

      is_active: Joi.boolean(),

      aggregator_id: Joi.number(),

      edc_device_serial_no: Joi.string().allow(""),
    });
  }

  static EdcDeviceUpdateResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
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

  static EdcDeviceListResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      items: Joi.array().items(PaymentModel.EdcDevice()).required(),

      page: PaymentModel.Page().required(),
    });
  }

  static PaymentInitializationRequest() {
    return Joi.object({
      method: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      customer_id: Joi.string().allow("").required(),

      timeout: Joi.number().allow(null),

      vpa: Joi.string().allow("").allow(null),

      contact: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      order_id: Joi.string().allow("").required(),
    });
  }

  static PaymentInitializationResponse() {
    return Joi.object({
      method: Joi.string().allow("").required(),

      bqr_image: Joi.string().allow("").allow(null),

      virtual_id: Joi.string().allow("").allow(null),

      device_id: Joi.string().allow("").allow(null),

      currency: Joi.string().allow("").allow(null),

      aggregator_order_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      aggregator: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      customer_id: Joi.string().allow("").allow(null),

      vpa: Joi.string().allow("").allow(null),

      polling_url: Joi.string().allow("").required(),

      upi_poll_url: Joi.string().allow("").allow(null),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      amount: Joi.number().allow(null),
    });
  }

  static PaymentStatusUpdateRequest() {
    return Joi.object({
      method: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      email: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").required(),

      vpa: Joi.string().allow(""),

      contact: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      order_id: Joi.string().allow("").required(),
    });
  }

  static PaymentStatusUpdateResponse() {
    return Joi.object({
      retry: Joi.boolean().required(),

      status: Joi.string().allow("").required(),

      redirect_url: Joi.string().allow("").allow(null),

      success: Joi.boolean().allow(null),

      aggregator_name: Joi.string().allow("").required(),
    });
  }

  static ResendOrCancelPaymentRequest() {
    return Joi.object({
      device_id: Joi.string().allow("").allow(null),

      request_type: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),
    });
  }

  static LinkStatus() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      status: Joi.boolean().required(),
    });
  }

  static ResendOrCancelPaymentResponse() {
    return Joi.object({
      data: PaymentModel.LinkStatus().required(),

      success: Joi.boolean().required(),
    });
  }

  static Code() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      merchant_code: Joi.string().allow("").required(),
    });
  }

  static PaymentCode() {
    return Joi.object({
      types: Joi.string().allow("").required(),

      codes: PaymentModel.Code().required(),

      networks: Joi.string().allow("").required(),

      name: Joi.string().allow("").required(),
    });
  }

  static GetPaymentCode() {
    return Joi.object({
      method_code: PaymentModel.PaymentCode().required(),
    });
  }

  static GetPaymentCodeResponse() {
    return Joi.object({
      data: PaymentModel.GetPaymentCode().required(),

      success: Joi.boolean().required(),
    });
  }
}
module.exports = PaymentModel;
