const generateArray = (size) => {
  let arr = [];
  for (let i = 0; i < size; i++) {
    arr[i] = Math.floor(Math.random() * 15 + 1);
  }
  return arr;
};

const selectSort = arr => {
  let min = 0;
  for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
};

let k = generateArray(10);
console.log(k);
selectSort(k);
console.log(k);

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
let l = generate2d(10, 10);
console.log(l);
