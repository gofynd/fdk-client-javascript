const Joi = require("joi");

class PaymentModel {
  static PaymentGatewayConfigResponse() {
    return Joi.object({
      display_fields: Joi.array().items(Joi.string().allow("")).required(),

      created: Joi.boolean().required(),

      excluded_fields: Joi.array().items(Joi.string().allow("")).required(),

      success: Joi.boolean().required(),

      app_id: Joi.string().allow("").required(),

      aggregators: Joi.array().items(Joi.any()),
    });
  }

  static ErrorCodeDescription() {
    return Joi.object({
      description: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static PaymentGatewayConfig() {
    return Joi.object({
      config_type: Joi.string().allow("").required(),

      is_active: Joi.boolean().allow(null),

      secret: Joi.string().allow("").required(),

      key: Joi.string().allow("").required(),

      merchant_salt: Joi.string().allow("").required(),
    });
  }

  static PaymentGatewayConfigRequest() {
    return Joi.object({
      aggregator_name: PaymentModel.PaymentGatewayConfig(),

      app_id: Joi.string().allow("").required(),

      is_active: Joi.boolean().allow(null),
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
      description: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),
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

      display_name: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),

      package_name: Joi.string().allow("").allow(null),
    });
  }

  static PaymentModeList() {
    return Joi.object({
      card_brand: Joi.string().allow("").allow(null),

      intent_app_error_dict_list: Joi.array().items(
        PaymentModel.IntentAppErrorList()
      ),

      merchant_code: Joi.string().allow("").allow(null),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      card_issuer: Joi.string().allow("").allow(null),

      card_isin: Joi.string().allow("").allow(null),

      card_type: Joi.string().allow("").allow(null),

      display_priority: Joi.number().allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      fynd_vpa: Joi.string().allow("").allow(null),

      timeout: Joi.number().allow(null),

      cod_limit_per_order: Joi.number().allow(null),

      name: Joi.string().allow("").allow(null),

      exp_month: Joi.number().allow(null),

      cod_limit: Joi.number().allow(null),

      aggregator_name: Joi.string().allow("").required(),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      expired: Joi.boolean().allow(null),

      nickname: Joi.string().allow("").allow(null),

      intent_app: Joi.array().items(PaymentModel.IntentApp()),

      logo_url: PaymentModel.PaymentModeLogo(),

      code: Joi.string().allow("").allow(null),

      card_number: Joi.string().allow("").allow(null),

      retry_count: Joi.number().allow(null),

      card_reference: Joi.string().allow("").allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),

      card_id: Joi.string().allow("").allow(null),

      card_token: Joi.string().allow("").allow(null),

      intent_flow: Joi.boolean().allow(null),

      remaining_limit: Joi.number().allow(null),

      exp_year: Joi.number().allow(null),

      display_name: Joi.string().allow("").allow(null),

      card_name: Joi.string().allow("").allow(null),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      name: Joi.string().allow("").required(),

      is_pay_by_card_pl: Joi.boolean().allow(null),

      add_card_enabled: Joi.boolean().allow(null),

      aggregator_name: Joi.string().allow("").allow(null),

      anonymous_enable: Joi.boolean().allow(null),

      display_priority: Joi.number().required(),

      display_name: Joi.string().allow("").required(),

      list: Joi.array().items(PaymentModel.PaymentModeList()),

      save_card: Joi.boolean().allow(null),
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
      payouts_aggregators: Joi.array().items(Joi.any()).required(),

      is_active: Joi.boolean().required(),

      is_default: Joi.boolean().required(),

      unique_transfer_no: Joi.any().required(),

      more_attributes: Joi.any().required(),

      customers: Joi.any().required(),

      transfer_type: Joi.string().allow("").required(),
    });
  }

  static PayoutsResponse() {
    return Joi.object({
      success: Joi.boolean().required(),

      items: Joi.array().items(PaymentModel.Payout()).required(),
    });
  }

  static PayoutBankDetails() {
    return Joi.object({
      pincode: Joi.number(),

      branch_name: Joi.string().allow(""),

      account_no: Joi.string().allow(""),

      country: Joi.string().allow(""),

      ifsc_code: Joi.string().allow("").required(),

      account_holder: Joi.string().allow(""),

      bank_name: Joi.string().allow(""),

      account_type: Joi.string().allow("").required(),

      city: Joi.string().allow(""),

      state: Joi.string().allow(""),
    });
  }

  static PayoutRequest() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      unique_external_id: Joi.string().allow("").required(),

      bank_details: PaymentModel.PayoutBankDetails().required(),

      users: Joi.any().required(),

      transfer_type: Joi.string().allow("").required(),
    });
  }

  static PayoutResponse() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),

      payment_status: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      created: Joi.boolean().required(),

      bank_details: Joi.any().required(),

      success: Joi.boolean().required(),

      payouts: Joi.any().required(),

      unique_transfer_no: Joi.string().allow("").required(),

      users: Joi.any().required(),

      transfer_type: Joi.string().allow("").required(),
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
      unique_external_id: Joi.string().allow("").required(),

      is_default: Joi.boolean().required(),

      is_active: Joi.boolean().required(),
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
      config: Joi.any().required(),

      aggregator: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
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
      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      is_verified_flag: Joi.boolean(),

      data: Joi.any(),
    });
  }

  static NotFoundResourceError() {
    return Joi.object({
      description: Joi.string().allow("").required(),

      code: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static BankDetailsForOTP() {
    return Joi.object({
      account_no: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),
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
      branch_name: Joi.string().allow(""),

      is_active: Joi.boolean().required(),

      ifsc_code: Joi.string().allow("").required(),

      subtitle: Joi.string().allow("").required(),

      beneficiary_id: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      transfer_mode: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      id: Joi.number().required(),

      delights_user_name: Joi.string().allow("").allow(null),

      mobile: Joi.string().allow(""),

      bank_name: Joi.string().allow("").required(),

      created_on: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      address: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      display_name: Joi.string().allow("").required(),
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
      current_status: Joi.string().allow(""),

      order_id: Joi.string().allow(""),

      payment_id: Joi.string().allow(""),

      extra_meta: Joi.any().allow(null),

      payment_gateway: Joi.string().allow(""),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      mode: Joi.string().allow("").required(),

      amount: Joi.number().required(),

      meta: PaymentModel.MultiTenderPaymentMeta(),

      name: Joi.string().allow(""),
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
      order_id: Joi.string().allow("").required(),

      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static PlatformPaymentOptions() {
    return Joi.object({
      cod_amount_limit: Joi.number(),

      mode_of_payment: Joi.string().allow("").required(),

      payment_selection_lock: Joi.any(),

      anonymous_cod: Joi.boolean(),

      source: Joi.string().allow("").allow(null).required(),

      callback_url: Joi.any(),

      methods: Joi.any().allow(null).required(),

      enabled: Joi.boolean().allow(null).required(),

      cod_charges: Joi.number(),
    });
  }

  static PlatfromPaymentConfig() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      data: PaymentModel.PlatformPaymentOptions().required(),
    });
  }

  static UpdatePlatformPaymentConfig() {
    return Joi.object({
      cod_amount_limit: Joi.number(),

      payment_selection_lock: Joi.any(),

      anonymous_cod: Joi.boolean(),

      methods: Joi.any().allow(null).required(),

      cod_charges: Joi.number(),
    });
  }

  static CODdata() {
    return Joi.object({
      is_active: Joi.boolean().required(),

      remaining_limit: Joi.number().required(),

      usages: Joi.number().required(),

      user_id: Joi.string().allow("").required(),

      limit: Joi.number().required(),
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
      merchant_user_id: Joi.string().allow("").required(),

      mobileno: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),
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
      aggregator: Joi.string().allow("").required(),

      aggregator_id: Joi.number().required(),

      models: Joi.array().items(Joi.string().allow("")).required(),
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
      statistics: PaymentModel.StatisticsData().required(),

      success: Joi.boolean().required(),
    });
  }

  static EdcAddRequest() {
    return Joi.object({
      store_id: Joi.number().required(),

      edc_device_serial_no: Joi.string().allow("").required(),

      device_tag: Joi.string().allow("").allow(null),

      edc_model: Joi.string().allow("").required(),

      terminal_serial_no: Joi.string().allow("").required(),

      aggregator_id: Joi.number().required(),
    });
  }

  static EdcDevice() {
    return Joi.object({
      application_id: Joi.string().allow("").required(),

      merchant_store_pos_code: Joi.string().allow("").allow(null),

      is_active: Joi.boolean().required(),

      terminal_unique_identifier: Joi.string().allow("").required(),

      store_id: Joi.number().required(),

      edc_device_serial_no: Joi.string().allow("").required(),

      device_tag: Joi.string().allow("").required(),

      edc_model: Joi.string().allow(""),

      terminal_serial_no: Joi.string().allow("").required(),

      aggregator_name: Joi.string().allow(""),

      aggregator_id: Joi.number().required(),
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
      merchant_store_pos_code: Joi.string().allow(""),

      is_active: Joi.string().allow(""),

      store_id: Joi.number(),

      edc_device_serial_no: Joi.string().allow(""),

      device_tag: Joi.string().allow("").allow(null),

      edc_model: Joi.string().allow(""),

      aggregator_id: Joi.number(),
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
      page: PaymentModel.Page().required(),

      success: Joi.boolean().required(),

      items: Joi.array().items(PaymentModel.EdcDevice()).required(),
    });
  }

  static PaymentInitializationRequest() {
    return Joi.object({
      timeout: Joi.number().allow(null),

      aggregator: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      contact: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      vpa: Joi.string().allow("").allow(null),

      currency: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      method: Joi.string().allow("").required(),
    });
  }

  static PaymentInitializationResponse() {
    return Joi.object({
      timeout: Joi.number().allow(null),

      upi_poll_url: Joi.string().allow("").allow(null),

      aggregator: Joi.string().allow("").required(),

      aggregator_order_id: Joi.string().allow(""),

      customer_id: Joi.string().allow("").allow(null),

      device_id: Joi.string().allow("").allow(null),

      merchant_order_id: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      bqr_image: Joi.string().allow("").allow(null),

      success: Joi.boolean().required(),

      status: Joi.string().allow(""),

      currency: Joi.string().allow("").allow(null),

      polling_url: Joi.string().allow("").required(),

      virtual_id: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      method: Joi.string().allow("").required(),
    });
  }

  static PaymentStatusUpdateRequest() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      contact: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      vpa: Joi.string().allow(""),

      status: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      amount: Joi.number().allow(null).required(),

      method: Joi.string().allow("").required(),
    });
  }

  static PaymentStatusUpdateResponse() {
    return Joi.object({
      redirect_url: Joi.string().allow("").allow(null),

      retry: Joi.boolean().required(),

      aggregator_name: Joi.string().allow("").required(),

      success: Joi.boolean().allow(null),

      status: Joi.string().allow("").required(),
    });
  }

  static ResendOrCancelPaymentRequest() {
    return Joi.object({
      order_id: Joi.string().allow("").required(),

      request_type: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),
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
      success: Joi.boolean().required(),

      data: PaymentModel.LinkStatus().required(),
    });
  }
}
module.exports = PaymentModel;
