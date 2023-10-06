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
// missinNumberInArray( [1, 2, 4, 6, 3, 7, 8], 8)


function missinNumberInArray_v2(arr){
  let missing = ''
  for(let i=1;i<=arr.length;i++){
    if(arr.indexOf(i) == -1){
      return i
    }
  }
  return 'Not found'
  // console.log("missing is ", missing);
}

console.log(missinNumberInArray_v2( [1, 2, 4,5, 3, 7, 8]))