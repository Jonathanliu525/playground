//

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

const var2 = ajax('xxxxxxx').then(
  function (res) {
    console.log(res);
  },
  function (error) {
    console.log(error);
  },
);
console.log('🚀 ~ file: 5ChainPromise.js ~ line 27 ~ var2', var2);
//we can see that then will return a promise as well

//Promise对象的then方法 会返回一个全新的Promise对象
//后面的then方法就是在为上一个then返回的Promise注册回调
//前面的then方法中回调函数的返回值会作为后面then方法回调的参数
//如果回调中返回的是Promise,那后面then方法的回调会等待他的结束
