const Joi = require("joi");

class PaymentModel {
  static PaymentGatewayConfigResponse() {
    return Joi.object({
      display_fields: Joi.array().items(Joi.string().allow("")).required(),

      success: Joi.boolean().required(),

      created: Joi.boolean().required(),

      aggregators: Joi.array().items(Joi.any()),

      excluded_fields: Joi.array().items(Joi.string().allow("")).required(),

      app_id: Joi.string().allow("").required(),
    });
  }

  static ErrorCodeDescription() {
    return Joi.object({
      description: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      code: Joi.string().allow("").required(),
    });
  }

  static PaymentGatewayConfig() {
    return Joi.object({
      merchant_salt: Joi.string().allow("").required(),

      is_active: Joi.boolean().allow(null),

      key: Joi.string().allow("").required(),

      secret: Joi.string().allow("").required(),

      config_type: Joi.string().allow("").required(),
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
      success: Joi.boolean().required(),

      error: PaymentModel.ErrorCodeAndDescription().required(),
    });
  }

  static IntentAppErrorList() {
    return Joi.object({
      package_name: Joi.string().allow("").allow(null),

      code: Joi.string().allow("").allow(null),
    });
  }

  static PaymentModeLogo() {
    return Joi.object({
      small: Joi.string().allow("").required(),

      large: Joi.string().allow("").required(),
    });
  }

  static IntentApp() {
    return Joi.object({
      display_name: Joi.string().allow("").allow(null),

      package_name: Joi.string().allow("").allow(null),

      logos: PaymentModel.PaymentModeLogo(),

      code: Joi.string().allow("").allow(null),
    });
  }

  static PaymentModeList() {
    return Joi.object({
      display_priority: Joi.number().allow(null),

      code: Joi.string().allow("").allow(null),

      exp_month: Joi.number().allow(null),

      remaining_limit: Joi.number().allow(null),

      card_brand_image: Joi.string().allow("").allow(null),

      aggregator_name: Joi.string().allow("").required(),

      card_number: Joi.string().allow("").allow(null),

      intent_app_error_dict_list: Joi.array().items(
        PaymentModel.IntentAppErrorList()
      ),

      card_isin: Joi.string().allow("").allow(null),

      card_issuer: Joi.string().allow("").allow(null),

      display_name: Joi.string().allow("").allow(null),

      intent_app: Joi.array().items(PaymentModel.IntentApp()),

      intent_app_error_list: Joi.array().items(Joi.string().allow("")),

      card_reference: Joi.string().allow("").allow(null),

      merchant_code: Joi.string().allow("").allow(null),

      cod_limit: Joi.number().allow(null),

      logo_url: PaymentModel.PaymentModeLogo(),

      exp_year: Joi.number().allow(null),

      expired: Joi.boolean().allow(null),

      nickname: Joi.string().allow("").allow(null),

      card_id: Joi.string().allow("").allow(null),

      name: Joi.string().allow("").allow(null),

      cod_limit_per_order: Joi.number().allow(null),

      timeout: Joi.number().allow(null),

      intent_flow: Joi.boolean().allow(null),

      card_token: Joi.string().allow("").allow(null),

      card_name: Joi.string().allow("").allow(null),

      fynd_vpa: Joi.string().allow("").allow(null),

      compliant_with_tokenisation_guidelines: Joi.boolean().allow(null),

      card_type: Joi.string().allow("").allow(null),

      retry_count: Joi.number().allow(null),

      card_brand: Joi.string().allow("").allow(null),

      card_fingerprint: Joi.string().allow("").allow(null),
    });
  }

  static RootPaymentMode() {
    return Joi.object({
      aggregator_name: Joi.string().allow("").allow(null),

      display_priority: Joi.number().required(),

      display_name: Joi.string().allow("").required(),

      is_pay_by_card_pl: Joi.boolean().allow(null),

      save_card: Joi.boolean().allow(null),

      name: Joi.string().allow("").required(),

      list: Joi.array().items(PaymentModel.PaymentModeList()),

      add_card_enabled: Joi.boolean().allow(null),

      anonymous_enable: Joi.boolean().allow(null),
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

  static PayoutMoreAttributes() {
    return Joi.object({
      country: Joi.string().allow("").allow(null),

      bank_name: Joi.string().allow("").allow(null),

      ifsc_code: Joi.string().allow("").allow(null),

      account_no: Joi.string().allow("").allow(null),

      account_type: Joi.string().allow("").allow(null),

      state: Joi.string().allow("").allow(null),

      city: Joi.string().allow("").allow(null),

      account_holder: Joi.string().allow("").allow(null),

      branch_name: Joi.string().allow("").allow(null),
    });
  }

  static PayoutAggregator() {
    return Joi.object({
      aggregator_fund_id: Joi.number().allow(null),

      aggregator_id: Joi.number().allow(null),

      payout_details_id: Joi.number().allow(null),
    });
  }

  static PayoutCustomer() {
    return Joi.object({
      name: Joi.string().allow("").allow(null),

      mobile: Joi.string().allow("").allow(null),

      id: Joi.number().allow(null),

      unique_external_id: Joi.string().allow("").allow(null),
    });
  }

  static Payout() {
    return Joi.object({
      transfer_type: Joi.string().allow("").required(),

      unique_transfer_no: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      is_default: Joi.boolean().required(),

      more_attributes: PaymentModel.PayoutMoreAttributes().required(),

      payouts_aggregators: PaymentModel.PayoutAggregator().required(),

      customers: PaymentModel.PayoutCustomer().required(),
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
      bank_name: Joi.string().allow(""),

      ifsc_code: Joi.string().allow("").required(),

      account_no: Joi.string().allow(""),

      account_type: Joi.string().allow("").required(),

      state: Joi.string().allow(""),

      country: Joi.string().allow(""),

      city: Joi.string().allow(""),

      account_holder: Joi.string().allow(""),

      pincode: Joi.number(),

      branch_name: Joi.string().allow(""),
    });
  }

  static PayoutRequest() {
    return Joi.object({
      transfer_type: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      aggregator: Joi.string().allow("").required(),

      bank_details: PaymentModel.PayoutBankDetails().required(),

      unique_external_id: Joi.string().allow("").required(),

      users: Joi.any().required(),
    });
  }

  static PayoutResponse() {
    return Joi.object({
      transfer_type: Joi.string().allow("").required(),

      unique_transfer_no: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      created: Joi.boolean().required(),

      is_active: Joi.boolean().required(),

      aggregator: Joi.string().allow("").required(),

      payouts: Joi.any().required(),

      bank_details: Joi.any().required(),

      payment_status: Joi.string().allow("").required(),

      users: Joi.any().required(),
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

      unique_external_id: Joi.string().allow("").required(),

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
      description: Joi.string().allow("").required(),

      success: Joi.boolean().required(),

      code: Joi.string().allow("").required(),
    });
  }

  static BankDetailsForOTP() {
    return Joi.object({
      bank_name: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      account_no: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      branch_name: Joi.string().allow("").required(),
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
      branch_name: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      success: Joi.boolean(),
    });
  }

  static OrderBeneficiaryDetails() {
    return Joi.object({
      mobile: Joi.string().allow(""),

      created_on: Joi.string().allow("").required(),

      account_holder: Joi.string().allow("").required(),

      transfer_mode: Joi.string().allow("").required(),

      bank_name: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      display_name: Joi.string().allow("").required(),

      id: Joi.number().required(),

      address: Joi.string().allow("").required(),

      modified_on: Joi.string().allow("").required(),

      subtitle: Joi.string().allow("").required(),

      ifsc_code: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      comment: Joi.string().allow(""),

      beneficiary_id: Joi.string().allow("").required(),

      delights_user_name: Joi.string().allow("").allow(null),

      account_no: Joi.string().allow("").required(),

      title: Joi.string().allow("").required(),

      branch_name: Joi.string().allow(""),
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
      payment_gateway: Joi.string().allow(""),

      extra_meta: Joi.any().allow(null),

      current_status: Joi.string().allow(""),

      payment_id: Joi.string().allow(""),

      order_id: Joi.string().allow(""),
    });
  }

  static MultiTenderPaymentMethod() {
    return Joi.object({
      name: Joi.string().allow(""),

      amount: Joi.number().required(),

      mode: Joi.string().allow("").required(),

      meta: PaymentModel.MultiTenderPaymentMeta(),
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

      order_id: Joi.string().allow("").required(),

      success: Joi.boolean().required(),
    });
  }

  static PlatformPaymentOptions() {
    return Joi.object({
      mode_of_payment: Joi.string().allow("").required(),

      anonymous_cod: Joi.boolean(),

      enabled: Joi.boolean().allow(null).required(),

      source: Joi.string().allow("").allow(null).required(),

      cod_amount_limit: Joi.number(),

      payment_selection_lock: Joi.any(),

      methods: Joi.any().allow(null).required(),

      cod_charges: Joi.number(),

      callback_url: Joi.any(),
    });
  }

  static PlatfromPaymentConfig() {
    return Joi.object({
      message: Joi.string().allow("").required(),

      data: PaymentModel.PlatformPaymentOptions().required(),

      success: Joi.boolean().required(),
    });
  }

  static UpdatePlatformPaymentConfig() {
    return Joi.object({
      anonymous_cod: Joi.boolean(),

      cod_amount_limit: Joi.number(),

      payment_selection_lock: Joi.any(),

      methods: Joi.any().allow(null).required(),

      cod_charges: Joi.number(),
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
      user_cod_data: PaymentModel.CODdata().required(),

      success: Joi.boolean().required(),
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
      edc_model: Joi.string().allow("").required(),

      aggregator_id: Joi.number().required(),

      store_id: Joi.number().required(),

      edc_device_serial_no: Joi.string().allow("").required(),

      terminal_serial_no: Joi.string().allow("").required(),

      device_tag: Joi.string().allow("").allow(null),
    });
  }

  static EdcDevice() {
    return Joi.object({
      aggregator_name: Joi.string().allow(""),

      device_tag: Joi.string().allow("").required(),

      edc_model: Joi.string().allow(""),

      terminal_unique_identifier: Joi.string().allow("").required(),

      is_active: Joi.boolean().required(),

      merchant_store_pos_code: Joi.string().allow("").allow(null),

      store_id: Joi.number().required(),

      edc_device_serial_no: Joi.string().allow("").required(),

      application_id: Joi.string().allow("").required(),

      terminal_serial_no: Joi.string().allow("").required(),

      aggregator_id: Joi.number().required(),
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
      edc_model: Joi.string().allow(""),

      is_active: Joi.string().allow(""),

      merchant_store_pos_code: Joi.string().allow(""),

      aggregator_id: Joi.number(),

      store_id: Joi.number(),

      edc_device_serial_no: Joi.string().allow(""),

      device_tag: Joi.string().allow("").allow(null),
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
      items: Joi.array().items(PaymentModel.EdcDevice()).required(),

      page: PaymentModel.Page().required(),

      success: Joi.boolean().required(),
    });
  }

  static PaymentInitializationRequest() {
    return Joi.object({
      timeout: Joi.number().allow(null),

      aggregator: Joi.string().allow("").required(),

      contact: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      customer_id: Joi.string().allow("").required(),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null).required(),

      method: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      vpa: Joi.string().allow("").allow(null),
    });
  }

  static PaymentInitializationResponse() {
    return Joi.object({
      timeout: Joi.number().allow(null),

      success: Joi.boolean().required(),

      polling_url: Joi.string().allow("").required(),

      aggregator: Joi.string().allow("").required(),

      bqr_image: Joi.string().allow("").allow(null),

      currency: Joi.string().allow("").allow(null),

      upi_poll_url: Joi.string().allow("").allow(null),

      merchant_order_id: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      customer_id: Joi.string().allow("").allow(null),

      razorpay_payment_id: Joi.string().allow("").allow(null),

      aggregator_order_id: Joi.string().allow(""),

      method: Joi.string().allow("").required(),

      virtual_id: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null),

      vpa: Joi.string().allow("").allow(null),

      status: Joi.string().allow(""),
    });
  }

  static PaymentStatusUpdateRequest() {
    return Joi.object({
      aggregator: Joi.string().allow("").required(),

      contact: Joi.string().allow("").required(),

      email: Joi.string().allow("").required(),

      currency: Joi.string().allow("").required(),

      merchant_order_id: Joi.string().allow("").required(),

      customer_id: Joi.string().allow("").required(),

      device_id: Joi.string().allow("").allow(null),

      amount: Joi.number().allow(null).required(),

      method: Joi.string().allow("").required(),

      order_id: Joi.string().allow("").required(),

      vpa: Joi.string().allow(""),

      status: Joi.string().allow("").required(),
    });
  }

  static PaymentStatusUpdateResponse() {
    return Joi.object({
      aggregator_name: Joi.string().allow("").required(),

      success: Joi.boolean().allow(null),

      redirect_url: Joi.string().allow("").allow(null),

      retry: Joi.boolean().required(),

      status: Joi.string().allow("").required(),
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
}
module.exports = PaymentModel;
