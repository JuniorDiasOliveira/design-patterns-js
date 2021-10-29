const items = [1, 2, 3, 4];

const Iterator = function (list) {
  this.items = list;
  this.nextItem = 0;

  if ((this.items && this.items.length <= 0) || !Array.isArray(this.items)) {
    throw new Error("What a hell are you passing to my iterator?");
  }
};

const Singleton = (function () {
  this.instance = null;
  return {
    getInstance: (list) => {
      if (!this.instance) {
        this.instance = new Iterator(list);
      }
      return this.instance;
    },
  };
})();

const test = Singleton.getInstance(items);
const test2 = Singleton.getInstance(items);

console.log(test === test2);
