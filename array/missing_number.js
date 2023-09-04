// Given an array arr[] of size N-1 with integers in the range of [1, N], the task is to find the missing number from the first N integers.


function missinNumberInArray(arr, n){
let missing = ''
for(let i=1;i<=n;i++){
  if (arr.indexOf(i) == -1){
    missing = i
  }
}
console.log("missing is ", missing);
}
missinNumberInArray( [1, 2, 4, 6, 3, 7, 8], 8)