//callback is the way that js is used to achieve asynchronous
//You can image that callback fun is something you want to do, but you don't know when you can do
//In that way, you can pass this things to other function, and let other function to do that

function foo(callback) {
  setTimeout(function () {
    callback();
  }, 3000);
}

foo(function () {
  console.log('This is a callback function');
});
