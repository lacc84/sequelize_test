const generateArray = (arr, size) => {
  for (let i = 0; i < size; i++) {
    arr[i] = (Math.floor(Math.random() * 11));
  }
};

let b = [];
generateArray(b, 5);
console.log(b);
