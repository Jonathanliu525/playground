//开启耗时任务后,直接执行下一个任务
//asynchronous is vital for js as js is  signle thread, if only use synchronous, then it cannot hold bunch of time consuming task

console.log('Global begin');

setTimeout(function timer1() {
  console.log('timer1 invokes');
}, 1800);
setTimeout(function timer1() {
  console.log('timer2 invokes');
  setTimeout(function inner() {
    console.log('inner invoke');
  }, 1000);
}, 1000);

console.log('Global end');

//understan the relation between call stack, event loop and web api
