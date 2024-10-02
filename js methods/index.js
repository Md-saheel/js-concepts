const items = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 5 },
  { name: 'Phone', price: 500 },
  { name: 'Computer', price: 1000 },
  { name: 'Keyboard', price: 25 },
];
//filter- just filters an array with a conditions.
const filteredItems = items.filter((item) => {
  return item.price <= 100;
});

//map - it converts an array into a new array which is slightly different.
const itemNames = items.map((item) => {
  return item.name;
});

//find - it just finds the particular element with a condition
const foundItem = items.find((item) => {
  return item.price === 100;
});

//forEach - it just like for loop
items.forEach((item) => {
  console.log(item.price);
});

//some - checks the condition for all the values in an array and returns true or false
const hasInexpensiveItem = items.some((item) => {
  return item.price <= 100;
});

//every - it's just similar to the some fn but it returns true if all the values satisfies the condition
const hasInexpensiveItems = items.every((item) => {
  return item.price <= 1000;
});

//reduce - it just functions like for loop which performs cummulative opertions
const totalPrice = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);

const num = [1, 2, 3, 4, 5];

//includes - it returns true if the value is present in an array
const includesNum = num.includes(5);

console.log(items);
console.log(filteredItems);
console.log(itemNames);
console.log(foundItem);
console.log(hasInexpensiveItem);
console.log(hasInexpensiveItems);
console.log(totalPrice);
console.log(includesNum);
