const generateArray = (size) => {
  let tomb = [];
  for (let i = 0; i < size; i++) {
    tomb[i] = Math.floor(Math.random() * 11);
  }
  return tomb;
};

const sumArray = (arr) => {
  let sm = 0;
  for (let i = 0; i < arr.length; i++) {
    sm += arr[i];
  }
  return sm;
};
let arr = generateArray(5);
console.log(arr);

console.log('összeg', sumArray(arr));

const mulArray = (arr) => {
  let m = 1;
  for (let i = 0; i < arr.length; i++) {
    m *= arr[i];
  }
  return m;
};
console.log('szorzat', mulArray(arr));

const counterElement = (e, arr) => {
  let c = 0;
  for (let i = 0; i < arr.length; i++) {
    if (e === arr[i]) {
      c++;
    }
  }
  return c;
};
console.log('ennyiszer van 1:', counterElement(1, arr));

const maxArray = (arr) => {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
console.log('a tömbmaximum', maxArray(arr));

const minArray = (arr) => {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};
console.log('a tömbminimum', minArray(arr));

const containsArray = (e, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === e) {
      return true;
    }
  }
  return false;
};

console.log('tartalmazza 1-et:', containsArray(1, arr));

const indexArray = (e, arr) => {
  let i = 0;
  while (i < arr.length && arr[i] != e) {
    i++;
  }
  if (i < arr.length) {
    return i;
  } else {
    return -1;
  }
};

console.log(' 1 helye', indexArray(1, arr));

const copy2xArray = (arr) => {
  let b = [];
  for (let i = 0; i < arr.length; i++) {
    b[i] = arr[i] * 2;
  }
  return b;
};

console.log(arr);
console.log(copy2xArray(arr));

const selecteven = (arr) => {
  let b = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      b[j] = arr[i];
      j++;
    }
  }
  return b;
};

console.log(arr);
console.log('a páros elemek', selecteven(arr));

const selectEvenOdd = (arr, b, c) => {
  let j = 0;
  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      b[j] = arr[i];
      j++;
    } else {
      c[k] = arr[i];
      k++;
    }
  }
};
let d = [];
let e = [];
selectEvenOdd(arr, d, e);
console.log('páros elemek', d);
console.log('páratlan elemek', e);


const intersectionArray = (arr1, arr2) {
    let b = [
        let k = 0
        for (let i = 0; i < arr1.length; i++){
            for (let j = 0 j < arr2. length; j++){
                b[k]= arr1[i];
                k++;
                break;
            }
        }
}
return b;
}
con