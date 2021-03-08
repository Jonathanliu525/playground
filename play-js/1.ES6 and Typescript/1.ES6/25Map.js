//similor to object, but key in object must be string

const obj = {};

obj[true] = 'true';
obj[123] = '123';
obj[{ a: 1 }] = 'a:1';

console.log(Object.keys(obj));

//map solve the up problem

const m = new Map();

const jon = { name: 'jon' };

m.set(jon, 90);

console.log(m);

// Map(1) { { name: 'jon' } => 90 }

m.get();
m.has();
// m.clear();
m.forEach((value, key) => {
  console.log(value);
  console.log(key);
});
