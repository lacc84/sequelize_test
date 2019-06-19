const generateArray = (arr, size) => {
  for (let i = 0; i < size; i++) {
    arr[i] = (Math.floor(Math.random() * 11));
  }
};

let b = [];
generateArray(b, 5);

let a = [];
generateArray(a, 5);

const smallestDifference = (arr1, arr2) => {
  let mindiff = Number.POSITIVE_INFINITY;
  let temp1 = 0;
  let temp2 = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) < mindiff) {
        mindiff = Math.abs(arr1[i] - arr2[j]);
        temp1 = arr1[i];
        temp2 = arr2[j];
      }
    }
  }
  return [temp1, temp2];
};
console.log(b);
console.log(a);
console.log(smallestDifference(b, a));

/* legalsó szint: alaptömb kiírása
függvény: az aktuális sort kiíratja
8
3, 5
1, 2, 3 */
