// ex-1
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise Resolved Value!!');
  }, 10000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise Resolved Value!!');
  }, 5000);
});

const API_URL = 'https://api.github.com/users/Md-saheel';
// always returns a promise
async function getData() {
  //ex-1
  console.log('Hello World!!');
  const val1 = await p1;
  console.log('Vanakkam JavaScript 1');
  console.log(val1);
  const val2 = await p2;
  console.log('Vanakkam JavaScript 2');
  console.log(val2);
  const val3 = await p2;
  console.log('Vanakkam JavaScript 3');
  console.log(val3);

  //method-1 to handle errors
  //   try {
  //     const myData = await fetch(API_URL);
  //     const jsonValue = await myData.json();
  //     console.log(jsonValue);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  const myData = await fetch(API_URL);
  const jsonValue = await myData.json();
  console.log(jsonValue);
}

//ex-2
// function getData() {
//   p.then((res) => console.log(res));
//   console.log('Vanakkam JavaScript');
// }

//method-2 to handle errors
getData().catch((err) => console.log(err));
