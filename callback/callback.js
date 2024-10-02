setTimeout(function () {
  console.log(1);
  third();
}, 2000);

function third() {
  console.log(2);
  console.log(3);
}
third();
