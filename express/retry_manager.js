class RetryManger {

  constructor(fn, ...args) {
    this.fn = fn;
    this.args = args;
    this.retryCount = 0;
    this.retryTimer = null;
    this.isRetryInProgress = false;
    // this.lastRequestHash = null;
  }

  async retry() {
    this.retryCount++;

    let nextRetrySeconds = 5000; // 5 seconds

    if (this.retryCount > 6) {
      const MAX_MINUTES_TO_WAIT = 3;
      const MINUTES_TO_WAIT = Math.min((this.retryCount - 6), MAX_MINUTES_TO_WAIT);
      nextRetrySeconds = 1000 * 60 * MINUTES_TO_WAIT;
    }

    await (new Promise((resolve, reject) => {
      this.retryTimer = setTimeout(resolve, nextRetrySeconds);
    }))
    return await this.makeRetry();
  }

  async makeRetry() {
    clearTimeout(this.retryTimer);

    // TODO: create request hash and compare to identify if request payload is changed or not

    this.isRetryInProgress = true;

    try {
      const data = await this.fn(...this.args);
      this.resetRetryState()
      return data;

    } catch(error) {
      console.error(`API call failed on retry ${this.retryCount}: ${error.message}`)
      return await this.retry();

    } finally {

      this.isRetryInProgress = false;
    }
    
  }

  resetRetryState() {
    this.retryCount = 0;
    this.lastRequestHash = null;
  }
}

module.exports = {
  RetryManger
}