//任务依次执行

//This will be put into call stack and run, then clean the call stack
console.log('global begin');

//nothing happen
function bar() {
  console.log('Bar task');
}
//nothing happen
function foo() {
  console.log('foo task');
  bar();
}

//put foo() in call stack then bar() then console.log('Bar task') then clean the call stack
foo();

console.log('global end');
