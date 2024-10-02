const cart = ['shoes', 'pants', 'kurta'];
// const cart = [];
createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  }) // this catch only handles the error for above code not the next chains of errors #thisWillOnlyHandlesTHeErrorof createOrder()
  // .catch(function (err) {
  //   console.log(err.message);
  // })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
    return showOrderSummary(true);
  })
  .then(function (orderSummary) {
    console.log(orderSummary);
  })
  // this Catch handles all errors of above chains from a promise
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function () {
    console.log('I will Definitely Execute because there is no CATCH after me');
  });

/// Producer

function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    // createOrder
    // validateCart I
    // orderId
    if (!validateCart(cart)) {
      const err = new Error('Cart is not valid');
      reject(err);
    }

    const orderId = '2345';
    if (!orderId) {
      const err1 = new Error('orderID is not valid');
      reject(err1);
    }
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 3000);
    }
  });
}

function validateCart(cart) {
  return cart[0] !== undefined;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    const ispaymentReceived = true;
    if (!ispaymentReceived) {
      const err2 = new Error('Payment is unsuccessfull');
      reject(err2);
    }
    if (ispaymentReceived) {
      resolve('Payment Successfull');
    }
  });
}

function showOrderSummary(ispaymentReceived) {
  return new Promise(function (resolve, reject) {
    if (!ispaymentReceived) {
      const err2 = new Error('Payment is unsuccessfull');
      reject(err2);
    }
    if (ispaymentReceived) {
      resolve('show Order Summary');
    }
  });
}
