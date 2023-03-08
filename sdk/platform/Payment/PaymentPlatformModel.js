const Joi = require("joi");

class PaymentModel {
  static PaymentGatewayConfigResponse() {
    return Joi.object({
      aggregators: Joi.array().items(Joi.any()),

      excluded_fields: Joi.array().items(Joi.string().allow("")).required(),

      app_id: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      display_fields: Joi.array().items(Joi.string().allow("")).required(),

      created: Joi.boolean().required(),
    });
  }

  static ErrorCodeDescription() {
    return Joi.object({
      success: Joi.boolean().required(),

      code: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),
    });
  }

  static PaymentGatewayConfig() {
    return Joi.object({
      key: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      config_type: Joi.string().allow("").required(),

      merchant_salt: Joi.string().allow("").required(),

      is_active: Joi.boolean().allow(null),
    });
  }

  static PaymentGatewayConfigRequest() {
    return Joi.object({
      is_active: Joi.boolean().allow(null),

      app_id: Joi.string().allow("").required(),

      aggregator_name: PaymentModel.PaymentGatewayConfig(),
    });
  }

  static PaymentGatewayToBeReviewed() {
    return Joi.object({
      success: Joi.boolean().required(),

      aggregator: Joi.array().items(Joi.string().allow("")).required(),
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
      success: Joi.boolean().required(),

      error: PaymentModel.ErrorCodeAndDescription().required(),
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
      package_name: Joi.string().allow("").allow(null),

      logos: PaymentModel.PaymentModeLogo(),

      display_name: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),
    });
  }

  static IntentAppErrorList() {
    return Joi.object({
      package_name: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),
    });
  }

  static PaymentModeList() {
    return Joi.object({
      card_type: Joi.string().allow("").allow(null),

      card_issuer: Joi.string().allow("").allow(null),

      cod_limit_per_order: Joi.number().allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      card_isin: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow("").allow(null),

      exp_month: Joi.number().allow(null),

      card_id: Joi.string().allow("").allow(null),

      nickname: Joi.string().allow("").allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      display_name: Joi.string().allow("").allow(null),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      intent_app: Joi.array().items(PaymentModel.IntentApp()),

      cod_limit: Joi.number().allow(null),

      fynd_vpa: Joi.string().allow("").allow(null),

      exp_year: Joi.number().allow(null),

      code: Joi.string().allow("").allow(null),

      retry_count: Joi.number().allow(null),

      intent_app_error_dict_list: Joi.array().items(
        PaymentModel.IntentAppErrorList()
      ),

      card_token: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),

      card_brand: Joi.string().allow("").allow(null),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      intent_flow: Joi.boolean().allow(null),

      name: Joi.string().allow("").allow(null),

      expired: Joi.boolean().allow(null),

      display_priority: Joi.number().allow(null),

      card_number: Joi.string().allow("").allow(null),

      card_reference: Joi.string().allow("").allow(null),

      logo_url: PaymentModel.PaymentModeLogo(),

      card_name: Joi.string().allow("").allow(null),

      remaining_limit: Joi.number().allow(null),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      save_card: Joi.boolean().allow(null),

      display_name: Joi.string().allow("").required(),

      aggregator_name: Joi.string().allow("").allow(null),

      list: Joi.array().items(PaymentModel.PaymentModeList()),

      anonymous_enable: Joi.boolean().allow(null),

      add_card_enabled: Joi.boolean().allow(null),

      name: Joi.string().allow("").required(),

      is_pay_by_card_pl: Joi.boolean().allow(null),

      display_priority: Joi.number().required(),
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
      success: Joi.boolean().required(),

      payment_options: PaymentModel.PaymentOptions().required(),
    });
  }

  static Payout() {
    return Joi.object({
      transfer_type: Joi.string().allow("").required(),

      more_attributes: Joi.any().required(),

      is_active: Joi.boolean().required(),

      payouts_aggregators: Joi.array().items(Joi.any()).required(),

      is_default: Joi.boolean().required(),

      unique_transfer_no: Joi.any().required(),

      customers: Joi.any().required(),
    });
  }

  static PayoutsResponse() {
    return Joi.object({
      items: Joi.array().items(PaymentModel.Payout()).required(),

      success: Joi.boolean().required(),
    });
  }

  static PayoutBankDetails() {
    return Joi.object({
      ifsc_code: Joi.string().allow("").required(),

      account_holder: Joi.string().allow(""),

      state: Joi.string().allow(""),

      account_type: Joi.string().allow("").required(),

      branch_name: Joi.string().allow(""),

      bank_name: Joi.string().allow(""),

      country: Joi.string().allow(""),

      pincode: Joi.number(),

      account_no: Joi.string().allow(""),

      city: Joi.string().allow(""),
    });
  }

  static PayoutRequest() {
    return Joi.object({
      transfer_type: Joi.string().allow("").required(),

      bank_details: PaymentModel.PayoutBankDetails().required(),

      unique_external_id: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      users: Joi.any().required(),
    });
  }

  static PayoutResponse() {
    return Joi.object({
      payouts: Joi.any().required(),

      payment_status: Joi.string().allow("").required(),

      transfer_type: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      bank_details: Joi.any().required(),

      aggregator: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      unique_transfer_no: Joi.string().allow("").required(),

      users: Joi.any().required(),

      created: Joi.boolean().required(),
    });
  }

  static UpdatePayoutResponse() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      success: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
    });
  }

  static UpdatePayoutRequest() {
    return Joi.object({
      is_default: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      unique_external_id: Joi.string().allow("").required(),
    });
  }

  static DeletePayoutResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }

  static SubscriptionPaymentMethodResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: Joi.array().items(Joi.any()).required(),
    });
  }

  static DeleteSubscriptionPaymentMethodResponse() {
    return Joi.object({
      success: Joi.boolean().required(),
    });
  }

  static SubscriptionConfigResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      config: Joi.any().required(),

      aggregator: Joi.string().allow("").required(),
    });
  }

  static SaveSubscriptionSetupIntentRequest() {
    return Joi.object({
      unique_external_id: Joi.string().allow("").required(),
    });
  }

  static SaveSubscriptionSetupIntentResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: Joi.any().required(),
    });
  }

  static RefundAccountResponse() {
    return Joi.object({
      is_verified_flag: Joi.boolean(),

      success: Joi.boolean().required(),

      data: Joi.any(),

      message: Joi.string().allow("").required(),
    });
  }

  static NotFoundResourceError() {
    return Joi.object({
      success: Joi.boolean().required(),

      code: Joi.string().allow("").required(),

      description: Joi.string().allow("").required(),
    });
  }

  static BankDetailsForOTP() {
    return Joi.object({
      ifsc_code: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),
    });
  }

  static AddBeneficiaryDetailsOTPRequest() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),

      details: PaymentModel.BankDetailsForOTP().required(),
    });
  }

  static IfscCodeResponse() {
    return Joi.object({
      branch_name: Joi.string().allow("").required(),

      success: Joi.boolean(),

      bank_name: Joi.string().allow("").required(),
    });
  }

  static OrderBeneficiaryDetails() {
    return Joi.object({
      delights_user_name: Joi.string().allow("").allow(null),

      title: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      subtitle: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      beneficiary_id: Joi.string().allow("").required(),

      transfer_mode: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      ifsc_code: Joi.string().allow("").required(),

      mobile: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      id: Joi.number().required(),

      branch_name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      address: Joi.string().allow("").required(),
    });
  }

  static OrderBeneficiaryResponse() {
    return Joi.object({
      show_beneficiary_details: Joi.boolean(),

      beneficiaries: Joi.array().items(PaymentModel.OrderBeneficiaryDetails()),
    });
  }

  static MultiTenderPaymentMeta() {
    return Joi.object({
      order_id: Joi.string().allow(""),

      payment_id: Joi.string().allow(""),

      extra_meta: Joi.any().allow(null),

      payment_gateway: Joi.string().allow(""),

      current_status: Joi.string().allow(""),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      meta: PaymentModel.MultiTenderPaymentMeta(),

      mode: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      name: Joi.string().allow(""),
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
      order_id: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static PlatformPaymentOptions() {
    return Joi.object({
      methods: Joi.any().allow(null).required(),

      anonymous_cod: Joi.boolean(),

      cod_charges: Joi.number(),

      enabled: Joi.boolean().allow(null).required(),

      payment_selection_lock: Joi.any(),

      mode_of_payment: Joi.string().allow("").required(),

      callback_url: Joi.any(),

      cod_amount_limit: Joi.number(),

      source: Joi.string().allow("").allow(null).required(),
    });
  }

  static PlatfromPaymentConfig() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),

      data: PaymentModel.PlatformPaymentOptions().required(),
    });
  }

  static UpdatePlatformPaymentConfig() {
    return Joi.object({
      methods: Joi.any().allow(null).required(),

      anonymous_cod: Joi.boolean(),

      cod_charges: Joi.number(),

      cod_amount_limit: Joi.number(),

      payment_selection_lock: Joi.any(),
    });
  }

  static CODdata() {
    return Joi.object({
      usages: Joi.number().required(),

      is_active: Joi.boolean().required(),

      limit: Joi.number().required(),

      user_id: Joi.string().allow("").required(),

      remaining_limit: Joi.number().required(),
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

      merchant_user_id: Joi.string().allow("").required(),

      mobileno: Joi.string().allow("").required(),
    });
  }

  static SetCODOptionResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      message: Joi.string().allow("").required(),
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
      success: Joi.boolean().required(),

      data: Joi.array().items(PaymentModel.EdcModelData()).required(),
    });
  }

  static StatisticsData() {
    return Joi.object({
      inactive_device_count: Joi.number().required(),

      active_device_count: Joi.number().required(),
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
      terminal_serial_no: Joi.string().allow("").required(),

      device_tag: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      aggregator_id: Joi.number().required(),

      edc_model: Joi.string().allow("").required(),

      edc_device_serial_no: Joi.string().allow("").required(),
    });
  }

  static EdcDevice() {
    return Joi.object({
      terminal_serial_no: Joi.string().allow("").required(),

      aggregator_name: Joi.string().allow(""),

      application_id: Joi.string().allow("").required(),

      terminal_unique_identifier: Joi.string().allow("").required(),

      device_tag: Joi.string().allow("").required(),

      edc_model: Joi.string().allow(""),

      store_id: Joi.number().required(),

      is_active: Joi.boolean().required(),

      aggregator_id: Joi.number().required(),

      merchant_store_pos_code: Joi.string().allow("").allow(null),

      edc_device_serial_no: Joi.string().allow("").required(),
    });
  }

  static EdcDeviceAddResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: PaymentModel.EdcDevice().required(),
    });
  }

  static EdcDeviceDetailsResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: PaymentModel.EdcDevice().required(),
    });
  }

  static EdcUpdateRequest() {
    return Joi.object({
      device_tag: Joi.string().allow("").allow(null),

      edc_model: Joi.string().allow(""),

      store_id: Joi.number(),

      is_active: Joi.string().allow(""),

      aggregator_id: Joi.number(),

      merchant_store_pos_code: Joi.string().allow(""),

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
      order_id: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null).required(),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      customer_id: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      contact: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),
    });
  }

  static PaymentInitializationResponse() {
    return Joi.object({
      merchant_order_id: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      upi_poll_url: Joi.string().allow("").allow(null),

      virtual_id: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      bqr_image: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),

      customer_id: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),

      aggregator_order_id: Joi.string().allow(""),

      status: Joi.string().allow(""),

      polling_url: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      currency: Joi.string().allow("").allow(null),

      vpa: Joi.string().allow("").allow(null),
    });
  }

  static PaymentStatusUpdateRequest() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null).required(),

      customer_id: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      contact: Joi.string().allow("").required(),

      status: Joi.string().allow("").required(),

      method: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      vpa: Joi.string().allow(""),
    });
  }

  static PaymentStatusUpdateResponse() {
    return Joi.object({
      aggregator_name: Joi.string().allow("").required(),

      success: Joi.boolean().allow(null),

      retry: Joi.boolean().required(),

      status: Joi.string().allow("").required(),

      redirect_url: Joi.string().allow("").allow(null),
    });
  }

  static ResendOrCancelPaymentRequest() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      request_type: Joi.string().allow("").required(),
    });
  }

  static LinkStatus() {
    return Joi.object({
      status: Joi.boolean().required(),

      message: Joi.string().allow("").required(),
    });
  }

  static ResendOrCancelPaymentResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      data: PaymentModel.LinkStatus().required(),
    });
  }
}
module.exports = PaymentModel;
