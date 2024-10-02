const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('P1 Sucess'), 3000);
  // setTimeout(() => reject('P1 Fail'), 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('P2 Sucess'), 5000);
  // setTimeout(() => reject('P2 Fail'), 5000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('P3 Sucess'), 2000);
  // setTimeout(() => reject('P3 Fail'), 2000);
});
Promise.all([p1, p2, p3])
  .then((res) => {
    console.log('all');
    console.log(res);
  })
  .catch((err) => {
    console.log('all');
    console.error(err);
  });
// Promise.allSettled([p1, p2, p3])
//   .then((res) => {
//     console.log('allSettled');
//     console.log(res);
//   })
//   .catch((err) => {
//   console.log('allSettled');
//     console.error(err);
//
//   });

// Promise.race([p1, p2, p3])
//   .then((res) => {
//     console.log('race');
//     console.log(res);
//   })
//   .catch((err) => {
// console.log('race');
//     console.error(err);
//
//   });

// Promise.any([p1, p2, p3])
//   .then((res) => {
//     console.log('any');
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//     console.log('any');
//     console.log(err.errors);
//   });
