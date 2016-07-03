function Deque(){
 this.stac = [];
 this.popback = function(){
  return this.stac.pop();
 }
 this.pushback = function(item){
  this.stac.push(item);
 }
 this.popfront = function(){
  return this.stac.shift();
 }
 this.pushfront = function(item){
  this.stac.unshift(item);
 }
};

function test(one, two, three) {
  var checkThree = new Deque();
  var random = Math.floor(Math.random() * three * 13);
  for(var i = 0; i < random; i++){
    checkThree.pushfront(Math.floor(Math.random() * two * random));
    checkThree.pushback(Math.floor(Math.random() * one * random));
  }
  console.log("Test Array: " + checkThree.stac);
  checkThree.popback(),checkThree.popback(),checkThree.popback(),checkThree.popback(); console.log("Fifth from last: " + checkThree.popback());
}

test(33, 222, 69); //You can enter any number but larger numbers will take time to process.
