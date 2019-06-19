/* let readline = require('readline-sync');
let name = readline.question('What\'s your name?');
console.log('Hello', name, '!');

while (true) {
  let key = readline.keyIn('press a key \'q\' to exit!');
  console.log('you pressed', key);
  if (key === 'q') {
    break;
  }
} */

/* let stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf-8');
stdin.on('data', (key) => {
  console.log('you pressed', key);
  if (key === 'q') {
    process.exit(); // ez mindig kell //
  }
});
console.log('kiscica'); */

/* setInterval(() => {
  console.log('Nagycica');
}, 100
); */

/* let time = 1000;
const fun = () => {
  if (time > 0) {
    time -= 100;
    console.log(time);
    setTimeout(fun, time); // time ideig várakozik
  } else {
    console.log('time is up!');
  }
};
fun(); */

/* const counter = (count) => {
  console.log(count);
  if (count === 0) return 0;
  count -= 1;
  counter(count);
};
counter(10); */

/* const arrMin = (index, arr) => {
  if (index === 1) return arr[0];
  return Math.min(arr[index - 1], arrMin(index - 1, arr));
};
let arr = [1, 5, 2, -10, 3];
console.log(arrMin(arr.length, arr));

const fibo = (n) => {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibo(n - 1) + fibo(n - 2);
};

console.log(fibo(10));

const fibonacciseries = function (n) {
  if (n === 1) {
    return [0, 1];
  } else {
    var s = fibonacciseries(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

console.log(fibonacciseries(5)); */

const generate2d = (n, m) => {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m);
  }
  return arr;
};
const fill2d = (arr) => {
  let num = 0;
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr[x].length; y++) {
      arr[x][y] = num++;
    }
  }
};
let arr = generate2d(5, 5);
fill2d(arr);
console.log(arr);
let table = require('table');
let out = table.table(arr);
console.log(out);

const contains = (element, arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (element === arr[i][j]) {
        return true;
      }
    }
  }
  return false;
};
console.log(contains(-1, arr));
