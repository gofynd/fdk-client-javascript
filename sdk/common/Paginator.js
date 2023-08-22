/** @template {Object} T */
class Paginator {
  /** @param {number} pageNo */
  constructor(pageNo) {
    this.pageNo = pageNo;
    this.callback = undefined;
  }

  /**
   * @param {() => Promise<T>} callback
   * @returns {void}
   */
  setCallback(callback) {
    this.callback = callback;
  }

  /** @returns {boolean} */
  hasNext() {
    return this.isNext;
  }

  /**
   * @param {Object} arg
   * @param {boolean} arg.hasNext
   * @param {string} arg.nextId
   * @param {number} arg.pageNo
   * @returns {void}
   */
  setPaginator({ hasNext, nextId = undefined, pageNo = 1 }) {
    this.isNext = hasNext;
    this.nextId = nextId;
    this.pageNo = pageNo;
  }

  /** @returns {Promise<T>} */
  next() {
    return this.callback();
  }
}

module.exports = Paginator;
