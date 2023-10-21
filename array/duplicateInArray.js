// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

 

// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2
// Example 2:

// Input: nums = [3,1,3,4,2]
// Output: 3

duplicateInArray = (arr) => {
  let dup_arr = []
  for(let i =0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[i]==arr[j]){
        
        dup_arr.push(arr[i])
      }
    }
  }
  console.log(`for array ${arr} duplicate is `, dup_arr);
}
duplicateInArray_v2 = (arr) =>{
  arr.sort((a,b) => a-b)
  arr.forEach((element, i) => {
      if(element ==  arr[i+1]){
        console.log(`for array ${arr} duplicate is `, element);
      }
  });

}
duplicateInArray_v3=(arr) =>{
  let a = arr.filter((value, index,array)=>{
    array.indexOf(value) == index
  })
  console.log("duplicate", a)
}
duplicateInArray( [1, 2, 3, 6, 3, 6, 1])
// duplicateInArray_v2( [3,1,3,4,2])
// duplicateInArray_v3( [3,1,3,4,2])
// duplicateInArray_v4( [3,1,3,4,2])

function duplicateInArray_v4(arr){
  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
      if(arr[i] == arr[j]){
        console.log("duplicate", arr[i]);
      }
    }
  }
}