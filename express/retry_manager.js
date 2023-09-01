class RetryManger {

  constructor(fn, ...args) {
    this.fn = fn;
    this.args = args;
    this.retryCount = 0;
    this.retryTimer = null;
    // this.lastRequestHash = null;
    this.nextRetrySeconds = 5000; // milliseconds
  }

  async retry() {
    this.retryCount++;

    if (this.retryCount > 6) {
      const MAX_MINUTES_TO_WAIT = 3;
      const MINUTES_TO_WAIT = Math.min((this.retryCount - 6), MAX_MINUTES_TO_WAIT);
      this.nextRetrySeconds = 1000 * 60 * MINUTES_TO_WAIT;
    }

    this.retryTimer = setTimeout(() => this.makeRetry(), this.nextRetrySeconds);
  }

  async makeRetry() {
    clearTimeout(this.retryTimer);

    // TODO: create request hash and compare to identify if request payload is changed or not

    try {
      await this.fn(...this.args);
      this.resetRetryState()
    } catch(error) {
      this.retry();
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