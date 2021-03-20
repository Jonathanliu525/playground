//To avoid nested callback function in async function

function* foo() {
  console.log('Jon');
  return 100;
}

const result = foo();
console.log(result);

//Object [Generator] {}
console.log(result.next());

function* foo2() {
  console.log('11111');
  yield 100;
  console.log('22222');
  yield 200;
  console.log('33333');
  yield 300;
}

const gnerator = foo2();
console.log(gnerator.next());
console.log(gnerator.next());
console.log(gnerator.next());

//生成器函数,会返回一个生成器对象, 调用生成器对象的next()

//Gernator 应用
//案例1:, 发号器

function* createIdMaker() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

const idMaker = createIdMaker();

console.log(idMaker.next());
console.log(idMaker.next());
console.log(idMaker.next());
console.log(idMaker.next());
console.log(idMaker.next());

//案例2, 实现iterator
const todos = {
  life: ['eat', 'sleep'],
  study: ['Eng', 'Math'],
  work: ['javascript', 'java'],
  [Symbol.iterator]: function* () {
    const all = [...this.life, ...this.study, ...this.work];
    for (const item of all) {
      yield item;
    }
  },
};

for (const item of todos) {
  console.log(item);
}
