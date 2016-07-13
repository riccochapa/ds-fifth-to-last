function Deque() {
  this.stac = [];
  this.popback = function popback() {
    return this.stac.pop();
  };
  this.pushback = function pushback(item) {
    this.stac.push(item);
  };
  this.popfront = function popfront() {
    return this.stac.shift();
  };
  this.pushfront = function pushfront(item) {
    this.stac.unshift(item);
  };
}

function test(one, two, three) {
  const checkThree = new Deque();
  const random = Math.floor(Math.random() * three * 13);
  for (let i = 0; i < random; i++) {
    checkThree.pushfront(Math.floor(Math.random() * two * random));
    checkThree.pushback(Math.floor(Math.random() * one * random));
  }
  console.log("Test zero array: " + checkThree.stac);
  checkThree.popback(),checkThree.popback(),checkThree.popback(),checkThree.popback(); console.log("Fifth from last: " + checkThree.popback());
}

test(33, 222, 69);
