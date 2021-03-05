//old way to set default value

function foo(enable) {
  enable = enable || true;
  console.log('foo invoked - enable: ');
  console.log(enable);
}
function foo1(enable) {
  enable = enable === undefined ? true : enable;
  console.log('foo invoked - enable: ');
  console.log(enable);
}

foo(false);
foo1(false);

function fooES6(enable = true) {
  console.log('foo invoked - enable: ');
  console.log(enable);
}

//Notice that the parameter with default value should be the last one
