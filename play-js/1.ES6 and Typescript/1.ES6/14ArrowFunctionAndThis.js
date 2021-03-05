//https://www.codementor.io/@dariogarciamoya/understanding-this-in-javascript-with-arrow-functions-gcpjwfyuc

const person = {
  name: 'tom',
  sayHi: function () {
    console.log(`sayHi,Hi my name is ${this.name}`);
  },
  sayHi2: () => console.log(`sayHi2,Hi my name is ${this.name}`),
  sayHi3: function () {
    setTimeout(function () {
      console.log(`sayHi3,Hi my name is ${this.name}`);
    }, 1000);
  },
  sayHi4: function () {
    const _this = this;
    setTimeout(function () {
      console.log(`sayHi4,Hi my name is ${_this.name}`);
    }, 1000);
  },
  sayHi5: function () {
    setTimeout(() => console.log(`sayHi5,Hi my name is ${this.name}`), 1000);
  },
};

person.sayHi();
person.sayHi2();
person.sayHi3();
person.sayHi4();
person.sayHi5();
