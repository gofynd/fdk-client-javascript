const { BAD_GATEWAY, SERVICE_UNAVAILABLE, TIMEOUT_STATUS } = require("./constants");
const logger = require('./logger');


/**
 * @typedef {Object} RetryInfo
 * @property {boolean} isRetryInProgress
 * @property {boolean} isRetry
 * @property {number} retryCount
 * @property {NodeJS.Timeout | null} retryTimer
 * @property {function} fn
 * @property {any[]} args
 */

/**
 * @typedef {Map<string, RetryInfo>} RetryInfoMap
 */

class RetryManger {

  constructor() {
    /**
     * @type {RetryInfoMap}
     */
    this.retryInfoMap = new Map();
  }

  static shouldRetryOnError(err) {
    const statusCode = (err.response && err.response.status) || err.code; 
    return [BAD_GATEWAY, SERVICE_UNAVAILABLE, TIMEOUT_STATUS].includes(statusCode)
  }


  async retry(uniqueKey, fn, ...args) {

    if (!this.retryInfoMap.has(uniqueKey)) {
      this.retryInfoMap.set(uniqueKey, {
        fn: fn,
        args: args,
        retryCount: 0,
        retryTimer: null,
        isRetryInProgress: false
      })
    }

    const retryInfo = this.retryInfoMap.get(uniqueKey);

    retryInfo.isRetryInProgress = true;
    retryInfo.retryCount++;

    await (new Promise((resolve, reject) => {
      retryInfo.retryTimer = setTimeout(resolve, this._getNextRetrySeconds(retryInfo.retryCount));
    }))

    return await this._makeRetry(uniqueKey);
  }


  _getNextRetrySeconds(retryCount) {
    let nextRetrySeconds = 30 * 1000; // 30 seconds

    if (retryCount > 3) {
      const MAX_MINUTES_TO_WAIT = 3;
      const MINUTES_TO_WAIT = Math.min((retryCount - 3), MAX_MINUTES_TO_WAIT);
      nextRetrySeconds = 1000 * 60 * MINUTES_TO_WAIT;
    }

    return nextRetrySeconds;
  }



  async _makeRetry(uniqueKey) {

    const retryInfo = this.retryInfoMap.get(uniqueKey);

    clearTimeout(retryInfo.retryTimer);

    try {
      logger.debug(`Retrying api call for ${uniqueKey}. count: ${retryInfo.retryCount}`);
      retryInfo.isRetry = true;
      const data = await retryInfo.fn(...retryInfo.args);
      logger.debug(`api call succeeded. stopping retry for ${uniqueKey}`);
      this.resetRetryState(uniqueKey);
      return data;

    } catch(error) {
      retryInfo.isRetry = false;
      logger.debug(`API call failed on retry ${retryInfo.retryCount}: ${error.message}`);
      return await this.retry(uniqueKey, retryInfo.fn, ...retryInfo.args);

    }
  }


  resetRetryState(uniqueKey) {

    const retryInfo = this.retryInfoMap.get(uniqueKey);

    if (retryInfo.retryTimer) {
      clearTimeout(retryInfo.retryTimer);
    }

    retryInfo.isRetry = false;
    retryInfo.isRetryInProgress = false;
    retryInfo.retryCount = 0;
  }

  isRetryInProgress(uniqueKey) {
    return this.retryInfoMap.get(uniqueKey)? this.retryInfoMap.get(uniqueKey).isRetryInProgress: false;
  }
}

module.exports = {
  RetryManger
}