var n = 2;
let m = 3;
console.log(n);
console.log(m);

function Greeting() {
  console.log('Greetings');
}

var Greeting1 = () => {
  console.log('Greetings');
};
var Greeting2 = function () {
  console.log('Greetings');
};
Greeting();
Greeting1();
Greeting2();
