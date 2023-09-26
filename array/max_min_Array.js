// Given an array, write functions to find the minimum and maximum elements in it. 

function maxMininArray(arr) {
  let max = arr[0]
  let min =arr[0]
  for(let a of arr){
    if(a< min){
      min= a
    }
    if(a>max){
      max = a
    }
  }
  console.log("max: ", max, "min: ", min);
}


function maxMininArray_v2(arr){
  let max = arr[0]
  let min = arr[0]
  for(let a of arr){
    if(a< min){
      min = a
    }
    if(a>max){
      max  = a
    }
  }
  return {
    max, min
  }
}
console.log( maxMininArray_v2([12, 1234, 45, 67, 1]))