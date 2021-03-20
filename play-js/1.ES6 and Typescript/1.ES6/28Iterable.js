//iterator

const arry = ['Jon', 'Jen'];

const iterator = arry[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());

//make an iterable

const obj = {
  //iterable
  store: ['foo', 'bar', 'jon'],
  [Symbol.iterator]: function () {
    let index = [0];
    const self = this;
    //return an iterator
    return {
      next: function () {
        //iteration result
        resutl = {
          value: self.store[index],
          done: index >= self.store.length,
        };
        index++;
        return resutl;
      },
    };
  },
};

for (const item of obj) {
  console.log(item);
}
