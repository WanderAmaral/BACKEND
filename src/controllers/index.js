const promisse = new Promise((resolve, reject) => {
  if (1 + 1 === 2) {
    resolve(1);
  } else {
    reject(2);
  }
});

promisse
  .then((value) => {
    return value;
  })
  .then((value2) => {
    console.log(value2 + 1); // output 2
  })
  .catch((value) => console.log(value));
