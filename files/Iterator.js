const items = [1, 2, 3, 4];

const Iterator = function (list) {
  this.items = list;
  this.nextItem = 0;

  if ((this.items && this.items.length <= 0) || !Array.isArray(this.items)) {
    throw new Error("What a hell are you passing to my iterator?");
  }
};

Iterator.prototype.next = function () {
  return this.items[this.nextItem++];
};
Iterator.prototype.hasNext = function () {
  return this.nextItem < this.items.length;
};

const myIterator = new Iterator(items);

while (myIterator.hasNext()) {
  console.log(`next ${myIterator.next()}`);
}