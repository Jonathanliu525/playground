//ES2017

const obj = {
  foo: 'value1',
  bar: 'value2',
};

//Object.values
console.log(Object.values(obj));

//Object.entires

for (const [key, value] of Object.entries(obj)) {
  console.log(value);
}

//use this to convert a map to obejct
console.log(new Map(Object.entries(obj)));

//Object.getOwnPropertyDescriptors

const p1 = {
  firstName: 'Jon',
  lastName: 'Liu',
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  },
};

const p2 = Object.assign({}, p1);
p2.firstName = 'Jonathan';
console.log(p2);
//{ firstName: 'Jonathan', lastName: 'Liu', fullName: 'Jon Liu' }
//因为object assign时,只是把fullname 当成了基本属性

const descriptor = Object.getOwnPropertyDescriptors(p1);

console.log(descriptor);
const p22 = Object.defineProperties({}, descriptor);
p22.firstName = 'Jonathan';
console.log(p22.fullName);

//String.prototype.padStart/ padEnd

const books = {
  html: 5,
  css: 16,
  js: 128,
};

for (const [key, value] of Object.entries(books)) {
  console.log(`${key.padEnd(16, '---')}|${value.toString().padStart(3, '0')}`);
}
