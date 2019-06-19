const fill2array = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = Math.floor(Math.random() * 10 + 1);
    }
  }
  return arr;
};

const sum2DArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
  }
  return sum;
};
let tomb = [[0, 0], [0, 0], [0, 0]];
console.log(fill2array(tomb));
console.log(sum2DArray(tomb));

const max2Array = (arr) => {
  let max = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (max < arr[i][j]) {
        max = arr[i][j];
      }
    }
  }
  return max;
};
console.log('a tömbmaximum', max2Array(tomb));
