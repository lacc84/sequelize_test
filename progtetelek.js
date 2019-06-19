let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr[0]);
arr[0] = 10;
console.log(arr);
console.log('tömb mérete', arr.length);
arr.push(100);
console.log(arr);
let x = arr.pop();
console.log('kitörölt elem:', x);
console.log(arr);
for (let i = 0; i < arr.length; i++) {
  arr[i] = 0;
}
console.log(arr);

const generateArray = (size) => {
  let tomb = [];
  for (let i = 0; i < size; i++) {
    tomb[i] = Math.floor(Math.random() * 11);
  }
  return tomb;
};
let arr1 = generateArray(10);
console.log(arr1);

const sumArray = (arr) => {
    let sm = 0;
    for lt i = 0; i < arr.length; i++) {
        sm += arr[i];
    }
    retunrn sm;
}
