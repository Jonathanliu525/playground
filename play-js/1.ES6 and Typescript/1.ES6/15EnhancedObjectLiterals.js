const bar = '345';

//old way
const obj = {
  foo: 123,
  bar: bar,
  method1: function () {
    console.log('method1');
  },
};

//old way dynamically add name
obj[Math.random()] = 123;

//es6
//computed arribute name
const obj2 = {
  foo: 123,
  bar,
  method1() {
    console.log('method1');
    console.log(this);
  },
  [Math.random()]: 123,
};
