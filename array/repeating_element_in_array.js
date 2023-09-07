// Find the first repeating element in an array of integers
// Given an array of integers arr[], The task is to find the index of first repeating element in it i.e. the element that occurs more than once and whose index of the first occurrence is the smallest. 

// Examples: 

// Input: arr[] = {10, 5, 3, 4, 3, 5, 6}
// Output: 5 
// Explanation: 5 is the first element that repeats

// Input: arr[] = {6, 10, 5, 4, 9, 120, 4, 6, 10}
// Output: 6 
//  Explanation: 6 is the first element that repeats


function repeating_element_in_array(arr){
  for(let i=0;i<arr.length;i++){
    for(let j= i+1;j<arr.length; j++){
      if(arr[i] == arr[j]){
        console.log("yes",arr[i], arr[j] );
        return console.log("this elmenent is duplicate", arr[i]);
      }
    }
  }
  return console.log("no element ");
}
function repeating_element_in_array_v2(arr){
  arr = arr.sort((a,b)=>a-b)
  for(let i=0;i<arr.length;i++){
    if(arr[i]== arr[i+1]){
      return console.log("this elmenent is duplicate", arr[i]);
    }
  }
  return console.log("no element ");
}
arr =[10, 5, 3, 4, 3, 5, 6]

// repeating_element_in_array(arr)
repeating_element_in_array_v2(arr)