//任务依次执行

//This will be put into call stack and run
console.log('global begin');

function bar() {
  console.log('Bar task');
}

function foo() {
  console.log('foo task');
}

foo();

console.log('global end');
