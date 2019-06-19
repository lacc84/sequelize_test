const fill2array = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = Math.floor(Math.random() * 3 + 1)
          
    }
    
  }
  return arr;
};
const generate2d = (n, m) => {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m);
  }
  return arr;
};


const countElement = (e,arr) =>{
    let c = 0
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if ((arr[i][j] ===1) && (arr[i][j+1] ===2) && (arr[i][j+2] ===3])) {
        c++
		}
    }
}
	return c;
};	
let l = generate2d(20, 20);
console.log(fill2array(l));
console.log(countElement(c, arr))