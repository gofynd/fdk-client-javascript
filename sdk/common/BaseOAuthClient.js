const { Logger } = require("./Logger");

class BaseOAuthClient {
  constructor(config) {
    this.config = config;
    this.token = null;
    this.refreshToken = null;
    this.retryOAuthTokenTimer = null;
    this.raw_token = null;
    this.token_expires_in = null;
    this.token_expires_at = 0;
    this.useAutoRenewTimer =
      config.useAutoRenewTimer !== undefined ? config.useAutoRenewTimer : true;
  }

  async getAccessToken() {
    if (
      !this.useAutoRenewTimer &&
      this.refreshToken &&
      this.isTokenExpired(120)
    ) {
      // Check if token is about to expire in less than 2 mins.
      // Renew if to be expired and auto renew timer is not enabled.
      await this.renewAccessToken();
    }
    return this.token;
  }

  // default TTL checked 0 seconds
  isTokenExpired(ttl = 0) {
    const currentTimestamp = new Date().getTime();
    // Check if token is about to expire in less than 2 mins
    if ((this.token_expires_at - currentTimestamp) / 1000 < ttl) {
      return true;
    }
    return false;
  }

  setToken(token) {
    this.raw_token = token;
    this.token_expires_in = token.expires_in;
    this.token = token.access_token;
    this.refreshToken = token.refresh_token ? token.refresh_token : null;
    if (this.refreshToken && this.useAutoRenewTimer) {
      this.retryOAuthToken(token.expires_in);
    }
    Logger({ level: "INFO", message: "Partner token set." });
  }

  retryOAuthToken(expires_in) {
    Logger({ type: "INFO", message: "Retrying OAuth Token" });
    if (this.retryOAuthTokenTimer) {
      clearTimeout(this.retryOAuthTokenTimer);
    }
    if (expires_in > 60) {
      this.retryOAuthTokenTimer = setTimeout(() => {
        this.renewAccessToken();
      }, (expires_in - 60) * 1000);
    }
  }

  async renewAccessToken() {
    // Impementation to renew Access Token
  }
}

module.exports = BaseOAuthClient;
