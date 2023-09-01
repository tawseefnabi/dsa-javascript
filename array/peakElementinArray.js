
// Given an array arr[] of integers. Find a peak element i.e. an element that is not smaller than its neighbors. 
// Explanation: The element 20 has neighbors 10 and 15, both of them are less than 20.

// Input: array[] = {10, 20, 15, 2, 23, 90, 67}
// Output: 20 or 90
// Explanation: The element 20 has neighbors 10 and 15, both of them are less than 20, similarly 90 has neighbors 23 and 67.


peakElementInArray = (arr) =>{
  let max = []
  if(arr.length == 0) return 0
  for(let a = 0; a<=arr.length;a++){
    if(arr[a]>arr[a-1] && arr[a]>arr[a+1]){
      max.push(arr[a])
    }
  }
  return max
}

console.log("peakElementInArray", peakElementInArray([10, 20, 15, 2, 23, 90, 67]))
arr = [10, 20, 15, 2, 23, 90, 67]
console.log("reverse", arr.reverse());
console.log("sort_array_in_asc", arr.sort((a,b) => a-b));