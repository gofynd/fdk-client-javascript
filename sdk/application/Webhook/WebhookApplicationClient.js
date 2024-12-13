const ApplicationAPIClient = require("../ApplicationAPIClient");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");

class Webhook {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      saveClickEvent:
        "/service/application/webhook/v1.0/click-analytics/events",
    };
    this._urls = Object.entries(this._relativeUrls).reduce(
      (urls, [method, relativeUrl]) => {
        urls[method] = `${_conf.domain}${relativeUrl}`;
        return urls;
      },
      {}
    );
  }

  updateUrls(urls) {
    this._urls = {
      ...this._urls,
      ...urls,
    };
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<ClickEventResponse>} - Success response
   * @name saveClickEvent
   * @summary: Endpoint to capture click events from sales channels and persist them in database.
   * @description: Send click events from sales channels. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/webhook/saveClickEvent/).
   */
  async saveClickEvent(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["saveClickEvent"],
        params: {},
      }),
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    return response;
  }
}

module.exports = Webhook;
