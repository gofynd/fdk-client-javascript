class Paginator {
  constructor(pageNo) {
    this.pageNo = pageNo;
    this.callback = undefined;
  }

  setCallback(callback) {
    this.callback = callback;
  }

  hasNext() {
    return this.isNext;
  }

  setPaginator({ hasNext, nextId = undefined, pageNo = 1 }) {
    this.isNext = hasNext;
    this.nextId = nextId;
    this.pageNo = pageNo;
  }

  next() {
    return this.callback();
  }
}

module.exports = Paginator;
