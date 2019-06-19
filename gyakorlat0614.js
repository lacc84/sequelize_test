let tomb1 = [-2, -6, -39, -45, -27];
const maxArray = (tomb1) => {
  let max = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < tomb1.length; i++) {
    if ((tomb1[i] > max) && (tomb1[i] % 3 === 0)) {
      max = tomb1[i];
    }
  }
  return max;
};

console.log('a tömbmaximum', maxArray(tomb1));

let tomb2 = [8, 18, 28, 2, 32];
const minArray = (tomb2) => {
  let min = Number.POSITIVE_INFINITY;
  for (let i = 0; i < tomb2.length; i++) {
    if ((tomb2[i] < min) && (tomb2[i] % 2 === 0)) {
      min = tomb2[i];
    }
  }
  return min;
};
console.log('a tömbminimum', minArray(tomb2));

let diff = (maxArray(tomb1) - minArray(tomb2));
diff = Math.abs(diff);

console.log(' a két szám különbsége: ', diff);
