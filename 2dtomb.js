let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arr[0][0]);
console.log(arr[1][0]);
console.log(arr[0][1]);
console.log(arr[1][2]);
console.log(arr[2][1]);

const generate2d = (n, m) => {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m);
  }
  return arr;
};

const print2d = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      process.stdout.write(arr[i][j] + ' ');
    }
    console.log();
  }
};
let k = generate2d(3, 3);
console.log(k);
print2d(k);
