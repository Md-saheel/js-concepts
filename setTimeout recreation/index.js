let startDate = new Date().getTime();
let endDate = startDate;
// condition is true until 3 secs
while (endDate < startDate + 3000) {
  endDate = new Date().getTime();
}

console.log('after 10 secs');
//not recommended to use 'cause it blocks the main thread or call stack
