// Given an unsorted array arr[] of size N. Rotate the array to the left (counter-clockwise direction) by D steps, where D is a positive integer. 

 

// Example 1:

// Input:
// N = 5, D = 2
// arr[] = {1,2,3,4,5}
// Output: 3 4 5 1 2
// Explanation: 1 2 3 4 5  when rotated
// by 2 elements, it becomes 3 4 5 1 2.


rotateArray = (arr, rotateAt) =>{
  let rotatedArray = arr.slice(rotateAt, arr.length).concat(arr.slice(0, rotateAt))
  console.log("rotatedArray", rotatedArray);
  return rotatedArray
}

arr = [1,2,3,4,5]  // output 34512
rotateArray(arr, 2)