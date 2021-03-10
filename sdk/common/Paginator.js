class Paginator {
  isNext = true;
  nextId = undefined;
  pageNo = 1;
  #callback;

  setCallback(callback) {
    this.callback = callback;
  }

  hasNext() {
    return this.isNext;
  }

  setPaginator({ hasNext, nextId = undefined, pageNo = undefined }) {
    this.isNext = hasNext;
    this.nextId = nextId;
    this.pageNo = pageNo;
  }

  constructor(pageNo) {
    this.pageNo = pageNo;
  }

  next() {
    return this.callback();
  }
}

module.exports = Paginator;
