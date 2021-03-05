const arr = ['jon', 'jen', 'cde'];

//noob way
console.log(arr[0], arr[1], arr[2]);

//oldway
console.log.apply(console, arr);

//es6
console.log(...arr);
