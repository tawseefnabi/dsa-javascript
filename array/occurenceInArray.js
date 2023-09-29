// Count number of occurrences (or frequency) in a sorted array
// Given a sorted array arr[] and a number x, write a function that counts the occurrences of x in arr[]. Expected time complexity is O(Logn) 

// Examples: 
//   Input: arr[] = {1, 1, 2, 2, 2, 2, 3,},   x = 2
//   Output: 4 // x (or 2) occurs 4 times in arr[]

//   Input: arr[] = {1, 1, 2, 2, 2, 2, 3,},   x = 3
//   Output: 1 

//   Input: arr[] = {1, 1, 2, 2, 2, 2, 3,},   x = 1
//   Output: 2 

//   Input: arr[] = {1, 1, 2, 2, 2, 2, 3,},   x = 4
//   Output: -1 // 4 doesn't occur in arr[] 

// v1
occurenceInArray = (arr, n) =>{
  console.log("count: ", arr.filter(a => a== n).length);
}
// occurenceInArray([1, 1, 2, 2, 2, 2, 3], 4)
// occurenceInArray([1, 1, 2, 2, 2, 2, 3],   2)
// v2
occurenceInArray_v2 =(arr, n)=>{  
  let count = 0
  arr.forEach(element => {
    if(element == n){
      count++
    }
  });
  console.log('count: ' + count);
}
occurenceInArray_v3 = (arr, num)=>{
  let count = 0
  for(let a of arr){
    if(a === num){
      count++
    }
  }

  console.log("count ", count)
}
// occurenceInArray([1, 1, 2, 2, 2, 2, 3], 4)
// occurenceInArray_v2([1, 1, 2, 2, 2, 2, 3],   2)
occurenceInArray_v3([1, 1, 2, 2, 2, 2, 3], 4)
occurenceInArray_v3([1, 1, 2, 2, 2, 2, 3],   2)

