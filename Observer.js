function Observer() {
  this.notifiers = [];
}
Observer.prototype.subscribe = function (callback) {
  this.notifiers.push(callback);
};

Observer.prototype.remove = function (removeCallback) {
  this.notifiers = this.notifiers.filter((x) => x !== removeCallback);
};

Observer.prototype.notify = function () {
  this.notifiers.forEach((callback) => callback());
};

const func1 = () => console.log("func1 is being called!");
const func2 = () => console.log("func2 is being called!");

const subject = new Observer();
const subject2 = new Observer();

subject.subscribe(func1);
subject2.subscribe(func2);

subject.notify();
subject2.notify();
