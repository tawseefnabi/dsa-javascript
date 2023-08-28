// Program to find the minimum (or maximum) element of an array
// Given an array, write functions to find the minimum and maximum elements in it. 

// // The most simplest way to find min and max value of an element is to use inbuilt function sort() in java. So, that value at 0th position will min and value at nth position will be max.



minMaxInArray = (arr)=>{
  let min = arr[0], max =arr[0]
  for(let i =0;i<arr.length;i++){
    if(arr[i]>max){
      max=arr[i]
    } else if(arr[i]<min){
      min = arr[i]
    }
  }
  console.log( "min is :", min, "max is :", max)
}

arr = [1, 423, 6, 46, 34, 23, 13, 53, 4]
minMaxInArray(arr)
arr1 = [ 12, 1234, 45, 67, -1 ];
minMaxInArray(arr1)