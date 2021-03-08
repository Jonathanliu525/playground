class Person {
  constructor(name) {
    this.name = name;
  }

  say() {
    console.log(`Hi, my name is ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, number) {
    // call super is equal to call parent's constructor
    super(name);
    this.number = number;
  }
  hello() {
    super.say();
    console.log(`my number is ${this.number}`);
  }
}

const jon = new Student('Jon', 100);
jon.hello();
