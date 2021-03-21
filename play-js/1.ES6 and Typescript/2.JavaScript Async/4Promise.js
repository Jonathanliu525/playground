//Promise is a better way to solve the asynchronous problem
//It is introduced in ES2015 to avoid callback hell
//Promise is like an object that used to show the result of an asynchronous task, whether it is successful or not

//          pending       ---------Fullfilled-------->onFullfilled
// Promise --------------/
//                        ---------Reacjected------->onRejected

//Usage

const promise = new Promise(function (resolve, reject) {
  resolve(100); //

  // reject(new Error('promise rehected'))
});

//after create, we can use then to use them

promise.then(
  function (value) {
    console.log('resolved', value);
  },
  function (error) {
    console.log('rejected', error);
  },
);

console.log('End');

//Promise example, a promise AJAX

function ajax(url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.onload = function () {
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    xhr.send();
  });
}

ajax('xxxxxxx').then(
  function (res) {
    console.log(res);
  },
  function (error) {
    console.log(error);
  },
);
