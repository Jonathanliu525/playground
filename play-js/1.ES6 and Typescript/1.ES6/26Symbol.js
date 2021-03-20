//Symbol

// a.js
const cache = {};
cache['foo'] = Math.random();

// b.js

cache['foo'] = '123';

console.log(cache);

//Then there will be a conflict in cache, this is a pretty common things that happens a lot, when you using
//3rd party libirary, but want to extend some object
//In old way, we trying to solve that in a conventional way,
//like in a.js file, we use cache['a_foo'] = Math.random();
//in b.js file, we use cache['b_foo'] = Math.random();

//But the problem is still as there, if someone didnot follow this convention

//In ES2015
const s = Symbol();
console.log(s);

console.log(Symbol() === Symbol());

const obj = {};
obj[Symbol('heihei')] = '123';
obj[Symbol('heihei')] = '456';

console.log(obj);

//The main purpose, 为对象添加独一无二的值
